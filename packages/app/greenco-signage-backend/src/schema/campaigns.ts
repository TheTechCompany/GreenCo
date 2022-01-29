export default `

	extend type HiveOrganisation {
		campaigns: [Campaign] @relationship(type: "HAS_CAMPAIGN", direction: OUT)
	}

	type Campaign @auth(rules: [
		{operations: [READ, UPDATE, CREATE], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
	]) {
		id: ID! @id
		name: String

		charts: [CampaignChart] @relationship(type: "HAS_CHART", direction: OUT)

		views: Int @ignore
		interactions: Int @ignore
		interactionTimeline: [CampaignInteraction] @ignore

		analytics: [CampaignAnalytic] @relationship(type: "HAS_ANALYTICS", direction: OUT)
		assetFolder: String
		assets: [CampaignAsset] @ignore
		customer: String

		organisation: HiveOrganisation @relationship(type: "HAS_CAMPAIGN", direction: IN)
	}

	type CampaignChart {
		id: ID! @id
		label: String
		width: Int
		height: Int
		x: Int
		y: Int

		type: String

		data: String
		dataKey: String
		total: Boolean

		campaign: Campaign @relationship(type: "HAS_CHART", direction: IN)
	}

	type CampaignInteraction @exclude {
		time: DateTime
		interactions: Int
	}

	type CampaignAsset @exclude {
		id: ID! @id
		name: String
		type: String
		size: Int
		mode: Int
		path: String

		cid: String
	}

	type CampaignAnalytic {
		id: ID! @id
		campaign: Campaign @relationship(type: "HAS_ANALYTICS", direction: IN)
		type: String
		name: String
		data: String
	}
`