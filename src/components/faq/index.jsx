import {Box, useTheme, Typography} from '@mui/material'
import Header from '../Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
// import ExpandMoreIcon from '@mui/icons-material/ExapandMoreIcon'
import { tokens } from '../../contexts/theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequesntly Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography color={colors.teal[600]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio quod, consectetur incidunt maiores dicta laborum explicabo alias 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography color={colors.teal[600]} variant="h5">
            Another Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio quod, consectetur incidunt maiores dicta laborum explicabo alias 
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography color={colors.teal[600]} variant="h5">
            An Favourite question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio quod, consectetur incidunt maiores dicta laborum explicabo alias 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography color={colors.teal[600]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio quod, consectetur incidunt maiores dicta laborum explicabo alias 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<expandIcon />}>
          <Typography color={colors.teal[600]} variant="h5">
            What a question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio quod, consectetur incidunt maiores dicta laborum explicabo alias 
          </Typography>
        </AccordionDetails>
      </Accordion>



    </Box>
  )
}

export default FAQ;