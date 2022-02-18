import React from "react";
import { Box, Grommet } from "grommet";
import { HeaderBar } from "./components/HeaderBar";
import { Campaigns } from "./views/Campaigns";
import { SingleCampaign } from "./views/SingleCampaign";

import { Reporting } from "./views/Reporting";
import { Settings } from "./views/Settings";

import { Routes, Route, Outlet } from "react-router-dom";
import { LoginForm } from "./views/LoginForm";
import { Dashboard } from "./views/Dashboard";

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
    <Grommet style={{display: 'flex'}} full theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="campaigns" element={<Outlet />} >
            <Route path="" element={<Campaigns />} />
            <Route path=":id" element={<SingleCampaign />} />
          </Route>
          <Route path="reports" element={<Reporting />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Grommet>
  );
}

export default App;
