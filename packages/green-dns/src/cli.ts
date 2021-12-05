#!/usr/bin/env node

import { CommandDNS } from "."

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

const dnsServer = new CommandDNS({
	port: argv.port || 53,
	domain: 'hexhive.io'
})

dnsServer.start()