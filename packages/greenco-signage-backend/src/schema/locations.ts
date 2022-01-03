export default `
type LocationGroup  @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	locations: [Location] @relationship(type: "HAS_LOCATION", direction: OUT)
}

type Location @auth(rules: [
	{operations: [READ], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE], bind: {organisation: {id: "$jwt.organisation"}}}
]) {
	id: ID! @id
	name: String
	lat: Float
	lng: Float
	elevation: Float

	cameraAnalytics: [CameraAnalytic] @ignore

	groups: [LocationGroup] @relationship(type: "HAS_LOCATION", direction: IN)
	machines: [Machine] @relationship(type: "IN_LOCATION", direction: IN)

	
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