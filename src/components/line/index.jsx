import { Box } from '@mui/material'
import Header from '../Header'
import LineChart from "../../pages/LineChart"

const index = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple line chart"/>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  )
}

export default index