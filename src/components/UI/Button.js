import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, onClick, children }) => {
    return (
        /* default type button if in parent the button type is not being set */
        <button className={classes.button} type={type || 'button'} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
