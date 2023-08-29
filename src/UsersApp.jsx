import { FormUser } from "./components/FormUser";
import { UsersList } from "./components/UsersList";
import { useReducer, useState } from "react";
import {usersReducer} from "./reducers/usersReducer";
import { useUsers } from "./hooks/useUsers";




export function UsersApp() {
  const {
    users,
    userSelected,
    setUserSelected,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
    initialUsersForm
  } = useUsers();

  
  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <FormUser 
            handler={handlerAddUser}
            initialUsersForm={initialUsersForm}
            userSelected={userSelected}
            />
        </div>
        <div className="col">
          {
            users.length === 0? <div className="alert alert-info" role="alert">No hay usuarios en el sistema!</div> :
          <UsersList 
            users={users} 
            handlerDeleteUser={handlerDeleteUser} 
            handlerUserSelected={handlerUserSelected}
            />
          }
        </div>
      </div>
    </div>
  )

}


