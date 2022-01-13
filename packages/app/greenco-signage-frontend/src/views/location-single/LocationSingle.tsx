import React from 'react';
import { Box, Text, List } from 'grommet';
import { Monitor, Analytics } from 'grommet-icons'
import { gql, useQuery } from '@apollo/client';
import { Route, Routes, useParams, useNavigate, useResolvedPath, useMatch } from 'react-router-dom';
import { LocationAnalytics } from './LocationAnalytics';
// import { ClusterSchedule } from './ClusterSchedule';
import { ClusterScreens } from './ClusterScreens';
import { ClusterSingleProvider } from './context';
import { ClusterTiers } from './ClusterTiers';

export const LocationSingle = (props) => {

	// const query = useQuery()

	const resolvedPath = useResolvedPath(`:id`)
	const match = useMatch(resolvedPath.pathname)

	const navigate = useNavigate()
	const { id } = useParams()

	const { data } = useQuery(gql`
		query Q ($id: ID){
			locationGroups(where: {id: $id}){
				id
				name
			}

			locations(where: {group: {id: $id}}){
				id
				name
				
				screen {
					id
					name
				}
			}

			greenScreens{
				id
				name
			}
		}
	`, {
		variables: {
			id
		}
	})
	const group = data?.locationGroups?.[0] || {} // query.locationGroups({where: {id: id}})?.[0]

	const locations = data?.locations || [] //({where: {group: {id: id}}})

	const greenScreens = data?.greenScreens || [] //query.greenScreens()?.map((x) => ({...x}))

	const menu = [
		{
			label: "Screens",
			icon: <Monitor />
		},
		{
			label: "Analytics",
			icon: <Analytics />
		}
	]

	return (
		<ClusterSingleProvider value={{
			id: id,
			locations,
			screens: greenScreens,
		}}>
			<Box overflow="hidden" flex elevation="small" background="neutral-1" round="xsmall">
				<Box background="accent-2" direction="row" pad="xsmall">
					<Text>{group.name}</Text>
				</Box>
				<Box direction="row" flex>
					<Box  elevation='small'>
						<List 
							pad={'none'}
							border={false} 
							data={menu}>
							{(datum) => (
								<Box
									hoverIndicator
									focusIndicator={false}
									onClick={() => navigate(`${datum.label.toLowerCase()}`)}
									pad="small"
									background={match?.params.id == datum.label.toLowerCase() ? 'neutral-2' : ''}>
									{datum.icon}
								</Box>
							)}
						</List>
					</Box>
					<Box flex pad="xsmall">
						<Routes>
							<Route path={`analytics`} element={<LocationAnalytics/>} />
							<Route path={`screens`} element={<ClusterScreens />} />
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