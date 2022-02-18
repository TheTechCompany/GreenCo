import React from "react";
import { Box, Image, Header, Button, Menu } from "grommet";
import { UserSettings } from "grommet-icons";

// TO MAKE BUTTONS ACTIVE WHEN ON PAGE - I image it's a simple useState thing I need to figure out

export const HeaderBar = () => (
  <Header
    background="#000000"
    margin="none"
    pad={{ horizontal: "medium", vertical: "medium" }}
    elevation="small"
    justify="between"
    height="50px"
  >
      <Image height="24px" src="/assets/sl1_logo.png" />
    <Box
      direction="row"
      gap="small"
      pad={{ horizontal: "medium" }}
    >
      <Button
        secondary
        color="white"
        label="Campaigns"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/campaigns"
      />
      <Button
        active
        color="white"
        label="Reporting"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/reports"
      />
      <Box border={{size: 'small', color: 'gray'}} round="xsmall" elevation="small">
        <Menu
  
          icon={<UserSettings />}
          label="Settings"
          items={[
            { label: "Edit Profile", onClick: () => {} },
            { label: "Change Password", onClick: () => {} },
            { label: "Log Out", onClick: () => {} },
          ]}
        />
      </Box>
    </Box>
  </Header>
);
