import { useMutation, useQuery } from '@greenco/signage-api';
import { FormPreviousLink, Upgrade } from 'grommet-icons';
import { Box, Text, Button, List } from 'grommet';
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
	const { slots } = useContext(ScreenSingleContext)
	const navigate = useNavigate()

	const slot = slots?.find((a) => a.id == id) || {};

	const [ updateClient ] = useMutation((mutation, args: {version?: string}) => {
		if(!id) return;

		const item = mutation.updateSlotClient({id: id, version: args.version})
		return {
			item
		}
	})

	return (
		<Box flex>
			<Box 
			 	align='center'
				 justify='between'
			 	direction='row'
				 elevation='small'>
					<Box direction='row' align='center'>
						<Button
							onClick={() => navigate('../')}
							plain
							style={{padding: 6, borderRadius: 3}}
							hoverIndicator
							icon={<FormPreviousLink />} />
						<Text>{slot?.hostname}</Text>
					</Box>
					<Button 
						onClick={() => updateClient({args: {version: 'latest'}})}
						hoverIndicator
						plain 
						style={{padding: 6, borderRadius: 3}} 
						icon={<Upgrade />} />
			</Box>

			<Box flex pad="small">
				<Text>OS: {slot?.os}</Text>
				<Text>IP: {slot?.ip}</Text>
				<Text>CPU Cores: {slot?.cpus}</Text>
				<Text>Memory: {(slot?.memory / 1024 / 1024 / 1024).toFixed(2)}GB</Text>
				<Text>Memory Used: {Math.round((1 - (slot?.memoryUsed || 1)) * 100)}%</Text>

			</Box>
		</Box>
	)
}