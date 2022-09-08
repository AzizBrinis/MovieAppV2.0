import React, { useState } from "react";
import AddingCard from "../AddingCard/AddingCard";
import Filter from "../Filter/Filter";
import MovieCard from "../MovieCard/MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MovieList.css";

function MovieList(props) {
  const [film, setFilm] = useState(props.films);
  const [show, setShow] = useState(false);
  const [addTo, setAddTo] = useState(true);
  const [newAdd, setNewAdd] = useState({});

  const showAdd = () => {
    setShow(!show);
  };
  function tryme(a) {
    setFilm((prev) => [...prev, a]);
    props.newMovieToAdd(a);
    setAddTo(!addTo);
    setNewAdd(a);
  }
  function getNewList(newValue) {
    setFilm(newValue);
  }

  return (
    <div className="spacePlease">
      <div className="sideToSide">
        <h4>{props.name}</h4>
        {props.adding && (
          <Filter
            addto={addTo}
            list={newAdd}
            showme={props.adding}
            goGetIt={getNewList}
          />
        )}
      </div>
      <div className="AddingDiv">
        <div>
          {props.adding && !show && (
            <div onClick={showAdd}>
              <AddingCard addingOptions={true} onadd={tryme} />
            </div>
          )}
          {show && props.adding && (
            <AddingCard addingOptions={false} onadd={tryme} show={showAdd} />
          )}
        </div>
        <div
          className="position"
          style={film.length > 5 ? { flexWrap: "wrap" } : null}
        >
          {/* {props.adding && <AddingCard />} */}
          {/* {props.adding && <span onClick={showAdd}>+</span>} */}

          {film.map((x) => (
            <MovieCard
              key={uuidv4()}
              name={x.name}
              description={x.description}
              rating={x.rating}
              posterURL={x.posterURL}
              id={x.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
