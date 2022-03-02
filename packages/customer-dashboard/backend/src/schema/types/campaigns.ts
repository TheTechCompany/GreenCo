import { SchemaComposer, schemaComposer } from "graphql-compose";

export default ( schemaComposer: SchemaComposer ) => {
    const AnalyticData = schemaComposer.createObjectTC(`
        type AnalyticData {
            time: Date
            value: Int
        }
    `)
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

    		peopleTimeline(length: String, unit: String): [AnalyticData]

        }

    `)

    return {
        Campaigns
    }
}