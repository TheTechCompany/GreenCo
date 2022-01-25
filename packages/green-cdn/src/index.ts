import { config } from 'dotenv'
config();

import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import neo4j from "neo4j-driver"
import { Pool, PoolClient } from "pg";
import { Server, Socket } from 'socket.io'
import { createServer } from 'http';
import { promises } from 'dns';
import { socketHandler } from './websockets';
import amqp from 'amqplib'
import jwt from 'jsonwebtoken'

(async () => {
	const pgClient = new Pool({
		// database: 'qdb',
		host: process.env.TIMESERIES_HOST,
		port: 5432,
		user: 'postgres',
		password: process.env.TIMESERIES_PASSWORD,
	});

	const mq = await amqp.connect(
		process.env.RABBIT_URL || 'amqp://localhost'
	)

	const channel = await mq.createChannel()

	await channel.assertQueue(`GREEN-MACHINE:UPDATE`)
	await channel.assertQueue(`GREEN-MACHINE:RESTART`)
	await channel.assertQueue(`GREEN-SCREEN:SCHEDULE:RELOAD`)

	
	const driver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	
	const app = express();
	app.use(bodyParser.json())

	const server = createServer(app)

	const io = new Server(server)

	const {handleSocket, emitUpdate, emitPluginEvent} = await socketHandler(driver)

	channel.consume(`GREEN-MACHINE:UPDATE`, (msg) => {
		let {slot, version} = JSON.parse(msg?.content.toString('utf8') || '{}')

		emitUpdate(slot)
	}, {
		noAck: true
	})

	channel.consume(`GREEN-SCREEN:SCHEDULE:RELOAD`, async (msg) => {
		let {schedule} = JSON.parse(msg?.content.toString('utf8') || '{}')

		const session = driver.session()

		const locations = await session.run(
			`MATCH (s:Schedule {id: $schedule})<-[:USES_SCHEDULE]-(:LocationGroup)-[:HAS_LOCATION]->(:Location)<-[:IN_LOCATION]-(:GreenScreen)-[:HAS_SLOT]->(screens:ScreenSlot)-[:USES_SLOT]->(:TemplateSlot)-[:USES_PLUGIN]->(plugin:TemplateSlotPlugin {source: "@greenco/screen"})
			RETURN {
				plugin: plugin.id,
				screens: collect(screens.id)
			 }`, 
			{
				schedule
			}
		)

		let data = locations.records.map((x) => x.get(0))?.[0]

		session.close()

		emitPluginEvent(data.screens, {plugin: data.plugin, message: 'reload'})
	}, {
		noAck: true
	})


	io.use(async (socket, next) => {

		let remoteAddress = socket.request.socket.remoteAddress

		let ip = remoteAddress?.replace('::ffff:', '')
		if(!ip) return next(new Error("Couldn't find IP allocation"));
		const [host] = await promises.reverse(ip)
	   
		let deviceId = host?.replace(".hexhive.io", '');

		let token = socket.request.headers['authorization']?.toString().split('Bearer ')?.[1];
		if(token){
			let data = jwt.verify(token, 'secret')
			if(data){
				(socket as any).slotId = (data as any).slot;
			}
		}

		(socket as any).networkName = deviceId;

		// let token: string | undefined = socket.request.headers.authorization
		// console.log("Machine info", token);

		// if(token){
		//     const info = jwt_decode(token);

		//     console.log("Machine info", info);

		//     (socket as any).machine_info = info;
		//     next();
		// }
		next();
	})
	io.sockets.on('connection',handleSocket)

	
	app.use('/api/', await routes(driver, pgClient))

	server.listen(process.env.NODE_ENV == 'prod' ? 80 : 4200)
})()
