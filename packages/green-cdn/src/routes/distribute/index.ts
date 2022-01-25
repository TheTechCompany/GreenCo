import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'
import jwt from 'jsonwebtoken'

export default (driver: Driver) => {
	const router = Router()

	router.route('/')
		.get(async (req, res) => {
			const session = driver.session()

			let networkName = (req as any).user.hostname.replace('.hexhive.io', '');

			let info = jwt.verify(req.query.token?.toString() || '', 'secret')

			const campaigns = await session.run(`

			MATCH (schedule:Schedule)<--(:LocationGroup)-->(:Location)<--(:GreenScreen {networkName: $networkName})-->(:ScreenSlot {id: $id})-->(templateSlot:TemplateSlot)
			WITH distinct(schedule), templateSlot
			CALL {
				WITH schedule, templateSlot
				MATCH (schedule)-->(slots:ScheduleSlot)-->(templateSlot)
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
				id: (info as any).slot,
				networkName
			})
			
			session.close()
			
			res.send({
				campaigns: campaigns?.records?.map(record => record.get(0)) || []
			})
		})
	
	// router.route('/')

	return router
}