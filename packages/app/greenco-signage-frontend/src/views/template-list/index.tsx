import { useMutation, useQuery } from "@greenco/signage-api";
import { Box, List, Button, Text } from "grommet"
import { Add } from 'grommet-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTemplateModal } from "../../modals/create-template";

export const TemplateList = () => {
    const [ modalOpen, openModal ] = useState(false);

    const query = useQuery()
    
    const navigate = useNavigate()
    
    const templates = query.greenScreenTemplates()

    const [createTemplate] = useMutation((mutation, args: {name: string}) => {
        const item = mutation.updateHiveOrganisations({
            update: {
                screenTemplates: [{
                    create: [{
                        node: {
                            name: args.name
                        }
                    }]
                }]
            }
        })
        return {
            item: {
                ...item.hiveOrganisations?.[0]
            }
        }
    }, {
        awaitRefetchQueries: true,
        refetchQueries: [query.greenScreenTemplates()]
    })

    return (
            <Box flex round="xsmall" overflow={"hidden"}>
                <CreateTemplateModal
                    open={modalOpen}
                    onSubmit={(template) => {
                        createTemplate({args: {name: template.name}}).then(() => {
                            openModal(false)
                        })
                    }}
                    onClose={() => openModal(false)}
                    />
                <Box pad="xsmall" align="center" justify="between" direction="row" background={"accent-2"}>
                    <Text>Templates</Text>
                    <Button 
                        onClick={() => openModal(true)}
                        plain 
                        hoverIndicator 
                        style={{padding: 6, borderRadius: 3}} 
                        icon={<Add size="small" />} />
                </Box>
                <Box background="neutral-1" flex>
                    <List
                        onClickItem={({item}: any) => navigate(item.id)}
                        primaryKey={"name"}
                        data={templates}
                        />
                </Box>
            </Box>
    )
}