import puppeteer from 'puppeteer'
import { AssetStore } from './asset-store';
import { DisplayManager } from './display-manager';
import { Network } from './network';
import { TelemetryService } from './telemetry';
const Moniker = require('moniker');
export class GreenScreen {
	private displayManager: DisplayManager;
	private assetStore: AssetStore;

	private network: Network;
	private telemtry: TelemetryService;

	private running: boolean = false;

	private isProvisioned: boolean = false;

	constructor(){
		this.network = new Network({
			url: `http://cdn.greenco.co.nz:4200`,
		})

		this.telemtry = new TelemetryService({
			appName: 'GreenScreen',
			url: `http://cdn.greenco.co.nz:4200`
		})

		this.displayManager = new DisplayManager(this.telemtry);

		this.assetStore = new AssetStore({
			displayManager: this.displayManager,
			telemtry: this.telemtry,
			assetStoreUrl: `http://cdn.greenco.co.nz:4200`,
			assetStoragePath:  process.env.USERPROFILE+'\\Documents' || `C:\\Users\\Administrator\\Documents\\`
		});
	}

	async start(){
		this.running = true;
		if(!this.isProvisioned){
			await this.network.provision(Moniker.choose(), [{type: 'computer', count: 1}]);
			// await this.assetStore.provision();
			this.isProvisioned = true;
		}
		await this.assetStore.init()
		await this.displayManager.init()
		await this.schedule()
	}

	async schedule(){
		while(this.running){
			console.log("Loop")
			const asset = this.assetStore.getNextAsset()
			console.log("Asset", asset)
			if(asset?.assetFolder){
				console.log("Play")
				await this.displayManager.play(asset?.assetFolder)
			}

			await new Promise((resolve) => setTimeout(resolve, 15000))

		}
	}

}
