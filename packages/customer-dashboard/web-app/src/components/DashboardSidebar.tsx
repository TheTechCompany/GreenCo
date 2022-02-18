import React from "react";
import { Sidebar, Avatar, Button, Nav } from "grommet";
import { Projects, Clock, Help } from "grommet-icons";

// NO LONGER USING THIS

export const DashboardSidebar = () => (
  <Sidebar background="black" width="small" align="center" elevation="small">
    <Nav pad="small">
      <Button
        plain
        label="Campaigns"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/campaignlist"
      />
      <Button
        plain
        label="Reporting"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/reporting"
      />
      <Button
        plain
        label="Settings"
        hoverIndicator
        alignSelf="center"
        href="/dashboard/settings"
      />
    </Nav>
  </Sidebar>
);
