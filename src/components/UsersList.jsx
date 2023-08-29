import {UserDetail} from './UserDetail'
export function UsersList({handlerDeleteUser,handlerUserSelected, users=[]}) {
    return (
        <>
            
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map(({id, username, email}) => (
                        <UserDetail 
                        key={id} 
                        id={id}
                        username={username} 
                        email={email}
                        handlerDeleteUser={handlerDeleteUser}
                        handlerUserSelected={handlerUserSelected}
                        />
                    ))}
                </tbody>
            </table> 
        </>
    )
}