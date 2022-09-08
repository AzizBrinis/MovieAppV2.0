import React, { Fragment } from "react";
import MovieList from "./Components/MovieList/MovieList";
import { serie1, serie2 } from "./Components/Series";
import { Route } from "react-router-dom";
import "./App.css";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  const series = [...serie1, ...serie2];

  const newMovieToAdd = (theMovie) => {
    series.push(theMovie);
  };

  return (
    <Fragment>
      <Route path="/">
        <div>
          <h1>MovieApp</h1>
          <MovieList
            name="Trending Now"
            films={serie1}
            adding={true}
            newMovieToAdd={newMovieToAdd}
          />
          <MovieList name="Animation" films={serie2} adding={false} />
        </div>
      </Route>
      <Route path="/movie/:id">
        <MovieDetails series={series} />
      </Route>
    </Fragment>
  );
}

export default App;
