import { SchemaComposer, schemaComposer } from "graphql-compose";

export default (schemaComposer: SchemaComposer) => {
    const Customer = schemaComposer.createObjectTC(`
        type Customer {
            id: ID!
            name: String!
            
        }
    `)

    const CustomerAccount = schemaComposer.createObjectTC(`
        type CustomerAccount {
            id: ID!
            name: String!
            password: String   
        }
    `)

    return {
        Customer,
        CustomerAccount
    }
}