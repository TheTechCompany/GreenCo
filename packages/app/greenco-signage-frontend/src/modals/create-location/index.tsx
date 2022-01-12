import { BaseModal, FormControl } from '@hexhive/ui';
import { useState } from 'react';
import { TextInput } from 'grommet';
import React from 'react';

export const CreateLocationModal = (props) => {
	const [ location, setLocation ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(location)
	}
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Location"
			>
			<TextInput 
				value={location.name}
				onChange={(e) => setLocation({...location, name: e.target.value})}
				placeholder="Name" />
			
			<FormControl
				placeholder="Screen"
				options={props.screens}
				value={location.screen}
				labelKey="name"
				valueKey="id"
				onChange={(screen) => setLocation({...location, screen})}
				/>
		</BaseModal>
	)
}