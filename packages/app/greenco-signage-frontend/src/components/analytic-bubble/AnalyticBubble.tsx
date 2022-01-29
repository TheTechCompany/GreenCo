import { Box, Text } from 'grommet';
import React from 'react';


export const AnalyticBubble = (props) => {
	return (
		<Box	
			flex
			gap="xsmall"
			pad="small"
			elevation='small'
			background={props.background}
			round="small">
			<Box direction='row' justify='start'>
				{React.cloneElement(props.icon, {color: props.color})}
			</Box>
			<Box direction='row'>
				<Text size="small" color={props.color}>{props.label}</Text>
			</Box>
			<Box>
				<Text color={props.color}>{props.value}</Text>
			</Box>
		</Box>
	)
}