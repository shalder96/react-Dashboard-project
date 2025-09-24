import React from 'react'
import {Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import {tokens} from '../contexts/theme'
import { useTheme } from '@emotion/react'


const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography 
        variant='h2' 
        color={colors.black[100]}
        fontWeight="bold"
        sx={{
          mb: "5px"
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color={colors.teal[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header