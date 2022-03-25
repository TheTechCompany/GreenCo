import puppeteer, { Browser, Page } from 'puppeteer'
import analytics from '../analytics';
import { TelemetryService } from '../telemetry';
import Screenshot from 'screenshot-desktop'

import handsfree from './inputs/handsfree';

export class DisplayManager {
	private browser?: Browser;

	private page?: Page;

	private baseUrl = 'https://streetlevelone.com/'

	public lastAsset : {id?: string, assetFolder?: string} = {}
	// public currentAsset: string | undefined = undefined;

	private telemtry: TelemetryService;

	private startTime?: number;

	private hold = false;

	private screenshotTimer? : NodeJS.Timer;

	private isPublic: boolean = false;
	private privateAddress: string = '127.0.0.1';

	constructor(telemtry: TelemetryService, defaultUrl?: string){
		this.baseUrl = defaultUrl || this.baseUrl
		this.telemtry = telemtry
	}

	async init(args: {isPublic: boolean, privateAddress: string}){
		this.privateAddress = args.privateAddress;
		this.isPublic = args.isPublic

		console.log("Setting up screen")
		this.browser = await puppeteer.launch({
			headless: false,
			devtools: false, //process.env.DEVTOOLS === 'true' ? true : false,
			ignoreDefaultArgs: ['--enable-automation'],
			defaultViewport: {
				width: 1080, //1080
				height: 1920 //1920
			},
			executablePath: process.env.NODE_ENV == 'development' ? '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome' : `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`,
			// "C:\Program Files\Google\Chrome\Application
			args: ['--kiosk', '--disable-infobars'] //'--kiosk', '--disable-infobars', '
		})

		this.page = await this.browser?.newPage()
		try{
			await this.page?.goto(this.baseUrl)

		}catch(e){

		}

		this.screenshotTimer = setInterval(async () => {
			await this.screenshot()
		}, 5 * 60 * 1000);
		
	}

	shutdown(){
		this.browser?.close()
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

	async screenshot(){
		const desktop = await Screenshot()
		await this.telemtry.sendScreenshot(desktop)
	}

	async play(campaign: {id: string}){
		try{
			if(this.startTime){
				const time = Date.now() - this.startTime
				await this.telemtry.sendEvent({event: 'campaign-play', properties: {time, id: this.lastAsset.id}, source: 'display-manager'})
			}
			this.lastAsset = campaign
			// this.currentAsset = id;
			this.startTime = Date.now()
			await this.page?.goto(`http://localhost:3000/${campaign.id}`)
			await this.page?.addScriptTag({content: analytics})
	
			// if(this.isPublic){
			// 	await this.page?.addScriptTag({content: handsfree(this.privateAddress)})
			// }
		}catch(e){

		}
	}
}