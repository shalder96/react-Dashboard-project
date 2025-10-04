import {Box,  colors,  Typography, useTheme} from "@mui/material"
import {tokens} from '../../contexts/theme'
import ProgressCircle from '../progressCircle/ProgressCircle'

const StatBox = ({ title, subtitle, icon, progress, increase}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: colors.black[100]
            }}
          >
            {title}

          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress ={progress} />
        </Box>

      </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="h5"
            sx={{
              color: colors.teal[500]
            }}
          >
            {subtitle}

          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{
              color: colors.teal[600]
            }}
          >
            {increase}

          </Typography>
        </Box>
    </Box>
  )
}

export default StatBox;