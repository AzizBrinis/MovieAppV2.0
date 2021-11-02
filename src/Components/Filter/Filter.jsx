import React, { useState } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { serie1, serie2 } from "../Series";
import ReactStars from "react-rating-stars-component";



function Filter(props) {
    // const [filtred,setFiltred] = useState([]);
    let result = [];
    let changeVal = "";
    // const [verFilter,setVerFilter] = useState(false);
    const [list,setList] = useState([...serie1,...serie2]);
    const [newValue,setNewValue] = useState("");
    // const [rating,setRating] = useState(0);
    const [add2,setAdd2] = useState(true);
    // const [result,setResult] = useState([]);
    


    function userChose(num) {
        result = (list.filter(x => (Number(x.rating) === num )));
        console.log()
        props.goGetIt(result);
    }

    function saveValue(event) {
        changeVal = event.target.value;
        setNewValue(changeVal);
        result = (list.filter(x => (x.name.toUpperCase().includes(changeVal.toUpperCase()) ) ));

        props.goGetIt(result);
        

        
        
    }
    // function saveRating(event) {
    //     let changeVal = event.target.value;
    //     setRating(changeVal);
        
        
    // }
    
    if (props.addto !== add2) {
        setAdd2(!add2);
        setList(prev => [...prev,props.list])
        
    }
    

    // function filterNow() {
    //     if (newValue !== "" && rating !== 0 ) {
    //         result = list.filter(x => (x.name.toUpperCase() === newValue.toUpperCase() && x.rating >= rating ))
    //     } else if (newValue !== "") {
    //     result = list.filter(x => (x.name.toUpperCase() === newValue.toUpperCase()))
    //     } else if (rating !== "" ) {
    //         result = list.filter(x => (x.rating >= rating ))
    //     }
    //     props.goGetIt(result);
    //     setNewValue("");
    //     setRating(0);
    // }
    
    
    return ( <div className="Spacewithflex">
        {/* { && <h5 className="buttonBorder marg" onClick={toggleFilter}>Filter</h5> } */}
        {props.showme && <h3 className="marg fixspace" >Title : </h3>}
        {props.showme && <input type="text" onChange={saveValue} value={newValue} name="Title" className="marg" />}
        {props.showme && <h3 className="marg fixspace" >Rating : </h3>}
        {/* {props.showme && <input type="number" name="Rating" className="marg sizeit" onChange={saveRating} value={rating} />} */}
        {props.showme && <div className="fixfilterstar"><ReactStars count={5} onChange={userChose} size={24} emptyIcon={<i className="far fa-star"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" color="white" /></div>}
        {props.showme && <span  className="marg searchIcon" ><FontAwesomeIcon icon={faSearch} /></span>}
        
    </div> )
    
}

export default Filter;