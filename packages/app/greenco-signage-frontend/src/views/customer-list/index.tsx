import { useMutation, useQuery } from '@greenco/signage-api';
import { Box, Text, Button, List } from 'grommet';
import { Add, MoreVertical } from 'grommet-icons'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCustomerModal } from '../../modals/create-customer';

export const CustomerList = () => {
    const [ modalOpen, openModal ] = useState(false);
    const [ selected, setSelected ] = useState<any | undefined>();

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

    const [ updateCustomer ] = useMutation((mutation, args: {id: string, name: string, email: string}) => {
        if(!args.id) return;
        const item = mutation.updateHiveOrganisations({
            update: {
                customers: [{
                    where: {node: {id: args.id}},
                    update: {
                        node: {
                            name: args.name,
                            email: args.email
                        }
                    }
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

    const [ deleteCustomer ] = useMutation((mutation, args: {id: string}) => {
        if(!args.id) return;
        const item = mutation.updateHiveOrganisations({
            update: {
                customers: [{
                    delete: [{
                        where: {node: {id: args.id}}

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

    const customers = query.customers()?.map((x) => ({...x}))

    return (
        <Box elevation='small' flex round="xsmall" overflow={"hidden"}>
            <CreateCustomerModal 
                selected={selected}
                onSubmit={(customer) => {
                    if(!customer.id){
                        createCustomer({args: {...customer}}).then(() => {
                            openModal(false)
                            setSelected(undefined)
                        })
                    }else{
                        updateCustomer({args: {...customer}}).then(() => {
                            openModal(false);
                            setSelected(undefined)
                        })
                    }
                }}
                onDelete={() => {
                    deleteCustomer({args: {id: selected.id}}).then(() => {
                        openModal(false);
                        setSelected(undefined)
                    })
                }}
                open={modalOpen} 
                onClose={() => {
                    openModal(false)
                    setSelected(undefined)

                }} />

            <Box pad="xsmall" align="center" background="accent-2" direction="row" justify="between">
                <Text>Customers</Text>
                <Button plain hoverIndicator style={{padding: 6, borderRadius: 3}} onClick={() => openModal(true)} icon={<Add size="small" />} />
            </Box>
            <Box background={'neutral-1'} flex overflow={"auto"}>
                <List 
                    data={customers}
                    primaryKey={"id"}
                    >
                    {(datum) => (
                        <Box direction='row' onClick={() => navigate(datum.id)}>
                            <Box flex>
                             <Text>{datum.name}</Text>
                            </Box>
                            <Button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openModal(true)
                                    setSelected(datum)
                                }}
                                hoverIndicator 
                                style={{padding: 6, borderRadius: 3}} 
                                plain 
                                icon={<MoreVertical size="small" />} />
                        </Box>
                    )}
                </List>
            </Box>
        </Box>
    )
}