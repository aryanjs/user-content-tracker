import React, { useState } from 'react'

import AddUser from '../Users/AddUser'
import UsersList from '../Users/UsersList'

const Home = () => {
    const [usersList, setUsersList] = useState([])

    const addUserHandler = (uName, uAge) => {
        setUsersList((perevUsersList) => {
            return [
                ...perevUsersList,
                {
                    name: uName,
                    age: uAge,
                    id: Math.random().toString(),
                    onDeleteButton: onDeleteButton
                }
            ]
        })
    }

    const onDeleteButton = (id) => {
        const newList = usersList.filter((item) => item.id !== id)
        setUsersList(newList)
    }
    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            {usersList.length !== 0 ? (
                <UsersList users={usersList} />
            ) : (
                <div className="users-list-empty">Users list is empty</div>
            )}
        </>
    )
}

export default Home
