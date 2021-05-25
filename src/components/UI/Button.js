import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, customClass, onClick, children }) => {
    return (
        <button
            className={`${classes.button}  ${customClass}`}
            type={type || 'button'}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
