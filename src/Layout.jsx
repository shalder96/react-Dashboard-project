import { useState} from 'react'
import {Outlet} from 'react-router-dom'
import { ColorModeContext, useMode } from './contexts/theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function Layout() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div 
          className='layout-container' 
          style={{ display: "flex", flexDirection: "row", height: "100vh"}}
        >

          <Sidebar/>
          <div style={{display: 'flex', flexDirection: "column", flex: 1}}>
          <Topbar />

          <main className="content" style={{flex: 1, overflow: "auto"}}>

              <Outlet />

          </main>

          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  )
}

export default Layout;
