import React, { useState } from "react";
import MovieCard from "./Moviecard";
import Filter from "./Filter";

function MovieList() {
  // Initial hardcoded list of movies
  const initialMovies = [
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://i.pinimg.com/474x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
      rating: 9.3,
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://i.pinimg.com/474x/13/55/6b/13556bf3ba0daf64f648188f83390863.jpg",
      rating: 9.2,
    },
    {
      title: "Solo Leveling:Re-Awakening",
      description:
        "Over a decade after 'gates' connecting worlds appeared, awakening 'hunters' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate.",
      posterURL:
        "https://i.pinimg.com/474x/2d/3c/a5/2d3ca5ff4e05d486dac522d9ea28bc01.jpg",
      rating: 8.9,
    },
    {
      title: "Jujustu Kaisen",
      description:
        "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself",
      posterURL:
        "https://i.pinimg.com/474x/56/e3/bd/56e3bd29c2ca846af718fbd512512ead.jpg",
      rating: 9.0,
    },
  ];

  // State to store the list of movies
  const [movies, setMovies] = useState(initialMovies);

  // State to store the details of the new movie being added
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // State to toggle the visibility of the add movie form
  const [showAddForm, setShowAddForm] = useState(false);

  // Function to handle input change when adding a new movie
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value, // Update the specific field (title, description, etc.)
    }));
  };

  // Function to add a new movie to the movie list
  const handleAddMovie = () => {
    setMovies([
      ...movies,
      { ...newMovie, rating: parseFloat(newMovie.rating) }, // Make sure rating is a number
    ]);
    // Reset the add movie form
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    setShowAddForm(false); // Hide the form after adding
  };

  // Function to filter the movie list based on title and/or rating
  const handleFilter = (filterTitle, filterRating) => {
    const filteredMovies = initialMovies.filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(filterTitle.toLowerCase());
      const ratingMatch =
        !filterRating || movie.rating >= parseFloat(filterRating);
      return titleMatch && ratingMatch;
    });
    setMovies(filteredMovies); // Update the movie list with filtered movies
  };

  return (
    <div>
      <h2>My Favorite Movies</h2>

      {/* Filter component to search movies */}
      <Filter onFilter={handleFilter} />

      {/* Button to toggle add movie form */}
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? "Cancel Add" : "Add New Movie"}
      </button>

      {/* Conditionally render the add movie form */}
      {showAddForm && (
        <div
          style={{ margin: "20px", padding: "15px", border: "1px solid #eee" }}
        >
          <h3>Add New Movie</h3>

          {/* Inputs for adding new movie */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0-10)"
            value={newMovie.rating}
            onChange={handleInputChange}
          />

          {/* Button to add the new movie */}
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      )}

      {/* Display the list of movie cards */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
