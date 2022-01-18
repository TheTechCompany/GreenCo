import React, { useState, useEffect } from 'react';
import { BaseModal, FormControl, FormInput } from '@hexhive/ui';
import { Box, Select, TextInput } from 'grommet';
import QRCode from 'qrcode.react';
import { EmailForm } from './forms/email';
import { SMSForm } from './forms/sms';
import { PhoneForm } from './forms/phone';
import { TextForm } from './forms/text';
import { WebsiteForm } from './forms/website';

const options = [
	{
		type: 'text',
		label: "Text",
		component: TextForm
	}, 
	{
		type: 'email',
		label: "E-Mail",
		component: EmailForm
	}, 
	{
		type: 'sms', 
		label: "SMS",
		component: SMSForm
	}, 
	{
		type: 'phone',
		label: "Phone",
		component: PhoneForm
	}, 
	{
		type: 'website',
		label: "Website",
		component: WebsiteForm
	}
]

export const CreateAnalyticModal = (props) => {
	const [ analytic, setAnalytic ] = useState<{
		id?: string,
		type: 'text' | 'email' | 'sms' | 'phone' | 'text' | 'website',
		name: string,
		data: string
	}>({
		type: 'text',
		name: '',
		data: ''
	})

	useEffect(() => {
		setAnalytic({
			...props.selected
		})
	}, [props.selected])
	const onSubmit = () => {
		props.onSubmit(analytic)
	}


	const FormComponent = options.find((a) => a.type == analytic.type)?.component

	console.log(analytic.type)
	return (
		<BaseModal
			width="large"
			title="Create Analytics"
			onClose={props.onClose}
			onSubmit={onSubmit}
			open={props.open}>
			<Box gap="xsmall" align="center" flex direction="row">
				<Box overflow="hidden" round="xsmall" elevation="small">
					<QRCode value={analytic.data || ''} />
				</Box>
			<Box flex gap="xsmall">
								
				<FormInput 
					onChange={(e) => setAnalytic({...analytic, name: e})}
					value={analytic.name} 
					placeholder="Label" />
				<FormControl 
					placeholder='Type'
					value={analytic.type}
					labelKey='label'
					valueKey='type'
					
					onChange={(value) => setAnalytic({...analytic, type: value})}
					options={options} />
				{FormComponent && <FormComponent analytic={analytic} onChange={(e) => setAnalytic({...analytic, data: e})} />}
			</Box>
			</Box>
		</BaseModal>
	)
}