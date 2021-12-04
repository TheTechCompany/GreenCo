import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'
import { Pool, PoolClient } from 'pg'
import { promises } from 'dns';

export default async (session: Session, pgClient: Pool) => {
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
		[event, properties, source, new Date(timestamp).toISOString(), new Date().toISOString(), host ]) //TODO change api to screen id

		console.log(event, properties, source, timestamp, host );
		res.send({success: true})
	})

	return router
}