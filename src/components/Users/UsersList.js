import React from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './UsersList.module.css'

const UsersList = ({ users }) => {
    return (
        <Card className={classes.users}>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <span className="content">
                            {user.name} is {user.age} years old.
                        </span>
                        <Button customClass="button" onClick={user.onDeleteButton}>
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList
