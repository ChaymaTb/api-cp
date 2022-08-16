import axios from "axios"
import { useEffect, useState } from "react"

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{setUsers(result.data)});
    }, [])
    return (
    <div className="user-card">
        {users.map((user,i)=> 
            <h2><span>{user.name}</span></h2>
        )}
    </div>
    )
}

export default UserList