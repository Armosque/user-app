import {useReducer, useState} from 'react';
import {usersReducer} from '../reducers/usersReducer';




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

    const handlerAddUser = (user) => {
        //console.log(user);
        let type;
        if(user.id === 0){
            type = 'AddUser'
        }else{
            type = 'UpdateUser'
        }
        dispatch({
            type,
            payload: user
        })
    }
    const handlerDeleteUser = (id) => {
        //console.log(id);
        dispatch({
            type: 'DeleteUser',
            payload: id
        })
    }
    const handlerUserSelected = (user) =>{
        //console.log(user);
        setUserSelected({...user})
    }
    
    return {
        users,
        userSelected,
        setUserSelected,
        handlerAddUser,
        handlerDeleteUser,
        handlerUserSelected,
        initialUsersForm
    }

    
}
