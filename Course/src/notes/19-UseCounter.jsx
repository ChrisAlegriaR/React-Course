// ^UseCounter.
// ^Ahora dentro de este pequeño ejercicio y ejemplo practico crearemos uin contador en el cual el objetivo es pasar nosotros desde el codigo el valor a incrementar o redusir e inckysiuve pasar el valor inicial al hook ubicado en otro archivo, donde lo que se vera en esta seccion es que dentro de una funcion o un hook podemos retornar en un obketo cierta informacion o funciones que este contewnga. Por lo que dentro de el hook se crearon la variable usestate que almacenara el ocntador y las funciones de disminuir, resetar e incrementar, donde posteriormente se retornartan y estas podxran ser desestrcuturadas para poder usaralas a njuestra libertad por lo que esto es de demasiada utolizd ya que de esta manera podemos implementar desde hooks funciones o variables y mucho mas donde posteriormente dicho hook retornara dichas funciones y variables para poder ser usadas en cualquier componente que lo importe, pudiendo asi usar funciones y variables de manera global y sin necesidad de estar repitiendo codigo, por lo que esto es de gran utilidad para el desarrollo de aplicaciones web con react. Mienteas que por otra parte podemos ver que como bien se comento en las secciones iniciales dentro de React para un evento no es necesario agrergar () al final de la funcion ya que esto hara que se ejecute de manera inmediata y no cuando el evento se dispare, por lo que es importante tener en cuenta este detalle para evitar errores en el desarrollo de aplicaciones web con React. Pero ahora bien si queremos pasar parametros a la funcion que se ejecutara al momento de dispararse el evento, entonces si es necesario agregar () al final de la funcion y dentro de estos pasar los parametros que se requieran, ademas de implementar una funcion flecha para que esta se ejecute de manera correcta en el evento y no de manera inmediata, por lo que es importante tener en cuenta este detalle para evitar errores en el desarrollo de aplicaciones web con React. Por lo que la estructura de funciones con parametros en eventos dentro de React es la siguiente: onClick={() => funcion(parametro)}.
import useCounter from "../hooks/19-UseCounter";

function ContadorComponent() {

    const { contador, incrementar, resetear, disminuir } = useCounter(0);

    return (
        <>
            <h2>Contador: {contador}</h2>
            <br />
            <button onClick={() => incrementar(1)}>+1</button>
            <button onClick={() => resetear()}>Resetear</button>
            <button onClick={() => disminuir(1)}>-1</button>
        </>
    );
}

function ComponentePrincipal() {
    return (
        <>
            <h1>Contador</h1>
            <hr />
            <ContadorComponent />
        </>
    );
}

export default ComponentePrincipal;