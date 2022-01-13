import React, { useState } from 'react';
import { Box, Text, Button, List } from 'grommet';
import { useMutation, useQuery } from '@greenco/signage-api';
import { Add, List as ListIcon, Map as MapIcon } from 'grommet-icons';
import { CreateLocationModal } from '../../modals/create-location';
import { useNavigate } from 'react-router-dom'
import { LocationMap } from '../../components/location-map';

export interface LocationListProps {

}

export const LocationList : React.FC<LocationListProps> = (props) => {
	const navigate = useNavigate()

	const [ modalOpen, openModal ] = React.useState(false);


	const [ view, setView ] = useState<string>('list');
	
	const query = useQuery()
	const locations = query.locationGroups()

	const [ createLocation, createInfo ] = useMutation((mutation, args: {name: string, machine: string}) => {

		const item = mutation.updateHiveOrganisations({
			update: {
				locationGroups: [{
					create: [{
						node: {
							name: args.name
						}
					}]
				}]
			}
		})
		// const item = mutation.createLocations({input: [{
		// 	name: args.name,
		// 	...machineUpdate
		// }]})
		return {
			item: {
				...item.hiveOrganisations?.[0]
			}
		}

	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.locationGroups()]
	})

	return (
		<Box
			round="xsmall"
			overflow="hidden"
			flex
			elevation="small"
			background="light-1"
			>
			
			<CreateLocationModal
				onClose={() => openModal(false)}
				onSubmit={(cluster) => {
					createLocation({args: {
						...cluster
					}}).then(() => {
						openModal(false)
					})
				}}
				open={modalOpen}
				/>
			<Box align="center" justify="between" direction="row" pad="xsmall" background="accent-2">
				<Text>Locations</Text>

				<Box direction='row' align='center'>
					<Button 
						hoverIndicator
						plain
						onClick={() => setView(view == 'list' ? 'map' : 'list')}
						style={{padding: 6, borderRadius: 3}}
						icon={view == 'list' ? (<ListIcon size="small"/>) : (<MapIcon size="small" />)} />
					<Button 
						hoverIndicator
						plain
						onClick={() => openModal(true)}
						style={{padding: 6, borderRadius: 3}}
						icon={<Add size="small" />}
						/>
				</Box>
			</Box>
			<Box flex>
				{view == 'list' ? (
							<List
								onClickItem={(ev) => navigate(`${ev.item.id}`)}
								primaryKey={"name"}
								data={locations}>
								{(datum) => (
									<Box>
										<Text>{datum?.name}</Text>
									</Box>
								)}
							</List>
				) : (
					<LocationMap />
				)}
			</Box>

		</Box>
	)
}