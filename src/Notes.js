import React, { useState } from 'react';

const Notes = ({item, handleRemove}) => {

    const [trigger, setTrigger] = useState(false);

    return (
        <div className = "main-container" key = {item.title}>
            <div className = "main-items">
                <div className = "main-priority">
                    <i style = {{display: "inline-block", width: "2vw"}}>{item.priority}</i>
                </div>
                <h4>
                    {item.title}
                </h4>
                <div className = "main-date-container">
                    <h6 className = "main-date-h6">{`${new Date(item.date).getDate()}.${new Date(item.date).getMonth() + 1}.${new Date(item.date).getFullYear()}`}</h6>
                    <h6 className = "main-date-h6">{`${new Date(item.date).getHours()}:${new Date(item.date).getMinutes()}:${new Date(item.date).getSeconds()}`}</h6>
                </div>
                {trigger && <p>{item.note}</p>}
                <div>
                    <button id = {item.title} className = "main-button" onClick = {handleRemove}>
                        Remove note
                    </button>
                </div>
                <div>
                    <button className = "main-button" onClick = {() => setTrigger(!trigger)}>
                        {!trigger ? "Show note" : "Hide note"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notes