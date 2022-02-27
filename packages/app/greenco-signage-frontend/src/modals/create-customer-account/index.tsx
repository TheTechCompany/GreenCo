import { BaseModal, FormControl } from '@hexhive/ui';
import { useEffect, useState } from 'react';
import { Box, TextInput } from 'grommet';
import React from 'react';

export const CreateCustomerAccountModal = (props) => {
	const [ customer, setCustomer ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(customer)
	}

	useEffect(() => {
		setCustomer({
			...props.selected
		})
	}, [props.selected])

	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onDelete={props.selected && props.onDelete}
			onSubmit={onSubmit}
			title={`${props.selected ? 'Update' : 'Create'} Customer Account`}
			>
            <Box gap="xsmall">
                <TextInput 
                    value={customer.name}
                    onChange={(e) => setCustomer({...customer, name: e.target.value})}
                    placeholder="Name" />
                
                <TextInput  
                    value={customer.email}
                    onChange={(e) => setCustomer({...customer, email: e.target.value})}
                    placeholder="Email" />

                <TextInput
                    value={customer.password}
                    onChange={(e) => setCustomer({...customer, password: e.target.value})}
                    placeholder="Password"
                    type="password" />
            </Box>
		</BaseModal>
	)
}