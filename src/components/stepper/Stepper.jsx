import { Grid, IconButton } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

/**
 * 
 * @param {{setStep: function, step: int, maxSteps: int}} props 
 * @returns 
 */
export default function Stepper(props) {
  const nextCard = () => {
    props.setStep(props.step + 1);
  }

  const previousCard = () => {
    props.setStep(props.step - 1);
  }

  return (
    <Grid container>
      <Grid item>
        <IconButton onClick={previousCard} disabled={props.step === 0} size="small">
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>
      </Grid>

      <Grid item>
        <IconButton disabled={props.step + 1 === props.maxSteps} onClick={nextCard} size="small">
          <NavigateNextIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  )
}