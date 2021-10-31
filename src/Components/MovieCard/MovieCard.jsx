import React from "react";
import "./MovieCard.css";



function MovieCard(props) {
    let imgstyling = { backgroundImage: "url(./13RW.jpg)" }
    imgstyling.backgroundImage = "url(" + props.posterURL + ")"
    
    return (<div className="styling" style={imgstyling}>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <span>{props.rating}</span>

    </div>)
}

export default MovieCard;