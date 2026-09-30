// ^UseRef
// ^UseRef es un Hook que React contiene de forma nativa, este como su nombre lo indica (ref), es un Hook de referencia, y comunmente se utiliza para enlazar un pedacito de JSX (apartado HTML), a una informacion para retenerla como referencia, donde esta referencia pese a que se re-renderice el componente se ca a seguir manteniendo. Por lo que esta nos permite mantener la referencia en uno de los elementos del DOOM. Por lo que al ser useRef un Hook se debera de importar dicho Hook desde la libreria de React, para poder utilizarlo dentro de un componente funcional. Donde este Hook nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente, lo que significa que podemos acceder y modificar el valor de la referencia sin causar un re-renderizado del componente. Esto es especialmente útil cuando necesitamos mantener el estado de un elemento del DOM o almacenar valores que no deberían desencadenar una actualización de la interfaz de usuario. En resumen, useRef es una herramienta poderosa en React que nos permite trabajar con referencias a elementos del DOM y mantener valores persistentes sin afectar el rendimiento de nuestra aplicación.
import { useRef } from "react";

export const UseRefComponente = () => {
    const first = useRef()
    console.log(first)
    return (
        <form>
            <label htmlFor="texto">Nombre: </label>
            <input ref={first} name="texto" type="text" placeholder="Ingresa tu nombre." />
        </form>
    )
}
