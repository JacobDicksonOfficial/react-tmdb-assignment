import React from "react";
import { useQuery } from "react-query";
import { getPopularTVShows } from "../api/tmdb-api";
import TemplateTVShowListPage from "../components/templateTVShowListPage";
import Spinner from "../components/spinner";

const PopularTVShowsPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "popularTVShows",
    getPopularTVShows
  );

  if (isLoading) return <Spinner />;
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data.results;

  return (
    <TemplateTVShowListPage
      title="Popular TV Shows"
      tvShows={tvShows}
    />
  );
};

export default PopularTVShowsPage;
