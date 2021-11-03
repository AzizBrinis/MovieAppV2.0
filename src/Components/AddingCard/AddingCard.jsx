import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReactStars from "react-rating-stars-component";

import "./AddingCard.css";

function AddingCard(props) {
    const [star,setStar] = useState(0);
    const [newfilm,setNewfilm] = useState({
        name : "",
        description : "",
        rating : "",
        posterURL: ""
    })
    function sendvalue(event) {
        const {name,value} = event.target;
        setNewfilm(prev =>{return {...prev,[name] : value}} )

    }

    const ratingChanged = (newRating) => {
        
        setNewfilm(prev =>{return {...prev,rating : newRating}} );
        setStar(newRating);
      };
    
    function submitMod() {
        if (newfilm.name.length === 0 || newfilm.description.length === 0 || newfilm.rating.length === 0 || newfilm.posterURL.length === 0 ) {
            alert("Erreur : fill all inputs please")
        } else {
            
            props.onadd(newfilm)
        setNewfilm({
            name : "",
            description : "",
            rating : "",
            posterURL : ""
        })
        setStar(0);
        }


    }
    
    // let testme = false;
    return (<div className="stylingAdd" >
        {props.addingOptions && <h1 className="plusModifications">+</h1> }
        {!props.addingOptions && <div className="newPosition">
        <div className="placingIt"><h3>Title </h3>
        <input type="text" name="name" value={newfilm.name} onChange={sendvalue} /></div>
        <div className="placingIt"><h3>Description </h3>
        <input type="text" name="description" value={newfilm.description} onChange={sendvalue} /></div>
        {/* <div className="placingIt"><h3>Rating </h3>
        <input type="text" name="rating" onChange={sendvalue} value={newfilm.rating} /></div> */}
        <div className="placingItR"><h3>Rating </h3>
        {/* <div className="fixingStars">
        <span className="astar" onMouseEnter={() => b+1} style={{opacity : "0.6"}}><FontAwesomeIcon icon={faStar} /></span>
        <span className="astar" onMouseEnter={() => b+2} style={b>1 ? {opacity : "0.6"} : null }><FontAwesomeIcon icon={faStar} /></span>
        <span className="astar" onMouseEnter={() => b+3} style={b>2 ? {opacity : "0.6"} : null }><FontAwesomeIcon icon={faStar} /></span>
        <span className="astar" onMouseEnter={() => b+4} style={b>3 ? {opacity : "0.6"} : null }><FontAwesomeIcon icon={faStar} /></span>
        <span className="astar" onMouseEnter={() => b+5} style={b>4 ? {opacity : "0.6"} : null }><FontAwesomeIcon icon={faStar} /></span></div></div> */}
        <div className="fixingStars"><ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    value={star}
    emptyIcon={<i className="far fa-star"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
    color="white"
  /> </div></div>
        <div className="placingIt"><h3>Image </h3>
        <input type="text" name="posterURL" value={newfilm.posterURL} onChange={sendvalue} /></div>
        <div className="AddButton"><span className="BorderStyle" onClick={submitMod}>Add</span></div>
        </div>}
        
    </div>)
}

export default AddingCard;