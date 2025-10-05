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
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              boxShadow: theme.palette.mode === "dark"
                ? "0 2px 8px rgba(0,0,0,0.5)"
                : "0 2px 8px rgba(0,0,0,0.1)",
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
          backgroundColor={theme.palette.background.paper} 
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
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
              <EmailOutlinedIcon 
                sx={{
                  color: theme.palette.primary.main, 
                  fontSize: "26px"
                }} 
              />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={theme.palette.background.paper} 
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
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
              <PointOfSaleOutlinedIcon 
                sx={{
                  color: theme.palette.primary.main, 
                  fontSize: "26px"
                }} 
              />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={theme.palette.background.paper} 
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
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
              <PersonAddOutlinedIcon 
                sx={{
                  color: theme.palette.primary.main, 
                  fontSize: "26px",
                }} 
              />
            }
          />
        </Box>

        <Box 
          gridColumn="span 3" 
          backgroundColor={theme.palette.background.paper} 
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
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
              <TrafficOutlinedIcon 
                sx={{
                  color: theme.palette.primary.main, 
                  fontSize: "26px"
                }} 
              />
            }
          />
        </Box>


        {/* ROW 2  */}
        <Box 
          gridColumn="span 8" 
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Box 
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
              <Box>
                <Typography 
                  variant='h5' 
                  fontWeight="600" 
                  color={theme.palette.text.primary}
                >
                  Revenue Generated
                </Typography>
                <Typography 
                  variant='h3' 
                  fontWeight="bold" 
                  color={theme.palette.secondary.main}
                >
                  ₹95,34,548
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ 
                      fontSize: "26px", 
                      color: theme.palette.secondary.main
                    }}
                  />
                </IconButton>
              </Box>

            </Box>
            <Box height="250px" ml="-20px" width="100%">
              <LineChart isDashboard={true}/>
            </Box>
        </Box>

              {/* TRANSACTIONS  */}
          <Box 
            gridColumn="span 4" 
            gridRow="span 2" 
            backgroundColor={theme.palette.background.paper}
            sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
            overflow="auto"
          >
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center"
              borderBottom={`4px solid ${colors.black[500]}`}
              color={theme.palette.text.primary}
              p="15px"
            > 
              <Typography 
                color={theme.palette.text.primary} 
                variant='h5' 
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.black[500]}`}
                p="15px"
              >
                <Box>
                  <Typography 
                    color={theme.palette.secondary.main}
                    variant='h5' 
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography 
                    color={theme.palette.secondary.main}
                    variant='h5' 
                    fontWeight="600"
                  >
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={theme.palette.text.primary}>
                  {transaction.date}
                </Box>
                <Box 
                  backgroundColor={theme.palette.primary.main} 
                  p="5px 10px" 
                  borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>

          {/* ROW 3  */}
        <Box 
          gridColumn=" span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            mt="25px"
          >
            <ProgressCircle size='125' />
            <Typography 
              variant="h5" 
              color={theme.palette.secondary.main} 
              sx={{ mt: "15px"}}
            >
              ₹45,359 revenue generated
            </Typography>
            <Typography>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>

        </Box>
        <Box 
          gridColumn=" span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography 
            variant="h5" 
            fontWeight="600" 
            sx={{ padding: "30px 30px 0 30px"}}
          >
            Sales Quantity
          </Typography>
          <Box 
            height="250px"
            mt="-20px"
          >
            <BarChart isDashboard={true} />
          </Box>

        </Box>
        <Box 
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.paper}
          sx={{
            boxShadow: theme.palette.mode === "dark"
            ? "0 2px 8px rgba(0,0,0,0.5)"
            : "0 2px 8px rgba(0,0,0,0.1)",
          }}
          p="30px"
        >
          <Typography 
            variant="h5" 
            fontWeight="600" 
            sx={{marginBottom: "15px"}}
          >
            Geography Based Traffic
          </Typography>
          <Box 
            height="200px"
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard