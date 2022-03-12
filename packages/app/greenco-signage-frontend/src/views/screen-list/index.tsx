import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add, Monitor, Edit, Template } from 'grommet-icons';
import { GreenScreen, mutation, useMutation } from '@greenco/signage-api'
import { CreateScreenModal } from '../../modals/create-screen'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ColorDot } from '@hexhive/ui';
import { gql, useApolloClient, useQuery } from '@apollo/client';

export interface DisplayListProps {

}

export const ScreenList : React.FC<DisplayListProps> = (props) => {
    const navigate = useNavigate()
    const [ modalOpen, openModal ] = useState<boolean>(false);

    const [ selected, setSelected ] = useState<any>();

    // const query = useQuery()

   
    // const workflow = query.hivePi
    const client = useApolloClient();

    const { data } = useQuery(gql`
        query Q {
            greenScreens {
                id
                name
                online
                networkName

                location {
                    name
                }
            }
        }
    `)

    const screens = data?.greenScreens || [];
    
    const refetch = () => {
        client.refetchQueries({include: ['Q']})
    }
    // const screens = query.greenScreens({});


    const [ createMachine, createInfo ] = useMutation((mutation, args: {name: string, networkName: string}) => {
      
        const item = mutation.updateHiveOrganisations({
            update: {
                greenScreens: [{
                    create: [{
                        node: {
                            name: args?.name,
                            networkName: args?.networkName
                        }
                    }]
                }]
            }
        })
        // const display = mutation.createGreenScreens({
        //     input: [{
        //         name: args?.name,
        //         networkName: args?.networkName,
        //     }]
        // })
        return {
            item: {
                ...item.hiveOrganisations?.[0],
            }
            
        }
    })

    const [ updateMachine ] = useMutation((mutation, args: {id: string, name: string, networkName: string}) => {
        if(!args.id) return;
        const item = mutation.updateHiveOrganisations({
            update: {
                greenScreens: [{
                    where: {node: {id: args?.id}},
                    update: {
                        node: {
                            name: args?.name,
                            networkName: args?.networkName
                        }
                    }
                }]
            }
        })
        // const display = mutation.createGreenScreens({
        //     input: [{
        //         name: args?.name,
        //         networkName: args?.networkName,
        //     }]
        // })
        return {
            item: {
                ...item.hiveOrganisations?.[0],
            }
            
        }
    })

    const [ deleteMachine ] = useMutation((mutation, args: {id: string}) => {
        if(!args?.id) return;

        const item = mutation.updateHiveOrganisations({
            update: {
                greenScreens: [{
                    delete: [{where: {node: {id: args.id}}}]
                }]
            }
        })

        return {
            item: {
                ...item.hiveOrganisations?.[0]
            }
        }
    })

    return (
        <Box
            flex
            overflow="hidden"
            round="xsmall"
            background="neutral-1"
            elevation="small">
            <CreateScreenModal 
                selected={selected}
                open={modalOpen} 
                onDelete={() => {
                    deleteMachine({args: {id: selected?.id}}).then(() => {
                        refetch()
                        openModal(false)
                        setSelected(undefined)
                    })
                }}
                onSubmit={(display) => {
                    if(display.id){
                        updateMachine({
                            args: {
                                id: display.id,
                                name: display.name,
                                networkName: display.networkName,
                            }
                        }).then(() => {
                            refetch()
                            openModal(false)
                            setSelected(undefined)
                        })
                    }else{
                        createMachine({args: {
                            name: display.name,
                            networkName: display.networkName
                        }}).then(() => {
                            refetch()
                            setSelected(undefined)
                            openModal(false)
                        })
                    }
                }}
                onClose={() => openModal(false)} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Screens</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box  direction='row' flex>
                <Box flex overflow={"auto"}>
                    <List 
                        primaryKey={"name"}
                        data={screens}>
                        {(datum : GreenScreen) => (
                            <Box    
                                onClick={() => navigate(`${datum.id}`)}
                                align="center" 
                                direction='row'>
                                <ColorDot 
                                    size={7}
                                    color={datum?.online ? 'green' : "red"}/>
                                <Box flex>
                                    <Text>
                                        {datum?.name}
                                    </Text>
                                    <Text size="small">{datum?.location?.name ? `Location: ${datum?.location?.name}` : ''}</Text>
                                </Box>
                                <Button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelected(datum)
                                        openModal(true);
                                    }}
                                    hoverIndicator plain style={{padding: 6, borderRadius: 3}} icon={<Edit size="small" />} />
                            </Box>
                        )}
                    </List>
                </Box>               
            </Box>
        </Box>
    )
}
