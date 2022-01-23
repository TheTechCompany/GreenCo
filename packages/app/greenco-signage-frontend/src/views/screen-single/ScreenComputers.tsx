import { useMutation, useQuery } from '@greenco/signage-api';
import { FormPreviousLink, Upgrade } from 'grommet-icons';
import { Box, Text, Button, List, Select } from 'grommet';
import React, {useContext} from 'react';
import { ScreenSingleContext } from './context';
import { Routes, Route, useParams, Navigate, useNavigate, Outlet } from 'react-router-dom'
import { ColorDot } from '@hexhive/ui';

export const ScreenComputers = () => {

	const { id, slots } = useContext(ScreenSingleContext)

	const query = useQuery()

	const navigate = useNavigate()

	return (
		<Box flex background="neutral-1">
			<Routes>
				<Route path={''} element={<Outlet />} >
					<Route path={''} element={<ComputerList />} />
					<Route path={':id'} element={<DisplayComputer />} />
				
				</Route> 
			</Routes>
		</Box>
	)
}

export const ComputerList = (props) => {
	const { id, slots } = useContext(ScreenSingleContext)

	const navigate = useNavigate()

	return <List onClickItem={(ev) => navigate(ev.item.id)} data={slots} >
			{(item) => <Box direction='row' align='center'>
				<ColorDot 
                    size={7}
                    color={item?.online ? 'green' : "red"}/>
				<Text>{item.hostname}</Text>
			</Box> }
		</List>
}

export const DisplayComputer = () => {
	const { id } = useParams()
	const { slots, screen, refresh } = useContext(ScreenSingleContext)
	const navigate = useNavigate()

	const slot = slots?.find((a) => a.id == id) || {};

	const [ updateClient ] = useMutation((mutation, args: {version?: string}) => {
		if(!id) return;

		const item = mutation.updateSlotClient({id: id, version: args.version})
		return {
			item
		}
	})

	const [ updateSlotTemplate ] = useMutation((mutation, args: {template: string}) => {
		if(!screen?.id) return;
		const item = mutation.updateGreenScreens({
			where: {id: screen?.id},
			update: {
				slots: [{
					where: {node: {id: id}},
					update: {
						node: {
							templateSlot: {
								connect: {
									where: {node: {id: args.template}}
								},
								disconnect: {
									where: {node: {id_NOT: args.template}}
								}
							}
						}
					}
				}]
			}
		})	
		return {
			item: {
				...item.greenScreens?.[0]
			}
		}
	})

	return (
		<Box flex>
			<Box 
			 	align='center'
				justify='between'
				background={'accent-1'}
			 	direction='row'
				elevation='medium'>
					<Box direction='row' align='center'>
						<Button
							onClick={() => navigate('../')}
							plain
							style={{padding: 6, borderRadius: 3}}
							hoverIndicator
							icon={<FormPreviousLink />} />
						<Text>{slot?.hostname}</Text>
					</Box>

					<Box direction='row' align='center'>
						<Select
							options={screen?.template?.slots || []}
							labelKey={"name"}
							plain
							onChange={({value}) => updateSlotTemplate({args: {template: value}}).then(() => {
								refresh?.()
							})}
							valueKey={{key: 'id', reduce: true}}
							value={slot?.templateSlot?.id}
							size="small" />
						<Button 
							onClick={() => updateClient({args: {version: 'latest'}})}
							hoverIndicator
							plain 
							style={{padding: 6, borderRadius: 3}} 
							icon={<Upgrade />} />
					</Box>
			</Box>

			<Box background="light-1"  direction='row' gap="xsmall" flex pad="xsmall">
				<Box background={"neutral-1"} pad="small" flex elevation='small' round='small'>
					<Text>Configuration</Text>
				</Box>
				<Box gap="xsmall">
					<Box round="small" background='#627df6' elevation='small' gap="xsmall" pad="small">
						<Text color="white">OS: {slot?.os}</Text>
						<Text color="white">IP: {slot?.ip}</Text>
						<Text color="white">Agent Version: {slot?.agentVersion}</Text>
						<Text color="white">CPU Cores: {slot?.cpus}</Text>
						<Text color="white">Memory: {(slot?.memory / 1024 / 1024 / 1024).toFixed(2)}GB</Text>
						<Text color="white">Memory Used: {Math.round((1 - (slot?.memoryUsed || 1)) * 100)}%</Text>
					</Box>
					<Box round="small" flex background='#627df6'>

					</Box>
				</Box>
			</Box>
		</Box>
	)
}