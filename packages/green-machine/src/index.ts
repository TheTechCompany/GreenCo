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
import { Plugin, PluginManager } from "./plugins";
import axios from 'axios';
import { connect, Socket } from "socket.io-client";
import express, {Express} from 'express'
import log from "loglevel";
import { readFileSync } from "fs";

const pkg = require('../package.json');

export interface GreenMachineOptions {
	pluginDirectory: string;
	initPlugins: Plugin[]
	controlUrl: string;
}

export class GreenMachine {

	private controlSocket?: Socket;

	private pluginManager: PluginManager;
	private configManager: ConfigManager;

	private opts: GreenMachineOptions;

	private app : Express

	constructor(opts: GreenMachineOptions){
		this.opts = opts;
		this.configManager = new ConfigManager()

		this.pluginManager = new PluginManager({
			pluginDirectory: opts.pluginDirectory,
			initPlugins: opts.initPlugins
		})

		this.app = express()

		this.init()

		log.info(`Green Machine v${pkg.version}`)
	}

	initControlSocket(controlUrl: string, token: string){
		let headers = {
			authorization: `Bearer ${token}`
		}

		this.controlSocket = connect(controlUrl, {
			extraHeaders: headers
		});

		this.controlSocket.on('update', async (event: {version: string}) => {
			console.log("UPDATE", event.version)
			await this.pluginManager.installGlobal(`${pkg.name}@${event.version}`)

			const version = await this.pluginManager.getGlobalVersion(`${pkg.name}`)

			console.log({version, pkgVersion: pkg.version})

			if(version !== pkg.version){
				process.exit()
			}
			// readFileSync(path.join(this.pluginManager.pluginDirectory, './plugins.json'), {encoding: 'utf-8'})
		})

		this.controlSocket.on('restart', async () => {
			process.exit()
		})

		this.controlSocket.on('plugin-update', () => {

		})

		this.controlSocket.on('conf-update', () => {

		})

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

	async init(){
		await this.pluginManager.init()
		// this.pluginManager.loadPlugins(['@greenco/screen'])
	}

	async start(){
		const {token, data} = await this.getToken();

		this.initControlSocket(this.opts.controlUrl, token);

		console.log(token, data)

		this.app.listen(9090)
	}

}