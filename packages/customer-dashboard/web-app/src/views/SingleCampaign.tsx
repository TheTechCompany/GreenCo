import React from "react";
import { Box, Grid, Text, Button } from "grommet";
import { LinkPrevious } from 'grommet-icons'
import { CampaignList } from "../components/CampaignList";
import { GraphGrid, GridLayoutItem } from "@hexhive/ui/dist/components/GraphGrid";
import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { CampaignPreview } from "../components/CampaignPreview";

// PROBABLY TO BE VERY SIMILAR TO REPORTING BUT FOR INDIVIDUAL CAMPAIGN. PROBABLY REUSE THE COMPONENTS
const singleCampaignLayout = [
  {
    id: 'campaign-preview',
    label: "Campaign Preview",
    x: 0,
    y: 0,
    w: 3,
    h: 19
  },
  {
    id: "people-viewed",
    label: "Daily Impressions",
    total: "total 1",
    x: 3.5,
    y: 0,
    w: 1,
    h: 4,
  },
  {
    id: 'people-viewed-week',
    label: "Weekly Impressions",
    total: "total 2",
    x: 3.5,
    y: 2,
    w: 1,
    h: 4
  },
  {
    id: 'appearances',
    label: 'Appearances',
    x: 5.5,
    y: 0,
    w: 1,
    h: 4
  },
  {
    id: 'footprint',
    label: "Footprint",
    x: 7.5,
    y: 2,
    w: 1,
    h: 4
  },
  {
    id: 'ad-package',
    label: 'Ad Package',
    x: 7.5,
    y: 0,
    w: 1,
    h: 4
  }
];

const blue = 'rgb(89, 106, 239)'
const orange = 'rgb(243, 143, 92)'
const gray = 'rgb(164, 166, 163)' ;

export const SingleCampaign = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const GET_SINGLE_CAMPAIGN = gql`
    query SingleCampaign ($id: String){
        campaigns(id: $id){
          name
          id

          views
          interactions

          activeScreens
          activeClusters
          activeTier

          peopleCount
          peopleCountWeek
        }
    }
  `
  const data = useQuery(GET_SINGLE_CAMPAIGN, {variables: {id: id}})

  const campaign = data.data?.campaigns?.[0];

  console.log({campaign})
  
  const renderItem = (item: GridLayoutItem) => {
    switch(item.id){
      case 'campaign-preview':
        return (
          <Box flex elevation="small">
            <CampaignPreview previewUrl={`http://localhost:9009/api/campaign/${campaign?.id}/preview`} />
          </Box>
        )
      case 'people-viewed':
        return (
          <Box pad="xsmall" justify="center" direction="column" flex background={blue}>
            <Text>Impressions per day</Text>
            <Text size="large">{campaign?.peopleCount}</Text>
          </Box>
        )
      case 'people-viewed-week':
        return (
          <Box pad="xsmall" justify="center" direction="column"  flex background={blue}>
            <Text>Impressions per week</Text>
            <Text size="large">{campaign?.peopleCountWeek}</Text>
          </Box>
        )
      case 'appearances':
        return (
          <Box pad="xsmall" justify="center" direction="column"  flex background={blue}>
            <Text>Appearances</Text>
            <Text size="large">{campaign?.views || 0}</Text>
          </Box>
        )
      case 'footprint':
        return (
          <Box pad="xsmall" justify='center' flex>
            <Text>Total Clusters</Text>
            <Text weight="bold" size="medium" color={blue}>{campaign?.activeClusters}</Text>
            <Text>Total Screens</Text>
            <Text weight="bold" size="medium" color={blue}>{campaign?.activeScreens}</Text>
          </Box>
        )
      case 'ad-package':
        return (
          <Box justify="center" pad="xsmall" direction="column" flex background={gray}>
            <Text color="white">Ad Package</Text>
            <Text color="white" size="large"> {campaign?.activeTier}</Text>
          </Box>
        )
      default:
        return (
          <Box flex>
            {item.label}
          </Box>
        )
    }

  }

  return (
  <Box flex pad="xsmall">
    <Box direction="row" align="center">
      <Button 
        onClick={() => navigate('../')}
        style={{padding: 6, borderRadius: 3}} 
        plain 
        hoverIndicator 
        icon={<LinkPrevious />} />
      <Text size="medium">{campaign?.name}</Text>

    </Box>
    {/* GraphGrid Component to go here */}
    <GraphGrid 
      
      noWrap
      layout={singleCampaignLayout} 
      onLayoutChange={(layout) => {

      } } 
      >
        {(item) => (
          <Box elevation="small" flex overflow="hidden" round="xsmall">
            {renderItem(item)}
          </Box>
        )}
      </GraphGrid>
  </Box>)
}

{
  /* <Grid
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
    </Grid> */
}
