import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [])

  return (
    <div>
      <h2>Lista de Usuarios Fetch</h2>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name} - {user.address.city}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList;