import axios from "axios";
import { TelemetryEvent } from "./event";
import FormData from 'form-data'

export interface TelemetryServiceOpts {
	appName: string;
	appVersion?: string;
	url: string;
}

export class TelemetryService {

	private opts: TelemetryServiceOpts;

	constructor(opts: TelemetryServiceOpts){
		this.opts = opts;

	}

	async sendEvent(event: TelemetryEvent){
		// console.log(event);
		return await axios.post(`${this.opts.url}/api/telemetry`, {...event, timestamp: Date.now()});
	}

	async sendScreenshot(screenshot: Buffer){
		let fd = new FormData()
		fd.append('file', screenshot, 'screenshot.jpg')
		return await axios.post(`${this.opts.url}/api/telemetry/screenshot`, fd);
	}
}