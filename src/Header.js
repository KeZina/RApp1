import React from 'react';
import AddPost from './AddPost.js'

const Header = ({trigger, setTrigger, setShouldUpdate}) => {
    return(
        <>
            <div id = "header-container">
                <h1 id = "header-title">My notes:</h1> 
                <div id = "header-subcontainer">
                    <button className = "header-buttons" onClick = {() => setTrigger(!trigger)}>
                        Add note
                    </button>
                    <button className = "header-buttons">
                        Sort by:
                    </button>
                    <select className = "header-buttons">
                        <option>Date</option>
                        <option>Priority</option>
                    </select>
                </div>
            </div>
            {trigger && <AddPost trigger = {trigger} setTrigger = {setTrigger} setShouldUpdate = {setShouldUpdate} />}
        </>
    )
}
export default Header