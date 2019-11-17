import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_NOTE } from './action';

const Main = () => {

    const notesState = useSelector(state => state);
    const dispatch = useDispatch();

    const handleRemove = e => {
        localStorage.removeItem(e.target.id);
        dispatch(REMOVE_NOTE(e.target.id))
    }

    
    return(
        <>
            {notesState.map(item => {
                return(
                    <div className = "main-container" key = {item.title}>
                        <div className = "main-items">
                            <div className = "main-priority">
                                <button className = "main-priority-inc-dec">-</button>
                                <i style = {{margin: "0, .4vw"}}>{item.priority}</i>
                                <button className = "main-priority-inc-dec">+</button>
                            </div>
                            <h4>
                                {item.title}
                            </h4>
                            <p>
                                {item.note}
                            </p>
                            <div>
                                <button id = {item.title} className = "main-button" onClick = {handleRemove}>
                                    Remove note
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Main