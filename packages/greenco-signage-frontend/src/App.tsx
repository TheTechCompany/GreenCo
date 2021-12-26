import { Box, Text, List } from 'grommet';
import React from 'react';
import {  Routes, Route, Link, matchPath} from 'react-router-dom'
import { MachineList } from './views/machine-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CampaignList } from './views/campaign-list';
import { HomeView } from './views/home';
import { CampaignSingle } from './views/campaign-single';
import { LocationList } from './views/location-list/LocationList';
import {  ScheduleList } from './views/schedule-list/ScheduleList';
import { LocationSingle } from './views/location-single/LocationSingle';
import {  ScheduleSingle } from './views/schedule-single/ScheduleSingle';
import { MachineSingle } from './views/machine-single';
import { SchedulePlay, System, Catalog, Map, ServerCluster, Analytics as AnalyticsIcon } from 'grommet-icons';
import { MachineTemplateList } from './views/machine-template-list';
import { MachineTemplateSingle } from './views/machine-template-single';

import { useLocation, useNavigate } from 'react-router-dom'

const client = new ApolloClient({
    uri: process.env.REACT_APP_API ? `${process.env.REACT_APP_API}/graphql`: 'http://localhost:7000/graphql',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export const App = (props) => {
    const navigate = useNavigate()

    const match = useLocation()

    const changeView = (name: string) => {
    //    navigate(`${name}`)   
    }

    const menu = [
        {
            icon: <SchedulePlay />,
            label: "Schedules",
            path: '/schedules'
        },
        {
            icon: <Catalog />,
            label: "Campaigns",
            path: "/campaigns"
        },
        {
            icon: <Map />,
            label: "Locations",
            path: "/locations"
        },
        {
            icon: <ServerCluster/>,
            label: "Machines",
            path: '/machines'
        },
        {
            icon: <System />,
            label: "Templates",
            path: `/machine-templates`
        },
        {
            icon: <AnalyticsIcon />,
            label: "Reports",
            path: '/reports'
        }
    ]

    return (
        <ApolloProvider client={client}>

        <Box
            focusIndicator={false}
            background="neutral-2"
            direction="row" width="100%" height="100%">
            <Box 
                focusIndicator={false}
                width="small" elevation="small" background="brand"> 
                <List 
                    border={false}
                    pad={'none'}
                    onClickItem={(ev) => changeView(ev.item.path)}
                    data={menu} 
                    primaryKey="label">
                    {(datum) => (
                        <Link 
                            style={{textDecoration: 'none', color: 'white'}} 
                            to={`/${datum.path}`}>
                        <Box 
                            gap="small"
                            focusIndicator={false}
                            hoverIndicator
                            pad={'small'}
                            align="center"
                            background={matchPath(window.location.pathname, `/dashboard/signage${datum.path}`) ? 'accent-2': ''}
                            direction="row">
                            {datum.icon}
                            <Text>{datum.label}</Text>
                        </Box>
                        </Link>
                    )}
                </List>  
            </Box>
            <Box 
                style={{borderRadius: 8, overflow: 'hidden'}}
                flex 
                pad="xsmall">
                <Routes>
                    <Route path="/" element={<HomeView />} />
                        <Route path={"schedules"}  element={<ScheduleList />}>
                        </Route>
                        <Route path={"schedules/:id*"} element={<ScheduleSingle />} />

                        <Route path={'locations'} element={<LocationList />}>
                        </Route>
                        <Route path={'locations/:id*'} element={<LocationSingle />} />
                        
                        <Route path={'machines'} element={<MachineList />}>
                        
                        </Route>
                        <Route path={'machines/:id*'} element={<MachineSingle />} />

                        <Route path={'machine-templates'} element={<MachineTemplateList />}>

                        </Route>
                        <Route path={'machine-templates/:id*'} element={<MachineTemplateSingle />} />

                        <Route path={"campaigns"} element={<CampaignList />}>

                        </Route>
                        <Route path={"campaigns/:id*"} element={<CampaignSingle />} />

                </Routes>
            </Box>

        </Box>
        </ApolloProvider>
    )
}