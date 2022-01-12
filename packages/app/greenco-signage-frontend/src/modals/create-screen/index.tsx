import React from 'react';

import { Box, Text, Button, Layer, TextInput } from 'grommet'
import { useState } from 'react';
import { BaseModal, FormControl, FormInput } from '@hexhive/ui';

export interface WorkflowModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (app: { name: string, networkName: string }) => void;
    templates?: any[];
}
export const CreateScreenModal: React.FC<WorkflowModalProps> = (props) => {
    const [machine, setMachine] = useState<any>({})

    const onSubmit = () => {
        props.onSubmit?.(machine)
    }
    return (
        <BaseModal
            width='medium'
            title="Create Screen"
            open={props.open}
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