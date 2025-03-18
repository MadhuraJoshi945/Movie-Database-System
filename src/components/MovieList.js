// src/components/MovieList.js
import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <div>
      <h2>Movie List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "200px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{movie.movie}</h3>
            <p>Rating: {movie.rating}</p>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
