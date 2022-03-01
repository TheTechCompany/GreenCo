import React from "react";
import { Box } from "grommet";
import { CampaignList } from "../components/CampaignList";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

// NOT SURE HOW TO MAKE HTIS PAGE INTERESTING YET

export const Campaigns = () => {
  const navigate = useNavigate()

  const GET_CAMAPAIGNS = gql`
    query GetGampaigns {
      campaigns {
        id
        name
      }
    }
  `

  const data = useQuery(GET_CAMAPAIGNS)
  
  return <Box flex>
    <CampaignList
      campaigns={data?.data?.campaigns || []}
      onClickItem={(campaign) => {
        navigate(campaign.id)
      }}
      />
  </Box>
};
