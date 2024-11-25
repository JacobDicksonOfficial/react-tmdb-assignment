import React, { useEffect, useState } from "react";
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
import MustWatchPage from './pages/mustWatchPage';
import NowPlayingPage from './pages/nowPlayingPage';
import TopRatedPage from './pages/topRatedPage';
import PopularTVShowsPage from './pages/popularTVShowsPage';
import TVShowDetailsPage from './pages/tvShowDetailsPage';
import Spinner from './components/spinner';
import { ThemeContextProvider } from "./contexts/ThemeContext"; // Import ThemeContext

import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";

import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {user ? (
          <MoviesContextProvider>
            <SiteHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/mustwatch" element={<MustWatchPage />} />
              <Route path="/movies/now_playing" element={<NowPlayingPage />} />
              <Route path="/movies/top_rated" element={<TopRatedPage />} />
              <Route path="/tv/popular" element={<PopularTVShowsPage />} />
              <Route path="/tv/:id" element={<TVShowDetailsPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
