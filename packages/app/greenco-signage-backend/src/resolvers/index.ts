import { FileStore } from "../de-file-store"
import { Pool } from 'pg';
import { Channel } from 'amqplib'
import { Driver } from "neo4j-driver";
import { readdir } from "fs/promises";
import path from "path";

export default async (fs: FileStore, pool: Pool, channel: Channel, driver: Driver) => {

	const client = await pool.connect()

	return {
		Mutation: {
			updateSlotClient: async (parent: any, {id, version}: any, context: any, info: any) => {
				return channel.sendToQueue(`GREEN-MACHINE:UPDATE`, Buffer.from(JSON.stringify({slot: id, version: version || 'latest'})))
			},
			pushScheduleUpdate: async (parent: any, {schedule}: any, context: any, info: any) => {
				return channel.sendToQueue(`GREEN-SCREEN:SCHEDULE:RELOAD`, Buffer.from(JSON.stringify({schedule: schedule})))
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

				console.log({records: location_res.records})
				const locations = location_res.records?.map((x) => x.get(0)) //[0]?.get(0)

				const res = await client.query(
					`SELECT properties, timestamp 
						FROM green_screen_telemetry 
					WHERE event=$1 AND source=$2 AND created_by = ANY($3::text[]) AND 
					"timestamp" < now() and "timestamp" > now() - interval '1 week'
					`,
					['camera-yolo', 'camera', locations?.map((x: any) => `${x.networkName}.hexhive.io`) ]
				)
				await session.close()
				return res.rows.map(row => {
					return {
						timestamp: row.timestamp,
						results: row.properties?.results?.map((x: any) => ({name: x.name, confidence: x.confidence}))
					}
				})
				
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
					select time, SUM(cnt) over (order by time) as interactions from data`,
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
				let campaignDir = path.join('/data/campaigns', root.id);
				const files = await readdir(campaignDir)

				return files.map((file) => ({
					id: file,
					name: file,
					path: file
				}))
				// try{
				// 	return await fs.lsAsset(root.id)

				// }catch(e){
				// 	return []
				// }
			}
		}	
	}
}