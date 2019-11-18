import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_NOTE } from './action';
import Notes from './Notes';

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
                    <Notes key = {item.title} item = {item} handleRemove = {handleRemove} />
                )
            })}
        </>
    )
}

export default Main