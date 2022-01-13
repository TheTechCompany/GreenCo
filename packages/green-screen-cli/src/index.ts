import { Service } from 'node-windows'

const svc = new Service({
	name: 'GreenScreen',
	script: `C:\\Users\\StreetLevelOne\\AppData\\Roaming\\npm\\node_modules\\greenco\\screen\\dist\\main.js`
})

svc.on('install', () => {
	svc.start()
})

svc.install()