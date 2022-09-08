import React, { useState } from "react";
import "./MovieDetails.css";
import { useParams, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = (props) => {
  const [exit, setExit] = useState(false);
  const params = useParams();
  let selectedQuote = props.series.find((film) => film.id === params.id);
  return (
    <div className="MovieDetails">
      <div className="fixPos">
        <h1 style={{ width: "auto" }}>{selectedQuote.name}</h1>
        <h1 style={{ width: "50px" }} onClick={() => setExit(true)}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </h1>
      </div>

      <iframe
        width="800"
        height="400"
        src={selectedQuote.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 style={{ marginTop: "50px", textAlign: "start", marginLeft: "50px" }}>
        Description :{" "}
      </h2>
      <h3 style={{ marginLeft: "50px", textAlign: "start" }}>
        {selectedQuote.description}
      </h3>
      {exit && <Redirect to="/" />}
    </div>
  );
};

export default MovieDetails;
