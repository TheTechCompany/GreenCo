import { Box, List, Button, Text } from 'grommet';
import React, { useState, useContext } from 'react';
import { Add } from 'grommet-icons';
import { BaseModal, FormInput } from '@hexhive/ui';
import { useMutation, useQuery } from '@greenco/signage-api';
import { useNavigate, useParams } from 'react-router-dom';
import { TemplateSingleContext } from '../context';

export const TemplateSlots = (props) => {

	const { id } = useParams()

	const navigate = useNavigate()

	const { slots, refresh } = useContext(TemplateSingleContext);

	const query = useQuery()
	
	const [ modalOpen, openModal ] = useState(false);

	const [ editTemplate, setEditTemplate ] = useState<{name?: string}>({})

	const [ createSlot ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.updateGreenScreenTemplates({
			where: {id: id},
			update: {
				slots: [{
					create: [{
						node: {
							name: args.name
						}
					}]
				}]
			}
		})	

		return {
			item: {
				...item.greenScreenTemplates?.[0]
			}
		}
	})

	const submitTemplate = () => {
		if(!editTemplate.name) return;
		createSlot({args: {
			name: editTemplate.name
		}}).then(() => {
			refresh?.()
			openModal(false)
		})
	}

	return (
		<Box flex>
			<BaseModal 
				title='Create Slot'
				onSubmit={submitTemplate}
				open={modalOpen}
				onClose={() => openModal(false)}>
				<FormInput 
					value={editTemplate?.name}
					onChange={(val) => setEditTemplate({ ...editTemplate, name: val })}
					placeholder="Slot Name" />
			</BaseModal>

			<Box pad="xsmall" background="accent-1" align="center" justify="between" direction="row">
				<Text>Slots</Text>
				<Button onClick={() => openModal(true)} plain style={{padding: 6, borderRadius: 3}} hoverIndicator icon={<Add  size="small" />} />
			</Box>
			<Box pad="xsmall">
				<List 
					onClickItem={({item}: any) => {
						navigate(item.id)
					}}
					primaryKey="name"
					data={slots || []} />
			</Box>
		</Box>
	)
}