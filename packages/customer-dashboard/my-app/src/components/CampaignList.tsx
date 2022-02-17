import { Box, Button, Text, List } from "grommet";
import React, { useState } from "react";
import { Add, MoreVertical } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import { CampaignModal } from "../components/modals/CampaignModal";

export interface TriggerListProps {}

export const CampaignList: React.FC<TriggerListProps> = (props) => {
  const navigate = useNavigate();

  const [modalOpen, openModal] = useState<boolean>(false);

  const [selected, setSelected] = useState<any>(undefined);

  const campaigns = [1, 3, 3, 2];

  return (
    <Box
      background="neutral-1"
      flex
      overflow="hidden"
      round="xsmall"
      elevation="small"
      margin="small"
    >
      <CampaignModal
        open={modalOpen}
        selected={selected}
        onClose={() => openModal(false)}
      />
      <Box
        pad="xsmall"
        align="center"
        background="brand"
        direction="row"
        justify="between"
      >
        <Text>Campaigns</Text>
        <Button
          plain
          hoverIndicator
          style={{ padding: 6, borderRadius: 3 }}
          onClick={() => openModal(true)}
          icon={<Add size="small" />}
        />
      </Box>
      <Box flex>
        <List primaryKey={"name"} data={campaigns}></List>
      </Box>
    </Box>
  );
};
