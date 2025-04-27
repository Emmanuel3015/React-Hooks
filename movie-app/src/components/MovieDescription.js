import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import hooks from react-router

// MovieDescription component shows the detailed view of a selected movie
function MovieDescription({ movies }) {
  const { title } = useParams(); // Get the 'title' from the URL parameters
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Find the movie object that matches the title from the list of movies
  const movie = movies.find((m) => m.title === title);

  // If no movie is found (wrong URL), show an error message
  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div className="movie-description">
      {/* Display movie title */}
      <h2>{movie.title}</h2>

      {/* Display full movie description */}
      <p>{movie.description}</p>

      {/* Embed the trailer video using an iframe */}
      <div>
        <iframe
          width="560"
          height="315"
          src={movie.trailer} // Trailer link from the movie object
          title="Movie trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button to go back to the Home page */}
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default MovieDescription; // Export the component to be used elsewhere
