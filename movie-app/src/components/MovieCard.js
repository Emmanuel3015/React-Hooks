import React from "react";
import { Link } from "react-router-dom"; // Import Link to enable navigation

// MovieCard component displays a single movie's information
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {/* Clicking the image will navigate to the movie's detail page */}
      <Link to={`/movie/${movie.title}`}>
        <img
          src={movie.posterURL} // Display the movie's poster image
          alt={movie.title} // Alt text for accessibility
          style={{ width: "200px" }} // Inline style to set image width
        />
      </Link>

      {/* Display movie title */}
      <h3>{movie.title}</h3>

      {/* Display a short version of the movie description (first 50 characters) */}
      <p>{movie.description.substring(0, 50)}...</p>

      {/* Display movie rating with a star icon */}
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard; // Export MovieCard to use it in other components
