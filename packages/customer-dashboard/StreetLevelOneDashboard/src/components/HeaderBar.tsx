import React from "react";
import { Box, Image, Header, Button, Menu } from "grommet";

export const HeaderBar = () => (
  <Header
    background="#000000"
    margin="none"
    pad={{ horizontal: "medium", vertical: "medium" }}
    elevation="small"
    justify="between"
    height="15vh"
  >
    <Image height="28vh" src="/assets/sl1_logo.png" />
    <Box direction="row" width="medium" justify="evenly">
      <Button
        secondary
        color="white"
        label="Campaigns"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/campaignlist"
      />
      <Button
        active
        color="white"
        label="Reporting"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/reporting"
      />
      <Menu
        label="settings"
        items={[
          { label: "Edit Profile", onClick: () => {} },
          { label: "Change Password", onClick: () => {} },
          { label: "Log Out", onClick: () => {} },
        ]}
      />
    </Box>
  </Header>
);
