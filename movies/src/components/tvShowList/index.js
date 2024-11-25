import React from "react"; // Import React library for building UI components
import TVShowCard from "../tvShowCard/"; // Import the TVShowCard component to display individual TV shows
import Grid from "@mui/material/Grid2"; // Import Grid component from Material-UI for responsive layout

// Functional component to render a list of TV show cards
const TVShowList = (props) => {
  // Map over the array of TV shows to create an array of TVShowCard components wrapped in Grid items
  let tvShowCards = props.tvShows.map((show) => (
    <Grid
      key={show.id}
      size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
      sx={{ padding: "20px" }}
    >
      <TVShowCard key={show.id} show={show} action={props.action} />
    </Grid>
  )); // Each TV show is wrapped in a Grid item with responsive sizing and padding

  return tvShowCards; // Return the array of TV show cards wrapped in Grid components
};

export default TVShowList; // Export the TVShowList component as the default export
