import { CommandDNS } from '../src';

const dns = new CommandDNS({
	port: 53,
	domain: 'hexhive.io'
})

dns.start().then(() => {
	console.log("DNS Started")
})