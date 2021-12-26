import { Grommet, Spinner } from "grommet";
import { App } from "./App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BaseStyle } from '@greenco/styles'
import { AuthProvider } from '@hexhive/auth-ui'

export default function Root(props) {
  return (

    <Router basename={process.env.PUBLIC_URL}>
    <Grommet style={{width: '100%', height: '100%'}} theme={BaseStyle}>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Grommet>
    </Router>
    

  )
}
