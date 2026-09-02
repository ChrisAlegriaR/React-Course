// ^UseEffect & Fetch.
// ^Como bien sabemos por cursos anteriores, `fetch` tanto en JavaScript como en React es una de las formas más utilizadas para realizar peticiones HTTP a un servidor, pudiendo mediante este obtener información desde una API, enviar información o realizar diferentes tipos de solicitudes dependiendo del método HTTP que necesitemos utilizar. Comúnmente, cuando trabajamos con peticiones mediante `fetch`, implementamos funciones de tipo `async` y `await` para poder esperar a que la respuesta del servidor llegue y, una vez recibida, trabajar con ella de manera más sencilla y ordenada. Posteriormente, normalmente convertimos la respuesta obtenida en formato JSON mediante `response.json()` para obtener un objeto JavaScript con el cual podamos trabajar dentro de nuestra aplicación. Ahora bien, dentro de React tenemos el Hook `useEffect`, que al igual que `useState` forma parte de los Hooks proporcionados por React y nos permite ejecutar efectos secundarios dentro de nuestros componentes. Entre estos efectos secundarios podemos encontrar peticiones a servidores, suscripciones, temporizadores, manipulación de recursos externos y muchas otras acciones que no corresponden directamente al proceso de renderizado de la interfaz. En este caso, `useEffect` resulta especialmente útil cuando queremos realizar un `fetch` al montar un componente o cuando queremos volver a realizar una petición cada vez que cambie determinada información. De manera más simple, podemos decir que `useEffect` es un Hook que nos permite ejecutar una función después de que React haya realizado el renderizado del componente y controlar cuándo volverá a ejecutarse mediante sus dependencias. Esto resulta especialmente útil porque, como bien sabemos, cuando actualizamos un estado mediante `useState`, React vuelve a renderizar el componente completo. Por lo tanto, si colocáramos un `fetch` directamente dentro del cuerpo del componente, este podría ejecutarse nuevamente en cada renderizado y terminaríamos realizando peticiones innecesarias constantemente. `useEffect` nos permite controlar este comportamiento y ejecutar el `fetch` únicamente en el momento que nosotros necesitemos. Por ejemplo, si colocamos un arreglo de dependencias vacío `[]`, el efecto se ejecutará después del montaje inicial del componente y no volverá a ejecutarse como consecuencia de actualizaciones posteriores del estado. Además, es importante mencionar que, cuando estamos trabajando con `StrictMode` durante el desarrollo, algunas funciones y efectos pueden ejecutarse más de una vez de manera intencional para ayudar a detectar efectos secundarios inesperados y problemas potenciales en nuestro código. Por lo tanto, si durante el desarrollo observamos que una petición o un `console.log` parece ejecutarse dos veces, esto no necesariamente significa que nuestro `useEffect` esté mal implementado, sino que puede ser un comportamiento provocado por `StrictMode` en el entorno de desarrollo.
// ~Importacion de useEffect.
// ~Ahora bien, como se mencionó previamente, `useEffect` es un Hook proporcionado por React, por lo que para poder utilizarlo dentro de nuestros componentes primero debemos importarlo desde la librería de React. Al igual que sucede con `useState`, esta importación nos permitirá utilizar la función `useEffect` posteriormente dentro del componente y definir los efectos secundarios que deseamos controlar. Es importante recordar que los Hooks deben utilizarse siguiendo las reglas establecidas por React, por lo que `useEffect` deberá declararse directamente dentro del componente y no dentro de condiciones, ciclos o funciones anidadas que alteren el orden de ejecución de los Hooks.
// Importacion.
import { useEffect } from "react"; //* Se importa el Hook useEffect desde React para poder utilizar efectos secundarios dentro de nuestros componentes.

// ~Uso e implementacion de useEffect.
// ~Ahora bien, `useEffect` es un Hook de tipo función, por lo que su estructura básica puede representarse como `useEffect(() => {}, [])`. Como podemos observar, está conformado principalmente por dos partes fundamentales: una función y un arreglo de dependencias. La función es la parte que contiene el código que queremos ejecutar como efecto secundario, mientras que el arreglo contiene las dependencias que determinarán cuándo deberá volver a ejecutarse dicho efecto. Dentro de la función podremos colocar aquello que queremos realizar, como nuestro `fetch`, una suscripción, un temporizador o cualquier otra acción externa al renderizado. Por otro lado, los corchetes `[]` representan las dependencias que tendrá dicho efecto. Si el arreglo se encuentra vacío, significa que no existen valores que deban provocar una nueva ejecución del efecto como consecuencia de cambios, por lo que en la práctica el efecto se ejecutará después del montaje inicial del componente. Si dentro del arreglo colocamos una o varias variables, `useEffect` volverá a ejecutar su función cuando React detecte que alguno de esos valores cambió entre renderizados. Esto quiere decir que dentro de `useEffect` podemos definir dependencias que serán observadas por React y que determinarán cuándo deberá ejecutarse nuevamente la función. Por lo tanto, un `useEffect` sin dependencias externas se utiliza comúnmente para tareas que necesitamos realizar al montar el componente, mientras que un `useEffect` con dependencias se utiliza cuando queremos reaccionar a cambios específicos en determinada información. Es importante aclarar una diferencia fundamental respecto a `useState`: `useState` permite almacenar y actualizar información, provocando un nuevo renderizado cuando su valor cambia, mientras que `useEffect` **no renderiza información por sí mismo**, sino que ejecuta una función en respuesta al ciclo de vida del componente y a los cambios de sus dependencias. Por ello, si no tiene dependencias y queremos volver a ejecutar ese efecto al realizar una prueba, normalmente necesitaremos provocar nuevamente el montaje del componente, por ejemplo recargando la página.
// *Componente que utilizará useEffect para realizar una petición a una API.
export const ComponenteConUseEffect = () => { //* Se declara y exporta un componente funcional mediante una función flecha.
    const fecthUser = async() => { //* Se declara una función asíncrona encargada de realizar la petición al servidor.
        try{ //* Se inicia un bloque try para intentar realizar la petición y controlar posibles errores.
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); //* Se realiza una petición HTTP mediante fetch y se espera la respuesta del servidor.
            const data = await response.json(); //* Se transforma el contenido de la respuesta a formato JSON para poder trabajar con la información como JavaScript.
            console.log(data); //* Se muestra en consola la información obtenida desde la API.
        } catch(error) { //* Se captura cualquier error que ocurra durante la petición o transformación de la respuesta.
            console.warn(error); //* Se muestra una advertencia en consola con la información del error.
        } //* Finaliza el bloque try/catch.
    } //* Finaliza la función fecthUser.

    useEffect(() => { //* Se declara el efecto que será ejecutado después del renderizado del componente.
        fecthUser(); //* Se ejecuta la función encargada de realizar la petición a la API.
    }, []); //* El arreglo vacío indica que el efecto no depende de ninguna variable y se ejecuta al montar el componente.

    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment utilizado para agrupar el contenido.
        </> //* Fin del Fragment.
    ) //* Fin del return.
} //* Fin del componente.

// ~Ejecucion de useEffect con dependencias.
// ~Ahora bien, aquí viene algo sumamente importante y, en parte, representa una de las características más útiles de React: la posibilidad de ejecutar nuevamente un efecto cuando determinada información cambie. Imaginemos que dentro de un componente padre mandamos llamar a un componente hijo y le pasamos mediante Props cierta información almacenada en un `useState`. Cuando la información almacenada en dicho estado cambia mediante su función `set`, React detectará el cambio y realizará nuevamente el renderizado correspondiente. Como consecuencia, el componente hijo que recibió esa información mediante Props también podrá volver a renderizarse con el nuevo valor. Por lo tanto, si dentro de ese componente hijo tenemos un `useEffect` y colocamos como dependencia la variable que recibimos mediante Props, cada vez que dicha variable cambie el efecto podrá ejecutarse nuevamente. Esto es especialmente útil cuando queremos realizar peticiones dinámicas, por ejemplo cuando una selección del usuario determina qué endpoint debemos consultar. De esta manera, el estado puede cambiar, el nuevo valor llega al componente hijo mediante Props, React vuelve a renderizarlo, `useEffect` detecta que su dependencia cambió y vuelve a ejecutar la función contenida dentro del efecto. Así podemos hacer que nuestra aplicación reaccione automáticamente a los cambios de información sin necesidad de realizar manualmente nuevamente la petición. Por lo tanto, de manera simple podemos decir que un `useEffect` con dependencias nos permite ejecutar una función cada vez que alguna de las dependencias cambie su valor, mientras que cuando el arreglo se encuentra vacío el efecto se ejecuta después del montaje inicial. Es muy importante recordar que si actualizamos un estado de tipo `useState`, este se pasa como Prop a un componente hijo y ese componente tiene un `useEffect` utilizando dicha variable como dependencia, cada vez que el valor recibido cambie el efecto podrá ejecutarse nuevamente.
// *Importacion de useState para almacenar el endpoint y la información recibida.
import { useState } from "react"; //* Se importa useState para crear los estados necesarios dentro de los componentes.

// *Componente hijo encargado de solicitar y renderizar información dependiendo del endpoint recibido.
function ListadoInformacion({endPoint}) { //* Se recibe mediante Props el endpoint que determinará qué información deberá solicitarse.
    const [data, setData] = useState([]); //* Se crea un estado vacío que almacenará la información obtenida desde la API.

    const fecthUser = async() => { //* Se declara la función asíncrona que realizará la petición al endpoint indicado.
        try{ //* Se inicia el bloque de control de errores.
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`); //* Se realiza la petición construyendo dinámicamente la URL utilizando el endpoint recibido.
            const info = await response.json(); //* Se convierte la respuesta del servidor en un objeto JavaScript mediante JSON.
            console.log(info); //* Se muestra en consola la información obtenida.
            setData(info); //* Se actualiza el estado data con la información recibida desde la API.
        } catch(error) { //* Se captura cualquier error producido durante la petición.
            console.warn(error); //* Se muestra el error en la consola.
        } //* Fin del bloque try/catch.
    } //* Fin de la función fecthUser.

    useEffect(() => { //* Se declara el efecto encargado de ejecutar la petición cuando corresponda.
        fecthUser() //* Se ejecuta la función que realiza el fetch.
    }, [endPoint]) //* endPoint es una dependencia, por lo que el efecto se vuelve a ejecutar cuando su valor cambia.

    return ( //* Se retorna la información obtenida.
        <ol> //* Lista ordenada donde se mostrarán dinámicamente los datos.
            {endPoint == 'users' ? data.map(user => <li key={user.id}>{user.name}</li>)
                                 : data.map(post => <li key={post.id}>{post.title}</li>)} //* Dependiendo del endpoint se recorren los usuarios o los posts y se muestra la información correspondiente.
        </ol> //* Fin de la lista.
    ); //* Fin del return.
} //* Fin del componente ListadoInformacion.

export const ComponenteConUseEffectConDependencias = () => { //* Se declara y exporta el componente principal que controlará el endpoint.
    const [selectOption, setSelectOption] = useState('users') //* Se crea un estado para almacenar temporalmente la opción seleccionada por el usuario.

    const [endPoint, setEndPoint] = useState('users'); //* Se crea el estado que realmente será enviado al componente hijo como endpoint.

    const actualizarSelect = (event) => { //* Se declara la función que detectará los cambios realizados en el select.
        setSelectOption(event.target.value); //* Se obtiene el valor seleccionado y se almacena dentro de selectOption.
    } //* Fin de actualizarSelect.

    const enviarInfo = () => { //* Se declara la función encargada de confirmar la opción seleccionada.
        setEndPoint(selectOption); //* Se actualiza endPoint utilizando la opción seleccionada, provocando que el componente hijo reciba un nuevo valor.
    } //* Fin de enviarInfo.

    return ( //* Se retorna la interfaz del componente.
        <> //* Fragment utilizado para agrupar todos los elementos.
            <ListadoInformacion endPoint={endPoint} /> //* Se renderiza el componente hijo y se le pasa el endpoint actual mediante Props.
            <select onChange={actualizarSelect}> //* Select que permite al usuario seleccionar qué información desea consultar.
                <option value="users">Usuarios</option> //* Opción que establece users como endpoint.
                <option value="posts">Posts</option> //* Opción que establece posts como endpoint.
            </select> //* Fin del select.
            <br /> //* Salto de línea.
            <button onClick={enviarInfo}>Solicitar Informacion</button> //* Al hacer clic se actualiza el endpoint y se provoca nuevamente el efecto.
        </> //* Fin del Fragment.
    ) //* Fin del return.
} //* Fin del componente.

// ~Ejemplo de implementacion de useEffect y fetch.
// ~En el siguiente ejemplo implementaremos conjuntamente `useEffect`, `fetch` y `useState` para realizar una petición a una API y posteriormente mostrar la información obtenida dentro de nuestra interfaz. El objetivo será que el componente realice la petición al momento de montarse, almacene la respuesta dentro de un estado y finalmente utilice ese estado para recorrer la información mediante `map()` y mostrar cada usuario en una lista. Este patrón es extremadamente común en aplicaciones React, ya que normalmente necesitamos obtener información de una API al cargar una página o componente y posteriormente mantener dicha información dentro del estado para poder utilizarla y renderizarla.
// *Componente encargado de obtener y mostrar una lista de usuarios.
export const ComponenteUsuarios = () => { //* Se declara y exporta el componente funcional.
    const [users, setUsers] = useState([]); //* Se crea un estado vacío destinado a almacenar los usuarios obtenidos desde la API.

    const fecthUser = async() => { //* Se declara la función asíncrona encargada de realizar la petición.
        try{ //* Se inicia el bloque para controlar posibles errores.
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); //* Se realiza una petición a la API de usuarios y se espera la respuesta.
            const data = await response.json(); //* Se convierte la respuesta recibida a formato JSON.
            console.log(data); //* Se muestra en consola la información obtenida para comprobar la respuesta.
            setUsers(data); //* Se actualiza el estado users con el arreglo de usuarios recibido.
        } catch(error) { //* Se captura cualquier error producido durante el proceso.
            console.warn(error); //* Se muestra el error como advertencia en la consola.
        } //* Fin del bloque try/catch.
    } //* Fin de fecthUser.

    useEffect(() => { //* Se declara el efecto encargado de ejecutar la petición después del montaje del componente.
        fecthUser(); //* Se realiza la petición a la API.
    }, []) //* El arreglo vacío indica que este efecto no depende de ningún valor y se ejecutará después del montaje inicial.

    return ( //* Se retorna la interfaz de la lista de usuarios.
        <> //* Fragment para agrupar el contenido.
            <h1>Lista de usuario</h1> //* Encabezado de la lista.
            <ul> //* Lista no ordenada donde se mostrarán los usuarios.
                {users.map(user => <li key={user.id}>{user.name}</li>)} //* map recorre el arreglo de usuarios y genera un elemento li por cada usuario utilizando su id como key.
            </ul> //* Fin de la lista.
        </> //* Fin del Fragment.
    ) //* Fin del return.
}