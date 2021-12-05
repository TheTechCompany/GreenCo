import os from 'os';
import usbDetection from 'usb-detection'

export class HardwareManager {
	private hostname?: string;

	private platform?: string;
	private cpu?: number;
	private memory?: number;

	private usbDevices?: any[] = [];
	
	constructor(){
		this.hostname = os.hostname();
		this.platform = os.platform();
		this.memory = os.totalmem();
		this.cpu = os.cpus()?.reduce((prev, curr) => prev + curr.speed, 0) / os.cpus().length;
	}

	async init(){
		const devices = await usbDetection.find()
		this.usbDevices = devices.map((device) => ({
			name: device.deviceName,
			manufacturer: device.manufacturer,
			serialNumber: device.serialNumber,
			productId: device.productId,
			vendorId: device.vendorId,
		}))
	}

	get hardwareInfo(){
		return {
			os: this.platform,
			cpu: this.cpu,
			memory: this.memory,
			usbDevices: this.usbDevices,
		}
	}
}