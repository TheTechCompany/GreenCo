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
				source: '@greenco/screen',
				sourceVersion: 'latest',
				sourceType: 'npm'
			},
			{
				name: "HiveVision",
				type: 'python',
				source: 'https://github.com/TheTechCompany/HiveVision',
				sourceType: 'git'
			}
		]
	});

	await screen.start()
})().catch((err) => {
	console.log(err)
	setTimeout(() => {
		process.exit(1)
	}, 5*1000)
})