import React from "react";
import { Sidebar, Avatar, Button, Nav } from "grommet";
import { Projects, Clock, Help } from 'grommet-icons';


export const DashboardSidebar = () => (

<Sidebar background="black" width="small" align="center" elevation="small">
  <Nav pad="small" >
    <Button plain label="Campaigns" hoverIndicator alignSelf="center" href="/campaignlist"/>
    <Button plain label="Reporting" hoverIndicator alignSelf="center" href="/reporting"/>
    <Button plain label="Settings" hoverIndicator alignSelf="center" href="/settings"/>

  </Nav>
</Sidebar>  
);
