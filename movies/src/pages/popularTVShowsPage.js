import React from "react"; // Import React for building the component
import { useQuery } from "react-query"; // Import useQuery for data fetching and caching
import { getPopularTVShows } from "../api/tmdb-api"; // Import the function to fetch popular TV shows from TMDB API
import TemplateTVShowListPage from "../components/templateTVShowListPage"; // Import the template for displaying TV shows
import Spinner from "../components/spinner"; // Import Spinner component to show loading state

// Component for displaying a page of popular TV shows
const PopularTVShowsPage = () => {
  // Fetch popular TV shows using react-query
  const { data, error, isLoading, isError } = useQuery(
    "popularTVShows", // Unique query key for caching and identification
    getPopularTVShows // Function to fetch the popular TV shows from TMDB API
  );

  if (isLoading) return <Spinner />; // Show a loading spinner while data is being fetched

  if (isError) {
    return <h1>{error.message}</h1>; // Display an error message if the fetch fails
  }

  const tvShows = data.results; // Extract the array of TV shows from the fetched data

  return (
    <TemplateTVShowListPage
      title="Popular TV Shows" // Set the title for the page
      tvShows={tvShows} // Pass the fetched TV shows to the template for display
    />
  ); // Render the page template with the list of popular TV shows
};

export default PopularTVShowsPage; // Export the component for use in routing and other parts of the app
