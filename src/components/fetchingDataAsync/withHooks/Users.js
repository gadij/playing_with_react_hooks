import React, { useEffect, useState } from "react";
import { getUsers } from '../../../server/Users_data'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function handleGetIUsers() {
            const result = await getUsers();
            console.log(result);
            setUsers(result);
        }
        handleGetIUsers();
    }, []);

    return (
        <div className='text__wrapper'>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
