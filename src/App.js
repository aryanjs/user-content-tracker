import React, { useState } from 'react'

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
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

export default App
