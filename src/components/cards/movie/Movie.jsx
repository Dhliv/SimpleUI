import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';
import { Grid, Paper } from '@mui/material';

/**
 * 
 * @param {{backgroundColor: string, movie: {image: string, title: string, genre: string, year: string}}} props 
 * @returns 
 */
export default function MovieCard(props) {
  return (
    <Grid sx={{ maxWidth: 154 }} justifyContent="left">
      <Paper sx={{ backgroundColor: props.backgroundColor, maxWidth: 154, maxHeight: 240 }}>
        <img className='card-thumbnail-background' src={props.movie.image} />
      </Paper>

      <p className='genre-year-text'>
        {`${props.movie.genre}, ${props.movie.year}`}
      </p>

      <p className='movie-title'>
        {props.movie.title}
      </p>
    </Grid>
  );
}
