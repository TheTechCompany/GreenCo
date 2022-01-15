import { Driver } from "neo4j-driver-core";
import { Socket } from "socket.io";

export const socketHandler = async (driver: Driver) => {
	
	let sockets: {[key: string]: Socket} = {}

	const emitUpdate = (id: string) => {
		if(sockets[id]){
			sockets[id].emit('update', {version: 'latest'})
		}
	}

	const handleSocket = async (socket: Socket) => {

		socket.emit('update', {version: 'latest'})

		const session = await driver.session()

		if((socket as any).slotId){
			const screen = await session.run(`
				MATCH (screen:GreenScreen {networkName: $networkName})-[:HAS_SLOT]->(slot:ScreenSlot {id: $id})
				SET screen.online = true, slot.online = true
				RETURN screen
			`, {
				networkName: (socket as any).networkName,
				id: (socket as any).slotId
			})

			sockets[(socket as any).slotId] = socket;
		}else{
			const screen = await session.run(`
				MATCH (screen:GreenScreen {networkName: $networkName})
				SET screen.online = true
				RETURN screen
			`, {
				networkName: (socket as any).networkName
			})

		}
 		// socket.on('PROVISION:REQUEST', async (data) => {
		// 	//socket.networkName = ${networkName}.hexhive.io
		// 	//data.moniker = provision code
		// 	//data.payload = hardware info

		// 	console.log("REQUEST", data, (socket as any).networkName)

		// 	const computer = await session.run(`
		// 		MATCH (machine:Machine {networkName: $networkName})
		// 		MERGE (machine)-[:HAS_COMPUTER]->(computer:Computer {name: $moniker})
		// 		ON CREATE 
		// 			SET computer.hostname = $hostname, computer.cpu = $cpu, computer.memory = $memory
		// 		ON MATCH
		// 			SET computer.hostname = $hostname, computer.cpu = $cpu, computer.memory = $memory
		// 		RETURN computer{.*}
		// 	`, {
		// 		moniker: data.moniker,
		// 		networkName: (socket as any).networkName,
		// 		...data.payload,
		// 	})

		// 	if(computer.records.length > 0) {
		// 		socket.emit('PROVISION:RESPONSE', {
		// 			moniker: data.moniker,
		// 			id: computer.records[0].get(0).id,
		// 		})
		// 	}


		// });
		session.close()

        socket.on('disconnect', (reason) => onSocketDisconnect(socket))


	}

	const onSocketDisconnect = async (socket: Socket) => {
		const session = await driver.session()

		if((socket as any).slotId){
			const screen = await session.run(`
				MATCH (screen:GreenScreen {networkName: $networkName})-[:HAS_SLOT]->(slot:ScreenSlot {id: $id})
				SET screen.online = false, slot.online = false
				RETURN screen
			`, {
				networkName: (socket as any).networkName,
				id: (socket as any).slotId
			})
			delete sockets[(socket as any).slotId]
		}else{
			const screen = await session.run(`
			MATCH (screen:GreenScreen {networkName: $networkName})
			SET screen.online = false
			RETURN screen
		`, {
			networkName: (socket as any).networkName
		})
		}
		session.close()
	}

	return {handleSocket, emitUpdate}

}