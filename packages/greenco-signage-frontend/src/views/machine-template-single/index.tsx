import { client, useQuery } from '@greenco/signage-api';
import { Box, Text, Button } from 'grommet';
import React from 'react';
import { ServerCluster, Monitor, Action, Plug } from 'grommet-icons';
import { TemplateScreenList } from './views/TemplateScreen';
import { TemplateComputerList } from './views/TemplateComputer';
import { Route, Routes, useParams } from 'react-router-dom';
import { TemplatePeripheralList } from './views/TemplatePeripheral';
import { TemplatePluginList } from './views/TemplatePlugin';
import { MachineTemplateSingleProvider } from './context';
import { useQuery as useApolloQuery, gql, useApolloClient } from '@apollo/client';

export const MachineTemplateSingle = (props) => {

	const client = useApolloClient()
	const { id } = useParams()

	const { data } = useApolloQuery(gql`
		query Q ($id: ID){
			machineTemplates(where: {id: $id}){
				id
				name

				computers {
					id
					name
				}
				displays {
					id
					name
					width
					height
					private
				}
				peripherals {
					id
					name
					type
					private
				}
			}
		}
	`, {
		variables: {
			id: id
		}
	})

	const refresh = () => {
		client.refetchQueries({include: ['Q']})
	}

	const machineTemplate = data?.machineTemplates?.[0]

	const menu = [
		{
			route: `screens`,
			icon: <Monitor />,
		},
		{
			route: `computers`,
			icon: <ServerCluster />,
		},
		{
			route: `peripherals`,
			icon: <Action />
		},
		{
			route: `plugins`,
			icon: <Plug />
		}
	]
	return (
		<MachineTemplateSingleProvider
			value={{
				templateId: id,
				computers: machineTemplate?.computers,
				screens: machineTemplate?.displays,
				peripherals: machineTemplate?.peripherals,
				refresh: refresh
			}}
			>
		<Box flex background="neutral-1" round="xsmall" overflow="hidden">
			<Box background="accent-2" pad="xsmall" align="center" justify="between" direction="row">
				<Text>{machineTemplate?.name}</Text>
			</Box>
			<Box direction="row" flex>
				<Box elevation="small" background="accent-1">
					{menu.map((item) => (
						<Button onClick={() => props.history.push(`${props.match.url}/${item.route}`)} hoverIndicator icon={item.icon} />
					))}
				</Box>
				<Box flex>
					<Routes>
						<Route path={`${props.match.url}/screens`} element={TemplateScreenList} />
						<Route path={`${props.match.url}/computers`} element={TemplateComputerList} />
						<Route path={`${props.match.url}/peripherals`} element={TemplatePeripheralList} />
						<Route path={`${props.match.url}/plugins`} element={TemplatePluginList} />
					</Routes>
				</Box>
			</Box>
		</Box>
		</MachineTemplateSingleProvider>
	)
}