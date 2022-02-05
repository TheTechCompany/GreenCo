import { OGM } from '@neo4j/graphql-ogm'
import { Router } from 'express'
import { Pool } from 'pg'
import { FileStore } from '../de-file-store'

import campaignRouter from './campaign'

export default async (ogm: OGM, pool: Pool, fs: FileStore) => {
	const router = Router()

	const client = await pool.connect()
	const CampaignAnalytic = ogm.model('CampaignAnalytic')

	router.get('/qr/:id', async (req, res, next) => {
		const analytic = await CampaignAnalytic.find({where: {id: req.params.id}, selectionSet: `{id, campaign{id}, type, name, data }`})

		console.log({analytic})
		let useragent = req.headers['user-agent']
		let ip = req.socket.remoteAddress?.replace('::ffff:', '')

		await client.query(`	
			INSERT INTO green_screen_telemetry
		(event, properties, source, timestamp, created_at, created_by)
			VALUES 
			($1, $2, $3, $4, $5, $6)
		`, 
		['qr-code', {ip, useragent, qr: analytic?.[0]?.id }, ip, new Date().toISOString(), new Date().toISOString(), analytic?.[0]?.campaign?.id ]) //TODO change api to screen id

		
		res.redirect(analytic?.[0]?.data)
	})
	router.use('/campaign', campaignRouter(ogm, fs))
	
	return router
}