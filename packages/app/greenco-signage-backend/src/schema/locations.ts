export default `

extend type HiveOrganisation {
	locationGroups: [LocationGroup] @relationship(type: "HAS_LOCATION_GROUP", direction: OUT)
	locations: [Location] @relationship(type: "HAS_LOCATION", direction: OUT)
}

type LocationGroup  @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE, CREATE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	locations: [Location] @relationship(type: "HAS_LOCATION", direction: OUT)

	organisation: HiveOrganisation @relationship(type: "HAS_LOCATION_GROUP", direction: IN)
}

type Location @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE, CREATE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	lat: Float
	lng: Float
	elevation: Float

	cameraAnalytics: [CameraAnalytic] @ignore

	groups: [LocationGroup] @relationship(type: "HAS_LOCATION", direction: IN)
	screens: [GreenScreen] @relationship(type: "IN_LOCATION", direction: IN)

	organisation: HiveOrganisation @relationship(type: "HAS_LOCATION", direction: IN)
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