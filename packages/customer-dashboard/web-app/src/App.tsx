import React from "react";
import { Box, Grommet } from "grommet";
import { HeaderBar } from "./components/Header";
import { Campaigns } from "./views/Campaigns";
import { SingleCampaign } from "./views/SingleCampaign";

import { Reporting } from "./views/Reporting";
import { Settings } from "./views/Settings";

import { Routes, Route, Outlet, useRoutes, Navigate } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { Dashboard } from "./views/Dashboard";
import { LoginForm } from "./components/Forms/LoginForm";
import { SignUpForm } from "./components/Forms/SignUpForm";
import { ForgottenPassForm } from "./components/Forms/ForgottonPassForm";
import { EditProfile } from "./components/Forms/EditProfile";
import { ChangePassword } from "./components/Forms/ChangePassword";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NODE_ENV == 'production' ? 'https://dashboard.streetlevelone.com/api' : 'http://localhost:8080'}/graphql`,
  headers: {
    authorization: `bearer ${localStorage.getItem('token')}`
  },
  cache: new InMemoryCache()
});

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

const routes = () => {
  let token = localStorage.getItem('token');
    return [
      {
        path: '/',
        element: <LoginPage />,
        children: [
          {path: '', element: <LoginForm />},
          {path: 'signup', element: <SignUpForm />}
        ]
      },
      {
        path: 'account-recovery',
        element: <ForgottenPassForm />
      },
      {
        path: '/home',
        element: token ? <Dashboard /> : <Navigate to="/" />,
        children: token ? [
          {
            path: 'campaigns', 
            element: <Outlet />,
            children: [
              {path: '', element: <Campaigns />},
              {path: ':id', element: <SingleCampaign />}
            ]
          },
        ] : []
      }
    ];

}

const routing = useRoutes(routes())

function App() {
  return (
    <ApolloProvider client={client}>
    <Grommet style={{ display: "flex" }} full theme={theme}>
      {routing}
      {/* <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route path="" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
        </Route>
        <Route path="account-recovery" element={<ForgottenPassForm />} />

        <Route path="/home" element={<Dashboard />}>
          <Route path="campaigns" element={<Outlet />}>
            <Route path="" element={<Campaigns />} />
            <Route path=":id" element={<SingleCampaign />} />
          </Route>
          <Route path="editprofile" element={<EditProfile />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
      </Routes> */}
    </Grommet>
    </ApolloProvider>
  );
}

export default App;
