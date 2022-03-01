import React from "react";
import { Box, Image, Header, Button, Menu } from "grommet";
import { UserSettings } from "grommet-icons";
import { NavItem } from "./NavItem";

export const HeaderBar = () => {
  const navOptions = [
    { label: "Campaigns", route: "campaigns" },
    // { label: "Reports", route: "reports" },
  ];

  return (
    <Header
      background="#000000"
      margin="none"
      pad={{ horizontal: "medium", vertical: "medium" }}
      elevation="small"
      justify="between"
      height="50px"
    >
      <Image height="24px" src="/assets/sl1_logo.png" />
      <Box direction="row" gap="small" pad={{ horizontal: "medium" }}>
        {navOptions.map((nav) => (
          <NavItem route={nav.route} label={nav.label} />
        ))}

        <Box
          border={{ size: "small", color: "gray" }}
          round="xsmall"
          elevation="small"
        >
          <Menu
            icon={<UserSettings/>}
            label="Profile"
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
};
