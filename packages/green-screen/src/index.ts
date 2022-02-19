import puppeteer from 'puppeteer'
import { AssetStore } from './asset-store';
import { DisplayManager } from './display-manager';
import { HardwareManager } from './hardware';
import { Network } from './network';
import { TelemetryService } from './telemetry';
const Moniker = require('moniker');

export default class GreenScreen {

	private hardwareManager: HardwareManager;

	private displayManager: DisplayManager;
	private assetStore: AssetStore;

	// private network: Network;
	private telemtry: TelemetryService;

	private running: boolean = false;

	private isProvisioned: boolean = false;


	private runtimeToken?: string;

	private slotData? : {slot: {id: string}, slots: {id: string, ip: string, template: {id: string, name: string}}[]};

	constructor(token?: string, data?: {slot: {id: string}, slots: {id: string, ip: string, template: {id: string, name: string}}[]}){
		this.runtimeToken = token;
		this.slotData = data

		// this.network = new Network({
		// 	url: `http://hahei-jumpbox.hexhive.io`,
		// })

		this.telemtry = new TelemetryService({
			appName: 'GreenScreen',
			url: `http://hahei-jumpbox.hexhive.io`
		})

		this.displayManager = new DisplayManager(this.telemtry);

		this.hardwareManager = new HardwareManager();

		this.assetStore = new AssetStore({
			displayManager: this.displayManager,
			telemtry: this.telemtry,
			token: this.runtimeToken,
			assetStoreUrl: `http://hahei-jumpbox.hexhive.io`,
			assetStoragePath:  process.env.USERPROFILE+'\\Documents' || `C:\\Users\\Administrator\\Documents\\`
		});

		// this.network.on('reload-schedule', this.reloadSchedule.bind(this))
	}



	async reloadSchedule(){
		await this.assetStore.refreshSchedule()
	}

	async handleMessage(message: any){
		console.log("Message", message)
		switch(message){
			case 'reload':
				await this.reloadSchedule()
				break;
		}
	}

	async start(){
		console.log("Starting Green Screen");
		this.running = true;
		await this.hardwareManager.init()

		// if(!this.isProvisioned){
		// 	await this.network.provision(Moniker.choose(), this.hardwareManager?.hardwareInfo);
		// 	// await this.assetStore.provision();
		// 	this.isProvisioned = true;
		// }

		const isPublic = this.slotData?.slots.find((a) => a.id == this.slotData?.slot.id)?.template.name == "Public Display";
		const privateAddress = this.slotData?.slots.find((a) => a.template.name !== "Public Display")?.ip || 'localhost';

		await this.displayManager.init({isPublic, privateAddress})
		await this.assetStore.init()
		await this.schedule()
		
	}

	async schedule(){
		while(this.running){
			// console.log("Loop")
			if(!this.displayManager.isHolding){

				const asset = this.assetStore.getNextAsset()
				// console.log("Asset", asset)
				if(asset && asset.assetFolder && asset.id){
					// console.log("Play")
					await this.displayManager.play({
						id: asset.id || '',
						assetFolder: asset.assetFolder || '',
					})
				}

				await new Promise((resolve) => setTimeout(resolve, 15000))
			}else{
				await new Promise((resolve) => setTimeout(resolve, 1000))
			}
		}
	}

}
