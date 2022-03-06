import React, { useState } from 'react';
import { Box, Button, Select, Text } from 'grommet';
import { client, useMutation, useQuery } from '@greenco/signage-api';
import { Analytics, Scorecard, Monitor, Map, SchedulePlay } from 'grommet-icons';
import { Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import { ScheduleLocations } from './views/ScheduleLocations';
import { ScheduleCampaigns } from './views/ScheduleCampaigns';
import { ScheduleReports } from './views/ScheduleReports';
import { ScheduleSingleProvider } from './context';
import { useQuery as useApolloQuery, useApolloClient, gql } from '@apollo/client'
import { ScheduleTiers } from './views/ScheduleTiers';
import { useParams, useNavigate } from 'react-router-dom'
import { ScheduleViews } from './views/ScheduleViews';
export const ScheduleSingle : React.FC<{}> = (props) => {
	const query = useQuery()
	const client = useApolloClient()

	const [ activeView, changeActiveView ] = useState<string | null>(null);


	const resolvedPath = useResolvedPath(`:id`)
	const match = useMatch(resolvedPath.pathname) || {params: {id: ''}}
 
	console.log(match, resolvedPath.pathname)

	const navigate = useNavigate()
	const { id } = useParams();

	const { data } = useApolloQuery(gql`
		query Q ($id: ID){
			greenScreenTemplates {
				id
				name

				slots {
					id
					name
				}
			}

			schedules(where: {id: $id}) {
				id
				name

				template {
					id
					name

					slots {
						id
						name
					}
				}

				locations {
					id
					name

					locations {
						id
						name
						lat
						lng
					}


				}

				slots {
					id
					slot {
						id
						name
					}
					campaign {
						id
						name
					}
					tier {
						id
						name
						slots
					}
					startDate
					endDate
				}

				tiers {
					id
					name
					percent
					slots
					color

					slotsFilled {
						slot {
							id
						}
						filled
					}
				}

			
			}
		}
	`, {
		variables: {
			id
		}
	})

	const refresh = () => {
		client.refetchQueries({include: ['Q']})
	}

	const schedule = data?.schedules?.[0]

	const templates = data?.greenScreenTemplates || []

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

	const [updateScheduleTemplate] = useMutation((mutation, args: {template: string}) => {
		const item = mutation.updateSchedules({
			where: {id: id},
			update: {
				template: {
					connect: {where: {node: {id: args.template}}},
					disconnect: {where: {node: {id: args.template}}}
				}
			}
		})
		return {
			item: {
				...item.schedules?.[0]
			}
		}
	})

	return (
		<ScheduleSingleProvider value={{
			activeView,
			changeActiveView,
			scheduleId: id,
			locations: schedule?.locations,
			screens: schedule?.screens,
			views: schedule?.template?.slots,
			campaigns: schedule?.slots.map((slot) => {
					return {
						...slot,
						dates: [slot.startDate, slot.endDate],
						tier: schedule?.tiers.find((a) => a.id == slot.tier.id)
					}
			}),
			tiers: schedule?.tiers,
			refresh
		}}>
		<Box 
			overflow="hidden"
			round="xsmall"
			flex 
			elevation="small" 
			background="neutral-1">
			<Box background="accent-2" pad="xsmall" align="center" justify="between" direction="row">
				<Text>{schedule?.name}</Text>

				<Select
					labelKey={"name"}
					valueKey={{key: 'id', reduce: true}}
					placeholder="Select Template"
					plain
					size="small"
					value={schedule?.template?.id}
					onChange={({value}) => {
						updateScheduleTemplate({
							args: {
								template: value.id
							}
						}).then(() => {
							refresh?.()
						})
					}}
					options={templates}
					/>
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