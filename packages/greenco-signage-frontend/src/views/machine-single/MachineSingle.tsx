import { useMutation, useQuery } from '@greenco/signage-api';
import { Box, Button, List, Text } from 'grommet'
import { CloudUpload } from 'grommet-icons'
import React, {useState} from 'react';
import { Route, Routes, useParams, useNavigate } from 'react-router-dom'
import { ProvisionMachineModal } from '../../modals/provision-machine';
import { DisplaySingleProvider } from './context';
import { DisplayCluster } from './DisplayCluster';
import { DisplayComputers } from './DisplayComputers';
import { DisplayScreen } from './DisplayScreen';

export const MachineSingle = (props) => {
	const query = useQuery()

	const navigate = useNavigate()
	const { id } = useParams()
	
	const [ modalOpen, openModal ] = useState(false);

	const machines = query.machines({where: {id: id}})

	const machine = machines?.[0];

	const [ provisionMachine, provisionInfo ] = useMutation((mutation, args: {networkName: string}) => {
		const item = mutation.updateMachines({
			where: {id: id},
			update: {
				provisioned: true,
				networkName: args.networkName,
			}
		})
		return {
			item: {
				...item.machines?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.machines({where: {id: id}})],
	})

	return (
		<DisplaySingleProvider value={{
			id: id
		}}>
		<ProvisionMachineModal
			onSubmit={(provision) => {
				provisionMachine({
					args: {
						networkName: provision.code,
					}
				}).then(() => {
					openModal(false)
				})
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
				<Text>{machine.name}</Text>

				<Box>
				{!machine.provisioned && <Button 
					hoverIndicator
					onClick={() => openModal(true)}
					plain
					style={{padding: 6, borderRadius: 3}}
					icon={<CloudUpload size='small' />} />}
				</Box>
			</Box>

			<Box flex direction="row">
				<Box elevation="small" border={{side: 'right', size: 'small'}}>
					<List 
						border={false}
						onClickItem={(ev) => navigate(`${ev.item.toLowerCase()}`)}
						data={["Computers", "Screen", "Cluster"]} />
				</Box>
				<Box flex>
					<Routes>
						<Route path={`computers`} element={<DisplayComputers/>} />
						<Route path={`screen`} element={<DisplayScreen/>} />
						<Route path={`cluster`} element={<DisplayCluster/>} />
					</Routes>
				</Box>
			</Box>
		</Box>
		</DisplaySingleProvider>
	)
}