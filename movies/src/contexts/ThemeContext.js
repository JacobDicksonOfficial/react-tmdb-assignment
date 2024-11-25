import React, { createContext, useContext, useState } from "react"; // Import React and hooks for context and state management
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import Material-UI theming utilities
import CssBaseline from "@mui/material/CssBaseline"; // Import CssBaseline for consistent global styles

// Create a Context for the theme
const ThemeContext = createContext(); // Context for managing and accessing theme state globally

// Custom hook to access the ThemeContext
export const useTheme = () => useContext(ThemeContext); // Expose the ThemeContext to components via a hook

// ThemeContextProvider component to wrap the application and provide theme functionality
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // State to track whether dark mode is active

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // Dynamically set theme mode based on darkMode state
    },
  }); // Create a Material-UI theme with a palette that switches between light and dark modes

  const toggleTheme = () => setDarkMode((prevMode) => !prevMode); // Function to toggle between dark and light modes

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {/* Provide theme-related state and functions to all children */}
      <ThemeProvider theme={theme}>
        {/* Apply the theme to all Material-UI components */}
        <CssBaseline /> {/* Add global CSS reset for consistent styling */}
        {children} {/* Render all wrapped children components */}
      </ThemeProvider>
    </ThemeContext.Provider> // Wrap the application in the ThemeContext and ThemeProvider
  );
};
