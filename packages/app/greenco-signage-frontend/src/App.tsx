import { Box, Text, List } from 'grommet';
import React from 'react';
import {  Routes, Route, Link, matchPath, Outlet, useResolvedPath, useMatch} from 'react-router-dom'
import { ScreenList } from './views/screen-list';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CampaignList } from './views/campaign-list';
import { HomeView } from './views/home';
import { CampaignSingle } from './views/campaign-single';
import { LocationList } from './views/location-list/LocationList';
import {  ScheduleList } from './views/schedule-list/ScheduleList';
import { LocationSingle } from './views/location-single/LocationSingle';
import {  ScheduleSingle } from './views/schedule-single/ScheduleSingle';
import {  ScreenSingle } from './views/screen-single';
import { Monitor, SchedulePlay, Group, System, Template, Catalog, Map, ServerCluster, Analytics as AnalyticsIcon } from 'grommet-icons';

import { useLocation, useNavigate } from 'react-router-dom'
import {  TemplateList } from './views/template-list';
import {  TemplateSingle } from './views/template-single';
import { CustomerList } from './views/customer-list';
import { CustomerSingle } from './views/customer-single';

const API_URL = localStorage.getItem('HEXHIVE_API');

const client = new ApolloClient({
    uri: process.env.NODE_ENV == 'production' ? `${API_URL || process.env.REACT_APP_API}/graphql?appliance=GreenScreen`: 'http://localhost:7000/graphql?appliance=GreenScreen',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export const App = (props) => {
    const navigate = useNavigate()

    const resolvedPath = useResolvedPath(':id/*')
    const match = useMatch(resolvedPath.pathname) || {params: {id: ''}}

    console.log(match)

    const changeView = (name: string) => {
    //    navigate(`${name}`)   
    }

    const menu = [
        {
            icon: <SchedulePlay />,
            label: "Schedules",
            path: 'schedules'
        },
        {
            icon: <Catalog />,
            label: "Campaigns",
            path: "campaigns"
        },
        {
            icon: <Group />,
            label: "Customers",
            path: "customers"
        },  
        {
            icon: <Map />,
            label: "Locations",
            path: "locations"
        },
        {
            icon: <Monitor />,
            label: "Screens",
            path: 'screens'
        },
        {
            icon: <Template />,
            label: "Templates",
            path: 'templates'
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
                            to={`${datum.path}`}>
                        <Box 
                            
                            gap="small"
                            focusIndicator={false}
                            hoverIndicator
                            pad={'small'}
                            align="center"
                            background={match?.params.id == datum.path ? 'accent-2': ''}
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
                        <Route path={"schedules"}  element={<Outlet />}>
                            <Route path={""} element={<ScheduleList />} />
                            <Route path={":id/*"} element={<ScheduleSingle />} />
                        </Route>

                        <Route path={"customers"} element={<Outlet />}>
                            <Route path={""} element={<CustomerList />} />
                            <Route path={":id/*"} element={<CustomerSingle />} />
                        </Route>

                        <Route path={'locations'} element={<Outlet />}>
                            <Route path={''} element={<LocationList />} />
                            <Route path={':id/*'} element={<LocationSingle />} />
                        </Route>
                        
                        <Route path={'screens'} element={<Outlet />}>
                            <Route path={''} element={<ScreenList />} />
                            <Route path={':id/*'} element={<ScreenSingle />} />
                        </Route>
                        <Route path={'templates'} element={<Outlet />}>
                            <Route path={''} element={<TemplateList />} />
                            <Route path={':id/*'} element={<TemplateSingle />} />
                        </Route>
                        <Route path={"campaigns"} element={<Outlet />}>
                            <Route path={''} element={<CampaignList />} />
                            <Route path={':id/*'} element={<CampaignSingle />} />
                        </Route>

                </Routes>
            </Box>

        </Box>
        </ApolloProvider>
    )
}