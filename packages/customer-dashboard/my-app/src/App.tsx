import React from 'react';
import { Box, Grommet } from "grommet";
import { HeaderBar } from './components/HeaderBar';
import { DashboardSidebar } from './components/DashboardSidebar';
import { CampaignList  } from './veiws/CampaignList';
import { CampaignSingle  } from './veiws/CampaignSingle';
import { Reporting  } from './veiws/Reporting';
import { Settings  } from './veiws/Settings';


import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './veiws/LoginForm';



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
        <Box direction="row" flex>
        <DashboardSidebar/>

        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/campaignlist' element={<CampaignList/>}/>
          <Route path='/campaign' element={<CampaignSingle/>}/>
          <Route path='/reporting' element={<Reporting/>}/>
          <Route path='/settings' element={<Settings/>}/>

        </Routes>
        </Box>
      </Grommet>
    </>
  );
}

export default App;
