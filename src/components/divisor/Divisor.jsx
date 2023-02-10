import { Grid } from '@mui/material';
import './styles.css';

/**
 * 
 * @param {{size}} props 
 * @returns 
 */
export default function Divisor(props) {

  return (
    <Grid item width={props.size}>
      <div className="divisor-up" />

      <div className="divisor-line" />

      <div className="divisor-down" />
    </Grid>
  )
}