import { Box, Text, List, Button } from 'grommet';
import React, { useState, useContext} from 'react';
import { Add, List as ListIcon, Map } from 'grommet-icons';
import { mutate, useMutation, useQuery } from '@greenco/signage-api';
import { ScheduleSingleContext } from '../context';
import { ScheduleLocationModal } from '../modals/ScheduleLocation';
import { LocationMap } from '../../../components/location-map';

export const ScheduleLocations = () => {

	const [ isList, setIsList ] = useState(true);

	const [ modalOpen, openModal ] = useState(false);

	const query = useQuery()

	const { scheduleId, locations, refresh } = useContext(ScheduleSingleContext)

	console.log(locations) 
	
	const allLocations = query.locationGroups({})

	const [ connectLocation, connectInfo ] = useMutation((mutation, args: {locationId: string}) => {
		if(!args.locationId) return;

		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				locations: [{
					connect: [{where: {node: {id: args.locationId}}}]
				}]
			}
		})
		return {
			item: {
				...item.schedules?.[0]
			}
		}
	})

	return (
		<Box flex>
			<ScheduleLocationModal 
				locations={allLocations}
				onSubmit={(location: any) => {

					connectLocation({args: {locationId: location}}).then(() => {
						openModal(false)
						refresh?.()
					})
				}}
				onClose={() => openModal(false)}
				open={modalOpen} />
			<Box pad={'xsmall'} align="center" justify="between" direction="row">
				<Text>Locations</Text>
				<Box direction='row' align='center'>
					<Button plain style={{padding: 6, borderRadius: 3}} onClick={() => setIsList(!isList)} hoverIndicator icon={!isList ? <ListIcon size="small" /> : <Map size="small" />} />
					<Button plain style={{padding: 6, borderRadius: 3}}  onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
				</Box>
			</Box>
			<Box flex>
				{isList ? (
					<List 
						primaryKey="name"
						data={locations}>
						{(datum) => (
							<Text>{datum?.name}</Text>
						)}
					</List>
				): (
					<LocationMap 
						markers={locations?.reduce((prev, curr) => prev.concat(curr.locations), []).map((x) => ({lat: x.lat || '0', lng: x.lng || '0'}))  || []} />
				)}
			</Box>

		</Box>
	)
}