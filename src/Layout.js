import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';

const Layout = () => {
    const [trigger, setTrigger] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    let parsedNote = [];
    
    useEffect(() => {
        setShouldUpdate(false);
        parsedNote = Object.values(localStorage).map(item => JSON.parse(item));
        console.log(parsedNote)
    }, [shouldUpdate])

    return (
        <>
            <Header trigger = {trigger} setTrigger = {setTrigger} setShouldUpdate = {setShouldUpdate} />
            {(parsedNote.length > 0) && <Main parsedNote = {parsedNote} setShouldUpdate = {setShouldUpdate} />}
        </>
    )
}

export default Layout;