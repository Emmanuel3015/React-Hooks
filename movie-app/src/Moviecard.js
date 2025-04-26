import React from "react";

// MovieCard component to display individual movie information
function MovieCard({ title, description, posterURL, rating }) {
  return (
    // Card container with basic styling
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "300px",
      }}
    >
      {/* Movie title */}
      <h3>{title}</h3>

      {/* Movie poster image */}
      <img
        src={posterURL} // Image source (passed as prop)
        alt={title}
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* Movie description */}
      <p>{description}</p>

      {/* Movie rating */}
      <p>Rating: {rating}/10</p>
    </div>
  );
}

export default MovieCard;
