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

(async () => {
	const pgClient = new Pool({
		// database: 'qdb',
		host: process.env.TIMESERIES_HOST,
		port: 5432,
		user: 'postgres',
		password: process.env.TIMESERIES_PASSWORD,
	});
	
	const driver = neo4j.driver(
		process.env.NEO4J_URI || "localhost",
		neo4j.auth.basic(process.env.NEO4J_USER || "neo4j", process.env.NEO4J_PASSWORD || "test")
	)
	
	const app = express();
	app.use(bodyParser.json())

	const server = createServer(app)

	const io = new Server(server)



	io.use(async (socket, next) => {

		let remoteAddress = socket.request.socket.remoteAddress

		let ip = remoteAddress?.replace('::ffff:', '')
		console.log("IO-SOCKET", remoteAddress)
		if(!ip) return next(new Error("Couldn't find IP allocation"));
		const [host] = await promises.reverse(ip)
		console.log("IO-SOCKET", host)
	   
		let deviceId = host?.replace(".hexhive.io", '');

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
	io.sockets.on('connection', await socketHandler(driver))

	
	app.use('/api/', await routes(driver, pgClient))

	server.listen(process.env.NODE_ENV == 'prod' ? 80 : 4200)
})()
