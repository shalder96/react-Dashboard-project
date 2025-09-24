import React from 'react'
import {Box} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import {tokens} from '../../contexts/theme'
import {mockDataContacts} from '../../data/mockData'

import Header from '../Header'
import {useTheme} from '@mui/material'

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns = [
    {field: "id", headerName: "ID", flex: 0.5}, 
    {
      field: "registrarId",
      headerName: "Registrar ID"
    },
    {
      field: "name", 
      headerName: "Name", 
      flex: 1, 
      cellClassName: "name-column--cell"
    },
    {
      field: "age", 
      headerName: "Age", 
      type: "Number", 
      headerAlign: "left",
    },
    {
      field: "phone", 
      headerName: "Phone Number", 
      flex: 1,
    },
    {
      field: "email", 
      headerName: "Email", 
      flex: 1,
    },
    {
      field: "address", 
      headerName: "Address", 
      flex: 1,
    },
    {
      field: "city", 
      headerName: "City", 
      flex: 1,
    },
    {
      field: "zipCode", 
      headerName: "ZipCode", 
      flex: 1,
    },
    
  ]
  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of contacts for future reference" />
      <Box 
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.teal[300]
          },
           "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.indigo[700]} !important`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.black[800]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.indigo[800]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.black[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{Toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts