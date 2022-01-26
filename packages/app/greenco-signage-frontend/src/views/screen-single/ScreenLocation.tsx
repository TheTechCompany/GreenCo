import { Box, Text } from 'grommet';
import React, { useContext } from 'react';
import { LocationMap } from '../../components/location-map';
import { ScreenSingleContext } from './context';

export const ScreenLocation = (props) => {

	const { screen } = useContext(ScreenSingleContext)

	return (
		<Box pad="xsmall" flex >
			<Text>{screen?.location?.name}</Text>
			<Text>{screen?.location?.lat}</Text>
			<Text>{screen?.location?.lng}</Text>


			<LocationMap markers={( screen?.location.lat && screen?.location.lng )?[
				{
					lat: screen?.location.lat,
					lng: screen?.location.lng
				}
			]:[]
		}/>
		</Box>
	)
}