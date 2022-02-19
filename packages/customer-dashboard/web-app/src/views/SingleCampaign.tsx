import React from "react";
import { Box, Grid } from "grommet";
import { CampaignList } from "../components/CampaignList";

// PROBABLY TO BE VERY SIMILAR TO REPORTING BUT FOR INDIVIDUAL CAMPAIGN. PROBABLY REUSE THE COMPONENTS

export const SingleCampaign = () => (
  <Box flex background="black">
    <Grid
      fill
      areas={[
        { name: "CampaignImage", start: [0, 0], end: [0, 2] },
        { name: "Analytics1", start: [1, 0], end: [1, 0] },
        { name: "Analytics2", start: [1, 1], end: [1, 1] },
        { name: "Analytics3", start: [1, 2], end: [1, 2] },

        { name: "map", start: [2, 0], end: [2, 1] },
        { name: "info", start: [2, 2], end: [2, 2] },
      ]}
      columns={["auto", "auto", "auto"]}
      rows={["auto", "auto", "auto"]}
      gap="small"
    >
      <Box gridArea="CampaignImage" background="blue">
        CAMPAIGN IMAGE
      </Box>
      <Box gridArea="Analytics1" background="brand">
        ANALYTICS 1
      </Box>
      <Box gridArea="Analytics2" background="red">
        ANALYTICS 2
      </Box>
      <Box gridArea="Analytics3" background="brand">
        ANALYTICS 3
      </Box>

      <Box gridArea="map" background="brand">
        MAP
      </Box>
      <Box gridArea="info" background="red">
        INFO
      </Box>
    </Grid>
  </Box>
);
