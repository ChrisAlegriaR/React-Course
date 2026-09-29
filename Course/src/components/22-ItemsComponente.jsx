export const ItemsComponente = ({itemUsuario}) => {
    return (
        <tr>
            <th scope="row">{itemUsuario.id}</th>
            <td>{itemUsuario.name}</td>
            <td>{itemUsuario.email}</td>
            <td>{itemUsuario.website}</td>
        </tr>
    )
}
