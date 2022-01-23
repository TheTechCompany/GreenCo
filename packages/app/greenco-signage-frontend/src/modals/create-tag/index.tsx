import { BaseModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input'

export const CreateTagModal = (props) => {

	const [ tag, setTag ] = useState('')

	const onSubmit = () => {
		props.onSubmit(tag)
	}
	
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Tag" >

			<Box>
				<TextInput 
					value={tag}
					onChange={(e) => setTag(e.target.value)}
					placeholder="Tag" />
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