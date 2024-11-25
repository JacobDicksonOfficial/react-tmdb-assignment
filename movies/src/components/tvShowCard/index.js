import React from "react"; // Import React library
import { Link } from "react-router-dom"; // Import Link component for navigation
import Card from "@mui/material/Card"; // Import Material-UI Card component
import CardActions from "@mui/material/CardActions"; // Import CardActions for action buttons
import CardContent from "@mui/material/CardContent"; // Import CardContent for holding text content
import CardMedia from "@mui/material/CardMedia"; // Import CardMedia for displaying images
import CardHeader from "@mui/material/CardHeader"; // Import CardHeader for the card's title and avatar
import Button from "@mui/material/Button"; // Import Button for interactive elements
import Typography from "@mui/material/Typography"; // Import Typography for text styling
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone"; // Import Calendar icon for displaying dates
import StarRateIcon from "@mui/icons-material/StarRate"; // Import StarRate icon for ratings
import Grid from "@mui/material/Grid2"; // Import Grid for layout and alignment
import Avatar from "@mui/material/Avatar"; // Import Avatar for displaying a circular badge
import img from "../../images/film-poster-placeholder.png"; // Import placeholder image for missing TV show posters

// Component to display TV show details in a card format
export default function TVShowCard({ show, action }) {
  return (
    <Card> {/* Main Card container for the TV show */}
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: "blue" }}>
            {show.vote_average.toFixed(1)} {/* Display the average rating inside the avatar */}
          </Avatar>
        } // Render a circular badge (avatar) with the show's average rating
        title={
          <Typography variant="h5" component="p">
            {show.name} {/* Display the TV show's name as the card's title */}
          </Typography>
        } // Render the title of the TV show
      />
      <CardMedia
        sx={{ height: 500 }} // Set the height of the image to 500px
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        } // Display the TV show's poster if available, otherwise use a placeholder image
      />
      <CardContent>
        <Grid container> {/* Create a container for aligned date and rating */}
          <Grid size={{ xs: 6 }}> {/* Grid for the first air date */}
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" /> {/* Add a calendar icon before the text */}
              {show.first_air_date} {/* Display the first air date of the TV show */}
            </Typography>
          </Grid> 
          <Grid size={{ xs: 6 }}> {/* Grid for the rating */}
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" /> {/* Add a star icon before the text */}
              {"  "} {show.vote_average} {/* Display the TV show's average rating */}
            </Typography>
          </Grid>
        </Grid> {/* Grid layout for date and rating information */}
      </CardContent> {/* Content section for additional TV show details */}
      <CardActions disableSpacing>
        {action && typeof action === "function" && action(show)} {/* If an action prop is passed and is a function, execute it */}
        <Link to={`/tv/${show.id}`}> {/* Navigate to the TV show's details page */}
          <Button variant="outlined" size="medium" color="primary">
            More Info ... {/* Button text */}
          </Button>
        </Link> {/* Button to view more information about the TV show */}
      </CardActions> {/* Section for action buttons */}
    </Card> // End of the TV show card component
  );
}
