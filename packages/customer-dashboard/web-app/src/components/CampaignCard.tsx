import { Box, Card, Image, Heading, CardBody, CardFooter } from "grommet";
import React from "react";
import { CampaignPreview } from "./CampaignPreview";

const CampaignTitle = "Placeholder Title";

export interface CampaignCardProps {
  id?: string;
  title: string;
  description?: string;
  data?: any;
  onClick?: () => void;
}

// TODO: I want the elevation to change to large (and maybe the box slightly bigger?) when overed over, and make these clickables

export const CampaignCard: React.FC<CampaignCardProps> = (props) => {
  return (
    <Box
      onClick={props.onClick}
      pad="large" 
      gap="medium" 
      width="medium">
      <Card pad="small" background="dark-1" gap="medium" elevation="large">
        <CardBody style={{pointerEvents: 'none'}}>
          <CampaignPreview previewUrl={process.env.NODE_ENV == 'production' ? `/api/preview/${props?.id}/view` : `http://localhost:9009/api/campaign/${props?.id}/preview`} />

          {/* <Image
            fit="cover"
            src="//v2.grommet.io/assets/IMG_4245.jpg"
            a11yTitle="bridge"
          /> */}
        </CardBody>
        <CardFooter justify="center">
          <Heading level="3" textAlign="center">
            {props.title}
          </Heading>
        </CardFooter>
      </Card>
    </Box>
  );
};
