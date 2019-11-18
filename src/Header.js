import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddPost from './AddPost';
import { DATE_SORTING, PRIORITY_SORTING } from './action';

const Header = () => {

    const [trigger, setTrigger] = useState(false);
    const [selectSorting, setSelectSorting] = useState("By Date");
    
    const dispatch = useDispatch();

    const handleSort = () => {
        selectSorting === "By Date" ? dispatch(DATE_SORTING()) : dispatch(PRIORITY_SORTING());
    }

    return(
        <>
            <div id = "header-container">
                <h1 id = "header-title">My notes:</h1> 
                <div id = "header-subcontainer">
                    <button className = "header-buttons" onClick = {() => setTrigger(true)}>
                        Add note    
                    </button>
                    <button className = "header-buttons" onClick = {handleSort}>
                        Sort
                    </button>
                    <select className = "header-buttons" onChange = {(e) => setSelectSorting(e.target.value)} defaultValue = "By Date" >
                        <option value = "By Date">By Date</option>
                        <option value = "By Priority">By Priority</option>
                    </select>
                </div>
            </div>
            {trigger && <AddPost setTrigger = {setTrigger} />}
        </>
    )
}
export default Header