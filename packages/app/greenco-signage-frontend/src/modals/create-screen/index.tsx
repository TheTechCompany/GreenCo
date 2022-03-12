import React, { useEffect } from 'react';

import { Box, Text, Button, Layer, TextInput } from 'grommet'
import { useState } from 'react';
import { BaseModal, FormControl, FormInput } from '@hexhive/ui';

export interface WorkflowModalProps {
    open: boolean;
    selected?: any
    onClose?: () => void;
    onDelete?: () => void;
    onSubmit?: (app: { id?: string, name: string, networkName: string }) => void;
    templates?: any[];
}
export const CreateScreenModal: React.FC<WorkflowModalProps> = (props) => {
    const [machine, setMachine] = useState<any>({})

    const onSubmit = () => {
        props.onSubmit?.(machine)
    }

    useEffect(() => {
        setMachine({
            ...props.selected
        })
    }, [props.selected])

    return (
        <BaseModal
            width='medium'
            title={`${props.selected ? "Update" : "Create"} Screen`}
            open={props.open}
            onDelete={props.selected && props.onDelete}
            onClose={props.onClose}
            onSubmit={onSubmit}
        >

            <FormInput
                value={machine.name}
                onChange={(value) => setMachine({ ...machine, name: value })}
                placeholder="Name" />

            <FormInput
                value={machine.networkName}
                onChange={(value) => setMachine({...machine, networkName: value})}
                placeholder="Provision Key" />

        </BaseModal>
    )
}