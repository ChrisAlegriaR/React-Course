// ^Formulario Con Hooks.
// ^Como bien sabemos, la implementación de todos los apartados previamente explicados en secciones anteriores tiende a tener distintos usos y aplicaciones según el tipo de caso, por lo que en esta sección se integra un ejemplo de un formulario dentro de React implementando varios de los conceptos vistos anteriormente. Uno de los factores más importantes a visualizar dentro de esta sección es el uso de conceptos simples pero fundamentales, como por ejemplo el uso de una variable de tipo objeto mediante useState. Podemos utilizar este tipo de estado para almacenar múltiples valores correspondientes a un formulario y, mediante la desestructuración de este objeto, podemos acceder a cada uno de los valores de manera individual. Además, mediante el uso del evento onChange podemos detectar los cambios realizados en cada uno de los elementos del formulario y, mediante el objeto event y su propiedad target, podemos acceder a información del elemento que ejecutó el evento, como por ejemplo su name y su value, lo cual nos permite actualizar el estado del formulario de manera dinámica y eficiente.
// ^Finalmente, dentro de las variables de estado cuyo valor inicial es un objeto existe una técnica muy importante para actualizar dinámicamente una propiedad específica: utilizando el operador de propagación (...), podemos conservar todas las propiedades existentes del objeto y, mediante una propiedad calculada como [name]: value, actualizar únicamente aquella propiedad cuyo nombre coincida con el valor recibido desde el elemento del formulario. Esto nos permite utilizar una misma función para manejar múltiples campos del formulario sin necesidad de crear una función independiente para cada input.
// ~Variable de objetos de tipo useState.
// ~Dentro de los tipos de valores que podemos crear y administrar con useState existe la posibilidad de utilizar un objeto como estado inicial, lo cual nos permite almacenar múltiples valores dentro de un mismo estado. Además, mediante la desestructuración de este objeto podemos acceder a cada uno de los valores de manera individual, lo cual nos permite trabajar y actualizar la información de manera dinámica y eficiente. Esto resulta especialmente útil en formularios, ya que normalmente un formulario contiene múltiples campos que pertenecen a un mismo conjunto de información. En lugar de crear un useState independiente para cada campo, podemos agruparlos dentro de un mismo objeto y administrar todo el formulario desde un único estado.
import { useState } from "react" //* Importamos el Hook useState desde React para poder crear y administrar estado dentro del componente.

function ComponenteObjetos() { //* Declaramos el componente donde trabajaremos con un estado cuyo valor inicial será un objeto.
    const [data, setData] = useState({ //* Creamos el estado data y su función actualizadora setData. El valor inicial será un objeto.
        nombre: 'Jesus Ramirez', //* Definimos la propiedad nombre dentro del objeto de estado.
        edad: 39, //* Definimos la propiedad edad dentro del objeto de estado.
    }) //* Finalizamos la creación del estado basado en un objeto.

    const { nombre, edad } = data; //* Desestructuramos las propiedades nombre y edad del objeto data para poder utilizarlas directamente.

    return ( //* Retornamos la interfaz que será renderizada por el componente.
        <> //* Utilizamos un Fragment para agrupar varios elementos sin agregar un elemento HTML adicional al DOM.
            <h3>{nombre}</h3> //* Mostramos el valor de la propiedad nombre dentro de un elemento h3.
            <h3>{edad}</h3> //* Mostramos el valor de la propiedad edad dentro de otro elemento h3.
        </> //* Cerramos el Fragment.
    ) //* Finalizamos el retorno del componente.
}

// ~Acceso de información de elementos que ejecutan eventos.
// ~Cuando asignamos un evento a cualquier elemento sabemos que podemos ejecutar un conjunto de acciones que especifiquemos dentro del evento, pero cuando se asigna la ejecución de una función dentro de estos eventos podemos acceder a la información del elemento que ejecutó dicho evento. Para ello podemos utilizar el parámetro event, el cual contiene información relacionada con el evento que ocurrió y con el elemento que lo originó. Dentro de event podemos acceder a distintas propiedades y métodos, y una de las más importantes es target, que representa el elemento que originó el evento. Por ejemplo, mediante event.target podemos acceder a propiedades del elemento que ejecutó el evento, como name, value, id, type y otras propiedades disponibles dependiendo del elemento HTML. Esto resulta especialmente importante al trabajar con formularios, ya que nos permite identificar qué input cambió y cuál es su valor actual. De igual manera, event puede recibirse como un parámetro implícito proporcionado por React cuando se ejecuta el manejador del evento. Sin embargo, debemos declarar dicho parámetro en la función si necesitamos acceder a él. También podemos desestructurar directamente propiedades del objeto event, por ejemplo ({ target }), para acceder directamente a target sin tener que escribir event.target. Finalmente, a partir de target podemos volver a desestructurar propiedades como name y value, permitiéndonos trabajar de una manera más limpia con la información del elemento que ejecutó el evento.
function ComponenteEvent() { //* Declaramos el componente donde trabajaremos con la información proporcionada por un evento.
    const onSubmit = (event) => { //* Creamos la función que se ejecutará cuando ocurra el evento y recibirá automáticamente el objeto event.
        event.preventDefault(); //* Evitamos el comportamiento predeterminado del navegador para el evento, como el envío tradicional de un formulario y la recarga de la página.

        const { target } = event; //* Desestructuramos target directamente desde el objeto event para obtener el elemento que originó el evento.
        const { name } = target; //* Desestructuramos la propiedad name del elemento que originó el evento.
        console.log(event.target.name); //* Accedemos directamente a name mediante event.target para mostrarlo en consola.
        console.log(name); //* Mostramos el mismo valor utilizando la variable name obtenida mediante desestructuración.
    } //* Finalizamos la función manejadora del evento.

    return ( //* Retornamos el botón que ejecutará la función cuando ocurra el evento click.
        <button type="submit" name="boton de envio" className="btn btn-primary" onClick={onSubmit}>Submit</button> //* Asignamos el evento onClick y pasamos la referencia de la función sin ejecutarla directamente.
    ); //* Finalizamos el retorno del componente.
}

// ~Modificación de información de un solo objeto en variable de objetos de tipo useState.
// ~Dentro de una variable de estado cuyo valor es un objeto podemos almacenar múltiples valores dentro de un mismo estado. Mediante la desestructuración de este objeto podemos acceder a cada uno de los valores de manera individual, lo cual nos permite trabajar con la información de forma dinámica y eficiente. En estos casos podemos modificar únicamente el valor de una propiedad específica sin perder las demás propiedades que ya existen dentro del objeto. Para conseguirlo utilizamos el operador de propagación (...nombreVariable), el cual copia las propiedades existentes del objeto, y posteriormente utilizamos una propiedad calculada como [name]: value para actualizar o agregar la propiedad cuyo nombre corresponda con el valor almacenado en name. Por lo tanto, el formato para actualizar un estado cuyo valor es un objeto puede ser el siguiente: setNombreVariable({ ...nombreVariable, [name]: value }). En este caso, nombreVariable representa el objeto de estado actual que queremos conservar, name representa el nombre de la propiedad que queremos actualizar y value representa el nuevo valor que queremos asignar. **Concepto clave:** El operador de propagación no modifica directamente el objeto original. En su lugar, crea un nuevo objeto copiando sus propiedades y posteriormente sobrescribiendo la propiedad indicada mediante [name]: value. Esto es especialmente importante porque en React debemos evitar modificar directamente el estado. **Importante:** Cuando actualizamos un objeto de estado, React reemplaza el valor anterior del estado por el nuevo objeto proporcionado. Por esta razón necesitamos utilizar ...data para conservar las propiedades que no estamos modificando.
function ComponenteUseState() { //* Declaramos el componente donde administraremos varios campos mediante un único objeto de estado.
    const [data, setData] = useState({ //* Creamos el estado data utilizando un objeto como valor inicial.
        nombre: '', //* Definimos la propiedad nombre inicialmente vacía.
        edad: 0 //* Definimos la propiedad edad con un valor numérico inicial.
    }) //* Finalizamos la creación del estado.

    const onInputChange = ({ target }) => { //* Recibimos el objeto event y desestructuramos directamente su propiedad target para obtener el elemento que ejecutó el evento.
        const { name, value } = target; //* Desestructuramos name y value del elemento que generó el evento.
        setData({ //* Actualizamos el estado creando un nuevo objeto.
            ...data, //* Copiamos todas las propiedades existentes de data para conservar los valores que no estamos modificando.
            [name]: value //* Utilizamos una propiedad calculada para actualizar la propiedad cuyo nombre coincida con name y asignarle el valor recibido.
        }) //* Finalizamos la actualización del estado.

        console.log(data); //* Mostramos el estado actual en consola. **Importante:** aquí puede aparecer el valor anterior, ya que la actualización del estado de React no debe asumirse como inmediatamente reflejada en la misma ejecución.
    } //* Finalizamos la función encargada de actualizar los inputs.

    return ( //* Retornamos el formulario.
        <form> //* Creamos el elemento HTML form que contendrá los campos.
            <label htmlFor="nombre">Nombre: </label> //* Creamos la etiqueta asociada al campo nombre mediante htmlFor.
            <input name="nombre" type="text" placeholder="Ingresa tu nombre" onChange={onInputChange}/> //* Creamos el input de nombre y utilizamos onChange para ejecutar la misma función cada vez que cambie su valor.
            <hr /> //* Agregamos una línea horizontal para separar visualmente los campos.
            <label htmlFor="edad">Edad: </label> //* Creamos la etiqueta asociada al campo edad.
            <input name="edad" type="number" min={0} max={100} onChange={onInputChange}/> //* Creamos el input numérico y utilizamos la misma función para actualizar el estado.
        </form> //* Finalizamos el formulario.
    ); //* Finalizamos el retorno del componente.
}

// ~Retorno de Hook con objetos desestructurados en variable de tipo useState.
// ~En un Custom Hook también podemos trabajar con variables de estado cuyo valor sea un objeto y posteriormente retornar la información almacenada en dicho objeto. Esto nos permite encapsular la lógica relacionada con el estado dentro del Hook y utilizarla desde otros componentes. Al retornar un objeto podemos utilizar el operador '...variableObjeto' de propagación para crear un nuevo objeto con las mismas propiedades que data. Posteriormente, el componente que utilice el Hook puede desestructurar las propiedades que necesite directamente desde el valor retornado.
function useComponenteDataRetorno() { //* Declaramos un Custom Hook, por lo que su nombre comienza con use.
    const [data, setData] = useState({ //* Creamos un estado cuyo valor inicial es un objeto.
        nombre: 'Chris', //* Definimos la propiedad nombre.
        edad: 23 //* Definimos la propiedad edad.
    }) //* Finalizamos la creación del estado.

    return ({ //* Retornamos un nuevo objeto para exponer la información del estado.
        ...data //* Copiamos todas las propiedades de data dentro del objeto retornado.
    }); //* Finalizamos el retorno del objeto.
}

function ComponenteRetorno() { //* Declaramos el componente que consumirá el Custom Hook.
    const { nombre, edad } = useComponenteDataRetorno(); //* Ejecutamos el Custom Hook y desestructuramos las propiedades nombre y edad del objeto retornado.
    
    return ( //* Retornamos la información obtenida desde el Hook.
        <> //* Utilizamos un Fragment para agrupar los elementos.
            <h3>{nombre}</h3> //* Mostramos el nombre obtenido desde el Hook.
            <h3>{edad}</h3> //* Mostramos la edad obtenida desde el Hook.
        </> //* Cerramos el Fragment.
    ); //* Finalizamos el retorno del componente.
}

// ~Ejemplo de formulario aplicado a caso real.
// ~En este ejemplo podemos integrar varios de los conceptos vistos anteriormente para construir un formulario más completo. Utilizamos un Custom Hook para encapsular el estado y la lógica relacionada con el formulario, mientras que el componente se encarga principalmente de representar la interfaz. El estado formState es un objeto que contiene los diferentes campos del formulario, en este caso userName, email y password. Gracias a que todos los campos pertenecen al mismo objeto podemos utilizar una única función onInputChange para controlar todos los inputs. Mediante event podemos obtener información del elemento que ejecutó el evento. En este caso utilizamos la desestructuración ({ target }) para acceder directamente a target y posteriormente obtener propiedades como name y value. Esto nos permite recibir información del elemento que ejecutó el evento y, mediante este objeto event, acceder a diferentes propiedades y métodos relacionados con dicho evento. **Importante:** target no solamente permite acceder al valor del input que ejecutó el evento; también permite consultar otras propiedades del elemento, como name, id, type y otras propiedades disponibles. De esta manera, el evento funciona como una especie de reporte o información contextual sobre lo que ocurrió y sobre el elemento que originó la interacción. Finalmente, mediante [name]: value podemos actualizar dinámicamente el campo correspondiente del formulario sin necesidad de crear una función individual para userName, otra para email y otra para password.
function useHook() { //* Declaramos un Custom Hook encargado de administrar la lógica y el estado del formulario.
    const [formState, setFormState] = useState({ //* Creamos el estado del formulario utilizando un objeto para almacenar todos sus campos.
        userName: '', //* Definimos el campo userName inicialmente vacío.
        email: '', //* Definimos el campo email inicialmente vacío.
        password: '' //* Definimos el campo password inicialmente vacío.
    }); //* Finalizamos la creación del estado del formulario.

    const onInputChange = ({ target }) => { //* Recibimos event y desestructuramos directamente target para acceder al elemento que generó el evento.
        // ^Mediante event no solamente podemos recibir y consultar información del elemento que ejecutó el evento, sino que también obtenemos un objeto que contiene información contextual del evento. Desde este objeto podemos acceder a target y, a partir de target, consultar diferentes propiedades del elemento, como su value, name, id, type y otras propiedades disponibles.
        const { name, value } = target; //* Obtenemos el nombre del campo y su valor actual mediante la desestructuración de target.

        setFormState({ //* Actualizamos el estado completo del formulario creando un nuevo objeto.
            ...formState, //* Conservamos todas las propiedades que ya existen dentro de formState.
            [name]: value //* Actualizamos dinámicamente la propiedad cuyo nombre coincida con name utilizando el nuevo value.
        }); //* Finalizamos la actualización del estado.
    } //* Finalizamos la función encargada de controlar los cambios de los inputs.

    return ({ //* Retornamos un objeto desde el Custom Hook para que el componente pueda utilizar la información y la función.
        formState, //* Exponemos el estado completo del formulario.
        onInputChange //* Exponemos la función encargada de actualizar los campos del formulario.
    }) //* Finalizamos el objeto retornado por el Hook.
}

function ComponenteFormulario() { //* Declaramos el componente encargado de representar el formulario.
    const { formState, onInputChange } = useHook(); //* Ejecutamos el Custom Hook y desestructuramos el estado y la función de actualización.
    
    const { userName, email, password } = formState; //* Desestructuramos cada campo del formulario para utilizarlos individualmente dentro del JSX.

    const onSubmit = (event) => { //* Declaramos la función que se ejecutará cuando el formulario sea enviado.
        event.preventDefault(); //* Evitamos el comportamiento predeterminado del formulario para impedir la recarga de la página.
        console.log(formState); //* Mostramos en consola toda la información almacenada actualmente en el formulario.
    } //* Finalizamos la función encargada de procesar el envío.

    return ( //* Retornamos la estructura visual del formulario.
        <form onSubmit={onSubmit}> //* Asociamos el evento onSubmit del formulario con nuestra función onSubmit.
            <div className="form-group"> //* Creamos un contenedor para agrupar el campo de usuario.
                <label htmlFor="userName">User Name</label> //* Creamos la etiqueta asociada al campo userName.
                <input type="text" className="form-control" name="userName" placeholder="Enter your user name" onChange={onInputChange} value={userName}/> //* Creamos el input de usuario, asociamos su name con la propiedad del estado y controlamos su valor mediante React.
            </div> //* Finalizamos el contenedor del campo userName.

            <div className="form-group"> //* Creamos un contenedor para agrupar el campo de correo electrónico.
                <label htmlFor="email">Email address</label> //* Creamos la etiqueta asociada al campo email.
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onInputChange} value={email}/> //* Creamos el input de correo y utilizamos la misma función onInputChange para actualizar su valor.
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> //* Mostramos un texto informativo asociado al campo de correo mediante aria-describedby.
            </div> //* Finalizamos el contenedor del campo email.

            <div className="form-group"> //* Creamos un contenedor para agrupar el campo de contraseña.
                <label htmlFor="password">Password</label> //* Creamos la etiqueta asociada al campo password.
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={onInputChange} value={password}/> //* Creamos el input de contraseña y lo conectamos con el estado mediante name, onChange y value.
            </div> //* Finalizamos el contenedor del campo password.

            <button type="submit" className="btn btn-primary">Submit</button> //* Creamos el botón de envío del formulario. Al ser type submit, ejecutará el evento onSubmit del formulario.
        </form> //* Finalizamos el formulario.
    ) //* Finalizamos el retorno del componente.
}

export { ComponenteObjetos, ComponenteEvent, ComponenteFormulario, ComponenteRetorno, ComponenteUseState }; //* Exportamos los componentes para poder utilizarlos desde otros archivos.