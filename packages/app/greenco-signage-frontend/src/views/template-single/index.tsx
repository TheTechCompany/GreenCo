import { Box, Button, Text } from 'grommet';
import { Action, CloudComputer } from 'grommet-icons';
import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { TemplateSlots } from './views/TemplateSlots';
import { TemplatePlugins } from './views/TemplatePlugins';
import { TemplateSingleProvider } from './context';
import { TemplateSlotSingle } from './views/TemplateSlotSingle';
import { gql, useApolloClient, useQuery } from '@apollo/client'

export const TemplateSingle = () => {

	const { id } = useParams()
	

	const client = useApolloClient()

	const navigate = useNavigate();
	const menu = [
		{
			route: '',
			icon: <CloudComputer />,
			label: "Slots"
		},
		{
			route: 'plugins',
			icon: <Action />,
			label: "Plugins"
		}
	]

	const { data } = useQuery(gql`
		query TemplateSingle($templateID: ID!) {

			greenScreenTemplates(where: {id: $templateID}) {
				slots {
					id
					name

					plugins {
						id
						name
						type
	
						source
						sourceType
						sourceVersion
					}
				}

				plugins {
					id
					name
					type

					source
					sourceType
					sourceVersion
				}
			}

		}
	`, {
		variables: {
			templateID: id
		}
	})

	const slots = data?.greenScreenTemplates?.[0]?.slots || [] //query.templateSlots({where: {template: {id: id}}})?.map((x) => ({...x}))
	const plugins = data?.greenScreenTemplates?.[0]?.plugins || [] //query.plugins({where: {template: {id: id}}})?.map((x) => ({...x}))

	const refresh = () => {
		client.refetchQueries({include: ['TemplateSingle']})
	}
	return (

		<TemplateSingleProvider value={{
			slots: slots || [],
			plugins,
			refresh,
			templateId: id
		}}>
		<Box round="xsmall" overflow="hidden" flex background={"neutral-1"}>
			<Box direction='row' pad="xsmall" background={"accent-2"}>
				<Text>Template Name</Text>
			</Box>
			<Box flex direction='row'>
				<Box elevation='small'>
					{menu.map((menu_item) => (
						<Button 
							onClick={() => navigate(`${menu_item.route}`)}
							hoverIndicator 
							icon={menu_item.icon} />
					))}
				</Box>
				<Box flex>
					<Routes>
						<Route path={''} element={<TemplateSlots/>} />
						<Route path={'plugins'} element={<TemplatePlugins/>} />
						<Route path={':id'} element={<TemplateSlotSingle />} />
					</Routes>
				</Box>
			</Box>
		</Box>
		</TemplateSingleProvider>
	)
}