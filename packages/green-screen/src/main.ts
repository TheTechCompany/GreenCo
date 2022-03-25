import GreenScreen from './index'
import { config } from 'dotenv';
config();

(async () => {
	const screen = new GreenScreen()

	await screen.start()
})()
