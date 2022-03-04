import { FormInput } from '@hexhive/ui';
import React, { useEffect, useState } from 'react';
import { QRFormProps } from '.';


export const WebsiteForm : React.FC<QRFormProps> = (props) => {

	const [ data, setData ] = useState<string>('')

	useEffect(() => {
		setData(props.analytic.data);
	}, [props.analytic])

	const onChange = (key: string, val: string) => {
		setData(val)
		props.onChange?.(val)
	}

	return (
		<>
		<FormInput
			placeholder='Website URL'	
			value={data}
			onChange={(e) => onChange('url', e)} />
		</>	
	)
}