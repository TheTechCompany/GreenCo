import React, { useMemo } from 'react';
import { Box, Text, List } from 'grommet';
import { Monitor, Analytics } from 'grommet-icons'
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { Route, Routes, useParams, useNavigate, useResolvedPath, useMatch } from 'react-router-dom';
import { LocationAnalytics } from './LocationAnalytics';
// import { ClusterSchedule } from './ClusterSchedule';
import { ClusterScreens } from './LocationScreens';
import { ClusterSingleProvider } from './context';
import moment from 'moment';

export const LocationSingle = (props) => {

	// const query = useQuery()

	const resolvedPath = useResolvedPath(`:id`)
	const match = useMatch(resolvedPath.pathname)

	const navigate = useNavigate()
	const { id } = useParams()

	const client = useApolloClient()

	const { data } = useQuery(gql`
		query Q ($id: ID){
			locationGroups(where: {id: $id}){
				id
				name
			}

			locations(where: {group: {id: $id}}){
				id
				name
				lat
				lng
			

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

/*
	cameraAnalytics {
					timestamp
					results {
						name
						confidence
					}
				} 	
*/

	const group = data?.locationGroups?.[0] || {} // query.locationGroups({where: {id: id}})?.[0]

	const locations = data?.locations || [] //({where: {group: {id: id}}})

	const greenScreens = data?.greenScreens || [] //query.greenScreens()?.map((x) => ({...x}))

	const analytics =locations?.[0]?.cameraAnalytics;

	console.log({analytics})

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

	const [keys, points] = useMemo(() => {
		const keys = [...new Set(analytics?.map(a => {
			return [...new Set<string>(a.results.map((x) => x.name?.replace(/ /g, '-')))]
		}).reduce((prev, curr) => prev.concat(curr), []).filter((a) => a != undefined))];

		const points = analytics?.map(({timestamp, results}) => {
			let resultKeys : string[] = [...new Set<string>(results.map((x: any) => x.name?.replace(/ /g, '-')) || [])]

			let returnObject : any = {};

			resultKeys.forEach((key: string) => {
				returnObject[key] = results.filter((x) => x.name?.replace(/ /g, '-') === key).length
			})

			return {
				timestamp: moment(new Date(timestamp).getTime()).format('DD/MM'),
				...returnObject
			}
		})
		return [keys, points]
	}, [analytics])
	
	return (
		<ClusterSingleProvider value={{
			id: id,
			locations,
			analytics: {keys, points},
			refresh: () => client.refetchQueries({include: ["Q"]}),
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
							{/* <Route path={''} element={<ClusterScreens />} /> */}
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