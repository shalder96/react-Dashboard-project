import React, { useState } from 'react'
import {ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import "react-pro-sidebar/dist/css/styles.css";
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import {tokens} from '../contexts/theme';
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  
  return (
    <MenuItem 
      active={selected === title} 
      style={{color: theme.palette.text.primary}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: theme.palette.background.sidebar + "!important",
          color: theme.palette.text.primary,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          color: theme.palette.text.primary,
        },
        "& .pro-inner-item:hover": {
          color: theme.palette.primary.main + " !important",
          transition: "color 0.2s ease-in-out",
        },
         "& .pro-menu-item.active .pro-inner-item": {
          color: theme.palette.primary.main + " !important",
          fontWeight: "bold",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: theme.palette.text.primary,
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justify-content="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant='h3' color={theme.palette.text.primary}>
                  ADMINIS
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>

              </Box>
            )}
          </MenuItem>

          {/* USER  */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt='profile-user'
                  width="100px"
                  height="100px"
                  src={`./user/admin.jpg`}
                  style={{cursor: "pointer", borderRadius: "50%"}}
                />
              </Box>

              <Box textAlign="center">
                <Typography 
                  variant='h2' 
                  color={theme.palette.text.primary}
                  fontWeight="bold"
                  sx={{m: "10px 0 0 0" }}
                >
                  Sourav Halder
                </Typography>
                <Typography
                  variant='h5'
                  color={theme.palette.secondary.main}
                >
                  Admin Panel
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS  */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant='h6'
              color={theme.palette.text.secondary}
              sx={{m: "15px 0 5px 20px"}}
              >
                Data
              </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant='h6'
              color={theme.palette.text.secondary}
              sx={{m: "15px 0 5px 20px"}}
              >
                Pages
              </Typography>

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography 
              variant='h6'
              color={theme.palette.text.secondary}
              sx={{m: "15px 0 5px 20px"}}
              >
                Charts
              </Typography>

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            
          </Box>
        </Menu>

      </ProSidebar>
    </Box>
  )
}

export default Sidebar