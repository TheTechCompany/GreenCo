/*
	Green Machine
	=============

	Daemon that handles all the machine-related tasks.

	- plugins: plugins that are loaded and run by the machine (e.g. Computer Vision, Speech Recognition, etc.)
	- config: configuration for the machine (e.g. the machine's name, the machine's IP address, etc.)
	- state: current state of the machine (e.g. is it online, is it busy, etc.)
	- events: events that are emitted by the machine (e.g. when the machine is online, when it is busy, etc.)
	- tasks: tasks that are run by the machine (e.g. Signage, etc.)
*/

import { ConfigManager } from "./config";
import { PluginManager } from "./plugins";
import axios from 'axios';

export interface GreenMachineOptions {
	pluginDirectory: string;
	controlUrl: string;
}

export class GreenMachine {

	private pluginManager: PluginManager;
	private configManager: ConfigManager;

	private opts: GreenMachineOptions;

	constructor(opts: GreenMachineOptions){
		this.opts = opts;
		this.configManager = new ConfigManager()

		this.pluginManager = new PluginManager({
			pluginDirectory: opts.pluginDirectory
		})

		this.load()
	}

	async getToken(){
		const result = await axios.post(`${this.opts.controlUrl}/api/identity`, {
			hostname: this.configManager.host.name,
			memory: this.configManager.host.memory.total, 
			memoryUsed: this.configManager.host.memory.used, 
			cpus: this.configManager.host.cpus
		})
		return result.data;
	}

	load(){
		this.pluginManager.installPlugins()
		// this.pluginManager.loadPlugins(['@greenco/screen'])
	}

	async start(){
		const {token, data} = await this.getToken();

		console.log(token, data)
	}

}