import { useMutation, useQuery } from '@greenco/signage-api';
import { Box, Button, List, Select, Text } from 'grommet'
import { CloudUpload, FormPreviousLink } from 'grommet-icons'
import React, {useState} from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { ProvisionMachineModal } from '../../modals/provision-machine';
import { ScreenSingleProvider } from './context';
import { ScreenLocation } from './ScreenLocation';
import { ScreenComputers } from './ScreenComputers';
import { ScreenDisplays } from './ScreenDisplays';
import { gql, useApolloClient, useQuery as useApolloQuery } from '@apollo/client';
import { FormControl } from '@hexhive/ui';

export const ScreenSingle = (props) => {
	const query = useQuery()

	const navigate = useNavigate()
	const { id } = useParams()
	
	const [ modalOpen, openModal ] = useState(false);



	const { data } = useApolloQuery(gql`
		query ScreenSingle ($id: ID!){


			greenScreens(where: {id: $id}){
				id
				name

				online

				networkName
				
				slots {
					id
					hostname
	
					online
	
					os
					ip
					agentVersion
					cpus
					memory
					memoryUsed

					templateSlot {
						id
					}
				}

				template{
					id
					name

					slots {
						id
						name

					}
				}

				location {
					id
					name
					lat
					lng
				}
			}

			greenScreenTemplates {
				id
				name
			}
		}
	`, {
		variables: {
			id
		}
	})

	const machines = data?.greenScreens || []
	const machine = machines?.[0] || {};

	const slots = machine?.slots || [];

	const client = useApolloClient()

	const refresh = () => {
		client.refetchQueries({include: ['ScreenSingle']})
	}

	const templates = data?.greenScreenTemplates || []

	const [ updateScreenTemplate ] = useMutation((mutation, args: {template: string}) => {
		const item = mutation.updateGreenScreens({
			where: {id: id},
			update: {
				template: {
					connect: {where: {node: {id: args.template}}},
					disconnect: {where: {node: {id_NOT: args.template}}}
				}
			}
		})
		return {
			item: {
				...item.greenScreens?.[0]
			}
		}
	})

	// const [ provisionMachine, provisionInfo ] = useMutation((mutation, args: {networkName: string}) => {
	// 	const item = mutation.updateGreenScreens({
	// 		where: {id: id},
	// 		update: {
	// 			provisioned: true,
	// 			networkName: args.networkName,
	// 		}
	// 	})
	// 	return {
	// 		item: {
	// 			...item.machines?.[0]
	// 		}
	// 	}
	// }, {
	// 	awaitRefetchQueries: true,
	// 	refetchQueries: [query.machines({where: {id: id}})],
	// })

	return (
		<ScreenSingleProvider value={{
			id: id,
			screen: data?.greenScreens?.[0],
			slots,
			refresh
		}}>
		<ProvisionMachineModal
			onSubmit={(provision) => {
				// provisionMachine({
				// 	args: {
				// 		networkName: provision.code,
				// 	}
				// }).then(() => {
				// 	openModal(false)
				// })
			}}
			onClose={() => openModal(false)}
			open={modalOpen} />
		<Box 
			round="xsmall"
			flex 
			overflow="hidden"
			background="neutral-1" 
			elevation="small">
			
			<Box 
				align="center"
				justify="between"
				pad="xsmall" 
				background="accent-2" 
				direction="row">
					<Box direction='row' align='center' gap="xsmall">
						<Button 
							hoverIndicator
							onClick={() => navigate('../')}
							plain 
							style={{padding: 6, borderRadius: 3}} 
							icon={<FormPreviousLink />} />
						<Box>
							<Text>{machine?.name}</Text>
							<Text size="xsmall">{machine?.networkName}.hexhive.io</Text>
						</Box>
					</Box>

					<Box>
						{/* <Text size="small">Template</Text> */}
						<Select
							onChange={({value}) => {
								updateScreenTemplate({
									args: {
										template: value.id
									}
								}).then(() => {
									refresh?.()
								})
							}}
							size='small'
							plain 
							options={templates}
							labelKey='name'
							valueKey={{key: 'id', reduce: true}}
							value={machine.template?.id}
							placeholder='Select template...' />
					</Box>
			</Box>

			<Box flex direction="row">
				<Box elevation="small" border={{side: 'right', size: 'small'}}>
					<List 
						border={false}
						onClickItem={(ev) => navigate(`${ev.item.toLowerCase()}`)}
						data={["Computers", "Screen", "Location"]} />
				</Box>
				<Box flex>
					<Routes>
						<Route path={`computers/*`} element={<ScreenComputers/>} />
						<Route path={`screen`} element={<ScreenDisplays/>} />
						<Route path={`location`} element={<ScreenLocation />} />
					</Routes>
				</Box>
			</Box>
		</Box>
		</ScreenSingleProvider>
	)
}