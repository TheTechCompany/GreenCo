import React from "react";
import { Box, Grommet } from "grommet";
import { HeaderBar } from "./components/HeaderBar";
import { Campaigns } from "./veiws/Campaigns";
import { SingleCampaign } from "./veiws/SingleCampaign";

import { Reporting } from "./veiws/Reporting";
import { Settings } from "./veiws/Settings";

import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./veiws/LoginForm";
import { Dashboard } from "./veiws/Dashboard";

const theme = {
  global: {
    colors: {
      brand: "#69f542",
      control: "white",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    active: { background: "white", color: "black" },
    card: {
      hover: {
        container: {
          elevation: "large",
        },
      },
      container: {
        elevation: "medium",
        extend: `transition: all 0.2s ease-in-out;`,
      },
      footer: {
        pad: { horizontal: "medium", vertical: "small" },
        background: "#00000008",
      },
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="campaignlist" element={<Campaigns />} />
          <Route path="campaign" element={<SingleCampaign />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Grommet>
  );
}

export default App;
