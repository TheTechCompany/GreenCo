import { Box, Button, Text, List } from 'grommet';
import React, { useState } from 'react';
import { Add, Monitor, Template } from 'grommet-icons';
import { GreenScreen, mutation, useMutation, useQuery } from '@greenco/signage-api'
import { CreateScreenModal } from '../../modals/create-screen'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ColorDot } from '@hexhive/ui';

export interface DisplayListProps {

}

export const ScreenList : React.FC<DisplayListProps> = (props) => {
    const navigate = useNavigate()
    const [ modalOpen, openModal ] = useState<boolean>(false);


    const query = useQuery()

   
    // const workflow = query.hivePi
    const screens = query.greenScreens({});


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
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.greenScreens({})]
    })

    return (
        <Box
            flex
            overflow="hidden"
            round="xsmall"
            background="neutral-1"
            elevation="small">
            <CreateScreenModal 
                open={modalOpen} 
                onSubmit={(display) => {
                    createMachine({args: {
                        name: display.name,
                        networkName: display.networkName
                    }}).then(() => {
                        openModal(false)
                    })
                }}
                onClose={() => openModal(false)} />
            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Screens</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box  direction='row' flex>
                <Box flex overflow={"auto"}>
                    <List 
                        onClickItem={(ev) => navigate(`${ev.item.id}`)}
                        primaryKey={"name"}
                        data={screens}>
                        {(datum : GreenScreen) => (
                            <Box
                                align="center" 
                                direction='row'>
                                <ColorDot 
                                    size={7}
                                    color={datum?.online ? 'green' : "red"}/>
                                <Text>
                                    {datum?.name}
                                </Text>
                            </Box>
                        )}
                    </List>
                </Box>               
            </Box>
        </Box>
    )
}
