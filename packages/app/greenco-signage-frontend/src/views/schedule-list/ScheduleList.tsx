import React, { useState } from 'react';
import { Box, List, Text, Button } from 'grommet';
import { useMutation, useQuery } from '@greenco/signage-api';
import { Add, MoreVertical } from 'grommet-icons';
import { CreateScheduleModal } from '../../modals/create-schedule';
import { useNavigate } from 'react-router-dom'
export interface ScheduleListProps {

}

export const ScheduleList : React.FC<ScheduleListProps> = (props) => {
	const navigate = useNavigate()

	const [ selected, setSelected ] = useState<any | null>(null)
	const [ modalOpen, setModalOpen ] = React.useState(false);

	const query = useQuery()

	const schedules = query.schedules()

	const [ createSchedule, createInfo ] = useMutation((mutation, args: {name: string}) => {
		const item = mutation.updateHiveOrganisations({
			update: {
				schedules: [{
					create: [{
						node: {
							name: args.name,
						}
					}]
				}]
			}
		})
		// const item = mutation.createSchedules({
		// 	input: [{
		// 		name: args.name,
		// 	}]
		// })

		return {
			item: {
				...item.hiveOrganisations?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.schedules()]
	})

	const [ updateSchedule ] = useMutation((mutation, args: {id: string, name: string}) => {
		const item = mutation.updateHiveOrganisations({
			update: {
				schedules: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							name: args.name
						}
					}
				}]
			}
		})
		// const item = mutation.createSchedules({
		// 	input: [{
		// 		name: args.name,
		// 	}]
		// })

		return {
			item: {
				...item.hiveOrganisations?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.schedules()]
	})

	const [ deleteSchedule ] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateHiveOrganisations({
			update: {
				schedules: [{
					delete: [{
						where: {node: {id: args.id}}
					}]
				}]
			}
		})
		// const item = mutation.createSchedules({
		// 	input: [{
		// 		name: args.name,
		// 	}]
		// })

		return {
			item: {
				...item.hiveOrganisations?.[0]
			}
		}
	}, {
		awaitRefetchQueries: true,
		refetchQueries: [query.schedules()]
	})

	return (
		<Box 
			round="xsmall"
			elevation="small"
			overflow="hidden"
			background="light-1" 
			flex>
			<CreateScheduleModal 
				selected={selected}
				onSubmit={(schedule: any) => {
					if(schedule.id){
						createSchedule({args: {name: schedule.name}}).then(() => {
							setModalOpen(false)
						})
					}else{
						updateSchedule({args: {id: selected.id, name: schedule.name}}).then(() => {
							setModalOpen(false)
							setSelected(null)
						})
					}
				}}
				onDelete={() => {
					deleteSchedule({args: {id: selected.id}}).then(() => {
						setModalOpen(false)
						setSelected(null)
					})
				}}
				onClose={() => {
					setModalOpen(false)
					setSelected(null)
				}}
				open={modalOpen} />
			<Box 
				pad="xsmall"
				align="center"
				justify="between"
				background="accent-2"
				direction="row">
				<Text>Schedules</Text>
				<Button	
					style={{padding: 6, borderRadius: 3}}
					onClick={() => setModalOpen(true)}
					plain
					icon={<Add size="small" />}
					hoverIndicator />
			</Box>
			<Box flex overflow={"auto"}>
				<List
					primaryKey="name"
					data={schedules}>
					{(datum) => (
						<Box 
							onClick={() => navigate(`${datum.id}`)}
							direction='row' align='center' justify='between'>
							<Text>{datum.name}</Text>
							<Button 
								onClick={(e) => {
									e.stopPropagation()
									e.preventDefault()
									setModalOpen(true)
									setSelected(datum)

								}}
								hoverIndicator 
								plain 
								style={{padding: 6, borderRadius: 3}} 
								icon={<MoreVertical size="small" />} />
						</Box>
					)}
				</List>
			</Box>
			
		</Box>
	)
}