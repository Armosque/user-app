import {useReducer, useState} from 'react';
import {usersReducer} from '../reducers/usersReducer';
import Swal from 'sweetalert2';




const initialUsers = [
    { id: 1, 
        username: "John",
        email: "a@b.com",
        password:12345
    },
]
const initialUsersForm = {
    id:0,
    username:"",
    email:"",
    password:""
}
export function useUsers() {

    const [users, dispatch] = useReducer(usersReducer, initialUsers)
    const [userSelected, setUserSelected] = useState(initialUsersForm)
    const [visibleForm, setVisibleForm] = useState(false)

    const handlerAddUser = (user) => {
        //console.log(user);
        dispatch({
            type:(user.id === 0) ? 'AddUser' : 'UpdateUser',
            payload: user
        })
        Swal.fire(
            (user.id === 0) ? 
                'Usuario Creado!' :
                'Usuario Actualizado!',
            (user.id === 0) ? 
                'El usuario se ha creado con éxito!' : 
                'El usuario se ha actualizado con éxito!',
            'success'
        )
        setVisibleForm(false)
        setUserSelected(initialUsersForm)
    }
    const handlerDeleteUser = (id) => {
        //console.log(id);
        dispatch({
            type: 'DeleteUser',
            payload: id
        })
        Swal.fire({
            title: 'Estás seguro de eliminar este usuario?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Usuario eliminado!',
                    'Usuario eliminado con éxito!',
                    'success'
                )
            }
        })
    }
    const handlerUserSelected = (user) =>{
        //console.log(user);
        setVisibleForm(true)
        setUserSelected({...user})
    }
    const handlerOpenForm = () =>{
        setVisibleForm(true)
    }
    const handlerCloseForm = () =>{
        setVisibleForm(false)
        setUserSelected(initialUsersForm)
    }
    return {
        users,
        userSelected,
        setUserSelected,
        visibleForm,
        handlerAddUser,
        handlerDeleteUser,
        handlerUserSelected,
        initialUsersForm,
        handlerOpenForm,
        handlerCloseForm
    }

    
}
