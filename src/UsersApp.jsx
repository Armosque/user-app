
import { UserModalForm } from "./components/UserModalForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";




export function UsersApp() {
  const {
    users,
    userSelected,
    initialUsersForm,
    visibleForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
    handlerOpenForm,
    handlerCloseForm
  
  
  } = useUsers();

  
  return (
    <>
      {!visibleForm || 
        <UserModalForm 
          userSelected={userSelected}
          initialUsersForm={initialUsersForm}
          handlerAddUser={handlerAddUser}
          handlerCloseForm={handlerCloseForm}
        />
      }

      <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
          
          {/* {!visibleForm ||
            <div className="col">
              <FormUser 
                handler={handlerAddUser}
                initialUsersForm={initialUsersForm}
                userSelected={userSelected}
                handlerCloseForm={handlerCloseForm}
                />
            </div>
          } */}
          
          <div className="col">
            {visibleForm ||
              <button 
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}>Nuevo usuario</button>
            }
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
  </>
  )

}


