import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
export function FormUser({initialUsersForm,handlerAddUser, userSelected, handlerCloseForm}) {


    const [form, setform] = useState(initialUsersForm)
    const {id, username,email,password} = form

    useEffect(() => {
        
            setform({...userSelected})
    
    }, [userSelected]);
    const onInputChange = ({target}) =>{
        const {name, value} = target
        setform({
            ...form,
            [name]: value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!username || !email || (!password && id === 0)){

            Swal.fire(
                'Error de validación!',
                'Debes completar todos los campos!',
                'error'
            )
        
            return
        }
        //console.log('Enviando formulario')
        // Guardar el user form  en el listado de users
        handlerAddUser(form)
        setform(initialUsersForm)

    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                className="form-control my-3 w-75" 
                placeholder="Username" 
                name="username"
                type="text"
                value={username}
                onChange={onInputChange}/>

            <input 
                className="form-control my-3 w-75" 
                placeholder="Email" 
                name="email"
                type="text"
                value={email}
                onChange={onInputChange}/>

            {id >0 ||

            <input 
                className="form-control my-3 w-75"
                placeholder="Password" 
                name="password"
                type="password"
                value={password}
                onChange={onInputChange}/>}

            <input type="hidden" name="id" value={id} />
            <button className="btn btn-primary" type="submit">
                {id >0 ? 'Editar' : 'Crear'}
            </button>
            <button 
                className="btn btn-success mx-2" 
                type="button"
                onClick={handlerCloseForm}>Cerrar</button>

        </form>
    )
}