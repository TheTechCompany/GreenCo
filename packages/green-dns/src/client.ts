#!/usr/bin/env node
import yargs from 'yargs/yargs'
import { connect_data, disconnect_data, DNSRecord } from './data';
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

let args : {
    register?: string
    deregister?: string
    domain?: string;
    ip?: string;
} = (argv as any);


if(args.register && !args.ip) throw new Error("Must provide IP");


const main = async () => {
    await connect_data();

    if(args.register){
        await DNSRecord.updateOne({domain: args.domain, subdomain: args.register}, {$set: {address: args.ip}}, {upsert: true})
            
        console.log(`Updated record ${args.register}.${args.domain} = ${args.ip}`)
        
    }

    if(args.deregister){
        await DNSRecord.remove({domain: args.domain, subdomain: args.deregister})
            
        console.log(`Removed record ${args.deregister}.${args.domain}`)

    }

    return await disconnect_data()
}

main().then(() => {
    process.exit(0);
})
