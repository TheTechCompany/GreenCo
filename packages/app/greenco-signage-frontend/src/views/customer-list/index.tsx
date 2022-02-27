import { useMutation, useQuery } from '@greenco/signage-api';
import { Box, Text, Button, List } from 'grommet';
import { Add } from 'grommet-icons'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCustomerModal } from '../../modals/create-customer';

export const CustomerList = () => {
    const [ modalOpen, openModal ] = useState(false);
    
    const navigate = useNavigate()

    const query = useQuery({suspense: false, staleWhileRevalidate: true})

    const [ createCustomer ] = useMutation((mutation, args: {name: string, email: string}) => {
        const item = mutation.updateHiveOrganisations({
            update: {
                customers: [{
                    create: [{
                        node: {
                            name: args.name,
                            email: args.email
                        }
                    }]
                }]
            }
        })

        return {
            item: {
                ...item.hiveOrganisations?.[0],
            }
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.customers()]
    })

    const customers = query.customers()

    return (
        <Box elevation='small' flex round="xsmall" overflow={"hidden"}>
            <CreateCustomerModal 
                onSubmit={(customer) => {
                    if(!customer.id){
                        createCustomer({args: {...customer}}).then(() => {
                            openModal(false)
                        })
                    }
                }}
                open={modalOpen} 
                onClose={() => openModal(false)} />

            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Customers</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box background={'neutral-1'} flex>
                <List 
                    onClickItem={({item}: any) => navigate(item.id)}
                    data={customers}
                    primaryKey={"name"}
                    />
            </Box>
        </Box>
    )
}