## 📽️ Assignment 1 - ReactJS App
### By: Jabez Dickson

<img src="src/images/tmdb1" alt="My Image" width="500" height="300">

### Overview
This repository contains the Movies Fan App, a modern ReactJS application integrated with the TMDB API. The app allows users to explore movies and TV shows, filter and sort content, view detailed information, and manage their favorite lists. It also includes features like third-party authentication (Google), dark mode, and a responsive UI.

### Features
✨ Core Features

🔑 Third-Party Authentication: Secure Google login via Firebase.

🌙 Dark Mode Toggle: User-friendly dark mode integrated into the UI.

🔍 Filtering Options: Filter movies and TV shows by name and genre across all pages.

📱 Responsive UI: Built with Material-UI for a seamless experience across devices.

❤️ Favorite Movies: Add and manage favorite movies easily.

📜 Pagination: Infinite scrolling for large datasets.

📊 Parameterized Endpoints: Detailed views for movies and TV shows.

### Setup Requirements
1. Clone the Repository

git clone [repository URL]<br>
cd [repository folder]

2. Install Dependencies

npm install

3. Set up Firebase

npm install firebase

Create a Firebase project at Firebase Console.<br>
Configure Google Authentication in the Firebase project.<br>
Replace placeholders in firebase.js with your Firebase credentials.<br>

4. Install Material-UI and Icons

Install Material-UI:

npm install @mui/material @emotion/react @emotion/styled<br>
npm install @mui/icons-material

5. Start the Development Server

npm start

### API Endpoints

Static Endpoints

🎥 Discover Movies: /discover/movie<br>
📺 Popular TV Shows: /tv/popular<br>
⭐ Top-Rated Movies: /movie/top_rated<br>
🕒 Now Playing Movies: /movie/now_playing<br>
🎭 Movie Genres: /genre/movie/list<br>
📂 TV Show Genres: /genre/tv/list<br>

Parameterized Endpoints

🎬 Movie Details: /movie/:id<br>
Example: /movie/550 - Retrieves details for "Fight Club".<br>
📺 TV Show Details: /tv/:id<br>
Example: /tv/1399 - Retrieves details for "Game of Thrones".<br>
📡 Recommendations for Movies: /movie/:id/recommendations<br>
Example: /movie/550/recommendations - Recommendations for "Fight Club".<br>
📡 Recommendations for TV Shows: /tv/:id/recommendations<br>
Example: /tv/1399/recommendations - Recommendations for "Game of Thrones".<br>


## Routing
Public Routes<br>
/login - Login page for users.<br>
/signup - Signup page for new users.<br>

Protected Routes

/ - Home page showcasing movie lists.<br>
/movies/favorites - Displays the user's favorite movies.<br>
/movies/:id - Shows detailed information about a specific movie.<br>
/movies/top_rated - Explore top-rated movies.<br>
/movies/now_playing - View movies currently playing in theaters.<br>
/tv/popular - Explore popular TV shows.<br>
/tv/:id - View detailed information about a specific TV show.<br>


## Independent Learning

🔑 Third-Party Authentication (Google):

Integrated using Firebase Authentication.
Source Code: firebase.js, AuthContext.js, loginPage.js.
Reference: Firebase Authentication Docs.

🌙 Dark Mode Toggle:

Developed using Material-UI themes and React Context API.
Source Code: ThemeContext.js, SiteHeader/index.js.
Reference: Material-UI Theme Customization.

⚡ React-Query Caching:

Enhanced performance with API request caching and state management.
Source Code: topRatedPage.js, popularTVShowsPage.js.
Reference: React Query Docs.

🎛️ FilterCard Component:

Added filtering options for movies and TV shows.
Source Code: FilterCard.js, TVShowListPageTemplate.js.
Reference: React Filtering Tutorial.

📱 Responsive UI:

Ensured mobile-friendly design using Material-UI Grid.
Source Code: SiteHeader/index.js, TVShowListPageTemplate.js.
Reference: Material-UI Responsive Grid.
