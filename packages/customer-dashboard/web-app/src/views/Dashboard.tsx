import React from "react";
import { Box } from "grommet";
import { HeaderBar } from "../components/Header";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => (
  <Box flex>
    <HeaderBar />
    <Box direction="row" flex>
      <Outlet />
    </Box>
  </Box>
);
