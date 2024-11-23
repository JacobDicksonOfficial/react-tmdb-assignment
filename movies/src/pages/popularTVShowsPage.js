import React from "react";
import { useQuery } from "react-query";
import { getPopularTVShows } from "../api/tmdb-api";
import TVShowListPageTemplate from "../components/templateTVShowListPage";
import Spinner from "../components/spinner";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

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
    <TVShowListPageTemplate
      title="Popular TV Shows"
      tvShows={tvShows}
      action={(show) => (
        <PlaylistAddIcon
          onClick={() => console.log("Add to favorites", show)} // Placeholder action
          style={{ cursor: "pointer" }}
        />
      )}
    />
  );
};

export default PopularTVShowsPage;
