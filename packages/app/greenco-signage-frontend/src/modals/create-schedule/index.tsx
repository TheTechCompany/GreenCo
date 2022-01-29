import { BaseModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';

export const CreateScheduleModal = (props) => {

	const [ schedule, setSchedule ] = useState<any>({})

	const onSubmit = () => {
		props.onSubmit(schedule)
	}

	useEffect(() => {
		setSchedule({
			...props.selected
		})
	}, [props.selected])

	useEffect(() => 
	{
	if (props.open == false){
		setSchedule({})}

	}, [props.open])
	
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			onDelete={props.selected && props.onDelete}
			title={`${props.selected ? 'Update' : 'Create'} Schedule`} >

			<Box>
				<TextInput 
					value={schedule.name}
					onChange={(e) => setSchedule({ ...schedule, name: e.target.value })}
					placeholder="Schedule name" />

			</Box>
		</BaseModal>
	)
}