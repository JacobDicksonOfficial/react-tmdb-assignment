import React, { useState } from "react"; // Import React and useState for managing local component state
import Header from "../headerMovieList"; // Import Header component to display the page title
import FilterCard from "../filterMoviesCard"; // Import FilterCard component for filtering TV shows
import TVShowList from "../tvShowList"; // Import TVShowList component to display the list of filtered TV shows
import Grid from "@mui/material/Grid2"; // Import Material-UI Grid for layout

// Template component for displaying a list of TV shows with filters and a header
function TVShowListPageTemplate({ tvShows, title, action }) {
  const [nameFilter, setNameFilter] = useState(""); // State for filtering by TV show name
  const [genreFilter, setGenreFilter] = useState("0"); // State for filtering by genre
  const genreId = Number(genreFilter); // Convert genreFilter to a number for comparison

  // Filter the list of TV shows by name and genre
  let displayedTVShows = tvShows
    .filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }) // Filter by name: Check if the TV show's name includes the nameFilter string
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    }); // Filter by genre: Only include shows that match the selected genre ID

  // Handle changes to the filters (name and genre)
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value); // Update nameFilter when the filter type is "name"
    else setGenreFilter(value); // Update genreFilter for "genre" type
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} /> {/* Render the header with the page title */}
      </Grid>
      <Grid container sx={{ flex: "1 1 500px" }}>
        <Grid
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange} // Pass the handleChange function to handle user input
            titleFilter={nameFilter} // Pass the current nameFilter state
            genreFilter={genreFilter} // Pass the current genreFilter state
          /> {/* Render the FilterCard for filtering TV shows */}
        </Grid>
        <TVShowList
          action={action} // Pass the action prop to handle actions on TV show cards
          tvShows={displayedTVShows} // Pass the filtered list of TV shows
        ></TVShowList> {/* Render the TVShowList component with filtered TV shows */}
      </Grid>
    </Grid> // Main layout using Material-UI Grid
  );
}

export default TVShowListPageTemplate; // Export the component for use in other parts of the app
