#!/usr/bin/env node

import os from 'os';
import { GreenMachine } from '.';

const pluginDir = os.platform() == "win32" ? "C:\\green-plugins" : "./plugins";

(async () => {
	const screen = new GreenMachine({
		pluginDirectory: pluginDir,
		controlUrl: "http://hahei-jumpbox.hexhive.io",
		initPlugins: [
			{
				name: "GreenScreen",
				type: 'node',
				source: '@greenco/screen@latest',
				sourceType: 'npm'
			}
		]
	});

	await screen.start()
})().catch((err) => {
	console.log(err)
	// process.exit(1)
})