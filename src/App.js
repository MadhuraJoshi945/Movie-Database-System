import React from "react";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>🎬 Movie Database</h1>
      <MovieList />
    </div>
  );
}

export default App;
