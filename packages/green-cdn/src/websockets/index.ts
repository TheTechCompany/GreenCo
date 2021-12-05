import { Driver } from "neo4j-driver-core";
import { Socket } from "socket.io";

export const socketHandler = async (driver: Driver) => {
	
	const session = await driver.session()

	const handleSocket = (socket: Socket) => {
		socket.on('PROVISION:REQUEST', async (data) => {
			//socket.networkName = ${networkName}.hexhive.io
			//data.moniker = provision code
			//data.payload = hardware info

			console.log("REQUEST", data, (socket as any).networkName)

			const computer = await session.run(`
				MATCH (machine:Machine {networkName: $networkName})
				MERGE (machine)-[:HAS_COMPUTER]->(computer:Computer {name: $moniker})
				ON CREATE 
					SET computer.hostname = $hostname, computer.cpu = $cpu, computer.memory = $memory
				ON MATCH
					SET computer.hostname = $hostname, computer.cpu = $cpu, computer.memory = $memory
				RETURN computer{.*}
			`, {
				moniker: data.moniker,
				networkName: (socket as any).networkName,
				...data.payload,
			})

			if(computer.records.length > 0) {
				socket.emit('PROVISION:RESPONSE', {
					moniker: data.moniker,
					id: computer.records[0].get(0).id,
				})
			}


		});

        socket.on('disconnect',(reason) => onSocketDisconnect(socket))


	}

	const onSocketDisconnect = (socket: Socket) => {

	}

	return handleSocket

}