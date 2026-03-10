import User from "./User"

const UsersList = ({users, setUsers}) => {
    return (
        <div>
            <h1>Users List:</h1>
            <p>
                {users.map((user) => {
                    return <User user={user}/>
                })}
            </p>
        </div>
    )
}

export default UsersList