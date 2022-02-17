import { BaseModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input'

export const CreateTemplateModal = (props) => {

	const [ template, setTemplate ] = useState<{id?: string, name?: string}>({})

	const onSubmit = () => {
		props.onSubmit(template)
	}
	
	return (
		<BaseModal
			open={props.open}
			onClose={props.onClose}
			onSubmit={onSubmit}
			title="Create Template" >

			<Box>
				<TextInput 
					value={template.name}
					onChange={(e) => setTemplate({ ...template, name: e.target.value })}
					placeholder="Template name" />
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