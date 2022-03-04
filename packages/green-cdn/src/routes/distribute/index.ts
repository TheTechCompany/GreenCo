import { Router } from 'express'
import { Driver, Session } from 'neo4j-driver-core'
import jwt from 'jsonwebtoken'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { hashElement } from 'folder-hash'
import tar from 'tar';

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

			console.log({info, networkName})
			
			session.close()
			
			res.send({
				campaigns: campaigns?.records?.map(record => record.get(0)) || []
			})
		})
	
	router.route('/asset/:id')
		.get(async (req, res) => {
			let id = req.params.id;

			let campaignPath = path.join(`/data/campaigns`, id)
			let lastHash;

			if(existsSync(`${campaignPath}-hash`)){
				lastHash = readFileSync(`${campaignPath}-hash`, 'utf-8');
			}

			let currentHash = await hashElement(campaignPath, {})

			if(currentHash.hash != lastHash){
				await tar.c(
					{
						gzip: true,
						file: `${campaignPath}.tar.gz`,
						cwd: `/data/campaigns`
					},
					[campaignPath]
				)

				writeFileSync(`${campaignPath}-hash`, currentHash.hash)
			}

			res.sendFile(`${campaignPath}.tar.gz`)

		})
	// router.route('/')

	return router
}