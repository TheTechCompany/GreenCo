import express, {Express} from 'express'
import path from 'path';
import bodyParser from 'body-parser';
import { DisplayManager } from '../display-manager';
import { TelemetryService } from '../telemetry';

export class AssetStoreServer {
	private app : Express;

	private telemetry: TelemetryService;
	private displayManager: DisplayManager;

	private interactionTimer? : NodeJS.Timeout;

	constructor(storagePath: string, telemetry: TelemetryService, displayManager: DisplayManager){
		this.app = express()
		this.app.use(express.static(storagePath || `C:\\Users\\Administrator\\Documents\\`))
		this.app.use(bodyParser.json())
		this.app.get(`/api/device`, this.deviceInfo.bind(this))
		this.app.post(`/api/telemetry`, this.telemtryListener.bind(this));
		this.app.post(`/api/interaction`, this.interactionListener.bind(this));
		this.telemetry = telemetry;
		this.displayManager = displayManager;
	}

	async deviceInfo(req: any, res: any){
		res.send({currentAsset: this.displayManager.lastAsset})
	}

	async interactionListener(req: any, res: any){
		console.log("HOLD");
		this.displayManager.holdAsset();

		if(this.interactionTimer) clearTimeout(this.interactionTimer)
		this.interactionTimer = setTimeout(() => {
			this.displayManager.releaseAsset()
		}, 15 * 1000)
		
		res.send({success: "ok"})
	}

	async telemtryListener(req: any, res: any){
		const { event, properties, } = req.body;
		
		try{
			await this.telemetry.sendEvent({event, properties, source: `asset://${this.displayManager.lastAsset.id}`});
			res.send({success: "ok"});
		}catch(e){
			res.send({error: "failed to send telemetry"});
		}
	}

	start(){
		this.app.listen(3000, () => {
			console.log("Asset Store Serving on 3000")
		})
	}
}