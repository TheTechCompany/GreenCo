import { Box, Card, Image, Heading, CardBody, CardFooter } from "grommet";
import React, { useState } from "react";
import { Add, MoreVertical } from "grommet-icons";
import { CampaignCard, CampaignCardProps } from "./CampaignCard";

export interface CampaignListProps {
  data?: any;
}

export const CampaignList: React.FC<CampaignListProps> = (props) => {
  return (
    <Box direction="row">
      <CampaignCard title="Test title" />
      <CampaignCard title="Another test title" />
    </Box>
  );
};
