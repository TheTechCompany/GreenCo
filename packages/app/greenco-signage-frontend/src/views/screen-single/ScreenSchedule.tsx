import React, { useContext, useState } from 'react';
import { Box, Button, Select } from 'grommet'
import { Timeline } from '@hexhive/ui';
import { ScreenSingleContext } from './context';
import { Add } from 'grommet-icons';
import { ScheduleCampaignModal } from '../schedule-single/modals/ScheduleCampaign';
import { query, useMutation } from '@greenco/signage-api';

export const ScreenSchedule = (props) => {

    const { id, scheduledCampaigns, tiers, campaigns, scheduleViews, refresh } = useContext(ScreenSingleContext);

	const [ selected, setSelected ] = useState<{id: string} | null>(null);

    const [ modalOpen, openModal ] = useState(false);

    const [ activeView, changeActiveView ] = useState<string | null>(null);

    const currentView = activeView || scheduleViews?.[0]?.id;



    const [ scheduleCampaign ] = useMutation((mutation, args: {
        campaign?: string
        dates?: string[]
        tier?: string;
    }) => {

        if(!id || !args.campaign) return;
	
		let dateUpdate = {};
		if(args.dates?.length == 2){
			dateUpdate = {
				startDate: new Date(args.dates[0]).toISOString(),
				endDate: new Date(args.dates[1]).toISOString()
			}
		}

        const item = mutation.updateGreenScreens({
            where: {id: id},
            update: {
                customSchedule: [{
                    create: [{
                        node: {
                            campaign: {connect: {where: {node: {id: args.campaign}}}},
							tier: {connect: {where: {node: {id: args.tier}}}},
							slot: {
								connect: {where: {node: {id: ( currentView )}}}
							},
							...dateUpdate
                        }
                    }]
                }]
            }
        })

        //TODO push update from server side
		// const updateRes = mutation.pushScheduleUpdate({schedule: scheduleId})


        return {
            item : {
                ...item?.greenScreens?.[0],
                // updateRes
            }
        }
    })

    const [ updateCampaign ] = useMutation((mutation, args: {
        id?: string;
        campaign?: string
        dates?: string[]
        tier?: string;
    }) => {
        if(!id || !args.campaign) return;

        let dateUpdate = {};
		if(args.dates?.length == 2){
			dateUpdate = {
				startDate: new Date(args.dates[0]).toISOString(),
				endDate: new Date(args.dates[1]).toISOString()
			}
		}
		const item = mutation.updateGreenScreens({
			where: {id: id},
			update: {
                customSchedule: [{
                    where: {node: {id: args.id}},
                    update: {
                        node: {
                            campaign: {disconnect:{where: {node: {id_NOT: args.campaign}}}, connect: {where: {node: {id: args.campaign}}}},
							tier: {disconnect: {where: {node: {id_NOT: args.tier}}}, connect: {where: {node: {id: args.tier}}}},
							slot: {
								connect: {where: {node: {id: ( currentView )}}},
								disconnect: {where: {node: {id_NOT: ( currentView )}}}
							},
							...dateUpdate
                        }
                    }
                }]
				
			}
		})

		// const updateRes = mutation.pushScheduleUpdate({schedule: scheduleId})

		return {
			item: {
				...item.greenScreens?.[0],
				// update: updateRes
			}
		}
    })

    const [removeCampaign] = useMutation((mutation, args: {
        id: string
    }) => {
        const item = mutation.updateGreenScreens({
            where: {id: id},
            update: {
                customSchedule: [{
                    delete: [{where: {node: {id: args.id}}}]
                }]
            }
        })
        return {
            item: {
                ...item.greenScreens?.[0]
            }
        }
    })

    const getSelected = () => {
		const found = scheduledCampaigns?.find((a) => a.id == selected?.id)
		console.log(selected, found)
		return found
	}

    console.log({currentView, scheduledCampaigns, scheduleViews})
    return (
                <Box flex pad="xsmall">

            <ScheduleCampaignModal 
				campaigns={campaigns}
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
								// screen: schedule.screen
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
                    <Box direction='row' align='center' justify='between'>
                        <Box direction='row' align='center'  round="xsmall">
                            <Select 
                                plain
                                size='small'
                                labelKey={"name"}
                                onChange={({value}) => changeActiveView?.(value)}
                                valueKey={{key: 'id', reduce: true}}
                                value={activeView || scheduleViews?.[0]?.id}
                                options={scheduleViews || []} />
                        </Box>

                        <Button onClick={() => openModal(true)} hoverIndicator plain style={{padding: 6, borderRadius: 3}} icon={<Add size='small' />} />
                    </Box>
						<Timeline
							onSelectItem={(task) => {

								if(task.editable){
									setSelected(task)
									openModal(true)
								}


								// console.log({task})
							}}
							data={scheduledCampaigns?.filter((a) => a?.slot?.id == currentView).map((campaign) => ({
								id: campaign?.id,
								name: `${campaign?.campaign?.name} - ${campaign?.tier?.name}`,
								color: campaign?.tier?.color,
								opacity: campaign?.opacity,
								editable: campaign.editable,
								showLabel: campaign?.campaign?.name,
								start: campaign?.startDate,
								end: campaign?.endDate,
							}))}
							/>
					</Box>
    );
}