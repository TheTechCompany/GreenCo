import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'

export default (session: Session) => {
	const router = Router()

	router.route('/')
		.get(async (req, res) => {
			let networkName = (req as any).user.hostname.replace('.hexhive.io', '');

			const campaigns = await session.run(`
				MATCH (campaigns:Campaign)<--(:Schedule)<--(:LocationGroup)-->(:Location)<--(:GreenScreen {networkName: $networkName})
				WHERE campaigns.assetFolder IS NOT NULL
				RETURN campaigns{.*}
			`, {
				networkName
			})
			
			res.send({
				campaigns: campaigns?.records?.map(record => record.get(0))
			})
		})
	
	// router.route('/')

	return router
}