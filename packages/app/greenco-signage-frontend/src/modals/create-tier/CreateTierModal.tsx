import { BaseModal, ColorDot, FormInput } from '@hexhive/ui';
import { Box, TextInput, Text } from 'grommet';
import React, {useState, useEffect} from 'react';
import { CompactPicker  } from 'react-color';
export const CreateTierModal = (props) => {


	const defaultPickers = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'];

	const [ tier, setTier ] = useState<{name?: string, plays?: number, slots?: number, color?: string}>({
		color: defaultPickers[Math.floor(Math.random() * (defaultPickers.length) + 0)]
	})

	const onSubmit = () => {
		props.onSubmit(tier);
	}

	// console.log({percent: (((tier.slots || 0) * (tier.percent || 0)) / (60 * 60 / 15)) * 100})


	useEffect(() => {
		setTier({...props.selected, color: props.selected?.color || defaultPickers[Math.floor(Math.random() * (defaultPickers.length) + 0)]})
	}, [props.selected])

	return (
		<BaseModal
			width='medium'
			title="Add Tier"
			open={props.open}
			onSubmit={onSubmit}
			onClose={props.onClose}
			>
			<FormInput value={tier.name} onChange={(e) => setTier({...tier, name: e})}  placeholder="Name" />
			<FormInput value={tier.plays} type="number" onChange={(e) => setTier({...tier, plays: parseFloat(e)})} placeholder="Plays per cycle" />
			<FormInput value={tier.slots} type="number" onChange={(e) => setTier({...tier, slots: parseInt(e)})} placeholder="Slots" />
			
			<Box>
				
				<Box direction='row' justify='start'>
					<Text size="small">Tier Color</Text>
				</Box>
				<CompactPicker color={tier.color} onChange={(color) => setTier({...tier, color: color.hex})}/>
			</Box>
		</BaseModal>
	)
}