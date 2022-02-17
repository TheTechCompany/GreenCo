import { AssetQueue, disperse } from "../src/asset-store/queue"

describe('Asset Store Tests', () => {
	it('Queue spreads items evenly', () => {
		const tiers = [
			{
				slots: 32,
				percent: 25
			},
			{
				slots: 6,
				percent: 10
			},
			{
				slots: 80,
				percent: 32
			},
			{
				slots: 10,
				percent: 16
			}
		].map((x, ix) => {
			let runCount = Math.ceil((240 / 100 * x.percent) / x.slots) //was looking for the roof but it's a ceiling

			return Array.from(new Array(x.slots)).map((slot) => {
				return Array.from(new Array(runCount)).map((y) =>  `${ix}`).join('')
			}).join('')
		});

		let spread = disperse(tiers)
		console.log(spread)

		console.log(spread.filter((a) => a == '3').length)
		console.log(spread.filter((a) => a == '2').length)
		console.log(spread.filter((a) => a == '1').length)
		console.log(spread.filter((a) => a == '0').length)

	})

	it('Queues content with priority', () => {
		const tiers = [
			{
				name: 'Inspire',
				slots: 32,
				percent: 25
			},
			{
				name: 'Capture',
				slots: 6,
				percent: 10
			},
			{
				name: 'Engage',
				slots: 80,
				percent: 32
			},
			{
				name: 'Host',
				slots: 10,
				percent: 16
			}
		]

		const queue = new AssetQueue(tiers.map((tier) => {
			return Array.from(new Array(tier.slots)).map((x, ix) => ({tier: tier, campaign: {name: `${tier.name} - ${ix}`}}))
		}).reduce((prev, curr) => prev.concat(curr), []))

		var i = 0;
		while(i < 240){
			let item= queue.getNext()
			console.log(item)
			i++;
		}


	})
})