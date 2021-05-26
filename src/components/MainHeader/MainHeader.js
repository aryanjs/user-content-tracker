import React from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = ({ isAuthenticated, onLogout }) => {
    return (
        <header className={classes['main-header']}>
            <h1>Header placeholder</h1>
            <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
        </header>
    )
}

export default MainHeader
