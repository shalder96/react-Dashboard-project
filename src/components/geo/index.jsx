import { Box, colors } from '@mui/material'
import {useTheme} from "@mui/material"
import { tokens } from '../../contexts/theme'
import Header from '../Header'
import GeographyChart from "../../pages/GeographyChart"

const index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple geography chart"/>
      <Box height="75vh" border={`1px solid ${colors.black[100]}`} borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default index