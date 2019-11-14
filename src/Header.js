import React, {useState, useEffect} from 'react';
import AddPost from './AddPost.js'

const Header = () => {
    const [trigger, setTrigger] = useState(false)

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
            {trigger && <AddPost setTrigger = {setTrigger} />}
        </>
    )
}
export default Header