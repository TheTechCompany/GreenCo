import fs, { existsSync, mkdirSync, readdirSync, readFile, readFileSync, writeFileSync } from 'fs';
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import {exec, spawn} from 'child_process'
import path from 'path'

export interface Plugin {
	type: 'node' | 'python' | 'script';
	name: string;
	source: string;
	sourceVersion?: string;
	sourceType: 'npm' | 'git'
}

export interface PluginManagerOptions {
	pluginDirectory: string;
	initPlugins: Plugin[]
}

export abstract class AbstractPlugin {
	start(){

	}
}

export class PluginManager {
	private pluginDirectory: string;

	private pluginConfPath: string;

	private initPlugins: Plugin[] = [];

	private pluginInstances : {[key: string]: AbstractPlugin} = {}

	private configuration: {
		plugins: Plugin[]
	} = {plugins: []}

	constructor(opts: PluginManagerOptions) {
		this.initPlugins = opts.initPlugins
		this.pluginDirectory = opts.pluginDirectory;
		this.pluginConfPath = path.join(this.pluginDirectory, './plugins.json')	

	}

	async init(){
		let configuration:  {
			plugins: Plugin[]
		} = {
			plugins: this.initPlugins
		}

		if(!existsSync(this.pluginDirectory)){
			mkdirSync(this.pluginDirectory, {recursive: true})
		}

		// if(existsSync(this.pluginConfPath)){
		// 	configuration = JSON.parse(readFileSync(this.pluginConfPath, {encoding: 'utf-8'}) || '{}')
		// }else{
			writeFileSync(this.pluginConfPath, JSON.stringify(configuration))
		// }

		this.configuration = configuration

		await this.installPlugins()
	}

	async startAll(){
		let plugin_names = this.configuration.plugins.filter((a) => a.sourceType == 'npm').map((plugin) => { return plugin.source })
		
		console.log("Start All", {plugin_names}
		)
		const plugins = await this.loadPlugins(
			plugin_names
		);

		console.log("Loaded", {plugins})

		const instances = plugins.map((plugin) => {
			const { default : module } = plugin?.module;
			return plugin && {
				id: plugin?.id || '',
				instance: new module()
			}
		})

		console.log("instances", {instances})

		this.pluginInstances =  instances.reduce((prev, curr) => ({
			...prev,
			[curr?.id || '']: curr?.instance
		}), {})

		await Promise.all(Object.keys(this.pluginInstances).map(async (plugin_key) => {
			let plugin = this.pluginInstances[plugin_key];
			return await plugin.start()
		}))
		console.log("Started")
	}

	async getGlobalVersion(name: string){
		return await new Promise((resolve, reject) => {
			exec(`npm info -g ${name} version`, (err, stdout, stderr) => {
				if(err) return reject(err)
				resolve(stdout.trim())
			})
		})
	}

	public async loadPlugins(plugins: string[]){
		// let plugins = this.findPlugins();

		console.log({plugins})

		const loadedNpm = plugins.map((plugin) => {
			try{
				const p = require.resolve(plugin, {
					paths: [path.join(this.pluginDirectory, './node_modules')]
				})
				return {
					id: plugin,
					module: require(p)
				}
			}catch(e){
				console.error(`Failed to load plugin ${plugin}`, e)
				return null;
			}
		}).filter((a)=> a != null);

		return loadedNpm;

	}

	public async installPlugin(plugin: Plugin) {
		try{
			switch(plugin.sourceType){
				case 'git':
					return await this.installFromGit(plugin);
				case 'npm':
					return await this.installFromNpm(plugin)
			}
		}catch(err){
			console.error(`Failed to install plugin ${plugin.name}`, err)
		}

	}

	public async installPlugins(){
		// const pluginConf : {
		// 	plugins: Plugin[]
		// } = JSON.parse(readFileSync(this.pluginConfPath, {encoding: 'utf-8'}) || '{}')

		console.log("Installing Plugins");
		await Promise.all(this.configuration.plugins.map(async (plugin) => {
			const installResult = await this.installPlugin(plugin)
			console.log({installResult})
			return installResult
		}))
	}

	private async installFromGit(plugin: Plugin){
		return await new Promise(async (resolve, reject) => {
			
			let pluginPath = path.join(this.pluginDirectory, `./${plugin.name}`)

			if(existsSync(pluginPath)){
				await git.pull({
					fs,
					http,
					dir: pluginPath,
					author: {
						name: 'Green Machine',
					}
					// url: plugin.source
				})
			}else{
				await git.clone({
					fs,
					http,
					dir: pluginPath,
					url: plugin.source
				})
			}

			try{
				switch(plugin.type){
					case 'node':
						exec('npm install', {
							cwd: pluginPath
						}, (err, stdout, stderr) => {
							if(err) return reject(err);
							resolve(stdout)
						})
					break;
					case 'python':
						exec('python3 -m pip install -r requirements.txt', {
							cwd: pluginPath
						}, (err, stdout, stderr) => {
							if(err) return reject(err);
							resolve(stdout)
						})
					break;
				}
			}catch(err){
				console.error(`Error installing plugin ${plugin.name}`, err)
			}
		})
	}

	private async installFromNpm(plugin: Plugin){
		return await new Promise((resolve, reject) => {
			let install = plugin.sourceVersion ? `${plugin.source}@${plugin.sourceVersion}` : plugin.source;
			exec(`npm install ${install}`, {
				cwd: `${this.pluginDirectory}`
			}, (err, stdout, stderr) => {
				if(err) return reject(err)
				resolve(stdout)
			})
		})
	}

	public async installGlobal(plugin: string){
		return await new Promise((resolve, reject) => {
			exec(`npm install -g ${plugin}`, (err, stdout, stderr) => {
				if(err) return reject(err);
				resolve(stdout)
			})
		})
	}

	public findPlugins(scope?: string) : string[]{
		let dir = scope ? `${this.pluginDirectory}/${scope}` : this.pluginDirectory;
		let files = readdirSync(dir);
		
		let scopes = files.filter((a) => a.indexOf('@') == 0).map((scope) => {
			return this.findPlugins(scope).map((plugin) => {
				return `${scope}/${plugin}`
			})
		}).reduce((prev, curr) => prev.concat(curr), []);

		let plugins = files.filter((a) => a.indexOf('@') != 0 && a.indexOf('.') != 0)

		return plugins.concat(scopes)
	}

	public addPlugin(plugin: any) {

	}

	public removePlugin(plugin: any) {

	}




}