import { schemaComposer } from 'graphql-compose'
import  Types  from './types'
import { request, gql } from 'graphql-request'
import graphqlFields from 'graphql-fields'
import { FieldNode, SelectionSetNode, StringValueNode, VariableNode } from 'graphql'

const {Campaigns} = Types(schemaComposer)

const campaignList = [{id: '101', name: "Campaign Test"}];

const getSelectionSet = (selectionSet: SelectionSetNode) => {
    let fields = selectionSet.selections.filter((a) => a.kind == 'Field').map((x) => (x as FieldNode));
    return fields.map((field) => {
        let args = field.arguments?.map((arg) => ({
            name: arg.name.value,
            value: arg.value.kind == "StringValue" ? (arg.value as StringValueNode).value : (arg.value as VariableNode).name.value
        }))
        

        let selection : any = field.selectionSet ?  getSelectionSet(field.selectionSet) : undefined
        return {
            args,
            field: field.name.value,
            selection
        }
    })
}

const createSelectionSet = (selectionSet: any) => {
    return selectionSet.map((field: any) => {
        let fieldName = field.field;
        if(field.args.length > 0){
            fieldName += `(${field.args.map((arg: any) => `${arg.name}: "${arg.value}"`).join(', ')})`
        }
        if(field.selection){
            return `${fieldName} {
                ${createSelectionSet(field.selection)}
            }`
        } 
        return fieldName
    }).join('\n')
}

schemaComposer.Query.addFields({
    campaigns: {
        type: [Campaigns],
        args: {
            id: {
                type: 'String'
            }
        },
        resolve: async (source, args, context, info) => {
            // console.log({info: JSON.stringify(getSelectionSet(info.operation.selectionSet))})
            const selectionSet = getSelectionSet(info.operation.selectionSet);

            const querySelection = createSelectionSet(selectionSet?.[0]?.selection);
            console.log(querySelection)
            if(args.id){
                const query = gql`
                    query GetCampaigns($customer: ID, $id: ID) {
                        campaigns(where: {customer: {id: $customer}, id: $id}) {
                           ${querySelection}
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
                       ${querySelection}
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