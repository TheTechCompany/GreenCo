import React from "react";
import { Box, Grommet } from "grommet";
import { HeaderBar } from "./components/Header";
import { Campaigns } from "./views/Campaigns";
import { SingleCampaign } from "./views/SingleCampaign";

import { Reporting } from "./views/Reporting";
import { Settings } from "./views/Settings";

import { Routes, Route, Outlet } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { Dashboard } from "./views/Dashboard";
import { LoginForm } from "./components/Forms/LoginForm";
import { SignUpForm } from "./components/Forms/SignUpForm";
import { ForgottenPassForm } from "./components/Forms/ForgottonPassForm";

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
    <Grommet style={{ display: "flex" }} full theme={theme}>
      <Routes>
        <Route path="/login" element={<LoginPage />}>
          <Route path="" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="resetpassword" element={<ForgottenPassForm />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="campaigns" element={<Outlet />}>
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
