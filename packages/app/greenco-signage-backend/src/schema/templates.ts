export default `
extend type HiveOrganisation {
	screenTemplates: [GreenScreenTemplate] @relationship(type: "HAS_SCREEN_TEMPLATE", direction: OUT)
}

type GreenScreenTemplate @auth(rules: [
	{operations: [READ, UPDATE], where: {organisation: {id: "$jwt.organisation"}}},
	{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
])  {
	id: ID! @id
	name: String
	
	slots: [TemplateSlot] @relationship(type: "HAS_SLOT", direction: OUT)
	plugins: [TemplateSlotPlugin] @relationship(type: "HAS_PLUGIN", direction: OUT)
	
	screens: [GreenScreen] @relationship(type: "USES_TEMPLATE", direction: IN)
	organisation: HiveOrganisation @relationship(type: "HAS_SCREEN_TEMPLATE", direction: IN)
}

type TemplateSlot @auth(rules: [
	{operations: [READ, UPDATE], where: {template: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {template: {organisation: {id: "$jwt.organisation"}}}}
]) {
	id: ID! @id
	name: String
	

	plugins: [TemplateSlotPlugin] @relationship(type: "USES_PLUGIN", direction: OUT)

	usedBy: [ScreenSlot] @relationship(type: "USES_SLOT", direction: IN)
	template: GreenScreenTemplate @relationship(type: "HAS_SLOT", direction: IN)
}

type TemplateSlotPlugin @auth(rules: [
	{operations: [READ, UPDATE], where: {template: {organisation: {id: "$jwt.organisation"}}}},
	{operations: [UPDATE, DELETE], bind: {template: {organisation: {id: "$jwt.organisation"}}}}
]) {
	id: ID! @id
	name: String
	type: String
	source: String
	sourceType: String
	sourceVersion: String

	template: GreenScreenTemplate @relationship(type: "HAS_PLUGIN", direction: IN)
}

`