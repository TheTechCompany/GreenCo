import { FormInput } from '@hexhive/ui';
import React, { useState } from 'react';
import { QRFormProps } from '.';


export const EmailForm : React.FC<QRFormProps> = (props) => {

	const [ data, setData ] = useState<{email?: string, subject?: string, message?: string}>({})

	const formatData = (data: any) => {
		return `mailto:${data.email}?subject=${data.subject}&body=${data.message}`
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
			placeholder='Email Address'	
			value={data.email}
			onChange={(e) => onChange('email', e)} />
		<FormInput
			value={data.subject}
			onChange={(e) => onChange('subject', e)}
			placeholder='Subject'	
		/>
		<FormInput
			value={data.message}
			onChange={(e) => onChange('message', e)}
			placeholder='Message' />
		</>	
	)
}