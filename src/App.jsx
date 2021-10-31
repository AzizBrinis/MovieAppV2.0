import React from "react";
import MovieList from "./Components/MovieList/MovieList";
import {serie1,serie2} from "./Components/Series";

function App() {

  return (
    <div>
      <h1>MovieApp</h1>
      <MovieList name="Trending Now" films={serie1} adding={true} />
      <MovieList name="Animation" films={serie2} adding={false} />
    </div>
  );
}

export default App;
