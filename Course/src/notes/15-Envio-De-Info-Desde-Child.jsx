// ^Envio de Información desde child.
// ^Como bien se vio previamente, ahora sabemos que los componentes padres pueden pasar mediante propiedades (Props) información a los componentes hijos para que estos la utilicen e incluso puedan ejecutar determinadas funciones, procesos o acciones relacionadas con esa información. Sin embargo, dentro de React también podemos hacer prácticamente lo contrario, permitiendo que un componente hijo pueda **enviar información hacia su componente padre**. Esto no significa que React rompa su flujo unidireccional de datos, ya que realmente el hijo no modifica directamente las variables del padre. En su lugar, el componente padre crea una función y posteriormente se la pasa al componente hijo mediante Props. Una vez que el hijo recibe dicha función, puede ejecutarla cuando ocurra determinada acción y enviarle como argumentos la información que desea comunicar. De esta manera, podemos decir que el hijo "avisa" al padre de que algo ocurrió y le proporciona los datos necesarios para que el padre realice la acción correspondiente. Este funcionamiento es parecido a un **callback**, ya que el padre entrega una función y posteriormente el hijo la ejecuta en un momento determinado. También puede recordarnos a ciertos patrones de comunicación donde una función recibe información y posteriormente ejecuta una acción con ella, aunque aquí no estamos hablando realmente de recursividad. Este mecanismo es principalmente utilizado porque, por norma general, los componentes hijos **no deben modificar directamente la información perteneciente al componente padre**. Como vimos previamente, los Props son inmutables desde el hijo, por lo que si el hijo necesita provocar un cambio en información que pertenece al padre, deberá hacerlo mediante una función proporcionada por el padre. Estas funciones suelen estar relacionadas con eventos que ocurren dentro del componente hijo, como `onClick`, `onChange`, `onSubmit`, entre otros, ya que el usuario realiza una acción en el hijo, el hijo detecta dicho evento, ejecuta la función recibida mediante Props y finalmente el padre recibe la información enviada y ejecuta la lógica que corresponda.
// ~Paso de funcion desde el componente padre para ser utilizada en componente hijo.
// ~Ahora bien, la estructura para pasar una función desde un componente padre hacia un componente hijo es prácticamente igual a la forma en la que ya conocemos el envío de cualquier otro Prop. Primero debemos declarar la función dentro del componente padre, y en este punto existe algo especialmente importante: **los parámetros de la función deben representar la información que esperamos recibir desde el componente hijo**. Es decir, si queremos que el hijo pueda enviar un nombre y una edad, podemos declarar esos dos parámetros dentro de la función del padre. Posteriormente, cuando el componente padre renderice al componente hijo, deberá pasar dicha función mediante Props. El componente hijo recibirá la función y podrá desestructurarla dentro de sus parámetros para utilizarla. Una vez que la función ha sido recibida, el hijo únicamente tendrá que escribir el nombre de la función y ejecutarla pasando la información correspondiente. De esta manera ocurre todo el flujo de comunicación: el padre crea la función, el padre la envía como Prop, el hijo recibe la función, el hijo la ejecuta enviando información y finalmente el padre recibe esos valores como parámetros dentro de su propia función y puede utilizarlos para modificar su estado, ejecutar operaciones o realizar cualquier otra acción. Es muy importante entender que el hijo **no obtiene directamente el estado del padre**, sino únicamente una función que el padre decidió compartir. Esto permite mantener el control de la información dentro del componente padre y respetar el flujo de datos de React.
// *Importación de useState para poder trabajar con el estado del componente padre.
import { useState } from "react"; //* Se importa el Hook useState desde React para crear y actualizar el estado.

// *Componente hijo que recibirá mediante Props una función creada originalmente por el componente padre.
function ComponenteHijo1({funcionEmitida}) { //! Se desestructura el Prop funcionEmitida, que contiene la función enviada por el padre.

    const onAgregarInfo = () => { //* Se declara una función local que será ejecutada cuando el usuario realice la acción correspondiente.
        funcionEmitida('jesus', 23); //! Se ejecuta la función recibida desde el padre y se le envían los datos que el hijo desea comunicar.
    } //* Fin de la función onAgregarInfo.

    return ( //* Se retorna el contenido visual del componente hijo.
        <> //* Fragment utilizado para agrupar el contenido.
            <button onClick={onAgregarInfo}>Agregar Informacion</button> //* Al hacer clic, se ejecuta la función local y esta posteriormente llama a la función del padre enviándole la información.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente ComponenteHijo1.

// *Componente padre que contiene el estado que posteriormente será modificado con la información recibida desde el hijo.
function ComponentePadre1() { //* Se declara el componente padre.

    const [data, setData] = useState([{nombre: 'Pedro', edad: 24}]) //* Se crea el estado data con un objeto inicial y se obtiene setData para poder actualizarlo.

    const onFuncionEmitida = (nombre, edad) => { //! Se declara la función que recibirá los datos enviados por el componente hijo.
        setData([...data, {nombre: nombre, edad: edad}]) //* Se actualiza el estado conservando los datos anteriores y agregando un nuevo objeto con la información recibida.
    } //* Fin de la función onFuncionEmitida.

    return ( //* Se retorna la estructura visual del componente padre.
        <> //* Fragment que agrupa la lista y el componente hijo.
            <ol> //* Lista ordenada donde se mostrarán los elementos almacenados en data.
                {data.map(item => <li>Nombre: {item.nombre}, edad: {item.edad}</li>)} //* map recorre cada elemento del estado y genera un elemento li mostrando el nombre y edad de cada objeto.
            </ol> //* Fin de la lista ordenada.
            <ComponenteHijo1 funcionEmitida={onFuncionEmitida} /> //! Se renderiza el componente hijo y se le pasa la función del padre mediante Props para que pueda ejecutarla y enviar información.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente padre.

export { ComponentePadre1 }; //* Se exporta el componente padre mediante una exportación nombrada.

// ~Ejemplo de envio de informacion desde child.
// ~En el siguiente ejemplo se implementa nuevamente el patrón de comunicación desde un componente hijo hacia un componente padre, pero ahora utilizando un caso mucho más completo y práctico. En este caso el componente hijo tendrá un formulario en el que el usuario podrá introducir determinada información, concretamente un nombre y una edad. Estos datos serán almacenados temporalmente dentro del propio componente hijo mediante `useState`, ya que el hijo necesita controlar los valores que el usuario está escribiendo. Posteriormente, cuando el formulario sea enviado, el componente hijo ejecutará la función que recibió desde el padre mediante Props y enviará tanto el nombre como la edad como argumentos. El componente padre recibirá dichos valores dentro de los parámetros de su propia función y utilizará `setData` para actualizar su estado. De esta manera podemos observar con mayor claridad cómo se realiza la comunicación completa: el usuario escribe en el hijo, el hijo almacena temporalmente la información, el formulario se envía, el hijo ejecuta una función perteneciente al padre, el padre recibe los datos enviados y finalmente actualiza su propio estado. Después de actualizarse el estado, React vuelve a renderizar el componente padre y mediante `map()` podremos mostrar el nuevo elemento en la lista. Este patrón es extremadamente común en React, especialmente cuando tenemos formularios, botones o componentes hijos que necesitan provocar cambios en información que realmente pertenece al componente padre.
// *Componente encargado de representar individualmente cada elemento de la información almacenada.
function Lista({nombre,edad}) { //* Se declara el componente Lista y se reciben mediante Props el nombre y la edad.
    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment utilizado para agrupar el contenido.
            <li>Nombre:{nombre}, edad: {edad}</li> //* Se muestra la información recibida mediante Props.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente Lista.

// *Componente hijo que contiene el formulario y que recibirá una función desde el padre para enviar información.
function ComponenteHijo2({funcionEmitida}) { //! Se desestructura el Prop funcionEmitida, que contiene la función proporcionada por el componente padre.

    const [nombre, setNombre] = useState(''); //* Se crea un estado local para almacenar temporalmente el nombre escrito por el usuario.

    const [edad, setEdad] = useState(1); //* Se crea un estado local para almacenar temporalmente la edad escrita por el usuario.

    const actualizarNombre = (event) => { //* Se declara la función que se ejecutará cada vez que cambie el input del nombre.
        setNombre(event.target.value) //* Se obtiene el valor actual del input y se almacena dentro del estado nombre.
    } //* Fin de actualizarNombre.

    const actualizarEdad = (event) => { //* Se declara la función que se ejecutará cada vez que cambie el input de edad.
        setEdad(event.target.value) //* Se obtiene el valor actual del input y se almacena dentro del estado edad.
    } //* Fin de actualizarEdad.

    const funcionEnvio = (event) => { //! Se declara la función que se ejecutará cuando el formulario sea enviado.
        event.preventDefault(); //* Se evita el comportamiento predeterminado del formulario para impedir que la página se recargue.
        funcionEmitida(nombre, edad) //* Se ejecuta la función recibida desde el padre enviándole como argumentos los datos almacenados localmente en el hijo.
    } //* Fin de funcionEnvio.

    return ( //* Se retorna el formulario que permitirá introducir la información.
        <> //* Fragment que agrupa el formulario.
            <form onSubmit={funcionEnvio}> //* Se asigna la función funcionEnvio al evento submit del formulario.
                <label>Nombre: </label> //* Etiqueta descriptiva para el input del nombre.
                <input type="text" placeholder="Ingresa tu nombre." onChange={actualizarNombre}/> //* Input que actualiza el estado nombre cada vez que cambia su contenido.
                <br /> //* Salto de línea entre los campos.
                <label>Edad: </label> //* Etiqueta descriptiva para el input de edad.
                <input type="number" min={1} max={100} placeholder="Ingresa tu edad." onChange={actualizarEdad}/> //* Input numérico que actualiza el estado edad y establece valores mínimos y máximos.
                <br /> //* Salto de línea entre el input y el botón.
                <button>Agregar Informacion</button> //* Botón que provoca el envío del formulario.
            </form> //* Fin del formulario.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente ComponenteHijo2.

// *Componente padre que mantiene el estado principal y recibe la información enviada por el hijo.
function ComponentePadre2() { //* Se declara el segundo componente padre.

    const [data, setData] = useState([{nombre: 'Jesus', edad: 33}]) //* Se crea el estado principal con un elemento inicial y su función actualizadora.

    const onAgregarInformacion = (nombre, edad) => { //! Se declara la función que recibirá desde el hijo el nombre y la edad.
        setData([...data, {nombre: nombre, edad: edad}]) //* Se actualiza el estado conservando los elementos anteriores y agregando la nueva información recibida.
    } //* Fin de la función onAgregarInformacion.

    return ( //* Se retorna la estructura visual del componente padre.
        <> //* Fragment que agrupa todo el contenido.

            <ol> //* Lista ordenada donde se mostrarán todos los elementos almacenados.
                {data.map(item => <Lista nombre={item.nombre} edad={item.edad}/>) } //* map recorre cada elemento del estado y por cada objeto genera un componente Lista pasando sus propiedades mediante Props.
            </ol> //* Fin de la lista.

            <ComponenteHijo2 funcionEmitida={onAgregarInformacion}/> //! Se renderiza el componente hijo y se le pasa la función del padre como Prop.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente padre.

export { ComponentePadre2 }; //* Se exporta el componente mediante una exportación nombrada.