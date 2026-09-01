// ^UseEffect & Fecth.
// ^Como bien sabemos por cursos anteriores el Fecth asi en JavaScript como en React es una forma de hacer peticiones a un servidor, donde comunmente para este caso se implementan funciones de tipo async y await, para poder esperar a que la respuesta del servidor llegue y poder trabajar con ella, para una vez recibida la informacion transformarla en un objeto de tipo JSON y poder trabajar con ella. Por lo que ahora ien, useEffect al igual que useState es un Hook el cual nos permite que al realizar acciones en los componentes como inicializarlos, modificarlos o haiga una accion en una de las dependencias ocaciones que dicho hook unicamente lo ejecutara una vez, por lo que es muy util para este tipo de casos donde queremos hacer una peticion a un servidor y obtener la informacion de este para poder trabajar con ella. Por lo que de manera mas simple podemos decir quye useEffec es un Hook el cual nos permite ejecutar ciertas partes de nuestros componentes una unica vez, esto debido a que por ejemplo cuando actualizamos un estado de un componente este se vuelve a renderizar y por ende vuelve a ejecutar todo el componente, por lo que si tenemos un fecth dentro de este se volvera a ejecutar y no es lo que queremos, por lo que useEffect nos permite ejecutar ese fecth una unica vez y asi poder trabajar con la informacion obtenida de este. Ademas es importante mencionar que pese a solamente mostrar una unica cosa dentor de useeffect avreces las consolas mostraran 2 pero esto tiene que ver con el StrictMode de React, el cual es un modo de desarrollo que ayuda a identificar problemas potenciales en la aplicación, por lo que al estar en este modo algunas funciones se ejecutan dos veces para poder detectar errores y advertencias en el código, por lo que si vemos que algo se ejecuta dos veces no es un error sino una caracteristica del StrictMode de React.
// ~Importacion de useEffect.
// ~Ahora bien como se menciono previamente useEffect es un Hook, por lo que como bien sabemos los Hooks se importan desde la libreria de React, por lo que para poder ser utilizado primero debera ser importado para una vez importado poder utilizar useEffect dentro de nuestros componentes.
import { useEffect } from "react";

// ~Uso e implementacion de useEffect.
// ~Ahora bien useEffect es un Hook de tipo funcion, lo que quiere decir que su estructura es: 'useEffect(() => {}, [])', donde como podemos ver esta conformado de dos partes fundamentales las cuales son las llaves y los corchetes, donde las llaves son la parte de la funcion que se ejecutara una unica vez, por lo que dentro de esta seccion llamaremos o ejecutaremos aquello que unicamente queremos que se ejecute una unica vez. Los corchetes son las dependencias que tendra dicha funcion, por lo que si no tiene dependencias esta funcion se ejecutara una unica vez, pero si tiene dependencias esta funcion se ejecutara cada vez que alguna de estas dependencias cambie. Esto quiere decir que dentro de useEffect podemos agregar dependencias las cuales son variables que al cambiar su valor se ejecutara nuevamente la funcion que esta dentro de useEffect, por lo que si no tenemos dependencias esta funcion se ejecutara una unica vez y si tenemos dependencias esta funcion se ejecutara cada vez que alguna de estas cambie su valor. Por lo que ojo a diferencia de por ejemplo useState que renderiza informacion cada vez que actualizamos su valor, useEffect no renderiza informacion, sino que ejecuta una funcion cada vez que alguna de sus dependencias cambie su valor, por lo que si no tiene dependencias esta funcion se ejecutara una unica vez por lo que si no tenemos dependencias deberemos recargar la pagina para que se ejecute nuevamente.
export const ComponenteConUseEffect= () => {
    const fecthUser = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = response.json();
            console.log(data);
        } catch(error) {
            console.warn(error); 
        }
    }

    useEffect(() => {
        fecthUser();
    }, [])

    return (
        <></>
    )
}

// ~Ejemplo de implementacion de useEffect y fecth.
// ~
import { useState } from "react";
export const ComponenteUsuarios= () => {
    const [users, setUsers] = useState([]);

    const fecthUser = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch(error) {
            console.warn(error); 
        }
    }

    useEffect(() => {
        fecthUser();
    }, [])

    return (
        <>
            <h1>Lista de usuario</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}
