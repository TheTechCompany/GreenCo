import { useQuery } from '@greenco/signage-api';
import { Box, List } from 'grommet';
import React, {useContext} from 'react';
import { DisplaySingleContext } from './context';

export const DisplayComputers = (props) => {

	const { id } = useContext(DisplaySingleContext)

	const query = useQuery()

	return (
		<Box flex background="neutral-1">
			<List data={[]} />
		</Box>
	)
}