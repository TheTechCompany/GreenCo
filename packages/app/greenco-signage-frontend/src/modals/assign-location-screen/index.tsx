import { BaseModal, FormControl, FormInput } from '@hexhive/ui';
import { useState } from 'react';
import { Box, TextInput } from 'grommet';
import React from 'react';

export const AssignLocationScreenModal = (props) => {
	const [ assignment, setAssignment ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(assignment)
	}
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Assign Screen"
			>
			<FormInput 
				value={assignment.name}
				onChange={(e) => setAssignment({...assignment, name: e})}
				placeholder="Name" />
			
			<Box direction="row">
				<FormInput 
					value={assignment.lat}
					onChange={(e) => setAssignment({...assignment, lat: e})}
					placeholder="Lat" />
				<FormInput 
					type='number'
					value={assignment.lng}
					onChange={(e) => setAssignment({...assignment, lng: e})}
					placeholder="Lng" />
			</Box>

			<FormControl
				placeholder="Screen"
				valueKey='id'
				labelKey='name'
				value={assignment.screen}
				onChange={(value) => setAssignment({...assignment, screen: value})}
				options={props.screens} />
		</BaseModal>
	)
}