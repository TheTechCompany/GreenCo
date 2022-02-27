import { schemaComposer } from "graphql-compose";

export const Reports = schemaComposer.createObjectTC(`
    type Report {
        id: ID!
        name: String!

    }
`)