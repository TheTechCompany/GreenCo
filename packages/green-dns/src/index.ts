
import { parse } from 'tldts'
import dns2, { UDPServer, createUDPServer, Packet} from 'dns2';
import { promises } from 'dns';
import { connect_data, disconnect_data, DNSRecord } from './data';

// const { Packet, UDPClient } = dns2;

// const PORT = argv.port || 5333;

// const DOMAIN = argv.domain || 'dns.hive';

export interface CommandDNSOptions {
    port: number;
    domain: string;
}

export class CommandDNS {

    private server;

    private port: number;
    private domain : string;

    constructor(opts: CommandDNSOptions = {
        port: 5333,
        domain: 'dns.hive'
    }){        

        this.port = opts.port;
        this.domain = opts.domain;
        
        this.server = createUDPServer(this.dnsHandler.bind(this))

        this.server.on('request', this.onRequest.bind(this));
    
        this.server.on('listening', this.onStart.bind(this));
    
        this.server.on('close', this.onStop.bind(this));
    }

    async start(){
        await connect_data(process.env.MONGO_URI)
        await this.server.listen(this.port, '0.0.0.0');

    }

    async stop(){
        // this.server.s()
        await disconnect_data()
        this.server.close()
    }

    async lookupDNSInternal(url: string){
        let val = parse(url);

        return await DNSRecord.findOne({subdomain: val.subdomain || undefined, domain: val.domain || undefined})
    }

    async dnsHandler(request: any, send: any, rinfo: any){
        const response = Packet.createResponseFromRequest(request);

        const [ question ] = request.questions;
        const { name } = question;
        const url = parse(name)

        if(name.indexOf('in-addr.arpa') > -1){
            let adr = name.replace('.in-addr.arpa', '').split('.').reverse().join('.')
            const record = await DNSRecord.findOne({address: adr})

            if(record?.domain){
                let res : any = {
                    name,
                    type: Packet.TYPE.PTR,
                    class: Packet.CLASS.IN,
                    ttl: 300,
                    domain: `${record.subdomain}.${record.domain}`
                }
                response.answers.push(res)
            }
            // else{
            //     const lookup = await promises.reverse(adr)
            //     response.answers = response.answers.concat(lookup.map((item) => ({
            //         name,
            //         type: Packet.TYPE.PTR,
            //         class: Packet.CLASS.IN,
            //         ttl: 300,
            //         domain: lookup[0]
            //     }) as any))
            // }
        }else{

        const record = await DNSRecord.findOne({ subdomain: url.subdomain || undefined, domain: url.domain || undefined})

            if (record?.address) {
                response.answers.push({
                    name,
                    type: Packet.TYPE.A,
                    class: Packet.CLASS.IN,
                    ttl: 300,
                    address: record?.address
                });
            } else {
                try{
                    const lookup = await promises.resolve(name)
                    response.answers = response.answers.concat(lookup.map((item) => ({
                        name,
                        type: Packet.TYPE.A,
                        class: Packet.CLASS.IN,
                        ttl: 300,
                        address: item
                    })))
                }catch(e){
                    console.error("Couldn't find", name)
                }
         
            }

        }

        send(response);
    }

    onStart(){
        console.debug(`=> DNS started ${this.port}`)

    }

    onStop(){
        // console.debug('=> Shutdown DNS');

    }

    onRequest(request: any, send: any, rinfo: any){
        // console.log(request);
    }

    // const resolve = UDPClient()

    // const server = dns2.createUDPServer(async (request: { questions: [any]; }, send: (arg0: any) => void, rinfo: any) => {
    //     const response = Packet.createResponseFromRequest(request);
    //     const [question] = request.questions;
    //     const { name } = question;

    //     const url = parse(name)

    //     console.log(url.subdomain, url.domain)

    //     const record = await DNSRecord.findOne({ subdomain: url.subdomain || undefined, domain: url.domain || undefined})

    //     if (record?.address) {

    //         response.answers.push({
    //             name,
    //             type: Packet.TYPE.A,
    //             class: Packet.CLASS.IN,
    //             ttl: 300,
    //             address: record?.address
    //         });
    //     } else {
    //         const lookup = await resolve(name)
    //         response.answers = response.answers.concat(lookup.answers)
    //     }


    //     send(response);
    // });

   



    // process.on('SIGINT', async () => {
    //     await disconnect_data();
    //     await server.close();
    //     process.exit();
    // });

}