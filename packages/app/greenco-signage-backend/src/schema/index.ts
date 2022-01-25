import campaigns from "./campaigns";
import screens from "./screens";
import gql from 'graphql-tag'
import locations from "./locations";
import schedule from "./schedule";
import templates from "./templates";

export default `
type Mutation {
	updateSlotClient(id: ID!, version: String): Boolean
	pushScheduleUpdate(schedule: ID!): Boolean
}
	${locations}
	${schedule}
	${campaigns}
	${screens}
	${templates}
`