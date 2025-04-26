import React, { useState } from "react";

// Filter component receives onFilter function as a prop from parent
function Filter({ onFilter }) {
  // Local state to track the filter inputs
  const [titleFilter, setTitleFilter] = useState(""); // For filtering by title
  const [ratingFilter, setRatingFilter] = useState(""); // For filtering by rating

  // Handler for title input change
  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitleFilter(newTitle); // Update local title state
    onFilter(newTitle, ratingFilter); // Call parent's filter function with updated values
  };

  // Handler for rating input change
  const handleRatingChange = (event) => {
    const newRating = event.target.value;
    setRatingFilter(newRating); // Update local rating state
    onFilter(titleFilter, newRating); // Call parent's filter function with updated values
  };

  return (
    // Filter input UI
    <div style={{ margin: "20px", padding: "15px", border: "1px solid #eee" }}>
      <h3>Filter Movies</h3>

      {/* Title filter input */}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={titleFilter}
          onChange={handleTitleChange} // Update title filter on user input
        />
      </div>

      {/* Rating filter input */}
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          placeholder="Minimum Rating"
          value={ratingFilter}
          onChange={handleRatingChange} // Update rating filter on user input
        />
      </div>
    </div>
  );
}

export default Filter;
