export default `

extend type HiveOrganisation {
	schedules: [Schedule] @relationship(type: "HAS_SCHEDULE", direction: OUT)
	scheduleTiers: [ScheduleTier] @relationship(type: "HAS_TIER", direction: OUT)
}

type Schedule @auth(rules: [
	{operations: [READ, UPDATE, CREATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String

	tiers: [ScheduleTier] @relationship(type: "SCHEDULE_TIER", direction: OUT)

	campaigns: [Campaign] @relationship(type: "SCHEDULES_CAMPAIGN", direction: OUT, properties: "ScheduleItemProperties")
	
	locations: [LocationGroup] @relationship(type: "USES_SCHEDULE", direction: IN)

	startDate: DateTime
	endDate: DateTime

	organisation: HiveOrganisation @relationship(type: "HAS_SCHEDULE", direction: IN)
}


interface ScheduleItemProperties @relationshipProperties {
	tier: String
	screen: String
	startDate: DateTime
	endDate: DateTime
}


type ScheduleTier @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
])  {
	id: ID! @id
	name: String
	schedule: Schedule @relationship(type: "HAS_TIER", direction: IN)
	percent: Float
	slots: Float

	organisation: HiveOrganisation @relationship(type: "HAS_TIER", direction: IN)
}
`