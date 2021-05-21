import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModel from '../UI/ErrorModal'

const AddUser = ({ onAddUser }) => {
    const [enteredUsername, setEnteredUsername] = useState()
    const [enteredUserAge, setEnteredUserAge] = useState()

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (enteredUsername.trim().lenght === 0 || enteredUsername.trim().lenght === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.'
            })
            return
        }

        /* + make sure if it is a number too. */
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }

        onAddUser(enteredUsername, enteredUserAge)

        setEnteredUsername('')
        setEnteredUserAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && (
                <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredUserAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
