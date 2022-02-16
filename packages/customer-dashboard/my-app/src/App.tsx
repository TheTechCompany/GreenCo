import React from 'react';
import { Box, Grommet } from "grommet";
import { HeaderBar } from './components/HeaderBar';
import { DashboardSidebar } from './components/DashboardSidebar';



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
    <>
      <Grommet
        theme={theme}
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderBar/>
        <DashboardSidebar/>
   
      </Grommet>
    </>
  );
}

export default App;
