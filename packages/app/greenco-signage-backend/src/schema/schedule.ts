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

	template: GreenScreenTemplate @relationship(type: "SCHEDULE_TEMPLATE", direction: OUT)

	tiers: [ScheduleTier] @relationship(type: "SCHEDULE_TIER", direction: OUT)

	slots: [ScheduleSlot] @relationship(type: "HAS_SLOT", direction: OUT)

	locations: [LocationGroup] @relationship(type: "USES_SCHEDULE", direction: IN)

	startDate: DateTime
	endDate: DateTime

	organisation: HiveOrganisation @relationship(type: "HAS_SCHEDULE", direction: IN)
}

type ScheduleView @auth(rules: [
	{operations: [READ, UPDATE, CREATE], where: {schedule: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {schedule: {organisation: {id: "$jwt.organisation"}}}}
]) {
	id: ID! @id
	name: String
	tags: [String]

	schedule: Schedule @relationship(type: "HAS_VIEW", direction: IN)
}

type ScheduleSlot @auth(rules: [
	{operations: [READ, UPDATE, CREATE], where: {schedule: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {schedule: {organisation: {id: "$jwt.organisation"}}}},
]) {
	id: ID! @id

	campaign: Campaign @relationship(type: "USES_CAMPAIGN", direction: OUT)
	tier: ScheduleTier @relationship(type: "USES_TIER", direction: OUT)
	slot: TemplateSlot @relationship(type: "USES_SLOT", direction: OUT)

	startDate: DateTime
	endDate: DateTime
	schedule: Schedule @relationship(type: "HAS_SLOT", direction: IN)
}


interface ScheduleItemProperties @relationshipProperties {
	tier: String
	screen: String
	startDate: DateTime
	endDate: DateTime
}


type ScheduleTier @auth(rules: [
	{operations: [READ, UPDATE], where: {schedule: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {schedule: {organisation: {id: "$jwt.organisation"}}}}
])  {
	id: ID! @id
	name: String
	schedule: Schedule @relationship(type: "SCHEDULE_TIER", direction: IN)
	percent: Float
	slots: Float

	color: String

	organisation: HiveOrganisation @relationship(type: "HAS_TIER", direction: IN)
}
`