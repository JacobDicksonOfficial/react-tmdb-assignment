import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getTVShowDetails } from "../api/tmdb-api";
import TemplateMoviePage from "../components/templateMoviePage";
import Spinner from "../components/spinner";

const TVShowDetailsPage = () => {
  const { id } = useParams(); // Get TV show ID from the URL
  const { data, error, isLoading, isError } = useQuery(
    ["tvShow", id],
    () => getTVShowDetails(id)
  );

  if (isLoading) return <Spinner />;
  if (isError) {
    console.error("Error fetching TV show details:", error);
    return <p>{error.message}</p>;
  }

  const tvShow = data;

  return (
    <TemplateMoviePage movie={tvShow}>
      <h2>{tvShow.name}</h2>
      <p>{tvShow.overview}</p>
      <p>First Air Date: {tvShow.first_air_date}</p>
      <p>Number of Seasons: {tvShow.number_of_seasons}</p>
    </TemplateMoviePage>
  );
};

export default TVShowDetailsPage;
