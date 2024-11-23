import React from "react";
import TVShowCard from "../tvShowCard/";
import Grid from "@mui/material/Grid2";

const TVShowList = (props) => {
  let tvShowCards = props.tvShows.map((show) => (
    <Grid key={show.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ padding: "20px" }}>
      <TVShowCard key={show.id} show={show} action={props.action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TVShowList;
