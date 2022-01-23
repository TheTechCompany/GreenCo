import { IPFS, create } from 'ipfs-core';
import os from 'os';
import { AssetStoreServer } from './server';
import axios from 'axios';
import { promises } from 'fs';
import tar from 'tar';
import { TelemetryService } from '../telemetry';
import { DisplayManager } from '../display-manager';
import { rmdirSync, existsSync } from 'fs';
import path from 'path'

export interface AssetStoreConfiguration {
	assetStoreUrl?: string;
	assetStoragePath?: string;

	telemtry: TelemetryService;
	displayManager: DisplayManager;

	token?: string;
}

export class AssetStore {
	private node?: IPFS;

	private server: AssetStoreServer;

	private assetStoreUrl?: string; //URL to get asset manifest from

	private assetStoragePath?: string; //Storage path to store assets

	private currentAsset: number = 0;

	private token?: string;

	private manifest : {
		id?: string,
		startDate: Date,
		endDate: Date,
		tier?: {
			slots?: number,
			percent?: number,
		},
		campaign?: {
			id?: string;
			assetFolder?: string;
			name?: string;
		}
	}[] = []

	constructor(opts: AssetStoreConfiguration){
		this.token = opts.token

		this.assetStoreUrl = opts.assetStoreUrl
		this.assetStoragePath = opts.assetStoragePath || '/tmp/'

		this.server = new AssetStoreServer(this.assetStoragePath, opts.telemtry, opts.displayManager);
	}

	async pullAll(){
		await Promise.all(this.manifest.filter((a) => a.campaign?.assetFolder).map(async (manifestItem) => {
			console.log(`Pulling ${manifestItem.campaign?.name}`)
			const data = await this.pull(manifestItem.campaign?.assetFolder || '')
			if(!data) return;
			await promises.writeFile(`${this.assetStoragePath}/${manifestItem.id}`, data)

			await tar.x({
				file: `${this.assetStoragePath}/${manifestItem.id}`,
				cwd: this.assetStoragePath,
			})
			console.log(`Pulled ${manifestItem.campaign?.name}`)

		}))
	}


	getNextAsset(){
		let asset = this.manifest[this.currentAsset]
		this.currentAsset++
		if(this.currentAsset > this.manifest.length) {
			this.currentAsset = 0;
			asset = this.manifest[this.currentAsset]
		}

		return asset
	}

	async loadManifest(){
		const resp = await axios.get(`${this.assetStoreUrl}/api/distribute?token=${this.token}`)
		this.manifest = resp.data.campaigns;
	}

	async init(){
		await this.server.start()

		let ipfsPath = os.platform() == "win32" ? 'C:\\ipfs-repo' : './ipfs-repo';

		if(existsSync(path.join(ipfsPath, 'repo.lock'))){
			rmdirSync(path.join(ipfsPath, 'repo.lock'))
		}

		this.node = await create({
			repo: ipfsPath,

		})

		await this.loadManifest()
		await this.pullAll()
	}

	async pull(hash: string){
		return await new Promise<Buffer | null>(async (resolve, reject) => {

			const timeoutTimer = setTimeout(() => {
				console.log(`Pulling ${hash} timed out`)
				resolve(null)
			}, 5 * 60 * 1000)

			const pull = this.node?.get(hash)
			if(!pull) return;
			let ret : Uint8Array[] = [];
			for await (const chunk of pull){
				ret.push(chunk)
			}

			clearTimeout(timeoutTimer)

			resolve(Buffer.concat(ret))

		})
	}
}