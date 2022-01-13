export default `

extend type HiveOrganisation {
	locationGroups: [LocationGroup] @relationship(type: "HAS_LOCATION_GROUP", direction: OUT)
}

type LocationGroup  @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	locations: [Location] @relationship(type: "HAS_LOCATION", direction: OUT)

	schedule: Schedule @relationship(type: "USES_SCHEDULE", direction: IN)

	organisation: HiveOrganisation @relationship(type: "HAS_LOCATION_GROUP", direction: IN)
}

type Location @auth(rules: [
	{operations: [READ, UPDATE], where: {group: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {group: {organisation: {id: "$jwt.organisation"}}}}
]) {
	id: ID! @id
	name: String
	lat: String
	lng: String
	elevation: Float

	cameraAnalytics: [CameraAnalytic] @ignore

	group: LocationGroup @relationship(type: "HAS_LOCATION", direction: IN)
	screen: GreenScreen @relationship(type: "IN_LOCATION", direction: IN)
}

type CameraAnalytic @exclude {
	timestamp: DateTime
	results: [CameraAnalyticResult] 	
}

type CameraAnalyticResult @exclude {
	name: String
	confidence: Float
}
`