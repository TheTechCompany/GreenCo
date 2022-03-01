import { SchemaComposer, schemaComposer } from "graphql-compose";

export default ( schemaComposer: SchemaComposer ) => {
    const Campaigns = schemaComposer.createObjectTC(`
        type Campaign {
            id: ID!
            name: String!
            
            views: Int
		    interactions: Int
            
            activeClusters: Int
            activeScreens: Int

            activeTier: String

            peopleCount: Int
            peopleCountWeek: Int
        }

    `)

    return {
        Campaigns
    }
}