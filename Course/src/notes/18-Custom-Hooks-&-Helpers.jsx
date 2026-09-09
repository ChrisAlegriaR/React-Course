// ^Custom Hooks & Helpers.
// ^Dentro de React existen dos conceptos que son muy importantes y que son muy utilizados dentro del desarrollo de aplicaciones: los Custom Hooks y los Helpers. Ambos conceptos son muy similares en el sentido de que son funciones que contienen lógica y que normalmente son escritas en archivos JavaScript independientes para posteriormente ser reutilizadas desde diferentes partes de nuestra aplicación. Sin embargo, existe una diferencia fundamental entre ambos: los Custom Hooks siguen las reglas de los Hooks de React, por lo que su nombre debe comenzar con "use" y pueden utilizar otros Hooks como useState, useEffect, useContext, entre otros; mientras que los Helpers son funciones JavaScript convencionales que no siguen las reglas de los Hooks, por lo que no necesitan comenzar con "use" y no pueden utilizar directamente Hooks de React. Por lo que comúnmente los Helpers son funciones que contienen lógica reutilizable y retornan un valor, un objeto, un arreglo o cualquier otro tipo de información que posteriormente pueda ser utilizada por el código que las invoque. Su principal objetivo es mantener a los componentes lo más limpios, pequeños y fáciles de comprender posible, ya que si tenemos demasiada lógica dentro de un componente podemos extraer parte de esta lógica a un Helper, permitiendo que nuestro componente se concentre principalmente en la representación de la interfaz y en la interacción con el usuario. De esta manera también favorecemos la reutilización de código y evitamos repetir la misma lógica en diferentes componentes. Esto se relaciona con el principio de atomización de componentes, donde buscamos dividir una interfaz y su lógica en unidades pequeñas y reutilizables, siguiendo la idea de pasar de elementos pequeños a estructuras cada vez más grandes: de átomos a moléculas, de moléculas a organismos, de organismos a plantillas y de plantillas a páginas. Por otro lado, tenemos los Custom Hooks, los cuales también son funciones reutilizables que contienen lógica, pero en este caso están específicamente diseñados para encapsular lógica relacionada con el funcionamiento de React y pueden utilizar otros Hooks internamente. Al igual que los Helpers, los Custom Hooks ayudan a mantener los componentes limpios, pero además permiten reutilizar lógica que depende del estado, efectos, contexto u otros mecanismos proporcionados por React. Por lo tanto, podemos decir de manera simplificada que un Helper sirve para extraer y reutilizar lógica JavaScript general, mientras que un Custom Hook sirve para extraer y reutilizar lógica relacionada con React y sus Hooks. Comúnmente los Helpers se almacenan dentro de una carpeta llamada "helpers", mientras que los Custom Hooks suelen almacenarse dentro de una carpeta llamada "hooks". En ambos casos es común utilizar archivos JavaScript, ya que contienen lógica y no necesariamente necesitan retornar JSX.
// ~Hooks.
// ~Como bien se sabe, el objetivo de los componentes, siguiendo buenas prácticas de diseño y organización del código, es mantenerlos lo más pequeños, claros y fáciles de mantener posible. Esto significa que debemos evitar colocar cantidades excesivas de lógica directamente dentro de nuestros componentes, especialmente cuando dicha lógica puede ser reutilizada o separada de la responsabilidad principal del componente. Para ayudarnos con esto podemos utilizar Helpers o Custom Hooks dependiendo del tipo de lógica que necesitemos extraer. Si contamos con lógica general de JavaScript que no depende de Hooks, podemos extraerla a un Helper; mientras que si contamos con lógica que utiliza estados, efectos, contexto u otros Hooks de React, podemos crear un Custom Hook para encapsular dicha lógica y posteriormente utilizarla desde nuestro componente. De esta manera podemos reducir considerablemente el tamaño de nuestros componentes y hacer que sean más fáciles de leer, entender, reutilizar y mantener. Es importante recordar nuevamente la idea de atomización de los componentes, la cual busca dividir la aplicación en piezas pequeñas y reutilizables, siguiendo la estructura: de átomos a moléculas, de moléculas a organismos, de organismos a plantillas y de plantillas a páginas. Por lo que, si tenemos un componente con demasiada lógica, podemos crear un Custom Hook que se encargue de procesar dicha lógica y posteriormente retornar únicamente la información que el componente necesita. Comúnmente los Custom Hooks se almacenan dentro de una carpeta llamada "hooks" y los archivos pueden ser de tipo JavaScript, ya que un Hook no necesita retornar JSX como lo hace un componente. Por otro lado, los Helpers son muy similares en cuanto a su objetivo de reutilización y separación de responsabilidades, pero no siguen las reglas de los Hooks, por lo que son simplemente funciones JavaScript que reciben información, realizan algún procesamiento y retornan un resultado que posteriormente puede ser utilizado por el código que las invoque.
// ?Como antes se mencionó, comúnmente los Custom Hooks son funciones que son creadas en archivos JavaScript para posteriormente exportarlas e importarlas en los componentes donde se requiera utilizar dicha lógica. La estructura de un Custom Hook es muy similar a la de una función normal, pero puede contener Hooks de React, como useState y useEffect, además de cualquier otra lógica necesaria para realizar el procesamiento correspondiente. La principal diferencia con un componente es que un Custom Hook no tiene como objetivo retornar código HTML o JSX, sino retornar información, funciones, estados, objetos o cualquier otro dato que posteriormente será utilizado por el componente que lo invoque. De esta manera, un Custom Hook puede encargarse de realizar una petición a una API, almacenar la información obtenida, controlar estados, ejecutar efectos secundarios y posteriormente retornar únicamente aquello que el componente necesita. Además, es sumamente importante mencionar que el nombre de un Custom Hook debe comenzar con "use". Esta convención no solamente sirve para identificar visualmente que se trata de un Hook, sino que también permite que las herramientas de React y sus reglas puedan detectar correctamente el uso de Hooks y aplicar las reglas correspondientes. Por lo tanto, si creamos un Hook personalizado, debemos utilizar una nomenclatura como "useCustomHook", "useUsers", "useFetch", etc. De forma simple, podemos decir que un Custom Hook es una función reutilizable que encapsula lógica relacionada con React para posteriormente retornar la información o las funciones que serán utilizadas por el componente que lo invoque. El Hook debe comenzar con "use" y puede ser exportado desde un archivo JavaScript para posteriormente ser importado en cualquier componente que necesite utilizar dicha lógica. De esta manera, el componente puede concentrarse principalmente en renderizar la información y manejar la interfaz, mientras que el Custom Hook se encarga de la lógica que se encuentra detrás. Esto permite mantener nuestros componentes más pequeños, organizados y fáciles de mantener, siguiendo nuevamente el principio de atomización y separación de responsabilidades.
import { useEffect, useState } from "react"; //* Importamos useEffect y useState desde React, ya que nuestro Custom Hook necesita utilizar un estado para almacenar la información obtenida y un efecto para ejecutar la petición al momento correspondiente.

export function useCustomHook() { //* Declaramos y exportamos nuestro Custom Hook utilizando el prefijo "use", siguiendo la convención establecida para los Hooks personalizados.
    const [data, setData] = useState([]); //* Creamos un estado llamado data que inicialmente contiene un arreglo vacío y una función setData encargada de actualizar la información almacenada en dicho estado.
    const fetchUser = async () => { //* Declaramos una función asíncrona encargada de realizar la petición a la API y obtener la información de los usuarios.
        try{ //* Iniciamos un bloque try para intentar ejecutar la petición y poder manejar cualquier error que pudiera producirse durante el proceso.
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); //* Realizamos una petición HTTP mediante fetch hacia el endpoint de usuarios y esperamos mediante await a que el servidor responda.
            const dataApi = await response.json(); //* Convertimos el cuerpo de la respuesta HTTP a formato JSON y esperamos a que dicha conversión termine antes de continuar.
            setData(dataApi) //* Actualizamos el estado data con la información obtenida desde la API, provocando que los componentes que utilicen este estado puedan volver a renderizarse con la nueva información.
        } catch(error){ //* Capturamos cualquier error que ocurra durante la petición, la conversión de la respuesta o el procesamiento de la información.
            console.warn(error); //* Mostramos el error en la consola para poder identificar y analizar el problema durante el desarrollo.
        }
    } //* Finalizamos la función encargada de obtener la información desde la API.

    useEffect(() => { //* Utilizamos useEffect para ejecutar una acción secundaria después del renderizado del componente.
        fetchUser(); //* Ejecutamos la función encargada de realizar la petición a la API.
    }, []) //* Utilizamos un arreglo de dependencias vacío, indicando que el efecto no depende de ningún valor externo y que se ejecutará al montarse el componente.

    return { //* Retornamos un objeto para exponer hacia el componente la información que queremos que pueda utilizar.
        data //* Retornamos el estado data para que el componente que utilice el Custom Hook pueda acceder a la información obtenida.
    } //* Finalizamos el objeto retornado por nuestro Custom Hook.
} //* Finalizamos la declaración del Custom Hook.


function Componente1() { //* Declaramos un componente que utilizará nuestro Custom Hook para obtener la información de los usuarios.
    const { data } = useCustomHook(); //* Ejecutamos el Custom Hook y mediante desestructuración obtenemos la propiedad data que este retorna.
    
    return ( //* Retornamos el JSX que será renderizado por el componente.
        <ol> //* Creamos una lista ordenada donde mostraremos los usuarios obtenidos desde la API.
            {data.map(item => <li key={item.id}>{item.name}</li>)} //* Recorremos el arreglo data mediante map y generamos un elemento li por cada usuario, utilizando su id como key única.
        </ol> //* Finalizamos la lista ordenada.
    ); //* Finalizamos el return del componente.
} //* Finalizamos el componente Componente1.

export { Componente1 }; //* Exportamos el componente para poder utilizarlo desde otros archivos.

// ?Exportación de Hooks desde archivos JavaScript a componentes.
// ?Como antes se mencionó, los Custom Hooks son funciones que contienen lógica y que pueden ser declaradas en archivos JavaScript independientes. Para poder utilizar dicha lógica dentro de un componente debemos exportar la función del Hook y posteriormente importarla en el componente donde sea requerida. Comúnmente los Custom Hooks pueden ser exportados de manera nombrada, utilizando "export function" o "export const", y cuando utilizamos este tipo de exportación debemos importarlos utilizando las llaves correspondientes. Por ejemplo, mediante "export function useCustomHook()" podemos exportar directamente la función del Hook y posteriormente utilizar "import { useCustomHook } from './hooks/useCustomHook'" para importar dicha función desde el componente que la necesite. Una vez importado el Hook, simplemente debemos ejecutarlo como una función dentro del componente para poder acceder a la lógica y a la información que este expone mediante su return. Es importante recordar que un Custom Hook debe ejecutarse siguiendo las mismas reglas de los Hooks de React, por lo que no debemos llamarlo dentro de condicionales, ciclos o funciones internas que rompan dichas reglas. Su objetivo es encapsular lógica reutilizable y posteriormente proporcionar al componente únicamente la información o las funciones que este necesita.
import { hookExportadoDesdeJavaScript } from "../hooks/18-Custom-Hooks-&-Helpers"; //* Importamos el Custom Hook exportado desde nuestro archivo JavaScript para poder utilizar su lógica dentro del componente.

function Componente2() { //* Declaramos el componente que utilizará la lógica proporcionada por el Custom Hook.
    const { data } = hookExportadoDesdeJavaScript(); //* Ejecutamos el Custom Hook y mediante desestructuración obtenemos la propiedad data que este retorna.
    
    return ( //* Retornamos el JSX que será renderizado por el componente.
        <ol> //* Creamos una lista ordenada para mostrar la información obtenida.
            {data.map(item => <li key={item.id}>{item.name}</li>)} //* Recorremos el arreglo data y generamos un elemento li por cada elemento recibido.
        </ol> //* Finalizamos la lista ordenada.
    ); //* Finalizamos el return del componente.
} //* Finalizamos el componente Componente2.

export { Componente2 }; //* Exportamos el componente para poder utilizarlo desde otros archivos.

// ~Helpers.
// ~Los Helpers son funciones que contienen lógica reutilizable y retornan un valor, un objeto, un arreglo o cualquier otro tipo de información que posteriormente será utilizada por el código que las invoque. Los Helpers son especialmente útiles cuando tenemos una función dentro de un componente o Custom Hook que contiene demasiada lógica y queremos extraerla para mantener el código principal más limpio y fácil de comprender. Por ejemplo, podemos tener dentro de un Custom Hook una función encargada de realizar una petición HTTP, transformar una respuesta, validar información o realizar algún cálculo; si dicha función puede existir de manera independiente y no necesita utilizar Hooks, podemos extraerla a un Helper. De esta manera el Custom Hook solamente se encargará de coordinar la lógica relacionada con React, mientras que el Helper se encargará de realizar la operación específica. Esto permite dividir responsabilidades y facilita la reutilización de la misma función desde diferentes Hooks o componentes. Comúnmente los Helpers se almacenan dentro de una carpeta llamada "helpers" y sus archivos suelen ser JavaScript, debido a que contienen funciones y lógica general y no necesitan retornar JSX. Es importante recordar que un Helper no es un Hook, por lo que no debe utilizar Hooks como useState o useEffect y tampoco necesita comenzar su nombre con "use". Su objetivo principal es encapsular lógica JavaScript que pueda ser reutilizada sin depender directamente del ciclo de vida o del estado de React.
// ?Estructura de Helpers.
// ?Los Helpers mantienen una estructura muy similar a la de cualquier función JavaScript, ya que son funciones que contienen lógica y posteriormente retornan un resultado. A diferencia de los Custom Hooks, los Helpers no siguen las reglas de los Hooks, por lo que su nombre no necesita comenzar con "use" y tampoco pueden utilizar directamente Hooks de React como useState o useEffect. Comúnmente estos Helpers son utilizados para realizar alguna operación específica y retornar el resultado para posteriormente ser utilizado en el componente, Hook u otra función que los haya importado. Por ejemplo, un Helper puede encargarse de realizar una petición HTTP y retornar la información obtenida, permitiendo que un Custom Hook se encargue únicamente de utilizar dicha información y almacenarla en un estado. Mayormente los Helpers son implementados junto con los Hooks cuando alguna función declarada dentro del Hook contiene demasiada lógica o realiza una tarea que puede ser independiente del propio Hook. En estos casos podemos extraer dicha función a un Helper y posteriormente importarla dentro del Hook. Donde es muy importante tener en cuenta que si implementamos Helpers de tipo async y posteriormente los utilizamos dentro de nuestros Hooks mediante useEffect, no debemos pasar directamente una función async como callback de useEffect, ya que useEffect espera que su función callback retorne opcionalmente una función de limpieza, no una Promise. Por este motivo, cuando necesitamos ejecutar lógica asíncrona dentro de useEffect, podemos declarar una función asíncrona dentro del efecto y desde ella llamar al Helper async, o podemos llamar al Helper y manejar la Promise mediante .then() y .catch(). De esta manera evitamos que useEffect reciba directamente una Promise y podemos trabajar correctamente con la información asíncrona. El motivo de esta restricción es que React utiliza el valor de retorno de useEffect para determinar si existe una función de limpieza que deba ejecutarse cuando el efecto se actualice o el componente se desmonte, y una Promise no representa una función de limpieza. Por lo tanto, podemos utilizar Helpers asíncronos sin problema dentro de un Hook, siempre que manejemos correctamente la Promise y no hagamos que directamente el callback de useEffect sea una función async.
async function helper(){ //* Declaramos un Helper asíncrono que será responsable de realizar la petición HTTP y retornar la información obtenida.
    try{ //* Iniciamos un bloque try para intentar ejecutar correctamente la petición y controlar posibles errores.
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //* Realizamos la petición HTTP hacia el endpoint de usuarios y esperamos la respuesta del servidor.
        const dataApi = await response.json(); //* Convertimos el cuerpo de la respuesta a JSON y esperamos a que finalice la conversión.
        return dataApi; //* Retornamos la información obtenida para que pueda ser utilizada por el código que invoque este Helper.
    } catch(error){ //* Capturamos cualquier error que ocurra durante la petición o durante el procesamiento de la respuesta.
        console.warn(error); //* Mostramos el error en la consola para poder identificar el problema durante el desarrollo.
        return []; //* Retornamos un arreglo vacío en caso de error para mantener un valor predecible y evitar trabajar con un valor undefined.
    }
} //* Finalizamos el Helper asíncrono.

function useHook1() { //* Declaramos un Custom Hook que utilizará el Helper anterior para obtener información y posteriormente almacenarla en un estado.
    const [data, setData] = useState([]); //* Creamos el estado data, inicialmente como un arreglo vacío, junto con su función setData para actualizarlo.
    async function cargarData() { //* Declaramos una función asíncrona encargada de llamar al Helper y almacenar la información obtenida.
        const info = await helper(); //* Ejecutamos el Helper y esperamos mediante await a que finalice la petición para obtener la información retornada.
        setData(info); //* Actualizamos el estado data utilizando la información obtenida desde el Helper.
    } //* Finalizamos la función cargarData.

    useEffect(() => { //* Utilizamos useEffect para ejecutar la carga de información cuando el Hook sea utilizado y el componente correspondiente se monte.
        cargarData(); //* Ejecutamos la función asíncrona que se encarga de llamar al Helper y actualizar el estado.
    }, []) //* Utilizamos un arreglo de dependencias vacío para indicar que este efecto no depende de ningún valor y se ejecuta al montarse el componente.
    
    return { //* Retornamos un objeto con la información que queremos exponer hacia el componente.
        data //* Exponemos el estado data para que el componente pueda utilizar la información obtenida.
    } //* Finalizamos el objeto retornado.
} //* Finalizamos el Custom Hook.

function Componente3() { //* Declaramos un componente que utilizará el Custom Hook para obtener la información de los usuarios.
    const { data } = useHook1(); //* Ejecutamos el Custom Hook y obtenemos mediante desestructuración la información almacenada en data.
    return ( //* Retornamos el JSX que será renderizado por el componente.
        <ol> //* Creamos una lista ordenada para mostrar los usuarios.
            {data.map(item => <li key={item.id}>{item.name}</li>)} //* Recorremos el arreglo data y generamos un elemento li por cada usuario, utilizando su id como key única.
        </ol> //* Finalizamos la lista ordenada.
    ); //* Finalizamos el return del componente.
} //* Finalizamos el componente Componente3.

export { Componente3 }; //* Exportamos el componente para poder utilizarlo desde otros archivos.

// ?Exportación de Helpers desde archivos JavaScript a componentes.
// ?Los Helpers, al igual que los Custom Hooks, pueden ser declarados dentro de archivos JavaScript independientes y posteriormente exportados para reutilizar su lógica desde otros archivos. Para poder utilizar un Helper desde un Custom Hook o desde un componente, primero debemos exportarlo desde el archivo donde fue declarado y posteriormente importarlo en el archivo donde necesitemos utilizarlo. Si utilizamos una exportación nombrada, podemos hacerlo mediante "export function helper()" o "export { helper }", y posteriormente importarlo utilizando las llaves correspondientes. De esta manera podemos mantener separada la lógica general de JavaScript de la lógica específica de React. En este caso, el Helper puede encargarse de realizar una petición o procesamiento y retornar la información, mientras que el Custom Hook puede encargarse de administrar el estado y los efectos necesarios para trabajar con dicha información.
import { helperExportadoDeJavaScript } from "../helpers/18-Custom-Hooks-&-Helpers"; //* Importamos el Helper exportado desde nuestro archivo JavaScript para poder utilizarlo dentro del Custom Hook.

function useHook2() { //* Declaramos un Custom Hook que utilizará el Helper importado para obtener información externa.
    const [data, setData] = useState([]); //* Creamos un estado para almacenar la información que posteriormente obtendremos desde el Helper.
    async function cargarData() { //* Declaramos una función asíncrona encargada de ejecutar el Helper y procesar la información obtenida.
        const info = await helperExportadoDeJavaScript(); //* Ejecutamos el Helper importado y esperamos mediante await a que finalice su operación asíncrona.
        setData(info); //* Actualizamos el estado data con la información retornada por el Helper.
    } //* Finalizamos la función cargarData.

    useEffect(() => { //* Utilizamos useEffect para ejecutar la carga de información cuando el componente se monte.
        cargarData(); //* Ejecutamos la función encargada de llamar al Helper y actualizar el estado.
    }, []) //* Indicamos mediante el arreglo de dependencias vacío que el efecto no depende de ningún valor y se ejecutará al montarse el componente.
    
    return { //* Retornamos un objeto con la información que queremos exponer hacia el componente.
        data //* Exponemos el estado data para que pueda ser utilizado por el componente.
    } //* Finalizamos el objeto retornado por el Custom Hook.
} //* Finalizamos el Custom Hook.

function Componente4() { //* Declaramos el componente que utilizará el Custom Hook y la información proporcionada por este.
    const { data } = useHook2(); //* Ejecutamos el Custom Hook y obtenemos mediante desestructuración el estado data.
    return ( //* Retornamos el JSX que será renderizado por el componente.
        <ol> //* Creamos una lista ordenada para mostrar los elementos obtenidos.
            {data.map(item => <li key={item.id}>{item.name}</li>)} //* Recorremos el arreglo data mediante map y generamos un elemento li por cada usuario.
        </ol> //* Finalizamos la lista ordenada.
    ); //* Finalizamos el return del componente.
} //* Finalizamos el componente Componente4.

export { Componente4 }; //* Exportamos el componente para poder utilizarlo desde otros archivos.