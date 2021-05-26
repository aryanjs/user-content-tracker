import React from 'react'

import classes from './Button.module.css'

const Button = ({ type, customClass, onClick, children, disabled }) => {
    return (
        <button
            className={`${classes.button}  ${customClass}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
