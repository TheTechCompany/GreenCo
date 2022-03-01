import { schemaComposer } from 'graphql-compose'
import  Types  from './types'
import { request, gql } from 'graphql-request'

const {Campaigns} = Types(schemaComposer)

const campaignList = [{id: '101', name: "Campaign Test"}];

schemaComposer.Query.addFields({
    campaigns: {
        type: [Campaigns],
        args: {
            id: {
                type: 'String'
            }
        },
        resolve: async (source, args, context, info) => {
            if(args.id){
                const query = gql`
                    query GetCampaigns($customer: ID, $id: ID) {
                        campaigns(where: {customer: {id: $customer}, id: $id}) {
                            id
                            name

                            views
                            interactions

                            activeTier
                            activeClusters
                            activeScreens

                            peopleCount
                            peopleCountWeek
                        }
                    }
                `
                const list = await request(`${process.env.API_SERVER || ''}?appliance=GreenScreen`, query, {customer: context.user.account, id: args.id}, {
                    Authorization: `bearer ${process.env.API_KEY}`  
                })
                return list?.campaigns
            }

            const query = gql`
                query GetCampaigns($id: ID) {
                    campaigns(where: {customer: {id: $id}}){
                        id
                        name

                        views
                        interactions

                        activeTier
                        activeClusters
                        activeScreens
                        
                        peopleCount
                        peopleCountWeek
                    }
                }
            `
            const list = await request(`${process.env.API_SERVER}?appliance=GreenScreen`, query, {id: context.user.account}, {
                Authorization: `bearer ${process.env.API_KEY}`
            })
            return list?.campaigns
        }
    }
})

export const schema = schemaComposer.buildSchema();