import { useQuery } from '@greenco/signage-api';
import { Box, Text, Button } from 'grommet';
import React from 'react';
import { Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Group, Catalog } from 'grommet-icons';
import { Campaigns } from './pages/campaigns';
import { Accounts } from './pages/accounts';

export const CustomerSingle = (props) => {

    const { id } = useParams()
    const query = useQuery()

    const navigate = useNavigate()

    const menu = [
        {
            icon: <Catalog />,
            route: ''
        },
        {
            icon: <Group />,
            route: 'accounts'
        }
    ]

    const customer = query.customers({where: {id: id}})

    return (
        <Box flex round="xsmall" overflow={"hidden"}>
            <Box pad="xsmall" align="center" background="accent-2" direction="row">
                <Text>{customer?.[0]?.name}</Text>
                {/* <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} /> */}
            </Box>
            <Box direction='row' background={'neutral-1'} flex>
                <Box elevation='small' background={'accent-1'}>
                    {menu.map((item) => (
                        <Button 
                            onClick={() => navigate(item.route)}
                            hoverIndicator  
                            icon={item.icon} />
                    ))}

                </Box>
                <Box flex>
                    <Routes>
                        <Route path={''} element={<Outlet />}>
                            <Route path={''} element={<Campaigns />} />
                            <Route path={'accounts'} element={<Accounts />} />
                        </Route>
                    </Routes>
                </Box>
            </Box>
        </Box>
    )
}