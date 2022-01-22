import { Box, Text, Button, List, Select } from 'grommet';
import React, {useState, useContext} from 'react';
import { Add, Plan, List as ListIcon } from 'grommet-icons';
import { ScheduleCampaignModal } from '../modals/ScheduleCampaign';
import { mutation, useMutation, useQuery } from '@greenco/signage-api';
import { ScheduleSingleContext } from '../context';
import { Timeline } from '@hexhive/ui';
import { useQuery as useApolloQuery, gql} from '@apollo/client'

export const ScheduleCampaigns = () => {

	const [ selected, setSelected ] = useState<{id: string} | null>(null);

	const [ activeView, changeActiveView ] = useState<string | null>(null);
	
	const [ modalOpen, openModal ] = useState(false)
	const [ viewMode, changeMode ] = useState(false)

	const { scheduleId, tiers, screens, campaigns, refresh } = useContext(ScheduleSingleContext)

	const { data } = useApolloQuery(gql`
		query GetCampaigns {
			campaigns {
				id
				name
			}
		}
	`)
	const allCampaigns = data?.campaigns || [];

	const [ scheduleCampaign, scheduleInfo ] = useMutation((mutation, args: {tier: string, campaign: string, dates: string[], screen: string}) => {
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
							...dateUpdate
						}
					}]
				}]
			}
		})
		return {
			item: {
				...item.schedules?.[0]
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
							...dateUpdate
						}
					}
				}]
			}
		})
		return {
			item: {
				...item.schedules?.[0]
			}
		}
	})

	const getCampaigns = () => {
		return campaigns?.filter((a) => a.screen == activeView)
	}

	const getSelected = () => {
		const found = getCampaigns()?.find((a) => a.id == selected?.id)
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
				onClose={() => openModal(false)}
				onSubmit={(schedule: any) => {
					if(schedule.id){
						updateCampaign({
							args: {
								id: schedule.id,
								tier: schedule.tier,
								campaign: schedule.campaign,
								dates: schedule.dates,
								screen: schedule.screen,
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
								dates: schedule.dates,
								screen: activeView || screens?.[0]?.id
							}
						}).then(() => {
							refresh?.()
							openModal(false)
						})
					}
				}} />
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Box gap="xsmall" direction='row' align='center'>
					<Text weight="bold">Campaigns</Text>
					<Box direction='row' align='center'  round="xsmall">
						<Select 
							plain
							size='small'
							labelKey={"label"}
							onChange={({value}) => changeActiveView(value)}
							valueKey={{key: 'id', reduce: true}}
							value={activeView || screens?.[0]?.id}
							options={(screens || []).map((x) => ({id: x.id, label: x.name}))} />
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
					primaryKey="name"
					data={getCampaigns()} >
						{(datum: any) => (
							<Box direction="row" justify="between" align="center">
								<Text>{datum.campaign.name}</Text>
								<Text size='small'>{datum.tier?.name}</Text>
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
							data={getCampaigns()?.map((campaign) => ({
								id: campaign.id,
								name: `${campaign.campaign?.name} - ${campaign.tier?.name}`,
								color: tiers?.find((a) => a.id == campaign.tier?.id)?.color,
								showLabel: campaign.campaign?.name,
								start: campaign.dates?.[0],
								end: campaign.dates?.[1],
							}))}
							/>
					</Box>
				)}
			</Box>
		</Box>
	)
}