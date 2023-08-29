export const UserDetail=({handlerDeleteUser,handlerUserSelected, id, username, email, password}) =>{

    const onDeleteUser = (id) =>{
        handlerDeleteUser(id)
    }

    const onUserSelected = (user) =>{
        handlerUserSelected(user)
    }

    return (
        <tr >
        <td>{id}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>
            <button 
                className="btn btn-secondary bt-sm" 
                type="button" 
                onClick={()=>onUserSelected({id, username, email})}
                >
                    Update
            </button>
        </td>
        <td>
            <button className="btn btn-danger bt-sm"  type="button"
            onClick={()=>onDeleteUser(id)}>Delete</button>
        </td>
    </tr>
    )
}