import puppeteer, { Browser, Page } from 'puppeteer'
import analytics from '../analytics';
import { TelemetryService } from '../telemetry';

export class DisplayManager {
	private browser?: Browser;

	private page?: Page;

	private baseUrl = 'https://streetlevelone.com/'

	public lastAsset : {id?: string, assetFolder?: string} = {}
	// public currentAsset: string | undefined = undefined;

	private telemtry: TelemetryService;

	private startTime?: number;

	private hold = false;

	constructor(telemtry: TelemetryService, defaultUrl?: string){
		this.baseUrl = defaultUrl || this.baseUrl
		this.telemtry = telemtry
	}

	async init(){
		console.log("Setting up screen")
		this.browser = await puppeteer.launch({
			headless: false,
			devtools: process.env.DEVTOOLS === 'true' ? true : false,
			ignoreDefaultArgs: ['--enable-automation'],
			defaultViewport: {
				width: 1080, //1080
				height: 1920 //1920
			},
			args: ['--kiosk', '--disable-infobars']
		})

		this.page = await this.browser?.newPage()
		try{
			await this.page?.goto(this.baseUrl)

		}catch(e){

		}
	}

	get isHolding(){
		return this.hold
	}

	holdAsset(){
		this.hold = true;
	}

	releaseAsset(){
		this.hold = false;
	}

	async play(campaign: {id: string, assetFolder: string}){
		try{
			if(this.startTime){
				const time = Date.now() - this.startTime
				await this.telemtry.sendEvent({event: 'campaign-play', properties: {time, id: this.lastAsset.id}, source: 'display-manager'})
			}
			this.lastAsset = campaign
			// this.currentAsset = id;
			this.startTime = Date.now()
			await this.page?.goto(`http://localhost:3000/${campaign.assetFolder}`)
			await this.page?.addScriptTag({content: analytics})
	
		}catch(e){

		}
	}
}