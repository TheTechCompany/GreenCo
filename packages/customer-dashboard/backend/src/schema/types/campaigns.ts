import { SchemaComposer, schemaComposer } from "graphql-compose";

export default ( schemaComposer: SchemaComposer ) => {
    const Campaigns = schemaComposer.createObjectTC(`
        type Campaign {
            id: ID!
            name: String!
            
        }
    `)

    return {
        Campaigns
    }
}