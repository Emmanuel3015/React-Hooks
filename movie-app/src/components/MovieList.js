import React from "react";
import MovieCard from "./MovieCard"; // Import the MovieCard component

// MovieList component displays a list of MovieCard components
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {/* Loop through each movie and render a MovieCard for it */}
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} /> // Pass the movie object as a prop
      ))}
    </div>
  );
}

export default MovieList; // Export MovieList so it can be used elsewhere
