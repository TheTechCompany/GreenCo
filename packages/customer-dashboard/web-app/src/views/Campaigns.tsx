import React from "react";
import { Box } from "grommet";
import { CampaignList } from "../components/CampaignList";
import { useNavigate } from "react-router-dom";

// NOT SURE HOW TO MAKE HTIS PAGE INTERESTING YET

export const Campaigns = () => {
  const navigate = useNavigate()

  return <Box flex>
    <CampaignList
      campaigns={[
        { id: "1", title: "Campaign 1" },
        { id: "2", title: "Campaign 2" },
      ]}
      onClickItem={(campaign) => {
        navigate(campaign.id)
      }}
      />
  </Box>
};
