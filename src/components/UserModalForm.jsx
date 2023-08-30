import { FormUser } from "../components/FormUser";

export function UserModalForm({handlerAddUser, initialUsersForm, userSelected, handlerCloseForm}){



    return(
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={ {display: 'block'}} tabIndex='-1'>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userSelected.id > 0 ? 'Editar' : 'Crear'}
                            </h5>
                        </div>
                        <div className="modal-body">
                            <FormUser 
                            handlerAddUser={handlerAddUser}
                            initialUsersForm={initialUsersForm}
                            userSelected={userSelected}
                            handlerCloseForm={handlerCloseForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}