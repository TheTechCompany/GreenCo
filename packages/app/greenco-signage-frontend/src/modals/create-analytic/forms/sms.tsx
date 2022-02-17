import { FormInput } from '@hexhive/ui';
import React, { useState } from 'react';
import { QRFormProps } from '.';


export const SMSForm : React.FC<QRFormProps> = (props) => {

	const [ data, setData ] = useState<{number?: string, message?: string}>({})

	const formatData = (data: any) => {
		return `sms:${data.number}?body=${data.message}`
	}

	const onChange = (key: string, val: string) => {
		let _data = {...data, [key]: val}
		setData(_data)
		// console.log(formatData())
		props.onChange?.(formatData(_data))
	}

	return (
		<>
		<FormInput
			placeholder='Phone number'	
			value={data.number}
			onChange={(e) => onChange('number', e)} />
		<FormInput
			value={data.message}
			onChange={(e) => onChange('message', e)}
			placeholder='Message' />
		</>	
	)
}