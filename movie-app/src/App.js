import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList"; // Component to list all movies
import Filter from "./components/Filter"; // Component to filter and add movies
import MovieCard from "./components/MovieCard"; // (Imported but not used here)
import MovieDescription from "./components/MovieDescription"; // Component to show movie details
import "./App.css"; // Import CSS for styling

function App() {
  // Movies state with an initial list of movies
  const [movies, setMovies] = useState([
    {
      title: "Sausage Party",
      description:
        "A sausage leads a group of supermarket products on a journey to discover the truth about their existence and what really happens when they are picked off the shelf.",
      posterURL:
        "https://i.pinimg.com/474x/76/a2/f3/76a2f33fb46fe417cecfeaa1d57ef611.jpg",
      rating: 7,
    },
    {
      title: "Solo Leveling:Awekening",
      description:
        "Over a decade after 'gates' connecting worlds appeared, awakening 'hunters' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate",
      posterURL:
        "https://i.pinimg.com/474x/2d/3c/a5/2d3ca5ff4e05d486dac522d9ea28bc01.jpg",
      rating: 9,
    },
    {
      title: "Avengers:EndGame",
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterURL:
        "https://i.pinimg.com/474x/88/04/ee/8804ee76e489470454f315f7d0b4cff5.jpg",
      rating: 8,
    },
    {
      title: "Ronald The Barbarian",
      description:
        "The 100 Barbarian Sons of Krull get attacked by a superior force and captured. It's up to the young, weak but smart Ronal to free them. 3 join his dangerous quest.",
      posterURL:
        "https://i.pinimg.com/474x/60/64/72/606472e346dc3ed91d0154bea68dc414.jpg",
      rating: 9,
    },
  ]);

  // States to store the filter values
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  // Function to add a new movie to the movies list
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Spread existing movies and add the new one
  };

  // Apply filters to the movies list
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && // Filter by title
      movie.rating >= filterRate // Filter by minimum rating
  );

  return (
    <Router>
      <div className="App">
        {/* App Title */}
        <h1>🎬 My Movie App</h1>

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                {/* Filter component to search or add movies */}
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRate={setFilterRate}
                  addMovie={handleAddMovie}
                />
                {/* MovieList to display filtered movies */}
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          {/* Movie Description Page Route */}
          <Route
            path="/movie/:title" // Dynamic route based on movie title
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Export App component
