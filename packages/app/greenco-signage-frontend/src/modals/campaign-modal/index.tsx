import React from 'react';

import { Box, Text, Button, Layer, TextInput, Select } from 'grommet'
import { useState, useEffect } from 'react';

export interface CampaignModalProps {
    open: boolean;
    selected?: any;
    onClose?: () => void;
    onDelete?: () => void;
    onSubmit?: (app: {id?: string, name: string, customer: string}) => void;

    customers?: any[];
}
export const CampaignModal: React.FC<CampaignModalProps> = (props) => {
    // const [ name, setName ] = useState<string>('')
    const [ campaign, setCampaign ] = useState<any>({})

    useEffect(() => {
        setCampaign({...props.selected, customer: props.selected?.customer?.id})
    }, [props.selected])

    useEffect(() => 
	{
	if (props.open == false){
		setCampaign({})}

	}, [props.open])

    console.log({campaign})

    return props.open ? (
        <Layer
            onEsc={props.onClose}
            onClickOutside={props.onClose}
        >
            <Box
                width="medium">
                <Box background="accent-2" pad="xsmall" direction="row">
                    <Text>{campaign.id ? "Update" : "Create"} Campaign</Text>
                </Box>
                <Box
                    gap='xsmall'
                    pad="xsmall"
                    >
                    <TextInput 
                        value={campaign.name}
                        onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                        placeholder="Campaign Name" />

                    <Select
                        value={campaign.customer}
                        onChange={(e) => setCampaign({...campaign, customer: e.value})}
                        placeholder="Customer"
                        labelKey={"name"}
                        valueKey={{key: "id", reduce: true}}
                        options={props.customers || []} />
                    <Box 
                        margin={{top: 'small'}}
                        justify="end"
                        direction="row">
                        {campaign.id && <Button onClick={props.onDelete} label="Delete" color="red" />}
                        <Button label="Cancel" onClick={props.onClose} />
                        <Button onClick={() => props.onSubmit?.(campaign)} primary label={campaign.id ? "Save" : "Create"} />
                    </Box>
                </Box>
            
            </Box>
        </Layer>
    ) : null
}