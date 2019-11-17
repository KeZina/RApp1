import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_NOTE } from './action';

const AddPost = ({setTrigger}) => {

    const notesState = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(notesState)

    const handleSubmit = e => {
        e.preventDefault();
        const formValues = {
            title: e.target.children[0].children[1].value,
            priority: e.target.children[1].children[1].value || 0,
            note: e.target.children[2].children[1].value,
            
        }
        localStorage.setItem(formValues.title, JSON.stringify(formValues));
        dispatch(ADD_NOTE(formValues));
        setTrigger(false);
    }

    return(
        <div id = "add-post-container">
            <div id = "add-post-subcontainer">
                <button id = "add-post-close" onClick = {() => setTrigger(false)}>X</button>
                <form id = "add-post-form" onSubmit = {handleSubmit}>
                    <label>
                        <h2>Title:</h2>
                        <input type = 'text' className = "add-post-inner" maxLength = "60" placeholder = "Title of note" required />
                    </label>
                    <label>
                        <h2>Priority:</h2>
                        <input type = 'text' className = "add-post-inner" maxLength = "3" id = "add-post-priority" placeholder = "Priority number" />
                    </label>
                    <label>
                        <h2>Note:</h2>
                        <textarea id = "add-post-post" className = "add-post-inner"  placeholder = "Write note here" required/>
                    </label>
                    <button type = "submit" id = "add-post-submit">Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default AddPost