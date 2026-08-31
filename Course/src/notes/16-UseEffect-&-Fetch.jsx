// ^UseEffect & Fecth
// ^
import { useState } from "react";

export const ComponenteUsuarios= () => {
    const [users, setUsers] = useState([]);

    const fecthUser = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = response.json();
        } catch(error) {
            console.warn(error); 
        }
    }

    fecthUser();
    return (
        <>
            <h1>Lista de usuario</h1>
            <ul>
                <li>Chris</li>
                <li>Jesus</li>
            </ul>
        </>
    )
}
