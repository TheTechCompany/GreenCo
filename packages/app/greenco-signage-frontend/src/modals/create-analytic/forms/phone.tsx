import { FormInput } from '@hexhive/ui';
import React, { useEffect, useState } from 'react';
import { QRFormProps } from '.';


export const PhoneForm : React.FC<QRFormProps> = (props) => {

	const [ data, setData ] = useState<{number?: string}>({})

	useEffect(() => {
		setData(deserialize(props.analytic.data));
	}, [props.analytic])


	const deserialize = (data: string) => {
		let match = data.match(/^tel:(.*)$/)

		return {number: match?.[1]}
	}
	const formatData = (data: any) => {
		return `tel:${data.number}`
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
		</>	
	)
}