import { Box, Button, List, Text } from 'grommet';
import React, { useContext, useState } from 'react';
import { FormPreviousLink, Connect } from 'grommet-icons';
import { TemplateSingleContext } from '../context';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseModal, FormControl } from '@hexhive/ui';
import { useMutation } from '@greenco/signage-api';

export const TemplateSlotSingle = () => {
	const { id } = useParams()

	const [ modalOpen, openModal ] = useState(false)
	
	const navigate = useNavigate()

	const { templateId, slots, plugins, refresh } = useContext(TemplateSingleContext)
	
	const [ selectedPlugin, setSelectedPlugin ] = useState<string | undefined>(undefined);

	const [assignPlugin] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateGreenScreenTemplates({
			where: {id: templateId},
			update: {
				slots: [{
					where: {node: {id: id}},
					update: {
						node: {
							plugins: [{
								connect: [{where: {node: {id: args.id}}}]
							}]
						}
					}
				}]
			}
		})
		return {
			item: {
				...item.greenScreenTemplates?.[0]
			}
		}
	})

	const slot = slots?.find((a) => a.id == id)

	const submitAssignment = () => {
		console.log(selectedPlugin)
		if(!selectedPlugin) return;
		assignPlugin({args: {id: selectedPlugin}}).then(() => {
			openModal(false)
			refresh?.()
		})
	}

	return (
		<Box flex>
			<BaseModal 
				title='Assign Plugin'
				onSubmit={submitAssignment}
				open={modalOpen}
				onClose={() => openModal(false)}>
				<FormControl 
					options={plugins}
					labelKey='name'
					value={selectedPlugin}
					onChange={(val) => setSelectedPlugin(val)}
					valueKey='id'
					placeholder="Plugin" />
			</BaseModal>
			<Box background="accent-1" direction='row' justify="between" align='center'>
				<Box align="center" direction='row'>
					<Button 
						onClick={() => navigate('../')}
						plain 
						style={{padding: 6, borderRadius: 3}} 
						hoverIndicator
						icon={<FormPreviousLink />} />
					<Text>{slot?.name}</Text>
				</Box>
				<Button
					onClick={() => openModal(true)}
					plain 
					hoverIndicator 
					style={{padding: 6, borderRadius: 3}} 
					icon={<Connect size="small" />} />
			</Box>
			<Box flex>
				<List 
					primaryKey={"name"}
					data={slot?.plugins || []} />

			</Box>
		</Box>
	)
}