export default `

    extend type HiveOrganisation {
        customers: [Customer] @relationship(type: "HAS_CUSTOMERS", direction: OUT)
    }
    type Customer @auth(rules: [
		{operations: [READ, UPDATE, CREATE], where: {organisation: {id: "$jwt.organisation"}}},
		{operations: [UPDATE, DELETE], bind: {organisation: {id: "$jwt.organisation"}}}
    ]){
        id: ID! @id
        name: String!
        email: String
        phone: String

        accounts: [CustomerAccount] @relationship(type: "HAS_ACCOUNT", direction: OUT)

        campaigns: [Campaign] @relationship(type: "HAS_CAMPAIGN", direction: OUT)
        organisation: HiveOrganisation @relationship(type: "HAS_CUSTOMERS", direction: IN)
    }

    type CustomerAccount {
        id: ID! @id
        name: String!
        email: String
        password: Hash

        customer: Customer @relationship(type: "HAS_ACCOUNT", direction: IN)
    }
`