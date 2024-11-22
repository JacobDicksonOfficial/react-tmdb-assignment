import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage'; 
import MustWatchPage from "./pages/mustWatchPage";
import NowPlayingPage from "./pages/nowPlayingPage"; // Assignment 1 (Importing now playing movies in cinema)
import TopRatedPage from "./pages/topRatedPage";     // Assignment 1 (Importing top rated movies in cinema )
import PopularTVShowsPage from "./pages/popularTVShowsPage";   // Assignment 1 (Importing popular tv shows )
import TVShowDetailsPage from "./pages/tvShowDetailsPage";     // Assignment 1 (Importing parametrised tv showdetails page )


// Declare the query client to manage the cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000, // Data remains fresh for 1 hour
      refetchInterval: 360000, // Refetch every 1 hour
      refetchOnWindowFocus: false // Disable refetch on window focus
    },
  },
});

// App component updated with QueryClientProvider, MoviesContextProvider, and routes
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/mustwatch" element={<MustWatchPage />} /> {/* Must Watch Page */}
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/now_playing" element={<NowPlayingPage />} /> {/* Assignment 1 - Routing now playing movies in cinema page (Static)*/}
            <Route path="/movies/top_rated" element={<TopRatedPage />} /> {/* Assignment 1 - Routing top rated movies in cinema page (Static)*/}
            <Route path="/tv/popular" element={<PopularTVShowsPage />} /> {/* Assignment 1 - Routing popular tv show page (Static)*/}
            <Route path="/tv/:id" element={<TVShowDetailsPage />} /> {/* Assignment 1 - Routing popular tv show details page (Parameterised)*/}
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
// Render the App component
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
