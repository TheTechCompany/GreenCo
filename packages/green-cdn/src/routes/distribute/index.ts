import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'

export default (session: Session) => {
	const router = Router()

	router.route('/')
		.get(async (req, res) => {
			let networkName = (req as any).user.hostname.replace('.hexhive.io', '');

			const campaigns = await session.run(`

			MATCH (schedule:Schedule)<--(:LocationGroup)-->(:Location)<--(:GreenScreen {networkName: $networkName})
			WITH distinct(schedule)
			CALL {
				WITH schedule
				MATCH (schedule)-->(slots:ScheduleSlot)
				WHERE slots.endDate > DATETIME()
				CALL {
					WITH slots
					MATCH (slots)-->(campaign:Campaign)
					WHERE campaign.assetFolder IS NOT NULL
					RETURN campaign{.*} as campaign
				}
				CALL {
					WITH slots
					MATCH (slots)-->(tiers:ScheduleTier)
					RETURN tiers{.*} as tier
				}
				RETURN slots {
					.*,
					tier,
					campaign
				} as slot
			}
				
			RETURN slot
			`, {
				networkName
			})
			
			res.send({
				campaigns: campaigns?.records?.map(record => record.get(0)) || []
			})
		})
	
	// router.route('/')

	return router
}