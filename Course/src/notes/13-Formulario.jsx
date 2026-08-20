// ^Formulario.
// ^Una de las cosas más fundamentales y más implementadas dentro del mundo de la programación en general son los **formularios**, principalmente mediante la utilización de elementos como `form`, `input`, `textarea`, `select`, `button`, entre otros. Como bien sabemos, mediante la etiqueta `<form>` en HTML podemos agrupar diferentes campos de información y, por defecto, al presionar Enter o utilizar un botón de envío podemos enviar todo nuestro formulario. Además, cuando trabajábamos únicamente con HTML y JavaScript puro, era muy común obtener la información escrita por el usuario mediante `document.getElementById()`, `document.getElementsByClassName()`, `querySelector()` u otras herramientas del DOM, para posteriormente acceder a su propiedad `.value` y obtener el contenido introducido. Dependiendo de la acción que quisiéramos realizar, esa información podría utilizarse para ejecutar lógica, validaciones, enviarse a un servidor, almacenarse en una base de datos o realizar cualquier otro proceso necesario. Sin embargo, dentro de React no suele ser recomendable depender directamente de `document` para obtener la información de nuestros inputs, ya que React trabaja con un modelo de renderizado basado en componentes y estados. En su lugar, normalmente se utilizan eventos como `onChange`, que permiten detectar cada modificación realizada por el usuario, junto con `useState`, que permite almacenar y mantener sincronizado ese valor dentro del componente. De esta manera React puede saber en todo momento qué información contiene cada input y volver a renderizar la interfaz cuando dicho valor cambia. También podemos utilizar eventos como `onSubmit` para controlar el momento en el que el formulario completo es enviado, permitiéndonos validar, procesar o enviar la información sin necesidad de manipular directamente el DOM.
// ~Lectura de Inputs sin obtener el value desde document.
// ~Como bien sabemos, en JavaScript puro es muy común extraer el `value` o la información escrita dentro de un input utilizando directamente el objeto `document`, por ejemplo mediante `document.getElementById()` y posteriormente accediendo a `.value`. Sin embargo, en React este enfoque no suele ser el más utilizado, ya que React proporciona diferentes estrategias para controlar la información de los formularios utilizando su propio sistema de eventos y estado. Una de estas estrategias consiste en utilizar el evento `onChange`, el cual se ejecuta cada vez que el valor de un input cambia, es decir, cada vez que el usuario escribe, elimina, pega o modifica información dentro del campo. Junto con `onChange`, podemos utilizar `useState` para guardar dentro del estado del componente el valor actual del input. De esta manera, cada vez que el usuario modifique el contenido, ejecutaremos una función que actualizará el estado mediante la función `set` correspondiente. Posteriormente podremos utilizar ese estado para renderizar la información directamente dentro del componente. Para realizar esto, primero tendremos nuestros inputs y les asignaremos un evento `onChange`, el cual ejecutará una función cada vez que detecte una modificación. Después crearemos una o varias variables mediante `useState` para almacenar la información recibida. Dentro de la función utilizada por `onChange` podremos recibir un parámetro llamado normalmente `event` o `e`, el cual React proporciona automáticamente cuando ocurre el evento. Este objeto contiene información completa sobre lo que ocurrió, incluyendo qué elemento disparó el evento, qué tipo de evento se ejecutó y cuál es su valor actual. Mediante `event.target` podremos acceder al elemento HTML que originó el evento y mediante `event.target.value` podremos extraer específicamente el valor que el usuario tiene escrito en ese momento dentro del input. Finalmente, mediante la función `set` del `useState` guardaremos ese valor dentro del estado, provocando que React actualice el componente y permita renderizar la nueva información. Por lo tanto, cuando escribimos algo dentro del input, ocurre un flujo muy claro: primero se dispara `onChange`, después se ejecuta nuestra función, dicha función recibe el objeto `event`, mediante `event.target` obtenemos el elemento que produjo el evento, mediante `.value` obtenemos el contenido escrito y finalmente el setter del `useState` guarda ese valor dentro del estado. Como consecuencia, React vuelve a renderizar el componente y podemos mostrar la información actualizada en pantalla. Es importante comprender que cuando declaramos ese parámetro `event`, no estamos pasando manualmente la información desde el input, sino que React nos entrega automáticamente un objeto con toda la información relacionada con el evento.
// *Importación de useState para poder almacenar los valores introducidos en los inputs.
import { useState } from "react"; //* Se importa el Hook useState desde React.

// *Componente encargado de demostrar la lectura de Inputs mediante onChange y useState.
function LecturaInputsFormaAlterna() { //* Se declara el componente funcional.
    const [nombreFormulario, setNombreFormulario] = useState(''); //* Se crea un estado para almacenar el nombre escrito en el input y su función para actualizarlo.

    const [edadFormulario, setEdadFormulario] = useState(''); //* Se crea un estado para almacenar la edad escrita en el input y su función para actualizarla.

    const leerCambiosNombre = (event) => { //* Se declara una función que recibirá automáticamente el objeto event cada vez que cambie el input de nombre.
        setNombreFormulario(event.target.value); //* Se obtiene el valor actual del input mediante event.target.value y se almacena dentro del estado nombreFormulario.
    }; //* Fin de la función leerCambiosNombre.

    const leerCambiosEdad = (event) => { //* Se declara una función que recibirá el evento cada vez que cambie el input de edad.
        setEdadFormulario(event.target.value); //* Se obtiene el valor actual del input de edad y se almacena dentro del estado edadFormulario.
    }; //* Fin de la función leerCambiosEdad.

    return ( //* Se retorna la estructura visual del formulario.
        <> //* Fragment que permite agrupar varios elementos sin agregar un nodo adicional al DOM.
            <h1>Lectura de Inputs sin obtener el value desde document</h1> //* Encabezado de la demostración.
            <p> //* Párrafo donde se mostrará la información almacenada en los estados.
                Tu nombre es: {nombreFormulario}. //* Se renderiza el valor actual almacenado en nombreFormulario.
                <br /> //* Salto de línea dentro del párrafo.
                Tu edad es: {edadFormulario}. //* Se renderiza el valor actual almacenado en edadFormulario.
            </p> //* Fin del párrafo.

            <form> //* Se declara el formulario que contiene nuestros campos de entrada.
                <label>Nombre: </label> //* Etiqueta descriptiva para el input del nombre.
                <input type="text" placeholder="Ingresa tu Nombre." onChange={leerCambiosNombre} /> //* Input de texto que ejecuta leerCambiosNombre cada vez que cambia su contenido.
                <br /> //* Salto de línea entre los campos.
                <label>Edad: </label> //* Etiqueta descriptiva para el input de edad.
                <input type="number" placeholder="Ingresa tu edad." onChange={leerCambiosEdad} /> //* Input numérico que ejecuta leerCambiosEdad cada vez que cambia su contenido.
            </form> //* Fin del formulario.
        </> //* Fin del Fragment.
    ); //* Fin del return.
}; //* Fin del componente.

export { LecturaInputsFormaAlterna }; //* Se exporta el componente mediante una exportación nombrada.

// ~Evitar reseteo de página al enviar un formulario mediante onSubmit.
// ~Como bien sabemos, mediante la etiqueta `<form>` y los inputs podemos enviar un formulario de manera automática, incluso sin necesidad de asignarle manualmente una acción adicional. Por ejemplo, al presionar Enter dentro de determinados inputs, el navegador puede interpretar que queremos enviar el formulario. Este comportamiento forma parte de la funcionalidad tradicional de los formularios HTML. Sin embargo, cuando trabajamos con React normalmente no queremos que el navegador realice su comportamiento por defecto de recargar o reiniciar la página, ya que uno de los principales objetivos de React consiste precisamente en actualizar y renderizar la interfaz sin necesidad de realizar una recarga completa del documento. Por esta razón es común implementar el evento `onSubmit` directamente sobre nuestro `<form>`. Este evento se ejecutará cada vez que el formulario sea enviado, independientemente de si fue enviado mediante un botón o mediante Enter. La función asociada a `onSubmit` puede recibir nuevamente un parámetro `event`, que representa la información completa del evento. Dentro de esta función podremos utilizar `event.preventDefault()`, un método propio del evento que permite **cancelar el comportamiento predeterminado del navegador**. En este caso, dicho comportamiento consiste en enviar el formulario y provocar la recarga de la página. Al utilizar `event.preventDefault()` evitamos ese reinicio y permitimos que React mantenga el estado actual de nuestra aplicación. Posteriormente, dentro de la misma función podemos ejecutar cualquier otra lógica que necesitemos, como validar los datos, enviarlos a una API, guardarlos en una base de datos o actualizar otro estado del componente. Por lo tanto, mediante `onSubmit` controlamos cuándo se envía el formulario y mediante `event.preventDefault()` evitamos que el navegador realice automáticamente la recarga tradicional. De esta manera, al presionar Enter ya no se reseteará ni se perderá la información que tengamos almacenada dentro del componente.
function EvitarReseteoFormulario() { //* Se declara el componente funcional.
    const [nombreFormulario, setNombreFormulario] = useState(''); //* Se crea un estado para almacenar el nombre introducido por el usuario.

    const [inputState, setInputState] = useState(''); //* Se crea un segundo estado destinado a almacenar o renderizar información relacionada con el formulario.

    const leerCambiosNombre = (event) => { //* Se declara la función que se ejecutará cada vez que cambie el input.
        setNombreFormulario(event.target.value); //* Se obtiene el valor actual del input y se almacena en nombreFormulario.
    }; //* Fin de la función leerCambiosNombre.

    const evitarReinicio = (event) => { //* Se declara la función que será ejecutada cuando el formulario sea enviado.
        event.preventDefault(); //* Se cancela el comportamiento predeterminado del formulario para evitar que el navegador recargue la página.
        setInputState(nombreFormulario); //* Se copia el valor actual de nombreFormulario dentro de inputState para poder renderizarlo.
    }; //* Fin de la función evitarReinicio.

    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment utilizado para agrupar los elementos.

            <h1>Lectura de Inputs sin obtener el value desde document</h1> //* Encabezado de la demostración.

            <p>Tu nombre es: {inputState}.</p> //* Se muestra el valor almacenado en inputState después de enviar el formulario.

            <form onSubmit={evitarReinicio}> //* Se asigna el evento onSubmit al formulario para controlar manualmente su envío.
                <label>Nombre: </label> //* Etiqueta descriptiva del input.
                <input type="text" placeholder="Ingresa tu Nombre." onChange={leerCambiosNombre} /> //* Input controlado mediante onChange para detectar cada modificación.
            </form> //* Fin del formulario.

        </> //* Fin del Fragment.
    ); //* Fin del return.
}; //* Fin del componente.

export { EvitarReseteoFormulario }; //* Se exporta el componente mediante una exportación nombrada.