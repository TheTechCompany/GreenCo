import { create, IPFSHTTPClient } from 'ipfs-http-client';
import os from 'os';
import { AssetStoreServer } from './server';
import axios from 'axios';
import { createWriteStream, promises } from 'fs';
import tar from 'tar';
import { TelemetryService } from '../telemetry';
import { DisplayManager } from '../display-manager';
import { rmdirSync, existsSync } from 'fs';
import path from 'path'
import { AssetQueue } from './queue';

export interface AssetStoreConfiguration {
	assetStoreUrl?: string;
	assetStoragePath?: string;

	telemtry: TelemetryService;
	displayManager: DisplayManager;

	token?: string;
}

export class AssetStore {
	private node?: IPFSHTTPClient;

	private server: AssetStoreServer;

	private failedAssets: string[] = []

	private assetStoreUrl?: string; //URL to get asset manifest from

	private assetStoragePath?: string; //Storage path to store assets

	private currentAsset: number = 0;

	private queue? : AssetQueue;

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

		let assetIds = [...new Set(this.manifest.map((x) => x.campaign?.id))]

		let results = await Promise.all(assetIds.map(async (manifestItem) => {
			// console.log(`Pulling ${manifestItem.campaign?.name} - ${manifestItem.campaign?.id}`)
			if(!manifestItem) return;

			const data = await this.pull(manifestItem || '')
			// if(!data) {
			// 	this.failedAssets = [...new Set([...(this.failedAssets || []), manifestItem.id])]
			// 	return {failed: true, id: manifestItem.id}
			// }


			// }else{
			// 	let ix = this.failedAssets.indexOf(manifestItem.id)
			// 	if(ix > -1){
			// 		this.failedAssets.splice(ix, 1)
			// 	}
			// };


			let outPath = path.join(this.assetStoragePath||'', `${manifestItem}.tgz`);
			console.log({path: path.join(this.assetStoragePath || '', manifestItem)})

			let writeStream = createWriteStream(outPath)
			await new Promise((resolve, reject) => {
				data.pipe(writeStream)
				let error : any = null;
				writeStream.on('error', (err) => {
					error = err;
					writeStream.close();
					reject(err);
				})

				writeStream.on('close', () => {
					if(!error){
						resolve(true);
					}
				})
			})

			// await promises.writeFile(outPath, data)

			await tar.x({
				file: outPath,
				
				cwd: this.assetStoragePath,
			})
			console.log(`Pulled ${manifestItem}`)

		}))

		return {rejected: []}
	}


	getNextAsset(){
		const item = this.queue?.getNext()
		console.info(`Getting next asset ${item?.item?.campaign?.name} - ${item?.item?.campaign?.id}`)
		return item?.item.campaign
	}

	async loadManifest(){
		const resp = await axios.get(`${this.assetStoreUrl}/api/distribute?token=${this.token}`)
		console.log({manifest: resp.data})
		this.manifest = resp.data.campaigns;
	}

	async init(){
		await this.server.start()

		let ipfsPath = os.platform() == "win32" ? 'C:\\ipfs-repo' : './ipfs-repo';

		if(existsSync(path.join(ipfsPath, 'repo.lock'))){
			rmdirSync(path.join(ipfsPath, 'repo.lock'))
		}

		this.node = await create({url: `http://54.206.111.213:8080`})

		// this.node = await create({
		// 	repo: ipfsPath,
		// 	config: {
		// 		Bootstrap: [
		// 			'/ip4/54.206.111.213/tcp/4001'
		// 		]
		// 	}
			
		// })

		await this.refreshSchedule()
	}

	async refreshSchedule(){
		await this.loadManifest()
		const {rejected} = await this.pullAll()
		this.queue = new AssetQueue(this.manifest, rejected, 15)
	}

	async pull(contentId: string){
		console.log(`Pulling ${contentId}`)

		const tarball = await axios({
			method: 'get',
			url: `${this.assetStoreUrl}/api/distribute/asset/${contentId}?token=${this.token}`,
			responseType: 'stream'
		})
		
		// console.log(`Pulling ${contentId} length : ${Buffer.from(tarball.data).length}`)

		return tarball.data; //Buffer.from(tarball.data);

		// return await new Promise<Buffer | null>(async (resolve, reject) => {

		// 	const timeoutTimer = setTimeout(() => {
		// 		console.log(`Pulling ${hash} timed out`)
		// 		resolve(null)
		// 	}, 10 * 60 * 1000)

		// 	const pull = this.node?.get(hash)
		// 	console.log(`Pulling ${hash}`)

		// 	if(!pull) {
		// 		console.error(`Pulling ${hash} failed`)
		// 		return
		// 	};
		// 	let ret : Uint8Array[] = [];
		// 	for await (const chunk of pull){
		// 		console.log(`${hash} - ${chunk.length}`)
		// 		ret.push(chunk)
		// 	}

		// 	clearTimeout(timeoutTimer)

		// 	resolve(Buffer.concat(ret))

		// })
	}
}