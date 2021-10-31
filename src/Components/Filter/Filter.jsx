import React, { useState } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPercentage } from '@fortawesome/free-solid-svg-icons';
import { serie1, serie2 } from "../Series";



function Filter(props) {
    // const [filtred,setFiltred] = useState([]);
    let result = [];
    const [verFilter,setVerFilter] = useState(false);
    const [list,setList] = useState([...serie1,...serie2]);
    const [newValue,setNewValue] = useState("");
    const [rating,setRating] = useState(0);
    const [add2,setAdd2] = useState(true);
    


    function toggleFilter() {
        setVerFilter(!verFilter);
        
    }
    function saveValue(event) {
        let changeVal = event.target.value;
        setNewValue(changeVal);
        
        
    }
    function saveRating(event) {
        let changeVal = event.target.value;
        setRating(changeVal);
        
        
    }
    
    if (props.addto !== add2) {
        setAdd2(!add2);
        setList(prev => [...prev,props.list])
        
    }

    function filterNow() {
        // setList(prev => [...prev,...props.list]);
        // console.log(list);
        if (newValue !== "" && rating !== 0 ) {
            result = list.filter(x => (x.name.toUpperCase() === newValue.toUpperCase() && x.rating >= rating ))
        } else if (newValue !== "") {
        result = list.filter(x => (x.name.toUpperCase() === newValue.toUpperCase()))
        } else if (rating !== "" ) {
            result = list.filter(x => (x.rating >= rating ))
        }
        props.goGetIt(result);
        // setNewValue("")
        
        
        // console.log(list[1].name.toUpperCase());
        // console.log(newValue.toUpperCase());
        // console.log(filtred)
        // setFiltred(list.filter(x => x.name.toUpperCase() === newValue.toUpperCase()));
        // props.goGetIt(filtred);
        setNewValue("");
        setRating(0);
    }
    
    return ( <div className="Spacewithflex">
        {props.showme && <h5 className="buttonBorder marg" onClick={toggleFilter}>Filter</h5> }
        {verFilter && <h3 className="marg fixspace" >Title : </h3>}
        {verFilter && <input type="text" onChange={saveValue} value={newValue} name="Title" className="marg" />}
        {verFilter && <h3 className="marg fixspace" >Rating : </h3>}
        {verFilter && <input type="number" name="Rating" className="marg sizeit" onChange={saveRating} value={rating} />}
        {verFilter && <span className="specialMarg" ><FontAwesomeIcon icon={faPercentage} /></span>}
        {verFilter && <span onClick={filterNow} className="marg searchIcon" ><FontAwesomeIcon icon={faSearch} /></span>}
        
    </div> )
    
}

export default Filter;