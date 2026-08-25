// ^Comuniocación entre componentes.
// ^Como bien se comentó en secciones anteriores, dentro de React existen las **propiedades (Props)**, las cuales representan uno de los mecanismos más importantes para permitir la comunicación entre componentes. Como vimos anteriormente, cuando un componente padre invoca o renderiza otro componente dentro de él, puede enviarle determinada información mediante Props, creando de esta manera una especie de flujo de información entre el **padre** (el componente que manda llamar al hijo y le proporciona información mediante Props) y el **hijo** (el componente que es invocado dentro del padre y recibe dichas Props). Por lo tanto, una de las características más comunes y utilizadas dentro de React es precisamente la comunicación entre componentes, y en muchos de estos casos se implementa el uso de Props como medio principal para realizar dicha comunicación. Un ejemplo muy común consiste en que dentro de un componente padre se definan determinadas variables, funciones, datos o información de cualquier tipo, y posteriormente estas sean enviadas mediante Props hacia los componentes hijos que son declarados dentro del padre. De esta manera, el componente hijo será capaz de recibir dicha información y utilizarla para mostrar datos, ejecutar funciones o participar en diferentes procesos de la aplicación. Sin embargo, cuando hablamos específicamente de variables creadas mediante `useState`, existe un detalle adicional muy importante, ya que no solamente podemos pasar el valor actual del estado al componente hijo, sino también pasar su función `set` para permitir que el hijo pueda solicitar una actualización de dicho estado que realmente pertenece al componente padre.
// ~Paso de set de variable de tipo useState de padre a hijo.
// ~Como se comentó previamente, una de las partes más utilizadas dentro de React es la comunicación entre componentes, siendo una característica fundamental el paso de información desde componentes padres hacia componentes hijos. Estos últimos pueden recibir y utilizar la información enviada, pudiendo tratarse de variables, funciones, objetos, arreglos, datos provenientes de una API, entre muchas otras posibilidades. Sabemos que enviar una variable que contiene información simple es extremadamente sencillo, ya que funciona prácticamente como pasar cualquier otro parámetro a una función. Las variables normales que no utilizan `useState` tampoco representan una dificultad especial, ya que simplemente podemos enviarlas mediante Props y utilizarlas dentro del componente hijo. Sin embargo, ahora nos enfocaremos específicamente en el paso de variables creadas mediante `useState`, ya que estas variables tienen una particularidad: al declararlas no obtenemos únicamente una variable, sino que obtenemos **dos elementos**, siendo por una parte el valor actual almacenado y por otra la función `set` encargada de actualizar dicho valor. Por esta razón es fundamental comprender que en muchas ocasiones tendremos determinadas variables o información almacenada mediante `useState` dentro de un componente padre, pero necesitaremos que dicha información pueda modificarse desde un componente hijo. El hijo podría necesitar agregar nuevos datos, eliminar información existente, modificar valores o realizar cualquier otra acción que provoque una actualización del estado que originalmente pertenece al padre. Para estos casos, una solución muy utilizada consiste en que, al momento de renderizar o llamar al componente hijo desde el padre, pasemos como Prop **la función `set` correspondiente al `useState`**. De esta manera, el hijo no obtiene directamente el control total del estado, sino que recibe la herramienta que React proporciona para solicitar una actualización de dicho estado. Una vez recibido este `set` mediante Props, el componente hijo podrá ejecutarlo cuando sea necesario y provocar que el estado del padre se actualice. Esto permite mantener la información centralizada en el componente padre mientras que diferentes componentes hijos pueden participar en su modificación. Además, y esto es muy importante cuando queremos agregar información a un arreglo almacenado dentro de `useState`, podemos utilizar la forma funcional del `set`. En lugar de enviar directamente un nuevo arreglo, podemos pasar una función que reciba como parámetro el valor anterior almacenado en el estado y, a partir de ese valor anterior, construir y retornar el nuevo estado. Por ejemplo, mediante una estructura como `(nombreTemporal) => [...nombreTemporal, { agregar1: '' }]`, ese parámetro temporal representa el valor anterior del estado y nos permite conservar toda la información existente mientras agregamos un nuevo elemento al arreglo. Esto es especialmente importante porque React puede ejecutar actualizaciones de estado de manera agrupada o asíncrona, por lo que utilizar el valor anterior mediante esta función garantiza que trabajemos con la versión más actual del estado. En otras palabras, este parámetro funciona como una referencia temporal al estado anterior que React entrega a nuestra función para que podamos construir correctamente el siguiente estado.
// *Se importa useState para crear y administrar el estado dentro de los componentes.
import { useState } from "react"; //* Importa el Hook useState desde React.

// *Componente encargado de renderizar individualmente cada elemento de la lista.
function Lista({nombre, edad}) { //* Se declara el componente Lista y se desestructuran los Props nombre y edad recibidos desde el padre.
    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment utilizado para agrupar el contenido sin crear un nodo adicional.
            <li>Nombre: {nombre}, edad: {edad}</li> //* Se muestran los datos recibidos mediante Props dentro de un elemento de lista.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente Lista.

// *Componente hijo que recibirá el set del estado perteneciente al componente padre.
function ComponenteHijo1({setVariableTipoUseState}) { //* Se recibe mediante Props la función set encargada de actualizar el estado del padre.
    const agregarInformacion = () => { //* Se declara una función que será ejecutada para agregar nueva información al estado del padre.
        setVariableTipoUseState( //! Se ejecuta la función set que pertenece al useState del componente padre.
            (variableAnterior) => [...variableAnterior, {nombre: 'Miguel', edad: 56}] //* Se recibe el valor anterior del estado, se conserva toda la información existente y se agrega un nuevo objeto al arreglo.
        ); //* Fin de la ejecución del setter.
    }; //* Fin de la función agregarInformacion.

    return ( //* Se retorna el contenido visual del componente hijo.
        <> //* Fragment que agrupa el botón.
            <button onClick={agregarInformacion}>Agregar Informacion</button> //* Al hacer clic se ejecuta la función que utiliza el set recibido del padre para agregar información.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente ComponenteHijo1.

// *Componente padre que contiene el estado original que será modificado desde el componente hijo.
function ComponentePadre1() { //* Se declara el componente padre.
    const [variableTipoUseState, setVariableTipoUseState] = useState([{nombre: 'Jesus', edad: 29}]); //! Se crea el estado con una lista inicial y se obtiene el setter que posteriormente será enviado al componente hijo.

    return ( //* Se retorna la estructura visual del componente padre.
        <> //* Fragment utilizado para agrupar la lista y el componente hijo.
            <ol> //* Lista ordenada donde se mostrarán los elementos almacenados en el estado.
                {variableTipoUseState.map(item => <Lista nombre={item.nombre} edad={item.edad} />)} //* map recorre cada objeto del estado y por cada elemento genera un componente Lista pasando sus datos mediante Props.
            </ol> //* Fin de la lista.
            <ComponenteHijo1 setVariableTipoUseState={setVariableTipoUseState} /> //! Se renderiza el componente hijo y se le pasa el setter del estado del padre mediante Props.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente padre.

export { ComponentePadre1 }; //* Se exporta el componente padre mediante una exportación nombrada.

// ~Ejemplo con implementación de paso de set entre padre e hijo.
// ~En el siguiente ejemplo se implementa nuevamente la comunicación entre componentes utilizando una variable de tipo `useState`, pero ahora llevaremos el ejemplo a un escenario todavía más práctico: un componente hijo tendrá un formulario mediante el cual podrá recibir información del usuario y, cuando dicho formulario sea enviado, utilizará el `set` proporcionado por el componente padre para agregar esa nueva información al estado que vive dentro del padre. Esto significa que el padre será el propietario del estado y continuará almacenando toda la información, mientras que el hijo únicamente tendrá la responsabilidad de recibir los datos del usuario y solicitar la actualización mediante el setter. Para este ejemplo tendremos un componente `Item`, encargado de renderizar cada elemento almacenado, un componente `ComponenteHijo2`, encargado de mostrar el formulario y enviar la información, y finalmente un componente `ComponentePadre2`, que será el propietario del estado y se encargará de mostrar toda la información recibida. De esta manera podemos observar claramente cómo un componente hijo puede modificar indirectamente el estado de su padre sin acceder directamente a la variable de estado.
// *Componente encargado de mostrar individualmente cada elemento agregado a la lista.
function Item({nombre, edad}) { //* Se declara el componente Item y se reciben nombre y edad mediante Props.
    return ( //* Se retorna el contenido visual.
        <> //* Fragment que agrupa el elemento.
            <li>{nombre} de {edad} años.</li> //* Se renderizan los datos recibidos mediante Props.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente Item.

// *Componente hijo que contiene el formulario y recibe el setter del componente padre.
function ComponenteHijo2({setDatos}) { //* Se recibe mediante Props la función setDatos perteneciente al estado del componente padre.
    const [nombre, setNombre] = useState(''); //* Se crea un estado local para almacenar temporalmente el nombre escrito en el formulario.
    const [edad, setEdad] = useState(0); //* Se crea un estado local para almacenar temporalmente la edad escrita por el usuario.

    const actualizarNombre = (event) => { //* Se declara la función que se ejecutará cada vez que cambie el input del nombre.
        setNombre(event.target.value); //* Se extrae el valor actual del input y se almacena dentro del estado nombre.
    }; //* Fin de actualizarNombre.

    const actulizarEdad = (event) => { //* Se declara la función que se ejecutará cada vez que cambie el input de edad.
        setEdad(event.target.value); //* Se obtiene el valor del input y se almacena dentro del estado edad.
    }; //* Fin de actulizarEdad.

    const enviarFormulario = (event) => { //* Se declara la función que se ejecutará cuando el formulario sea enviado.
        event.preventDefault(); //* Se evita el comportamiento predeterminado del formulario para impedir que la página se recargue.
        setDatos((listaAnterior) => [...listaAnterior, {nombre: nombre, edad: edad}]); //! Se utiliza el estado anterior para conservar la lista existente y agregar el nuevo objeto con nombre y edad.
    }; //* Fin de enviarFormulario.

    return ( //* Se retorna el formulario visual.
        <form onSubmit={enviarFormulario}> //* Se asigna la función enviarFormulario al evento submit del formulario.
            <label>Nombre: </label> //* Etiqueta descriptiva para el campo de nombre.
            <input type="text" placeholder="Ingresa tu nombre." onChange={actualizarNombre} /> {/* Input que actualiza el estado nombre cada vez que cambia. */}
            <br /> //* Salto de línea entre los campos.
            <label>Edad: </label> //* Etiqueta descriptiva para el campo de edad.
            <input type="number" max={100} min={2} placeholder="Ingresa tu edad." onChange={actulizarEdad} /> //* Input numérico que actualiza el estado edad y limita visualmente los valores permitidos entre 2 y 100.
            <br /> //* Salto de línea entre el input y el botón.
            <button>Enviar</button> //* Botón que al encontrarse dentro del form provocará el envío del formulario.
        </form> //* Fin del formulario.
    ); //* Fin del return.
} //* Fin del componente ComponenteHijo2.

// *Componente padre encargado de almacenar todos los datos recibidos desde el componente hijo.
function ComponentePadre2(){ //* Se declara el componente padre.
    const [datos, setDatos] = useState([]); //! Se crea un estado vacío que almacenará todos los registros enviados desde el componente hijo.

    return ( //* Se retorna la estructura visual del componente padre.
        <> //* Fragment que agrupa todo el contenido.
            <h1>Comunicación entre componentes.</h1> //* Encabezado de la sección.
            <ComponenteHijo2 setDatos={setDatos} /> //! Se renderiza el componente hijo y se le proporciona el setter del estado padre mediante Props.
            <ul> //* Lista donde se mostrarán todos los datos almacenados.
                {datos.map(item => <Item nombre={item.nombre} edad={item.edad} key={item.nombre} />)} //* map recorre los datos y crea un componente Item por cada elemento, utilizando una key única para que React pueda identificar cada registro.
            </ul> //* Fin de la lista.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente padre.

export { ComponentePadre2 }; //* Se exporta el componente padre mediante una exportación nombrada.