import React from 'react'
import {Box, Typography, useTheme} from '@mui/material'
import { DataGrid} from '@mui/x-data-grid'
import {tokens} from '../../contexts/theme'
import {mockDataInvoices} from '../../data/mockData'
import Header from '../Header'


const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns = [
    {field: "id", headerName: "ID"}, 
    
    {
      field: "name", 
      headerName: "Name", 
      flex: 1, 
      cellClassName: "name-column--cell"
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
      field: "cost", 
      headerName: "Cost", 
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.teal[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: "date", 
      headerName: "Date", 
      flex: 1,
    },

    
  ]
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of invoice balances" />
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
          "& .MuiCheckbox-root": {
            color: `${colors.teal[200]} !important`
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}        
        />
      </Box>
    </Box>
  )
}

export default Invoices;