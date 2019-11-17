import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Main from './Main';

const Layout = () => {

    let parsedNote = Object.values(localStorage).map(item => JSON.parse(item))


    return (
        <>
            <Header />
            <Main />
        </>
    )
}




export default Layout;