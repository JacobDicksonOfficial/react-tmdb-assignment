import React from "react";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const TopRatedPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "topRatedMovies",
    getTopRatedMovies
  );

  if (isLoading) return <Spinner />;
  if (isError) {
    console.error("Error fetching top rated movies:", error);
    return <p>{error.message}</p>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={() => null} // No actions required for now
    />
  );
};

export default TopRatedPage;
