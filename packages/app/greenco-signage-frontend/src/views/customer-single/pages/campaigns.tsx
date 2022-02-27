import { gql, useQuery } from '@apollo/client';
import { Box, Text, List } from 'grommet';
import React from 'react';
import { useParams } from 'react-router-dom';

export const Campaigns = () => {

    const { id } = useParams();

    const data = useQuery(gql`
        query Q ($id: ID!){
            customers(where: {id: $id}) {
                campaigns {
                    id
                    name
                }
            }
        }
    `, {
        variables: {
            id
        }
    })
    return (
        <Box flex>
            <Box pad="xsmall" align='center' direction='row'>
                <Text>Campaigns</Text>
            </Box>  
            <List 
                data={data?.data?.customers?.[0]?.campaigns}
                primaryKey="name"
                />
        </Box>
    )
}