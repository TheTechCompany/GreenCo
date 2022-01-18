import { useMutation } from '@greenco/signage-api';
import { Box, Button, List, Text } from 'grommet';
import { Add, Edit } from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { AssignLocationScreenModal } from '../../modals/assign-location-screen';
import { ClusterSingleContext } from './context';

export const ClusterScreens = (props) => {

	const [ modalOpen, openModal ] = useState(false)

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

	return (
		<Box flex>
			<AssignLocationScreenModal
				open={modalOpen}
				screens={screens}
				onClose={() => openModal(false)}
				onSubmit={(assignment) => {
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
			<Box flex border={{side: 'top', size: 'small'}}>
				<List
					primaryKey={"name"}
					data={locations}
				>
					{(datum) => (
						<Box 
							justify='between'
							direction='row'>
							<Box>
								<Text>{datum.name}</Text>
								<Text size="xsmall">{datum?.screen?.name}</Text>
							</Box>
							<Button hoverIndicator style={{borderRadius: 3}} icon={<Edit />} />
						</Box>
					)}
				</List>
			</Box>
		</Box>
	)
}