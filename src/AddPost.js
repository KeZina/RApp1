import React from 'react';

const AddPost = ({trigger, setTrigger, setShouldUpdate}) => {
    const handleSubmit = e => {
        e.preventDefault();
        const formValues = {
            title: e.target.children[0].children[1].value,
            priority: e.target.children[1].children[1].value,
            note: e.target.children[2].children[1].value,
        }
        localStorage.setItem(formValues.title, JSON.stringify(formValues));
        setShouldUpdate(true);
        setTrigger(!trigger);
    }

    return(
        <div id = "add-post-container">
            <div id = "add-post-subcontainer">
                <button id = "add-post-close" onClick = {() => setTrigger(!trigger)}>X</button>
                <form id = "add-post-form" onSubmit = {handleSubmit}>
                    <label>
                        <h2>Title:</h2>
                        <input type = 'text' className = "add-post-inner" maxLength = "60" placeholder = "Title of note" required />
                    </label>
                    <label>
                        <h2>Priority:</h2>
                        <input type = 'text' className = "add-post-inner" id = "add-post-priority" maxLength = "3" placeholder = "Priority number" />
                    </label>
                    <label>
                        <h2>Note:</h2>
                        <textarea className = "add-post-inner" id = "add-post-post" placeholder = "Write note here" required/>
                    </label>
                    <button type = "submit" id = "add-post-submit">Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default AddPost