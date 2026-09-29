import { useFecth } from "../hooks/22-UseFetech"
import { ItemsComponente } from "./22-ItemsComponente";

export const UsuariosComponente = () => {
    const data = useFecth();
    return (
        <>
            <h1>Lista de usuarios</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => <ItemsComponente itemUsuario={item} key={item.id}/>)}
                </tbody>
            </table>
        </>
    )
}

// https://jsonplaceholder.typicode.com/users