import React from 'react'
import {Box, Button, IconButton, Typography, useTheme} from '@mui/material'
import { tokens } from '../contexts/theme'
import StatBox from '../components/statBox/StatBox'
import Header from '../components/Header'
import {mockTransactions} from "../data/mockData"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import LineChart from "../pages/LineChart"
import BarChart from "../pages/BarChart"
import GeographyChart from "../pages/GeographyChart"
import ProgressCircle from "../components/progressCircle/ProgressCircle"

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box 
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >

        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            variant='contained'
            sx={{
              backgroundColor: colors.teal[700],
              color: colors.black[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: colors.red[700],
                transform: "scale(1.01)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              },
            }}

          >
            <DownloadOutlinedIcon sx={{mr: "10px"}}/>
            Download Reports
          </Button>
        </Box>
      </Box>


      {/* GRID & CHARTS  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1  */}
        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.black[600]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <StatBox 
            title="12,361"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailOutlinedIcon sx={{color: colors.teal[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.black[600]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <StatBox 
            title="431, 225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleOutlinedIcon sx={{color: colors.teal[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.black[600]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <StatBox 
            title="32, 441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddOutlinedIcon sx={{color: colors.teal[600], fontSize: "26px"}} />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={colors.black[600]} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <StatBox 
            title="1, 325, 134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficOutlinedIcon sx={{color: colors.teal[600], fontSize: "26px"}} />
            }
          />
        </Box>


        {/* ROW 2  */}

      </Box>

    </Box>
  )
}

export default Dashboard