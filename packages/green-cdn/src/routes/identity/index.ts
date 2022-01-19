import { Router } from "express";
import { Session } from "neo4j-driver";
import { v4 } from "uuid";
import jwt from 'jsonwebtoken'

export default async (session: Session) => {

	const router = Router()

	router.route('/')
		.post(async (req, res) => {
			let { hostname, memory, memoryUsed, cpus, os, network } = req.body;

			let networkName = (req as any).user.hostname.replace('.hexhive.io', '');
			
			const result = await session.run(`
				MATCH (screen:GreenScreen {networkName: $networkName})
				MERGE (screen)-[:HAS_SLOT]->(slot:ScreenSlot {hostname: $hostname})
				ON CREATE
					SET slot.id = $slotId, slot.memory = $memory, slot.memoryUsed = $memoryUsed, slot.cpus = $cpus, slot.os = $os, slot.ip = $ipAddr
				ON MATCH
					SET slot.memoryUsed = $memoryUsed, slot.ip = $ipAddr
				return screen{
					.*,
					slot: slot{.*}
				}
			`, {
				hostname,
				networkName: networkName,
				slotId: v4(),
				memory: memory,
				memoryUsed: memoryUsed,
				cpus: cpus,
				os,
				ipAddr: network.find((a: {interface: string, addresses: string[]}) => a.interface == "Ethernet").addresses?.[0] || '169.169.169.169'
			})

			const data = result.records[0].get(0)

			const token = jwt.sign({
				screen: data.id,
				slot: data.slot.id
			}, 'secret')

			res.send({
				data,
				token
			})
		})
		.get(async (req, res) => {
			let networkName = (req as any).user.hostname.replace('.hexhive.io', '');
			
			let info = jwt.verify(req.query.token?.toString() || '', 'secret')

			const result = await session.run(`
				MATCH (screen:GreenScreen {networkName: $networkName})-[:HAS_SLOT]->(slot:ScreenSlot {id: $id})
				return screen{
					.*,
					slot: slot{.*}
				}
			`, {
				networkName: networkName,
				id: (info as any).slot
			})

			const data = result.records[0].get(0)
			res.send({
				data
			})
		})


	return router
}