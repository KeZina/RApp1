import React from 'react';

const Main = ({parsedNote, setShouldUpdate}) => {
    const handleRemove = e => {
        localStorage.removeItem(e.target.id);
        setShouldUpdate(true);
    }
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