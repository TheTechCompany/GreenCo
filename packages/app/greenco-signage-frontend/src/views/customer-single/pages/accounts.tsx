import { Box, Button, List, Text } from 'grommet';
import React, { useState } from 'react';
import { Add } from 'grommet-icons';
import { CreateCustomerAccountModal } from '../../../modals/create-customer-account';
import { useMutation, useQuery } from '@greenco/signage-api';
import { useParams } from 'react-router-dom';

export const Accounts = () => {
    const [ modalOpen, openModal ] = useState(false);

    const { id } = useParams()

    const query = useQuery();

    const accounts = query.customerAccounts({where: {customer: {id: id}}})

    const [ createAccount ] = useMutation((mutation, args: {name: string, email: string, password: string}) => {

        const item = mutation.updateCustomers({where: {id: id}, update: {
            accounts: [{
                create: [{
                    node: {
                        name: args.name,
                        email: args.email,
                        password: args.password
                    }
                }]
            }]
        }})
        return {
            item: {
                ...item.customers?.[0]
            }
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.customerAccounts({where: {customer: {id: id}}})]
    })

    return (
        <Box flex>
            <CreateCustomerAccountModal 
                open={modalOpen}
                onClose={() => {
                    openModal(false)
                }}
                onSubmit={(account) => {
                    createAccount({args: {name: account.name, email: account.email, password: account.password}}).then(() => {
                        openModal(false)
                    })
                }}
                />
            <Box pad="xsmall" justify='between' align='center' direction='row'>
                <Text>Accounts</Text>
                <Button
                    onClick={() => openModal(true)}
                    hoverIndicator 
                    plain 
                    style={{padding: 6, borderRadius: 3}} 
                    icon={<Add size="small" />} />
            </Box>  
            <Box flex>
                <List 
                    data={accounts} 
                    primaryKey={"name"} />
            </Box>
        </Box>
    )
}