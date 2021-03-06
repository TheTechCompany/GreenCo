import { FileStore } from "../de-file-store"
import { Pool } from 'pg';
import { Channel } from 'amqplib'
import { Driver } from "neo4j-driver";
import { readdir } from "fs/promises";
import path from "path";

export default async (pool: Pool, channel: Channel, driver: Driver) => {
	const campaignRootDir = process.env.CAMPAIGN_ROOT || '/Users/thekid/campaigns' ///data/campaigns

	const client = await pool.connect()

	return {
		CampaignAnalytic: {
			scanned: async (parent: any) => {
				const result = await client.query(`
					SELECT COUNT(*) as count FROM green_screen_telemetry WHERE event = 'qr-code' AND properties->'qr' = $1
				`, [
					`"${parent.id}"`
				])
				return result.rows?.[0]?.count;
			}
		},
		Mutation: {
			updateSlotClient: async (parent: any, {id, version}: any, context: any, info: any) => {
				return channel.sendToQueue(`GREEN-MACHINE:UPDATE`, Buffer.from(JSON.stringify({slot: id, version: version || 'latest'})))
			},
			pushScheduleUpdate: async (parent: any, {schedule}: any, context: any, info: any) => {
				return channel.sendToQueue(`GREEN-SCREEN:SCHEDULE:RELOAD`, Buffer.from(JSON.stringify({schedule: schedule})))
			}

		},
		ScheduleTier: {
			slotsFilled: async (parent: any) => {
				let query = `
					MATCH (ts:TemplateSlot)<--(slots:ScheduleSlot)-[:USES_TIER]->(tier:ScheduleTier {id: $id})
					WHERE slots.endDate > DATETIME() AND slots.startDate < DATETIME()
					RETURN ts{
						.*,
						count: COUNT(slots)
					}
				`

				const session = driver.session();
				const result = await session.run(query, {id: parent.id})
				session.close()

				const counter = result.records?.[0]?.get(0);
				console.log({result: result.records.map((x) => x.get(0))})

				return result.records?.map((x) => {
					let dat = x.get(0);
					return {
						slot: {
							id: dat.id
						},
						filled: dat.count.toNumber()
					}
				})

			}
		},
		Location: {
			cameraAnalytics: async (parent: any) => {
				if(!parent.id) return [];

				const session = driver.session()
				const result = await session.run(`
					MATCH (location:Location {id: $id})<--(screen:GreenScreen)
					RETURN screen.networkName
				`, {
					id: parent.id
				})

				const networkName = result.records?.[0]?.get(0)

				const res = await client.query(
					`SELECT properties, timestamp 
						FROM green_screen_telemetry 
						WHERE event=$1 AND source=$2 AND created_by=$3 AND
					"timestamp" < now() and "timestamp" > now() - interval '1 week'
					`,
					['camera-yolo', 'camera', `${networkName}.hexhive.io`]
				)
				await session.close()
				return res.rows.map(row => {
					return {
						timestamp: row.timestamp,
						results: row.properties?.results?.map((x: any) => ({name: x.name, confidence: x.confidence}))
					}
				})
			}
		},
		Campaign: {
			activeScreens: async (parent: any) => {
				const session = driver.session();
				const result = await session.run(`
					MATCH (:Campaign {id: $id})<-[:USES_CAMPAIGN]-(slots:ScheduleSlot)<-[:HAS_SLOT]-(:Schedule)<-[:USES_SCHEDULE]-(:LocationGroup)-[:HAS_LOCATION]->(locations:Location)
					WHERE slots.endDate > DATETIME() AND slots.startDate < DATETIME()
					RETURN count(locations)
				`, {
					id: parent.id,
				})
				await session.close()
				return result.records[0].get(0).toNumber()
			},
			activeClusters: async (parent: any) => {
				const session = driver.session();
				const result = await session.run(`
					MATCH (:Campaign {id: $id})<-[:USES_CAMPAIGN]-(slots:ScheduleSlot)<-[:HAS_SLOT]-(:Schedule)<-[:USES_SCHEDULE]-(groups:LocationGroup)
					WHERE slots.endDate > DATETIME() AND slots.startDate < DATETIME()
					RETURN count(groups) as count
				`, {
					id: parent.id,
				})
				// console.log(result.records?.[0]?.get(0).toNumber())
				await session.close()
				return result.records[0].get(0).toNumber()
			},
			activeTier: async (parent: any) => {
				const session = driver.session();
				const result = await session.run(`
					MATCH (:Campaign {id: $id})<-[:USES_CAMPAIGN]-(slots:ScheduleSlot)-[:USES_TIER]->(tier:ScheduleTier)
					WHERE slots.endDate > DATETIME() AND slots.startDate < DATETIME()
					RETURN tier{.*}
				`, {
					id: parent.id,
				})
				// console.log(result.records?.[0]?.get(0).toNumber())
				await session.close()
				return result?.records?.[0]?.get(0)?.name;
			},
			peopleTimeline: async (parent: any, args: {length: string, unit: string}) => {
				console.log({parent, args});
				const session = driver.session();
				console.log({parent})
				const location_res = await session.run(`
					MATCH (c:Campaign {id: $id})<--(:Schedule)<--(:LocationGroup)-->(:Location)<--(screen:GreenScreen)
					WHERE screen.networkName IS NOT NULL
					RETURN distinct(screen{.*})
				`, {
					id: parent.id
				})

				// console.log({records: location_res.records})
				const locations = location_res.records?.map((x) => x.get(0)) //[0]?.get(0)

				const res = await client.query(
					`
					SELECT personCount, time_bucket as time FROM
					(SELECT 
						SUM(COUNT(*)) over (order by time_bucket) as personCount, 
						time_bucket 
						FROM (
								select time_bucket_gapfill('${args.unit}', "timestamp") as time_bucket, jsonb_array_elements(properties->'results')->'name' as name
								from green_screen_telemetry 
								where event=$1 AND source=$2 AND created_by=ANY($3::text[])
							) as foo 
						WHERE 
							name::text = $4 AND time_bucket > NOW() - interval '${args.length}' AND time_bucket < NOW()
						GROUP by time_bucket) as daily
										
					`,//AND created_by = ANY($3::text[]) //and "timestamp" > now() - interval '1 day'
					['camera-yolo', 'camera', locations?.map((x: any) => `${x.networkName}.hexhive.io`), '"person"' ]
				)

				/*
	SELECT properties, timestamp 
						FROM green_screen_telemetry 
					WHERE event=$1 AND source=$2 AND 
					"timestamp" < now() AND "timestamp" > now() - interval '1 month'
				*/
				await session.close()

				// console.log("PEOPLE COUNT", res.rows?.map((x) => ({
				// 	name: x.properties?.results?.map((y: any) => ({name: y.name, confidence: y.confidence}))
				// })))

				return res.rows;

			},
			peopleCount: async (parent: any) => {
				const session = driver.session();
				console.log({parent})
				const location_res = await session.run(`
					MATCH (c:Campaign {id: $id})<--(:Schedule)<--(:LocationGroup)-->(:Location)<--(screen:GreenScreen)
					WHERE screen.networkName IS NOT NULL
					RETURN distinct(screen{.*})
				`, {
					id: parent.id
				})

				// console.log({records: location_res.records})
				const locations = location_res.records?.map((x) => x.get(0)) //[0]?.get(0)

				const res = await client.query(
					`
					SELECT SUM(personCount) FROM
					(SELECT 
						COUNT(*) over (order by time_bucket) as personCount, 
						time_bucket 
						FROM (
								select time_bucket('5 minutes', "timestamp"), jsonb_array_elements(properties->'results')->'name' as name
								from green_screen_telemetry 
								where event=$1 AND source=$2 AND created_by=ANY($3::text[])
							) as foo 
						WHERE 
							name::text = $4 AND time_bucket > NOW() - interval '1 day' AND time_bucket < NOW()
						GROUP by time_bucket) as daily
										
					`,//AND created_by = ANY($3::text[]) //and "timestamp" > now() - interval '1 day'
					['camera-yolo', 'camera', locations?.map((x: any) => `${x.networkName}.hexhive.io`), '"person"' ]
				)

				/*
	SELECT properties, timestamp 
						FROM green_screen_telemetry 
					WHERE event=$1 AND source=$2 AND 
					"timestamp" < now() AND "timestamp" > now() - interval '1 month'
				*/
				await session.close()

				console.log("PEOPLE COUNT", res.rows?.map((x) => ({
					name: x.properties?.results?.map((y: any) => ({name: y.name, confidence: y.confidence}))
				})))

				return 0
				
				// res.rows.map(row => {
				// 	return {
				// 		timestamp: row.timestamp,
				// 		results: row.properties?.results?.map((x: any) => ({name: x.name, confidence: x.confidence}))
				// 	}
				// })
				
			},
			peopleCountWeek: async (parent: any) => {
				const session = driver.session();
				console.log({parent})
				const location_res = await session.run(`
					MATCH (c:Campaign {id: $id})<--(:Schedule)<--(:LocationGroup)-->(:Location)<--(screen:GreenScreen)
					WHERE screen.networkName IS NOT NULL
					RETURN distinct(screen{.*})
				`, {
					id: parent.id
				})

				// console.log({records: location_res.records})
				const locations = location_res.records?.map((x) => x.get(0)) //[0]?.get(0)

				const res = await client.query(
					`
					SELECT SUM(personCount) FROM
					(SELECT 
						COUNT(*) over (order by time_bucket) as personCount, 
						time_bucket 
						FROM (
								select time_bucket('5 minutes', "timestamp"), jsonb_array_elements(properties->'results')->'name' as name
								from green_screen_telemetry 
								where event=$1 AND source=$2 AND created_by=ANY($3::text[])
							) as foo 
						WHERE 
							name::text = $4 AND time_bucket > NOW() - interval '1 week' AND time_bucket < NOW()
						GROUP by time_bucket) as daily
										
					`,//AND created_by = ANY($3::text[]) //and "timestamp" > now() - interval '1 day'
					['camera-yolo', 'camera', locations?.map((x: any) => `${x.networkName}.hexhive.io`), '"person"']
				)

				/*
	SELECT properties, timestamp 
						FROM green_screen_telemetry 
					WHERE event=$1 AND source=$2 AND 
					"timestamp" < now() AND "timestamp" > now() - interval '1 month'
				*/
				await session.close()

				console.log("PEOPLE COUNT", res.rows?.map((x) => ({
					name: x.properties?.results?.map((y: any) => ({name: y.name, confidence: y.confidence}))
				})))

				return 0
				
			},
			interactions: async (root: any) => {
				const res=  await client.query(
					`SELECT COUNT(*) as interactions FROM green_screen_telemetry WHERE event=$1 AND source = $2 `, 
					['campaign-interaction', `asset://${root.id}`])
				return res.rows?.[0]?.interactions || 0
			},
			interactionTimeline: async (root: any) => {
				const res=  await client.query(
					`with data as (
						select 
						coalesce (COUNT(*), 0) as cnt,
						time_bucket_gapfill('30 minutes', "timestamp") as time 
						from green_screen_telemetry 
						where "event"=$1 AND source=$2 and 
						"timestamp" < now() and "timestamp" > now() - interval '1 week'
						group by time
					)
					select time, SUM(cnt) over (order by time) as value from data`,
					// `SELECT "timestamp" as time, SUM(COUNT(*)) OVER(ORDER BY "timestamp") as interactions FROM  green_screen_telemetry WHERE event=$1 AND source=$2 group by "timestamp"`, 
					['campaign-interaction', `asset://${root.id}`])
				return res.rows
			},
			views: async (root: any) => {
				const res=  await client.query(
					`SELECT COUNT(*) as views FROM green_screen_telemetry WHERE event=$1 AND (properties -> 'id')::text = $2 `, 
					['campaign-play', `"${root.id}"`])

				console.log(res)
				return res.rows?.[0]?.views || 0
			},
			assets: async (root: any, ) => {
				console.log(root)
				try{
					let campaignDir = path.join(campaignRootDir, root.id);
					const files = await readdir(campaignDir)

					console.log({files})
					return files.map((file) => ({
						id: file,
						name: file,
						path: file
					}))
				}catch(e){
					return [];
				}
				// try{
				// 	return await fs.lsAsset(root.id)

				// }catch(e){
				// 	return []
				// }
			}
		}	
	}
}