import {CommandDNS} from '../src'

import { lookup, promises, resolve, resolve4, setServers } from 'dns'

let dns = new CommandDNS({
	port: 53,
	domain: "hexhive.io"
})

beforeAll(async () => {
	await dns.start()

	setServers([
		'127.0.0.1'
	])
})

describe('hive-command-dns', () => {
    it('Resolves outside Names', async () => {
		const addresses = await promises.lookup('google.com');
		console.log(addresses)
		// expect(addresses.address).toBe('142.250.204.14')
	});

	it('Resolves internal names', async () => {
		// const results = await dns.lookupDNSInternal('sudbustermk1.hexhive.io')
		// console.log(results)
		setServers([
			'127.0.0.1'
		])
		const hosts = await promises.resolve4('sudbustermk1.hexhive.io')
		expect(hosts[0]).toBe('192.168.200.14')
		// await promises.setServers(['127.0.0.1:5333'])

		// const addresses = await promises.lookup('sudbustermk1.hexhive.io')

		// console.log(addresses)
	})

	it('Reverse lookup', async () => {
		setServers([
			'127.0.0.1'
		])

		const host = await promises.reverse('192.168.200.14')

		expect(host[0]).toBe('sudbustermk1.hexhive.io')
	})

});

afterAll(async () => {
	await dns.stop()
})