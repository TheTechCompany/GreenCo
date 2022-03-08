export interface AssetQueueItem {
	id?: string,
	startDate?: Date,
	endDate?: Date,
	tier?: {
		id?: string,
		slots?: number,
		percent?: number,
	},
	campaign?: {
		id?: string;
		assetFolder?: string;
		name?: string;
	}
}

export interface QueueEntry {
	item: AssetQueueItem,
	visited: number
}

export interface QueueRow {
	priority: string,
	items: QueueEntry[]
	index: number,
}

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//Priority queue for displaying assets
export class AssetQueue {

	private struct: AssetQueueItem[] = [];

	private queue : string[] = []; 

	private queueChains: QueueRow[] = [];
	// private queue: {
	// 	[key: string]: {
	// 		index: number,
	// 		rows: QueueEntry[]
	// 	}
	// } = {}

	private queue_row_index: number = 0;

	private asset_length : number = 15;

	constructor(items: AssetQueueItem[], blacklist?: string[], asset_length?: number){
		this.struct = items.filter((a) => (blacklist || []).indexOf(a.id || '') < 0);

		console.log({items})
		this.asset_length = asset_length || 15;
		
		this.resetQueue();
	}

	get queue_keys(){
		return Object.keys(this.queue).sort((a, b) => parseFloat(b) - parseFloat(a))
	}

	//Sort the queue by priority
	//Get the next item in the queue
	//Check if the item has been visited more than the priority
	//If it has, skip it in the queue
	//If it hasn't, return it
	getNext() {
		let item = this.queue?.[this.queue_row_index]

		this.queue_row_index++;
		if(this.queue_row_index > this.queue.length - 1){
			this.queue_row_index = 0;
		}

		let row = this.queueChains.find((a) => a.priority == item)
		let rowItem = row?.items[row.index]

		if(row){
			row.index++;
			if(row?.index > row?.items.length - 1) row.index = 0;
		}

		if(rowItem){
			rowItem.visited++;
		}

		return rowItem;
		// let row = this.queue[this.queue_keys[this.queue_row_index]];
		// if(!row) return null;
		
		// let index = row?.index
		// // console.log({row})
		// let col = row?.rows[index];

		// row.index++;

		// if(row.index > row.rows.length -1 ){
		// 	if(row.rows.map((x) => x.visited > x.priority).indexOf(false) < 0){
		// 		this.queue_row_index++;
		// 	}
		// 	row.index = 0;
		// }

		// // if(col.visited >= col.priority){
		// // 	return this.getNext();
		// // }

		// col.visited++;

		// this.queue_row_index++;
		// if(this.queue_row_index > this.queue_keys.length -1){
		// 	this.queue_row_index = 0;
		// }

		// return col;
	}

	// getVisited(){
	// 	return Object.keys(this.queue).map((key) => {
	// 		return this.queue[key].rows.map((x) => x.visited)
	// 	})
	// }

	resetQueue(){
		let qHr = (60 * 60 / this.asset_length);

		let tierLabels = [...new Set(this.struct.map((x) => x.tier?.id))].map((x, ix) => {
			return {
				label: alphabet[ix],
				tier: x
			}
		})

		let tiers = this.struct.map((curr) => {
			let priority =  Math.ceil((qHr / 100 * (curr.tier?.percent || 0)) / (curr.tier?.slots || 1))
			
			let label = tierLabels.find((a) => a.tier == curr.tier?.id)?.label || '';

			return {
				priority: label,
				item: {
					...curr,
					tier: {
						...curr.tier,
						show: priority
					}
				},
			}
		}).reduce<{[key: string]: any}>((prev, curr) => ({
			...prev,
			[curr.priority]: [...(prev[curr.priority] || []), curr.item]
		}), {})

		const dispersal = Object.keys(tiers).map((tier) => {
			
			let tierValue = tiers[tier]?.[0]?.item?.tier?.show;
			
			console.log({tierValue, tier: tiers[tier]})

			return Array.from(new Array(parseInt(tierValue) * tiers[tier].length)).map((x) => tier).join('')
		})

		this.queueChains = Object.keys(tiers).map((tier) => {
			return {priority: tier, items: tiers[tier].map((x: any) => ({item: x, visited: 0})), index: 0}
		})
	
		// this.struct.reduce(((prev, curr) => {
		// 	let priority = Math.ceil((qHr / 100 * (curr.tier?.percent || 0)) / (curr.tier?.slots || 1))

		// 	let key = `${priority}`;
		// 	return {
		// 		...prev,
		// 		[key]: [...(prev?.[key] || []), curr]
		// 	}
		// }), {})

		this.queue = disperse(
			dispersal
		)

		console.log({queue: this.queue, queueChains: this.queueChains})

		//.reduce((prev, curr) => prev.concat(curr))

		// this.queue = this.struct.map((item) => {
		// 	return {
		// 		priority: (qHr / 100 * (item.tier?.percent || 0)) / (item.tier?.slots || 1),
		// 		item: item,
		// 		visited: 0
		// 	}
		// }).reduce((prev, curr) => ({
		// 	...prev,
		// 	[curr.priority]: {
		// 		...(prev as any)[curr.priority],
		// 		index: 0,
		// 		rows: [...((prev as any)[curr.priority]?.rows || []), curr]
		// 	}
		// }), {});
	}




}

// xs has the smaller length
const _evenDist = (xs: string | string[], ys: string | string[], count = Math .round (ys.length / (xs.length + 1))) : any[] => 
  xs .length == 0
    ? [... ys]
    : [... ys .slice (0, count), xs[0], ..._evenDist (xs .slice (1), ys .slice (count))] 

const evenDist = (xs: string | string[], ys: string[]) =>
  xs .length > ys.length ? _evenDist(ys, xs) : _evenDist(xs, ys)

const findLongest = (
  xss: string[], 
  max = Math .max (... xss .map (xs => xs .length)), 
  i = xss .findIndex (x => x .length == max)
) : [(string | string[]), string[]] =>
  [xss [i], [... xss .slice (0, i), ... xss .slice (i + 1)]]

export const disperse = (xss: string[]) : string[] =>
  xss .length < 2
    ? [... (xss [0] || [])]
    : (([ys, yss]) => evenDist (ys, disperse (yss))) (findLongest (xss))

// const rel = disperse([Array.from(new Array(8)).map((x) => `4`).join(''), Array.from(new Array(6)).map((x) => `3`).join('')])

// console.log(rel)