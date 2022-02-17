import React from "react";
import { Box } from "grommet";
import { HeaderBar } from "../components/HeaderBar";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => (
  <>
    <HeaderBar />
    <Box direction="row" flex height="85vh">
      <DashboardSidebar />
      <Outlet />
    </Box>
  </>
);
