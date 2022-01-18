import { Box, Text } from 'grommet';
import React, { useContext } from 'react';
import { ScreenSingleContext } from './context';

export const ScreenLocation = (props) => {

	const { screen } = useContext(ScreenSingleContext)

	return (
		<Box pad="xsmall">
			<Text>{screen?.location?.name}</Text>
		</Box>
	)
}