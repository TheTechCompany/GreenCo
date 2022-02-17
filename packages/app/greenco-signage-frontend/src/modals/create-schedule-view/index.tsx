import { BaseModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input'

export const CreateScheduleViewModal = (props) => {

	const [ schedule, setSchedule ] = useState<{id?: string, name?: string, tags?: string[]}>({})

	const onSubmit = () => {
		props.onSubmit(schedule)
	}
	
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Schedule View" >

			<Box>
				<TextInput 
					value={schedule.name}
					onChange={(e) => setSchedule({ ...schedule, name: e.target.value })}
					placeholder="View name" />
{/* 				
				<ReactTags 
					tags={schedule.tags?.map((x) => ({id: x, text: x}))}

					handleAddition={(tag) => {
						setSchedule({...schedule, tags: [...(schedule.tags || []), tag.text]})
					}}
					handleDelete={(i) => {
						let tags = schedule.tags || []
						tags.splice(i, 1)
						setSchedule({...schedule, tags})
					}} /> */}
			</Box>
		</BaseModal>
	)
}