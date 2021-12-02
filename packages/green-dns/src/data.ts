import mongoose from 'mongoose'

export const connect_data = async (host?: string) => {
	await mongoose.connect(`mongodb://${host}/dns`);
}

export const disconnect_data = async () => {
	await mongoose.disconnect();
}
const dnsRecord = new mongoose.Schema({
	domain: String,
	subdomain: String,
	address: String
})

export const DNSRecord = mongoose.model('DNSRecord', dnsRecord)