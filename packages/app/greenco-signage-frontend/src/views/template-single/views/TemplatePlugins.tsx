import { useMutation, useQuery } from '@greenco/signage-api';
import { BaseModal, FormControl, FormInput } from '@hexhive/ui';
import { Box, List, Text, Button} from 'grommet';
import { Add, Edit } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TemplateSingleContext } from '../context';

export const TemplatePlugins = (props) => {

	const { id } = useParams()
	
	const { plugins, refresh } = useContext(TemplateSingleContext);

	const pluginTypes = [{label: "Node.js", key: "node"}, {label: "Python", key: "python"}]
	const sourceTypes = [{label: "NPM", key: "npm"}, {label: "Git", key: "git"}, {label: "PiP", key: "pip"}]

	const [ modalOpen, openModal ] = useState(false);

	const query = useQuery()

	const [ editPlugin, setEditPlugin ] = useState<{
		id?: string,
		name?: string,
		type?: string,
		source?: string,
		sourceType?: string;
		sourceVersion?: string;
	}>({})

	const [ createTemplatePlugin ] = useMutation((mutation) => {
		const item = mutation.updateGreenScreenTemplates({
			where: {id: id},
			update: {
				plugins: [{
					create: [{
						node: {
							name: editPlugin.name,
							type: editPlugin.type,
							source: editPlugin.source,
							sourceType: editPlugin.sourceType,
							sourceVersion: editPlugin.sourceVersion
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
	
	const [ deleteTemplatePlugin ] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateGreenScreenTemplates({
			where: {id: id},
			update: {
				plugins: [{
					delete: [{where: {node: {id: args.id}}}]
				}]
			}
		})
		return {
			item: {
				...item.greenScreenTemplates?.[0]
			}
		}
	})

	const submitPlugin = () => {
		createTemplatePlugin({}).then(() => {
			openModal(false)
			refresh?.()
		})
	}

	return (
		<Box flex>
			<BaseModal 
				title='Create Slot'
				onSubmit={submitPlugin}
				onDelete={editPlugin?.id ? (() => {
					if(!editPlugin.id) return;
					deleteTemplatePlugin({args: {id: editPlugin.id}}).then(() => {
						openModal(false)
						setEditPlugin({})
						refresh?.()
					})
				}) : undefined}
				open={modalOpen}
				onClose={() => {
					setEditPlugin({})
					openModal(false)
				}}>
				<FormInput 
					value={editPlugin?.name}
					onChange={(val) => setEditPlugin({ ...editPlugin, name: val })}
					placeholder="Plugin Name" />
				<FormControl
					placeholder='Plugin Type'
					options={pluginTypes}
					value={editPlugin?.type}
					onChange={(val) => setEditPlugin({ ...editPlugin, type: val })}
					labelKey='label'
					valueKey='key'
					/>
				<FormControl
					placeholder='Source Type'
					options={sourceTypes}
					value={editPlugin?.sourceType}
					onChange={(val) => setEditPlugin({ ...editPlugin, sourceType: val })}
					labelKey='label'
					valueKey='key'
					/>
				<FormInput 
					placeholder='Source'
					onChange={(val) => setEditPlugin({ ...editPlugin, source: val })}
					value={editPlugin?.source}
					/>
				<FormInput
					placeholder='Source Version'
					onChange={(val) => setEditPlugin({ ...editPlugin, sourceVersion: val })}
					value={editPlugin?.sourceVersion} />
			</BaseModal>

			<Box pad="xsmall" background="accent-1" align="center" justify="between" direction="row">
				<Text>Plugins</Text>
				<Button 
					onClick={() => openModal(true)}
					plain 
					style={{padding: 6, borderRadius: 3}} 
					hoverIndicator 
					icon={<Add  size="small" />} />
			</Box>
			<Box flex pad="xsmall">
				<List
					primaryKey={"name"}
					data={plugins} >
					{(datum) => (
						<Box direction='row' align='center' justify='between'>
							<Text>{datum.name}</Text>
							<Button 
								onClick={() => {
									openModal(true)
									setEditPlugin({
										...datum,
									})
								}}
								plain 
								style={{padding: 6, borderRadius: 3 }} 
								hoverIndicator 
								icon={<Edit size="small" />} />
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}