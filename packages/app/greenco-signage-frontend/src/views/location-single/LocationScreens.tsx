import { useMutation } from '@greenco/signage-api';
import { Box, Button, List, Text } from 'grommet';
import { Add, Edit } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { AssignLocationScreenModal } from '../../modals/assign-location-screen';
import { ClusterSingleContext } from './context';

export const ClusterScreens = (props) => {

	const [ modalOpen, openModal ] = useState(false)

	const [ selected, setSelected ] = useState<{id: string}>()

	const {id, locations, refresh, screens } = useContext(ClusterSingleContext)

	const [ assignScreen ] = useMutation((mutation, args: {
		name: string,
		lat: string,
		lng: string,
		screen: string
	}) => {
		const item = mutation.updateLocationGroups({
			where: {id: id},
			update: {
				locations: [{
					create: [{
						node: {
							name: args.name,
							lat: args.lat,
							lng: args.lng,
							screen: {
								connect: {where: {node: {id: args.screen}}}
							}
						}
					}]
				}]
			}
		})
		return {
			item: {
				...item.locationGroups?.[0]
			}
		}
	})

	const [ updateScreen ] = useMutation((mutation, args: {
		id: string,
		name: string,
		lat: string,
		lng: string,
		screen: string
	}) => {
		const item = mutation.updateLocationGroups({
			where: {id: id},
			update: {
				locations: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							name: args.name,
							lat: args.lat,
							lng: args.lng,
							screen: {
								connect: {where: {node: {id: args.screen}}},
								disconnect: {where: {node: {id_NOT: args.screen}}}
							}
						}
					}
				}]
			}
		})
		return {
			item: {
				...item.locationGroups?.[0]
			}
		}
	})

	const [ removeScreen ] = useMutation((mutation, args: {
		id: string
	}) => {
		const item = mutation.updateLocationGroups({
			where: {id: id},
			update: {
				locations: [{
					delete: [{
						where: {node: {id: args.id}}
					}]
				}]
			}
		})
		return {
			item: {
				...item.locationGroups?.[0]
			}
		}
	})

	return (
		<Box flex>
			<AssignLocationScreenModal
				open={modalOpen}
				selected={selected}
				screens={screens}
				onClose={() => openModal(false)}
				onDelete={() => {
					if(!selected?.id) return;
					removeScreen({
						args: {
							id: selected.id
						}
					}).then(() => {
						openModal(false)
						setSelected(undefined)
						refresh?.()
					})
				}}
				onSubmit={(assignment) => {
					if(assignment.id){
						updateScreen({
							args: {
								id: assignment.id,
								name: assignment.name,
								lat: assignment.lat,
								lng: assignment.lng,
								screen: assignment.screen
							}
						}).then(() => {
							openModal(false)
							refresh?.()
						})
						
					}else{
						assignScreen({
							args: {
								name: assignment.name,
								lat: assignment.lat,
								lng: assignment.lng,
								screen: assignment.screen
							}
						}).then(() => {
							openModal(false)
							refresh?.()
						})
					}

					setSelected(undefined)
				}}
				/>
			<Box direction='row' justify='between' align='center'>
				<Text>Screens</Text>
				<Button 
					onClick={() => openModal(true)}
					plain 
					style={{padding: 6, borderRadius: 3}} 
					hoverIndicator 
					icon={<Add size="small" />} />
			</Box>
			<Box  overflow="scroll" flex border={{side: 'top', size: 'small'}}>
				<List
					primaryKey={"name"}
					data={locations}
				>
					{(datum) => (
						<Box 
							align="center"
							justify='between'
							direction='row'>
							<Box>
								<Text>{datum.name}</Text>
								<Text size="xsmall">{datum?.screen?.name}</Text>
							</Box>
							<Button 
								onClick={() => {
									setSelected(datum)
									openModal(true)
								}}
								plain
								hoverIndicator 
								style={{borderRadius: 3, padding: 6}} 
								icon={<Edit size="small"/>} />
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}