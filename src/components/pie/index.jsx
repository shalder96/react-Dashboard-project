import { Box } from '@mui/material'
import Header from '../Header'
import PieChart from "../../pages/PieChart"

const index = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple pie chart"/>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default index