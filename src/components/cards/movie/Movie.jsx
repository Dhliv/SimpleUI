import * as React from 'react';
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
        <img className='card-thumbnail-background' src={props.movie.image} alt="" />
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
