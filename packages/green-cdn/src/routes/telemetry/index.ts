import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'
import { Pool, PoolClient } from 'pg'
import { promises } from 'dns';
import multer from 'multer';
import { writeFileSync } from 'fs';

const upload = multer()
promises.setServers(['192.168.255.1', '8.8.8.8'])


export default async (driver: Driver, pgClient: Pool) => {


	const router = Router()
	const client = await pgClient.connect()

	router.post('/', async (req, res) => {
		const { event, properties, source, timestamp } = req.body || {};

		let ip = (req.ip || req.socket.remoteAddress)?.replace('::ffff:', '')
        if(!ip) return res.send({error: "No IP, strange"});

        const [ host ] = await promises.reverse(ip)

		await client.query(`
			INSERT INTO green_screen_telemetry 
			(event, properties, source, timestamp, created_at, created_by)
			VALUES 
			($1, $2, $3, $4, $5, $6)
		`, 
		[event, properties, source, new Date().toISOString(), new Date().toISOString(), host ]) //TODO change api to screen id

		console.log(event, properties, source, timestamp, host );
		res.send({success: true})
	})

	router.post(`/screenshot`, upload.single('file'), async (req, res) => {
		const {file} = req

		let ip = (req.ip || req.socket.remoteAddress)?.replace('::ffff:', '')
        if(!ip) return res.send({error: "No IP, strange"});

        const [ host ] = await promises.reverse(ip)

		if(!file) return res.send({error: "No file"})
		writeFileSync(`/tmp/screenshots/${host}.jpg`, file.buffer)
		res.send({success: true})
	})

	return router
}