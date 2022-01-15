import os from 'os';

export class ConfigManager {
	private hostname : string = os.hostname()
	
	constructor(){

	}


	get host(){
		return {
			name: this.hostname,
			cpus: os.cpus().length,
			memory: {
				total: os.totalmem(),
				used: os.freemem() / os.totalmem()
			}
		}
	}
}