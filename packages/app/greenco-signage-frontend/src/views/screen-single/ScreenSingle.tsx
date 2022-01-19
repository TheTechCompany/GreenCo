import { useMutation, useQuery } from '@greenco/signage-api';
import { Box, Button, List, Text } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import React, {useState} from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { ProvisionMachineModal } from '../../modals/provision-machine';
import { ScreenSingleProvider } from './context';
import { ScreenLocation } from './ScreenLocation';
import { ScreenComputers } from './ScreenComputers';
import { ScreenDisplays } from './ScreenDisplays';
import { gql, useQuery as useApolloQuery } from '@apollo/client';

export const ScreenSingle = (props) => {
	const query = useQuery()

	const navigate = useNavigate()
	const { id } = useParams()
	
	const [ modalOpen, openModal ] = useState(false);

	const machines = query.greenScreens({where: {id: id}})

	const slots = query.screenSlots({where: {screen: {id: id}}})?.map((x) => ({...x}))
	const machine = machines?.[0];

	const { data } = useApolloQuery(gql`
		query ScreenSingle ($id: ID!){
			greenScreens(where: {id: $id}){
				id
				name

				online
				
				location {
					id
					name
				}
			}
		}
	`, {
		variables: {
			id
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
			slots
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
				<Box>
					<Text>{machine.name}</Text>
					<Text size="xsmall">{machine.networkName}.hexhive.io</Text>
				</Box>
				<Box>
				{/* {!machine.provisioned && <Button 
					hoverIndicator
					onClick={() => openModal(true)}
					plain
					style={{padding: 6, borderRadius: 3}}
					icon={<CloudUpload size='small' />} />} */}
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