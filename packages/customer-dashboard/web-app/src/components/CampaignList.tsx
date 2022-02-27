import { Box, Card, Image, Heading, CardBody, CardFooter } from "grommet";
import React, { useState } from "react";
import { Add, MoreVertical } from "grommet-icons";
import { CampaignCard, CampaignCardProps } from "./CampaignCard";

export interface CampaignListProps {
  data?: any;
  campaigns: {id: string, name: string}[]
  onClickItem?: (campaign: {id: string, name: string}) => void;
}

// Not sure how to make this more interesting yet: Some thoughts:
// A carousel? Simple animations when the cards enter the screen and leaving when you press one?

export const CampaignList: React.FC<CampaignListProps> = (props) => {
  
  return (
    <Box direction="row" justify="evenly">
      {props.campaigns.map((campaign) => (
        <CampaignCard onClick={() => {props.onClickItem?.(campaign)}} title={campaign.name} />
      ))}
    </Box>
  );
};
