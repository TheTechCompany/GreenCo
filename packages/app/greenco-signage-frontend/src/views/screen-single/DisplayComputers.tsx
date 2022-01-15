import { useQuery } from '@greenco/signage-api';
import { Box, List } from 'grommet';
import React, {useContext} from 'react';
import { DisplaySingleContext } from './context';

export const DisplayComputers = () => {

	const { id, slots } = useContext(DisplaySingleContext)

	const query = useQuery()

	return (
		<Box flex background="neutral-1">
			<List data={slots} primaryKey={"hostname"} />
		</Box>
	)
}