import { BaseModal, FormControl } from '@hexhive/ui';
import { useEffect, useState } from 'react';
import { TextInput } from 'grommet';
import React from 'react';

export const CreateLocationModal = (props) => {
	const [ location, setLocation ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(location)
	}

	useEffect(() => {
		setLocation({
			...props.selected
		})
	}, [props.selected])

	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onDelete={props.selected && props.onDelete}
			onSubmit={onSubmit}
			title={`${props.selected ? 'Update' : 'Create'} Location`}
			>
			<TextInput 
				value={location.name}
				onChange={(e) => setLocation({...location, name: e.target.value})}
				placeholder="Name" />
			
		</BaseModal>
	)
}