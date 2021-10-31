import React, { useState } from "react";
import "./AddingCard.css";

function AddingCard(props) {
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


    
    function submitMod() {
        props.onadd(newfilm)
        setNewfilm({
            name : "",
            description : "",
            rating : "",
            posterURL : ""
        })

    }
    
    return (<div className="stylingAdd" >
        {props.addingOptions && <h1 className="plusModifications">+</h1> }
        {!props.addingOptions && <div className="newPosition">
        <div className="placingIt"><h3>Title </h3>
        <input type="text" name="name" value={newfilm.name} onChange={sendvalue} /></div>
        <div className="placingIt"><h3>Description </h3>
        <input type="text" name="description" value={newfilm.description} onChange={sendvalue} /></div>
        <div className="placingIt"><h3>Rating </h3>
        <input type="text" name="rating" onChange={sendvalue} value={newfilm.rating} /></div>
        <div className="placingIt"><h3>Image </h3>
        <input type="text" name="posterURL" value={newfilm.posterURL} onChange={sendvalue} /></div>
        <div className="AddButton"><span className="BorderStyle" onClick={submitMod}>Add</span></div>
        </div>}
        
    </div>)
}

export default AddingCard;