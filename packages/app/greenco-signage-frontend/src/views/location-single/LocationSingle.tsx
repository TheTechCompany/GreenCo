import React from 'react';
import { Box, Text, List } from 'grommet';
import { useQuery } from '@greenco/signage-api';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { LocationAnalytics } from './LocationAnalytics';
// import { ClusterSchedule } from './ClusterSchedule';
import { ClusterMap } from './ClusterMap';
import { ClusterSingleProvider } from './context';
import { ClusterTiers } from './ClusterTiers';

export const LocationSingle = (props) => {

	const query = useQuery()

	const navigate = useNavigate()
	const { id } = useParams()
	
	const location = query.locations({where: {id: id}})?.[0]

	return (
		<ClusterSingleProvider value={{id: id, analytics: location.cameraAnalytics || [] }}>
		<Box overflow="hidden" flex elevation="small" background="neutral-1" round="xsmall">
			<Box background="accent-2" direction="row" pad="xsmall">
				<Text>{location.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box border={{side: 'right', size: 'small'}}>
					<List 
						onClickItem={(ev) => navigate(`${ev.item.toLowerCase()}`)}
						border={false} 
						data={["Analytics"]} />
				</Box>
				<Box flex pad="xsmall">
					<Routes>
						<Route path={`analytics`} element={<LocationAnalytics/>} />
						{/* <Route path={`${props.match.url}/schedule`} component={ClusterSchedule} /> */}
						{/* <Route path={`${props.match.url}/tiers`} component={ClusterTiers} />
						<Route path={`${props.match.url}/map`} component={ClusterMap} /> */}
					</Routes>
				</Box>
			</Box>
		</Box>
		</ClusterSingleProvider>
	)
}