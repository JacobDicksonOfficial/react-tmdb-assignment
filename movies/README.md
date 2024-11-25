# Assignment 1 - ReactJS app.

# Name: Jabez Dickson 

<img src="src/images/tmdb1" alt="My Image" width="500" height="300">

## Overview.

To provide movie details, currently playing movies, top-rated movies, and more, the app communicates with The Movie Database (TMDB) API.
It supports several endpoints and lets users explore movies in real time.


### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Now Playing Movies: Display movies currently playing in theaters using TMDB's /movie/now_playing endpoint.

+ Top Rated Movies: Show movies with the highest ratings using TMDB's /movie/top_rated endpoint.

+ Feature 3

+ etc

+ etc

## Setup requirements.

To set up and run the app locally, follow these steps:

Clone the repository:
git clone [https://github.com/JacobDicksonOfficial/react-tmdb-assignment]

Navigate to the project directory:
cd [react-tmdb-assignment]

Install dependencies:
npm install

Create a .env file in the root directory with your TMDB API key:
REACT_APP_TMDB_KEY= [your_tmdb_api_key]

Start the development server:
npm start

Open the app in your browser at:
http://localhost:3000

## API endpoints.

This lists the __additional__ TMDB endpoints used, giving the description and pathname for each endpoint

+ Now Playing Movies: /movie/now_playing - Fetches movies currently playing in theaters.
+ Top Rated Movies: /movie/top_rated - Fetches movies with the highest user ratings.
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

The following techniques were researched and implemented independently:

React Query:

Used for managing server state and API caching.
Key files: tmdb-api.js, nowPlayingPage.js, topRatedPage.js.

Resources:
React Query Documentation: [https://tutors.dev/topic/webappdev2/topic-01-setup]

Material UI:
Used for designing UI components.
Key files: siteHeader.js, movieCard.js.

Resources:
Material UI Documentation: https://mui.com

Pagination Implementation:

Added pagination for lists of movies (e.g., Now Playing, Top Rated).
Key files: nowPlayingPage.js, topRatedPage.js.