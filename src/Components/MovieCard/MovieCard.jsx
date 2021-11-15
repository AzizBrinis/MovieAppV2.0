import React, { useState } from "react";
import "./MovieCard.css";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from "react-router-dom";



function MovieCard(props) {
    
    
    const [movieDetails,setMovieDetails] = useState(false)
    let imgstyling = { backgroundImage: "url(./13RW.jpg)" }
    imgstyling.backgroundImage = "url(" + props.posterURL + ")"

    
    
    
    return (
    
   
    // <Link to="/movie">
    <div className="styling" style={imgstyling} onClick={() => setMovieDetails(!movieDetails)}>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <span>{props.rating} <FontAwesomeIcon icon={faStar} /></span>
    {movieDetails && <Redirect to={`/movie/${props.id}`} />}
    </div>
    // </Link>
    
    
    )
}

export default MovieCard;