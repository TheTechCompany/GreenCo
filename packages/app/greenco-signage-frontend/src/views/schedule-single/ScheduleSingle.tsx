import React from 'react';
import { Box, Button, Text } from 'grommet';
import { client, useQuery } from '@greenco/signage-api';
import { Analytics, Scorecard, Monitor, Map, SchedulePlay } from 'grommet-icons';
import { Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import { ScheduleLocations } from './views/ScheduleLocations';
import { ScheduleCampaigns } from './views/ScheduleCampaigns';
import { ScheduleReports } from './views/ScheduleReports';
import { ScheduleSingleProvider } from './context';
import { useQuery as useApolloQuery, useApolloClient, gql } from '@apollo/client'
import { ScheduleTiers } from './views/ScheduleTiers';
import { useParams, useNavigate } from 'react-router-dom'
export const ScheduleSingle : React.FC<{}> = (props) => {
	const query = useQuery()
	const client = useApolloClient()

	const resolvedPath = useResolvedPath(`:id`)
	const match = useMatch(resolvedPath.pathname) || {params: {id: ''}}
 
	console.log(match, resolvedPath.pathname)

	const navigate = useNavigate()
	const { id } = useParams();

	const { data } = useApolloQuery(gql`
		query Q ($id: ID){
			schedules(where: {id: $id}) {
				id
				name

				
				locations {
					id
					name
				}

				campaigns {
					id
					name
				}

				tiers {
					id
					name
					percent
					slots
				}

				campaignsConnection {
					edges {
						tier
						startDate
						endDate
						screen
						node {
							id
							name
						}
					}
				}

			
			}
		}
	`)

	const refresh = () => {
		client.refetchQueries({include: ['Q']})
	}

	const schedule = data?.schedules?.[0]

	const menu = [ 

		{
			route: '',
			icon: <SchedulePlay />,
			label: 'Campaigns'
		},
		{
			route: `locations`,
			icon: <Map />,
			label: 'Locations'
		},
		{
			route: 'tiers',
			icon: <Scorecard />
		},
		{
			route: 'reports',
			icon: <Analytics />,
			label: 'Reports'
		}
	]
	return (
		<ScheduleSingleProvider value={{
			scheduleId: id,
			locations: schedule?.locations,
			screens: schedule?.screens,
			campaigns: schedule?.campaignsConnection?.edges?.map((edge: any) => ({
				...edge.node, 
				screen: edge.screen,
				tier: schedule?.tiers.find((a: any) => a.id == edge.tier), 
				dates: [edge.startDate, edge.endDate]
			})),
			tiers: schedule?.tiers,
			refresh
		}}>
		<Box 
			overflow="hidden"
			round="xsmall"
			flex 
			elevation="small" 
			background="neutral-1">
			<Box background="accent-2" pad="xsmall" direction="row">
				<Text>{schedule?.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box elevation="small" background="accent-1">
					{menu.map((menu_item) => (
						<Box direction="row">
							<Button 
								active={match?.params.id == menu_item.route}
								onClick={() => navigate(`${menu_item.route}`)} 
								hoverIndicator 
								icon={menu_item.icon} />
						</Box>
					))}
				</Box>
				<Box flex>
					<Routes>
						<Route path={``} element={<ScheduleCampaigns/>} />
						<Route path={`locations`} element={<ScheduleLocations/>} />
						<Route path={`campaigns`} element={<ScheduleCampaigns/>} />
						<Route path={`tiers`} element={<ScheduleTiers/>} />
						<Route path={`reports`} element={<ScheduleReports/>} />
					</Routes>
				</Box>
			</Box>
		</Box>
		</ScheduleSingleProvider>
	)
}