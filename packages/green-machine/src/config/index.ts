import os from 'os';

export class ConfigManager {
	private hostname : string = os.hostname()
	
	constructor(){

	}


	get host(){
		let nics = os.networkInterfaces()
		let addresses = Object.keys(nics).map((nic) => {
			let card = nics[nic];
			return {
				interface: nic,
				addresses: card?.filter((a) => a.family == 'IPv4').map((x) => x.address)
			}
		})	
		return {
			name: this.hostname,
			cpus: os.cpus().length,
			memory: {
				total: os.totalmem(),
				used: os.freemem() / os.totalmem()
			},
			os: os.type(),
			platform: os.platform(),
			network: addresses
		}
	}
}