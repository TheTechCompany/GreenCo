import { Box, Text, Button, List, Select } from 'grommet';
import React, {useState, useContext, useMemo, useEffect} from 'react';
import { Add, Plan, List as ListIcon } from 'grommet-icons';
import { ScheduleCampaignModal } from '../modals/ScheduleCampaign';
import { mutation, useMutation, useQuery } from '@greenco/signage-api';
import { ScheduleSingleContext } from '../context';
import { Timeline } from '@hexhive/ui';
import { useQuery as useApolloQuery, gql} from '@apollo/client'

export const ScheduleCampaigns = () => {

	const [ selected, setSelected ] = useState<{id: string} | null>(null);

	
	// const [ filteredCampaigns, setFilteredCampaigns ] = useState<any[]>()

	const [ modalOpen, openModal ] = useState(false)
	const [ viewMode, changeMode ] = useState(false)

	const { scheduleId, tiers, views, campaigns, refresh, changeActiveView, activeView } = useContext(ScheduleSingleContext)

	const { data } = useApolloQuery(gql`
		query GetCampaigns {
			campaigns {
				id
				name
			}
		}
	`)
	const allCampaigns = data?.campaigns || [];

	const [ scheduleCampaign, scheduleInfo ] = useMutation((mutation, args: {tier: string, campaign: string, dates: string[]}) => {
		if(!scheduleId || !args.campaign) return;
	
		let dateUpdate = {};
		if(args.dates.length == 2){
			dateUpdate = {
				startDate: new Date(args.dates[0]).toISOString(),
				endDate: new Date(args.dates[1]).toISOString()
			}
		}
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				slots: [{
					create: [{
						node: {
							campaign: {connect: {where: {node: {id: args.campaign}}}},
							tier: {connect: {where: {node: {id: args.tier}}}},
							slot: {
								connect: {where: {node: {id: ( activeView || views?.[0]?.id )}}}
							},
							...dateUpdate
						}
					}]
				}]
			}
		})
		const updateRes = mutation.pushScheduleUpdate({schedule: scheduleId})

		return {
			item: {
				...item.schedules?.[0],
				update: updateRes
			}
		}
	})

	const [ updateCampaign ] = useMutation((mutation, args: {
		id: string,
		tier: string,
		campaign: string,
		dates: string[],
		screen: string
	}) => {
		if(!scheduleId || !args.campaign) return;

		let dateUpdate = {};
		if(args.dates.length == 2){
			dateUpdate = {
				startDate: new Date(args.dates[0]).toISOString(),
				endDate: new Date(args.dates[1]).toISOString()
			}
		}
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				slots: [{
					where: {node: {id: args.id}},
					update: {
						node: {
							campaign: {disconnect:{where: {node: {id_NOT: args.campaign}}}, connect: {where: {node: {id: args.campaign}}}},
							tier: {disconnect: {where: {node: {id_NOT: args.tier}}}, connect: {where: {node: {id: args.tier}}}},
							slot: {
								connect: {where: {node: {id: ( activeView || views?.[0]?.id )}}},
								disconnect: {where: {node: {id_NOT: ( activeView || views?.[0]?.id )}}}
							},
							...dateUpdate
						}
					}
				}]
			}
		})

		const updateRes = mutation.pushScheduleUpdate({schedule: scheduleId})

		return {
			item: {
				...item.schedules?.[0],
				update: updateRes
			}
		}
	})


	const [ removeCampaign ] = useMutation((mutation, args: {id: string}) => {
		if(!scheduleId) return;
		const item = mutation.updateSchedules({
			where: {id: scheduleId},
			update: {
				slots: [{
					delete: [{where: {node: {id: args.id}}}]
				}]
			}
		})
		const updateRes = mutation.pushScheduleUpdate({schedule: scheduleId})

		return {
			item: {
				...item.schedules?.[0],
				update: updateRes
			}
		}
	})
	// useEffect(() => {
	// 	console.log(screens)
	// 	if(!activeView && screens?.[0]?.id){
	// 		changeActiveView(screens?.[0]?.id)
	// 	}
	// }, [activeView, JSON.stringify(screens) ])

	// const filteredCampaigns = useMemo()
	// useEffect(() => {
			
	// 		console.log({activeView, screens, campaigns: campaigns?.filter((a) => a.slot?.id == (activeView || screens?.[0]?.id)) || []})
	// 	setFilteredCampaigns(
	// 		campaigns?.filter((a) => a.slot?.id == (activeView || screens?.[0]?.id)) || []
	// 	)
	// }, [campaigns, activeView, screens])

	const filteredCampaigns = campaigns?.filter((a) => a.slot?.id == (activeView || views?.[0]?.id)).filter((a) => a) || []
	console.log({activeView: (activeView || views?.[0]?.id), views})

	const getSelected = () => {
		const found = campaigns?.find((a) => a.id == selected?.id)
		console.log(selected, found)
		return found
	}
	return (
		<Box flex>
			<ScheduleCampaignModal 
				campaigns={allCampaigns}
				tiers={tiers}
				open={modalOpen}
				selected={getSelected()}
				onDelete={() => {
					removeCampaign({args: {id: getSelected()?.id}}).then(() => {
						openModal(false)
						setSelected(null)
						refresh?.()
					})
				}}
				onClose={() => openModal(false)}
				onSubmit={(schedule: any) => {
					if(schedule.id){
						updateCampaign({
							args: {
								id: schedule.id,
								tier: schedule.tier,
								campaign: schedule.campaign,
								dates: schedule.dates,
								screen: schedule.screen
							}
						}).then(() => {
							refresh?.()
							openModal(false)
						})
					}else{
						scheduleCampaign({
							args: {
								tier: schedule.tier,
								campaign: schedule.campaign,
								dates: schedule.dates
							}
						}).then(() => {
							refresh?.()
							openModal(false)
						})
					}
				}} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Box gap="xsmall" direction='row' align='center'>
					<Text weight="bold">Playlist</Text>
					<Box direction='row' align='center'  round="xsmall">
						<Select 
							plain
							size='small'
							labelKey={"name"}
							onChange={({value}) => changeActiveView?.(value)}
							valueKey={{key: 'id', reduce: true}}
							value={activeView || views?.[0]?.id}
							options={views || []} />
					</Box>
		
				</Box>
				<Box direction='row' align='center'>
					<Button onClick={() => changeMode(!viewMode)} hoverIndicator icon={viewMode ? <ListIcon size="small" /> : <Plan size="small" />} />
					<Button onClick={() => openModal(true)} hoverIndicator icon={<Add size="small" />} />
				</Box>
			</Box>
			<Box flex>

				{!viewMode ? (
					<List 
						onClickItem={({item}: any) => {
							setSelected(item)
							openModal(true)
						}}
					data={filteredCampaigns || []} >
						{(datum: any) => (
							<Box direction="row" justify="between" align="center">
								<Text>{datum?.campaign?.name}</Text>
								<Text size='small'>{datum?.tier?.name}</Text>
							</Box>
						)}
					</List>
				) : (
					<Box flex pad="xsmall">
						<Timeline
							onSelectItem={(task) => {
								setSelected(task)
								openModal(true)
								// console.log({task})
							}}
							data={filteredCampaigns?.map((campaign) => ({
								id: campaign?.id,
								name: `${campaign?.campaign?.name} - ${campaign?.tier?.name}`,
								color: tiers?.find((a) => a.id == campaign?.tier?.id)?.color,
								showLabel: campaign?.campaign?.name,
								start: campaign?.dates?.[0],
								end: campaign?.dates?.[1],
							}))}
							/>
					</Box>
				)}
			</Box>
		</Box>
	)
}