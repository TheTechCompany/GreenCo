import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add, MoreVertical } from 'grommet-icons';
import { client, mutation, useMutation } from '@greenco/signage-api'
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CampaignModal } from '../../modals/campaign-modal';

export interface TriggerListProps {

}

export const CampaignList : React.FC<TriggerListProps> = (props) => {
    const navigate = useNavigate()

    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selected, setSelected ] = useState<any>(undefined)

    const client = useApolloClient()

    const {data} = useQuery(gql`
        query Q {
            campaigns {
                id
                name
                customer {
                    id
                    name
                }
            }

            customers{
                id
                name
            }
        }
    `)

    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }

    const campaigns = data?.campaigns

    const customers = data?.customers;

    const [ deleteCampaign, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
        if(!args.id) {return}
        const item = mutation.deleteCampaigns({where: {id: args.id}})
        return {
            item: {
                ...item.nodesDeleted?.[0]
            }
        }
    })

    const [ createCampaign, createInfo ] = useMutation((mutation, args: {name: string, customer: string}) => {
        let customerUpdate = {};
        if(args.customer){
            customerUpdate = {
                customer: {connect: {where: {node: {id: args.customer}}}},
            }
        }
       const item = mutation.updateHiveOrganisations({
            // where: {id: "J8I15pyAKy037gISCwfmT"},
            update: {
                campaigns: [{
                    create: [{
                        node: {
                            name: args.name,
                            ...customerUpdate
                        }
                    }]
                }]
            }
        })
        // const item = mutation.createCampaigns({input: [{name: args.name}]})
        return {
            item: {
                ...item.hiveOrganisations[0]
            },
            err: null
        }
    })

    const [ updateCampaign ] = useMutation((mutation, args: {id: string, name: string, customer: string}) => {
        let customerUpdate = {};
        if(args.customer){
            console.log({customer: args.customer})
            customerUpdate = {
                customer: {
                    connect: {where: {node: {id: args.customer}}},
                    disconnect: {where: {node: {id_NOT: args.customer}}}
                },
            }
        }
       const item = mutation.updateHiveOrganisations({
            // where: {id: "J8I15pyAKy037gISCwfmT"},
            update: {
                campaigns: [{
                    where: {node: {id: args.id}},
                    update: {
                        node: {
                            name: args.name,
                            ...customerUpdate
                        }
                    }
                }]
            }
        })
        // const item = mutation.createCampaigns({input: [{name: args.name}]})
        return {
            item: {
                ...item.hiveOrganisations[0]
            },
            err: null
        }
    })
    // const workflow = query.hivePi

    return (
        <Box
            background="neutral-1"
            flex
            overflow="hidden"
            round="xsmall"
            elevation="small">
           <CampaignModal   
                customers={customers}
                open={modalOpen}
                selected={selected}
                onClose={() => {
                    openModal(false)
                    setSelected(undefined)
                }}
                onDelete={() => {
                    deleteCampaign({args: {id: selected.id}}).then(() => {
                        openModal(false)
                        setSelected(undefined)
                        refetch()
                    })
                }}
                onSubmit={(campaign) => {
                    // console.log({campaign})

                    if(!campaign.id){
                        createCampaign({args: {name: campaign.name, customer: campaign.customer}}).then(() => {
                            openModal(false)
                            setSelected(undefined)
                             refetch()
                            
                        })
                    }else{
                        updateCampaign({args: {id: campaign.id, name: campaign.name, customer: campaign.customer}}).then(() => {
                            openModal(false);
                            setSelected(undefined)
                            refetch()

                        })
                    }
                }} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Campaigns</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box flex overflow={"auto"}>
                <List 
                    primaryKey={"name"}
                    data={campaigns}>
                    {(datum) => (
                        <Box
                            onClick={() => navigate(`${datum.id}`)}
                            align="center" justify="between" direction="row">
                            <Box>
                                <Text>{datum.name}</Text>
                                <Text size="small">{datum?.customer?.name}</Text>
                            </Box>
                            <Button 
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    openModal(true)
                                    setSelected(datum)
                                }}
                                plain 
                                style={{padding: 6, borderRadius: 3}}
                                hoverIndicator 
                                icon={<MoreVertical size="small" />} />
                        </Box>
                    )}
                </List>
            </Box>
        </Box>
    )
}