import { Button, Grid, Typography } from "@mui/material";
import "./styles.css";

const BGCOLOR = "#1E2B37";
const VIDEO_ID = "qiMF5Z-5cwY";

const Video = () => {
  return (
    <Grid key="video1" item xs={12} md={5} height={{ xs: "40%", sm: "60%", md: "100%" }}>
      <iframe
        className="video"
        width="100%"
        height="100%"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${VIDEO_ID}?autoplay=0`}
      />
    </Grid>
  )
}

export default function Header(props) {
  return (
    <Grid container sx={{ backgroundColor: BGCOLOR }}>
      <Grid container alignItems="center" alignContent="center" spacing={2} sx={{ backgroundColor: BGCOLOR, padding: "5%" }}>
        <Grid item xs={12} md={5}>
          <Typography className="bold-text" variant="h3">
            Big Comeback
          </Typography>

          <div style={{ paddingTop: '30px' }} />

          <Typography className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <div style={{ paddingTop: '30px' }} />

          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">
                <p className="button-text">WATCH NOW</p>
              </Button>
            </Grid>

            <Grid item>
              <Button sx={{ paddingLeft: '30px', paddingRight: '30px' }} className="playlist-button" variant="outlined">
                <p className="button-text">+ PLAYLIST</p>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} />

        <Video />

        <Grid item xs={12}>
          <div style={{ paddingTop: '30px' }} />
        </Grid>

      </Grid>
    </Grid>
  )
}