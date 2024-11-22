import React from "react";
import { useQuery } from "react-query";
import { getNowPlayingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";

const NowPlayingPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "nowPlayingMovies", // Unique query key
    getNowPlayingMovies // API fetch function
  );

  if (isLoading) return <Spinner />;
  if (isError) {
    console.error("Error fetching now playing movies:", error);
    return <p>{error.message}</p>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => null} // No action needed for now
    />
  );
};

export default NowPlayingPage;
