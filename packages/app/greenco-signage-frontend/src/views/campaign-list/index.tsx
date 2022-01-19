import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add, MoreVertical } from 'grommet-icons';
import { mutation, useMutation, useQuery } from '@greenco/signage-api'
import { useNavigate } from 'react-router-dom';
import { CampaignModal } from '../../modals/campaign-modal';

export interface TriggerListProps {

}

export const CampaignList : React.FC<TriggerListProps> = (props) => {
    const navigate = useNavigate()

    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selected, setSelected ] = useState<any>(undefined)

    const query = useQuery()

    const campaigns = query.campaigns()

    const [ deleteCampaign, deleteInfo ] = useMutation((mutation, args: {id: string}) => {
        if(!args.id) {return}
        const item = mutation.deleteCampaigns({where: {id: args.id}})
        return {
            item: {
                ...item.nodesDeleted?.[0]
            }
        }
    }, {
        refetchQueries: [query.campaigns()]
    })
    const [ createCampaign, createInfo ] = useMutation((mutation, args: {name: string}) => {
       const item = mutation.updateHiveOrganisations({
            // where: {id: "J8I15pyAKy037gISCwfmT"},
            update: {
                campaigns: [{
                    create: [{
                        node: {
                            name: args.name
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
    }, {
        suspense: false,
        awaitRefetchQueries: true,
        refetchQueries: [query.campaigns()]
    })
    // const workflow = query.hivePi

    return (
        <Box
            background="neutral-1"
            flex
            overflow="hidden"
            round="small"
            elevation="small">
           <CampaignModal   
            open={modalOpen}
            selected={selected}
            onClose={() => openModal(false)}
            onDelete={() => {
                deleteCampaign({args: {id: selected.id}}).then(() => {
                    openModal(false)
                })
            }}
            onSubmit={(campaign) => {
                createCampaign({args: {name: campaign.name}}).then(() => {
                    openModal(false)
                })
            }} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Campaigns</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box flex>
                <List 
                    primaryKey={"name"}
                    data={campaigns}>
                    {(datum) => (
                        <Box
                            onClick={() => navigate(`${datum.id}`)}
                            align="center" justify="between" direction="row">
                            <Text>{datum.name}</Text>
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