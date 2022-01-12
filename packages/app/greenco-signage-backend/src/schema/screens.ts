export default `
extend type HiveOrganisation {
	greenScreens: [GreenScreen] @relationship(type: "HAS_GREEN_SCREEN", direction: OUT)
}

type GreenScreen @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
])  {
	id: ID! @id
	name: String
	networkName: String

	online: Boolean
	
	location: Location @relationship(type: "IN_LOCATION", direction: OUT)
	
	slots: [ScreenSlot] @relationship(type: "HAS_SLOT", direction: OUT)

	organisation: HiveOrganisation @relationship(type: "HAS_GREEN_SCREEN", direction: IN)
}


type ScreenSlot {
	id: ID! @id

	width: Float
	height: Float
	
	resWidth: Float
	resHeight: Float
	orientation: Float

	tags: [String]
	screen: GreenScreen @relationship(type: "HAS_SLOT", direction: IN)
}

`