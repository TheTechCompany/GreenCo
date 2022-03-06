import { Box, Text, Button, Select } from 'grommet';
import React, { useContext, useState } from 'react';
import { Add } from 'grommet-icons';
import { ScheduleSingleContext } from '../context';

export const ScheduleReports = () => {

	const { tiers, views, activeView, changeActiveView } = useContext(ScheduleSingleContext);

	const currentView = activeView || views?.[0]?.id;

	return (
		<Box>
			<Box pad={{left: 'xsmall'}} align="center" justify="between" direction="row">
				<Box direction='row' align='center'>
					<Text weight="bold">Reports</Text>
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
				<Button hoverIndicator icon={<Add size="small" />} />
			</Box>

			<Box pad="xsmall" flex gap="xsmall" direction='row' wrap>
				{tiers?.map((tier) => {
					// console.log({activeView})
					let slotsFilled = tier?.slotsFilled?.find((a) => a?.slot?.id == currentView) //?.find((a) => a?.slot?.id == activeView);
					console.log({slotsFilled})
					return <Box align='center' justify='center' round="xsmall" width="small" height="small" elevation='small' background={'accent-1'}>
						<Text color={'white'} size="large">{tier.name}</Text>
						<Text color={'white'} size="large">{tier?.slotsFilled?.find((a) => a.slot?.id == currentView)?.filled || 0} / {tier.slots}</Text>
					</Box>
				})}
			</Box>
		</Box>
	)
}