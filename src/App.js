import React, { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const storedLogedInUserInfo = localStorage.getItem('isLoggedIn')

        if (storedLogedInUserInfo === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    // eslint-disable-next-line no-unused-vars
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn', '0')
    }

    return (
        <>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </>
    )
}

export default App
