import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../cards/movie/Movie";
import Stepper from "../stepper/Stepper";
import "./styles.css"
import Divisor from "../../components/divisor/Divisor";
import MovieBreadcrumbs from "../breadcrumbs/MovieBreadcrumbs";
import { getMovies } from "./movies";

const breadcrumbs = ["Today", "This week", "Last 30 days"];
const MOVIES_PER_PAGE = 6;

/**
 * 
 * @param {{backgroundColor: string, title, mirror: boolean}} props 
 * @returns 
 */
export default function MoviesCarousel(props) {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState(breadcrumbs[0]);
  const [movies, setMovies] = useState(getMovies(breadcrumbs[0]));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMovies(getMovies(category));
    setStep(0);
  }, [category])

  useEffect(() => {
    setLoading(false);
  }, [])

  const Carousel = () => {
    let cards = [];

    for (let i = 0; i < MOVIES_PER_PAGE; i++) {
      cards.push(
        <Grid alignSelf="start" key={i} item>
          <MovieCard movie={movies[i + step]}
            backgroundColor={props.backgroundColor}
          />

          <div style={{ paddingTop: "30px" }} />
        </Grid>
      );
    }

    return cards;
  }

  const ShowStepper = () => {
    return (
      <Grid item maxWidth={220}>
        <Grid container alignContent="start" height="inherit">
          <Divisor size={40} />

          <Grid height={30} />

          <Typography className="spotlight-title">
            {props.title}
          </Typography>

          <Stepper step={step} setStep={setStep} maxSteps={movies.length - MOVIES_PER_PAGE} />

          <Grid item height={70} />

          <Divisor size={220} />

          <p className="view-all-text">
            {"VIEW ALL >"}
          </p>
        </Grid>
      </Grid>
    )
  }

  const ShowContent = () => {
    if (props.mirror) {
      return (
        <>
          <ShowStepper />
          <Carousel />
        </>
      )
    }

    return (
      <>
        <Carousel />
        <ShowStepper />
      </>
    )
  }

  if (loading) {
    return <></>
  }

  return (
    <Grid container sx={{ backgroundColor: props.backgroundColor }}>
      <Grid container justifyContent="left" spacing={2} sx={{ backgroundColor: props.backgroundColor, paddingLeft: '5%', paddingRight: '5%' }}>
        <MovieBreadcrumbs selected={category} categories={breadcrumbs} setSelected={setCategory} />
        <Grid item height={60} />
      </Grid>

      <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={2} sx={{ backgroundColor: props.backgroundColor, paddingLeft: '5%', paddingRight: '5%' }}>
        <ShowContent />
      </Grid>
    </Grid>
  )
}