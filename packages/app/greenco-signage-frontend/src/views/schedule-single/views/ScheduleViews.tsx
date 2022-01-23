import { CreateScheduleViewModal } from '../../../modals/create-schedule-view';
import { Box, Text, List, Button } from 'grommet';
import { Add, FormPreviousLink} from 'grommet-icons';
import React, { useContext, useState } from 'react';
import { ScheduleSingleContext } from '../context';
import { refetch, useMutation } from '@greenco/signage-api';
import { Outlet, useNavigate, Routes, Route, useParams } from 'react-router-dom';
import { CreateTagModal } from '../../../modals/create-tag';

export const ScheduleViews = () => {



	return (
		<Routes>
			<Route path={''} element={<Outlet />}>
				<Route path={''} element={<ScheduleViewList />} />
				<Route path={':id'} element={<ScheduleView />} />
			</Route>
		</Routes>
	)
}

export const ScheduleView = () => {

	const [ modalOpen, openModal ] = useState(false);

	const { id } = useParams()
	const { views } = useContext(ScheduleSingleContext);
	const navigate = useNavigate()


	const view = views?.find((a) => a.id == id)

	const [ addTag ] = useMutation((mutation, args: {tag: string}) => {
		const item = mutation.updateScheduleViews({
			where: {id: id},
			update: {
				tags: [...(view?.tags || []), args.tag]
			}
		})

		return {
			item: {
				...item.scheduleViews?.[0]
			}
		}
	})

	const [ updateTag ] = useMutation((mutation) => {
		const item = mutation.updateScheduleViews({

		})
	})
	
	const [ removeTag ] = useMutation((mutation) => {

	})

	return (
		<Box background={'light-1'} flex>
			<CreateTagModal 
				open={modalOpen}
				onClose={() => openModal(false)}
				/>
			<Box
				align='center'
				background={'accent-1'}
				gap="xsmall"
				pad={{left: 'xsmall'}}
				direction='row'>
				<Button 
					hoverIndicator 
					style={{padding: 6, borderRadius: 3}} 
					plain 
					icon={<FormPreviousLink />} 
					onClick={() => navigate('../')} />
				<Text>{view?.name}</Text>
			</Box>
			<Box
				background={'neutral-1'}
				elevation='small' round="small" flex margin="xsmall">
				<Box direction="row" pad="xsmall" align="center" justify='between'>
					<Text>Tags</Text>
					<Button 
						onClick={() => openModal(true)}
						plain 
						style={{padding: 6, borderRadius: 3}} 
						hoverIndicator 
						icon={<Add size="small" />} />
				</Box>

				<List data={view?.tags || []} />
			</Box>
		</Box>
	)
}

export const ScheduleViewList = () => {
	const [ modalOpen, openModal ] = useState(false)

	const navigate = useNavigate()
	const { scheduleId, views, refresh } = useContext(ScheduleSingleContext)

	const [ createScheduleView ] = useMutation((mutation, args: {name: string}) => {
		// const item = mutation.updateSchedules({
		// 	where: {id: scheduleId},
		// 	update: {
		// 		views: [{
		// 			create: [{
		// 				node: {
		// 					name: args.name
		// 				}
		// 			}]
		// 		}]
		// 	}
		// })
		// return {
		// 	item: {
		// 		...item.schedules?.[0]
		// 	}
		// }
	})

	return (
		<Box flex>
			<CreateScheduleViewModal 
				open={modalOpen}
				onClose={() => {
					openModal(false)
				}}
				onSubmit={(view) => {
					if(view.id){

					}else{
						createScheduleView({
							args: {
								name: view.name
							}
						}).then(() => {
							openModal(false)
							refresh?.()
						})
					}
				}}
				/>
			<Box elevation="small" pad="xsmall" justify='between' align='center' direction='row'>
				<Text>Views</Text>
				<Button
					onClick={() => openModal(true)}
					plain 
					hoverIndicator 
					style={{padding: 6, borderRadius: 3}} 
					icon={<Add size="small" />} />
			</Box>
			<Box flex focusIndicator={false}>
				<List 
					onClickItem={({item}: any) => {
						navigate(item.id)
					}}
					data={views} 
					primaryKey={"name"}/>
			</Box>
		</Box>
	)
}