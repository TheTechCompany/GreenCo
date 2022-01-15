import fs, { existsSync, readdirSync, readFile, readFileSync, writeFileSync } from 'fs';
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import {exec, spawn} from 'child_process'
import path from 'path'

export interface Plugin {
	type: 'node' | 'python' | 'script';
	name: string;
	source: string;
	sourceType: 'npm' | 'git'
}

export interface PluginManagerOptions {
	pluginDirectory: string;
}

export class PluginManager {
	private pluginDirectory: string;

	private pluginConfPath: string;

	private plugins: any[] = [];

	private configuration: {
		plugins: Plugin[]
	} = {plugins: []}

	constructor(opts: PluginManagerOptions) {
		this.plugins = [];
		this.pluginDirectory = opts.pluginDirectory;
		this.pluginConfPath = path.join(this.pluginDirectory, './plugins.json')	
	}

	init(){
		let configuration:  {
			plugins: Plugin[]
		} = {
			plugins: []
		}
		if(existsSync(this.pluginConfPath)){
			configuration = JSON.parse(readFileSync(this.pluginConfPath, {encoding: 'utf-8'}) || '{}')
		}else{
			writeFileSync(this.pluginConfPath, JSON.stringify(configuration))
		}

		this.configuration = configuration
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

		const load = plugins.map((plugin) => {
			try{
				const p = require.resolve(plugin, {
					paths: [path.join(this.pluginDirectory, './node_modules')]
				})
				return require(p);
			}catch(e){
				return null;
			}
		}).filter((a)=> a != null);

	
		console.log({load})
	}

	public async installPlugin(plugin: Plugin) {
		switch(plugin.sourceType){
			case 'git':
				return await this.installFromGit(plugin);
			case 'npm':
				return await this.installFromNpm(plugin)
		}
	}

	public async installPlugins(){
		// const pluginConf : {
		// 	plugins: Plugin[]
		// } = JSON.parse(readFileSync(this.pluginConfPath, {encoding: 'utf-8'}) || '{}')

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
					exec('python3 -m pip install', {
						cwd: pluginPath
					}, (err, stdout, stderr) => {
						if(err) return reject(err);
						resolve(stdout)
					})
				break;
			}
		})
	}

	private async installFromNpm(plugin: Plugin){
		return await new Promise((resolve, reject) => {
			exec(`npm install ${plugin.source}`, {
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