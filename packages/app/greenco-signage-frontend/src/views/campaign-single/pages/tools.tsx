import React, {useState, useContext} from 'react';

import { Box, Button, Text, List } from 'grommet';
import { MoreVertical, Add } from 'grommet-icons';

import QRCode from 'qrcode.react'
import { CreateAnalyticModal } from '../../../modals/create-analytic';
import { useMutation } from '@greenco/signage-api';
import { CampaignSingleContext, } from '../context';
import { getQRURL } from '../../../api/campaign';

export const ToolsPage = () => {
	const [ modalOpen, openModal ] = useState(false)

	const [ selected, setSelected ] = useState<any>()

	const { analytics, campaign, refresh } = useContext(CampaignSingleContext)

	const [ deleteCampaignAnalytic ] = useMutation((mutation, args: {id: string}) => {
		const item = mutation.updateCampaigns({
			where: {id: campaign?.id},
			update: {
				analytics: [{
					delete: [{where: {node: {id: args.id}}}]
				}]
			}
		})
		return {
			item: {
				...item.campaigns?.[0]
			}
		}
	})

	const [ createCampaignAnalytic, createAnalyticInfo ] = useMutation((mutation, args: {id?: string, name: string, type: string, data: string}) => {
		let update : any = undefined;

		if(args.id){
			update = {
					where: {node: {id: args.id}},
					update: {
						node: {
							name: args.name,
							type: args.type,
							data: args.data
						}
					}
				}
			
		}else{
			update = {
				create: [{
					node: {
						name: args.name,
						type: args.type,
						data: args.data,
					}
				}]
			}
		}
			
		
		const item = mutation.updateCampaigns({
			where: {id: campaign?.id},
			update: {
				analytics: [update]
			}
		})
		return {
			item: {
				...item.campaigns?.[0]
			}
		}
	})
	
	return (
		<Box flex>
			<CreateAnalyticModal
				open={modalOpen}
				selected={selected}
				onDelete={() => {
					deleteCampaignAnalytic({
						args: {
							id: selected.id
						}
					}).then(() => {
						refresh?.();
						setSelected(undefined)
						openModal(false)
					})
				}}
				onClose={() => {
					openModal(false)
					setSelected(undefined)
				}}
				onSubmit={(analytic) => {
					
					createCampaignAnalytic({
						args: {
							id: analytic.id,
							name: analytic.name,
							type: analytic.type,
							data: analytic.data,
						}
					}).then(() => {
						setSelected(undefined)
						openModal(false)
						refresh?.()
					})

				}}
				/>
				
			<Box pad="xsmall" align="center" justify="between" direction="row">
								<Text>Tools</Text>
								<Button 
									hoverIndicator
									plain 
									onClick={() => openModal(true)}
									style={{padding: 6, borderRadius: 3}} 
									icon={<Add size="small" />} />
							</Box>
							<Box flex overflow={"auto"}>
							<List
								primaryKey="id"
								data={analytics}
							>
								{(datum) => (
									<Box direction="row" align="center" justify='between'>
										<Box gap="xsmall" direction="row" align="center" flex>
											<Box elevation="small" round="xsmall" overflow="hidden">
												<QRCode renderAs={'svg'} size={50}  value={getQRURL(datum.id) || ''} />
											</Box>
											<Text>{datum.name}</Text>
										</Box>
										<Button 
											onClick={() => {
												setSelected(datum)
												openModal(true)
											}}
											plain 
											style={{padding: 6, borderRadius: 3}} 
											hoverIndicator 
											icon={<MoreVertical size="small" />} />
									</Box>
								)}
							</List>
							</Box>
						</Box>
	)
}