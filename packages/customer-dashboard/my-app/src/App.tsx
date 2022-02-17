import React from "react";
import { Box, Grommet } from "grommet";
import { HeaderBar } from "./components/HeaderBar";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { CampaignList } from "./components/CampaignList";
import { Campaigns } from "./veiws/Campaigns";
import { Reporting } from "./veiws/Reporting";
import { Settings } from "./veiws/Settings";

import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./veiws/LoginForm";
import { Dashboard } from "./veiws/Dashboard";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="campaignlist" element={<Campaigns />} />
        <Route path="campaign" element={<Campaigns />} />
        <Route path="reporting" element={<Reporting />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
