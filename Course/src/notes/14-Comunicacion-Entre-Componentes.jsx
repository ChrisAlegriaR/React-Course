// ^Comuniocación entre componentes.
// ^

import { useState } from "react";

function Item({nombre, edad}) {
    return (
        <>
            <li>{nombre} de {edad} años.</li>
        </>
    );
}

function ComponenteHijo({setDatos}) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);
    const actualizarNombre = (event) => {setNombre(event.target.value)}
    const actulizarEdad = (event) => {setEdad(event.target.value)}
    const enviarFormulario = (event) => {
        event.preventDefault();
        setDatos((listaAnterior) => [...listaAnterior, {nombre: nombre, edad: edad}])
    }

    return (
        <form onSubmit={enviarFormulario}>
            <label>Nombre: </label>
            <input type="text" placeholder="Ingresa tu nombre." onChange={actualizarNombre}/><br />
            <label>Edad: </label>
            <input type="number" max={100} min={2} placeholder="Ingresa tu edad." onChange={actulizarEdad}/><br />
            <button>Enviar</button>
        </form>
    );
}

function ComponentePadre(){
    const [datos, setDatos] = useState([]);
    return (
        <>
            <h1>Comunicación entre componentes.</h1>
            <ComponenteHijo setDatos={setDatos}/>
            <ul>
                {datos.map(item => <Item nombre={item.nombre} edad={item.edad} key={item.nombre}/>)}
            </ul>
        </>
    );
}

export default ComponentePadre;