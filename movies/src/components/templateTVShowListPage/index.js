import React, { useState } from "react";
import Header from "../headerMovieList"; // Reuse the same header for consistency
import FilterCard from "../filterMoviesCard"; // Optional: Use the same filter
import TVShowList from "../tvShowList";
import Grid from "@mui/material/Grid2";

function TVShowListPageTemplate({ tvShows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTVShows = tvShows
    .filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TVShowList action={action} tvShows={displayedTVShows}></TVShowList>
      </Grid>
    </Grid>
  );
}

export default TVShowListPageTemplate;
