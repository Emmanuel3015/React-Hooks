import React, { useState } from "react";

// Filter component handles both filtering and adding new movies
function Filter({ setFilterTitle, setFilterRate, addMovie }) {
  // Local state for new movie inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(1);

  // Handle form submission for adding a new movie
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    addMovie({ title, description, posterURL, rating: Number(rating) }); // Add new movie
    // Clear form fields after adding the movie
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(1);
  };

  return (
    <div className="filter">
      {/* Section for filtering movies */}
      <h2>Filter Movies</h2>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)} // Update filter by title
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Minimum rating..."
        onChange={(e) => setFilterRate(Number(e.target.value))} // Update filter by rating
      />

      {/* Section for adding a new movie */}
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)} // Update poster URL state
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)} // Update rating state
          required
        />
        <button type="submit">Add Movie</button>{" "}
        {/* Button to submit new movie */}
      </form>
    </div>
  );
}

export default Filter;
