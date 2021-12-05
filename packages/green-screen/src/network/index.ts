import { connect, Socket } from 'socket.io-client'

const pkg = require('../../../package')

export interface NetworkOptions {
	url: string
}
export class Network {
	private socket: Socket

	constructor(opts: NetworkOptions){
		this.socket = connect(opts.url || 'http://localhost:3000')
		// this.socket.on('c')
	}

	async provision(moniker: string, payload: any){
		await new Promise((ressolve) => {
			this.socket.emit('PROVISION:REQUEST', {moniker, type: 'green-screen', version: pkg.version, payload: payload})
			this.socket.on('PROVISION:RESULT', (data) => {
				console.log(data)
				ressolve(data)
			})
		})

	}
}