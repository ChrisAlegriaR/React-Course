import { useState } from "react"

export default function ComponenteFormulario() {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const { userName, email, password} = useState; //*Agregar que se pueden declarar en un usestate diferntes valores y desestructurarlo para mediante el usop del state del objeto actualizar mediane su set cualquiervalor

    const inputChange = (event) => { //*Agregar que se puede leer desde el event quien ejecuta la funcion en el evento
        console.log(event.target.name);
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input type="text" className="form-control" name="userName" placeholder="Enter tour user name" onChange={inputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={inputChange}/>
                <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={inputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}