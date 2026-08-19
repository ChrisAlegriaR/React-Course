// ^Formulario.

import { useState } from "react";

// ^
function Listado({nombre, edad}) {
    return (
        <>
            <li>Nombre: {nombre}, Edad: {edad}</li>
        </>
    );
}

function Formulario() {
    const [datos, setdatos] = useState([
        {nombre: "Ricardo Perez", edad: 32}, 
        {nombre: "Jose Luiz Slobotzky", edad: 29}, 
        {nombre: "Valentina Sanchez.", edad: 18}, 
        {nombre: "Wendy Paz.", edad: 67},
        {nombre: "Federico Martinez", edad: 40}, 
        {nombre: "Vanessa Urquiza" , edad: 84}, 
        {nombre: "Teresa Alegria", edad: 23}, 
        {nombre: "Leslie Rodriguez", edad: 56},
    ])

    const enviarFormulario = () => {
        let nombreFormulario = document.getElementById('nombreFormulario').value;
        let edadFormulario = document.getElementById('edadFormulario').value;

        if(datos.some(usuario => usuario.nombre === nombreFormulario)){
            alert('El usuario ya existe.')
        } else {
            setdatos([...datos, {nombre: nombreFormulario, edad: edadFormulario}])
        }

        document.getElementById('nombreFormulario').value = '';
        document.getElementById('edadFormulario').value = '';
    }
    
    return (
        <>
            <h1>Formulario</h1>
            <h2>Listado de usuarios</h2>
            <ul>
                {datos.map(item => <Listado nombre={item.nombre} edad={item.edad} key={item.nombre}/>)}
            </ul>

            <h2>Subir usuario</h2>
            <form>
                <input id="nombreFormulario" type="text" required placeholder="Ingresa el nombre"/>
                <br/>
                <input id="edadFormulario" type="number" required placeholder="Ingresa la edad"/>
            </form>
            <button onClick={enviarFormulario}>Enviar Formulario</button>
        </>
    );
}

export default Formulario;