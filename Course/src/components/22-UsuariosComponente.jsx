import { useFetch } from "../hooks/22-UseFetch"
import { ItemsComponente } from "./22-ItemsComponente";

export const UsuariosComponente = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    return (
        <>
            <h1>Lista de usuarios</h1>
            {isLoading ? <h4>Cargando...</h4> :
            errors ? <h4>Ha ocurrido un error {errors}</h4> :
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
                        {data.map(item => <ItemsComponente itemUsuario={item} key={item.id} />)}
                    </tbody>
                </table>
            }
        </>
    )
}