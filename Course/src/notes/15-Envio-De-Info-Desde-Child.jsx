// ^Envio de Información desde child.
// ^Como bien se vio previamente ahora sabemos que los componentes padres pueden pasar mediante propiedades (props) informacion a los componentes hijos para que estos la utilicen e inlcuso ejecuten, modifiquen, agreguen... a la info padre. Pero ahora bien, dentro de React tambien podemos hacer totalmente lo contrario haciendo que los componentes hijos puedan enviar información a los componentes padres, para esto se hace uso de funciones que son pasadas como props desde el componente padre al hijo, y luego el hijo ejecuta esa función enviando la información que desea al padre, por lo que podemos decir que es un poco parecido a un callback o inclusive la recursividad, ya que el hijo ejecuta una función que fue pasada desde el padre y esta función puede modificar la información del padre. Esto se hace principalmene ya que los componentes hijos no pueden modificar directamente la información del padre, como lo hicimos previamente donde mediante el uso de props el padre le pasaba información al hijo, pero el hijo por normativa no puede modificar la información del padre. Dichas funciones suelene ser eventos que se ejecutan en el hijo y que al ser ejecutadas envian la información al padre, por lo que es muy comun ver que estas funciones sean llamadas onClick, onChange, onSubmit, etc. ya que son eventos que se ejecutan en el hijo y que al ser ejecutados envian la información al padre. 
import { useState } from "react";

function ComponenteHijo1({funcionEmitida}) {
    const onAgregarInfo = () => {
        funcionEmitida('jesus', 23);
    }

    return (
        <>
            <button onClick={onAgregarInfo}>Agregar Informacion</button>
        </>
    );
}

function ComponentePadre1() {
    const [data, setData] = useState([{nombre: 'Pedro', edad: 24}])
    const onFuncionEmitida = (nombre, edad) => {
        setData([...data, {nombre: nombre, edad: edad}])
    }

    return (
        <>
            <ol>
                {data.map(item => <li>Nombre: {item.nombre}, edad: {item.edad}</li>)}
            </ol>
            <ComponenteHijo1 funcionEmitida={onFuncionEmitida} />
        </>
    );
}

export { ComponentePadre1 };

// ~
// ~

function Lista({nombre,edad}) {
    return (
        <>
            <li>Nombre:{nombre}, edad: {edad}</li>
        </>
    );
}

function ComponenteHijo2({funcionEmitida}) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(1);

    const actualizarNombre = (event) => {
        setNombre(event.target.value)
    }

    const actualizarEdad = (event) => {
        setEdad(event.target.value)
    }

    const funcionEnvio = (event) => {
        event.preventDefault();
        funcionEmitida(nombre, edad)
    }

    return (
        <>
            <form onSubmit={funcionEnvio}>
                <label>Nombre: </label>
                <input type="text" placeholder="Ingresa tu nombre." onChange={actualizarNombre}/>
                <br />
                <label>Edad: </label>
                <input type="number" min={1} max={100} placeholder="Ingresa tu edad." onChange={actualizarEdad}/>
                <br />
                <button>Agregar Informacion</button>
            </form>
        </>
    );
}

function ComponentePadre2() {
    const [data, setData] = useState([{nombre: 'Jesus', edad: 33}])
    const onAgregarInformacion = (nombre, edad) => {
        setData([...data, {nombre: nombre, edad: edad}])
    }

    return (
        <>
            <ol>
                {data.map(item => <Lista nombre={item.nombre} edad={item.edad}/>)}
            </ol>
            <ComponenteHijo2 funcionEmitida={onAgregarInformacion}/>
        </>
    );
}

export { ComponentePadre2 };