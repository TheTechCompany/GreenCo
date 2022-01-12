import campaigns from "./campaigns";
import screens from "./screens";
import gql from 'graphql-tag'
import locations from "./locations";
import schedule from "./schedule";

export default `
	${locations}
	${schedule}
	${campaigns}
	${screens}
`