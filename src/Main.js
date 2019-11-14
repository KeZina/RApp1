import React, { useState, useEffect } from 'react';

const Main = () => {
    const [parsedNote, setParsedNote] = useState([]);
    const handleRemove = e => {
        localStorage.removeItem(e.target.id)
    }
    // useEffect(() => {
    //     setParsedNote(Object.values(localStorage).map(item => JSON.parse(item)));
    // })

    return(
        <>
            {parsedNote.map(item => {
                return(
                    <div className = "main-container">
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