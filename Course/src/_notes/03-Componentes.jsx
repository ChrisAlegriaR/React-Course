// ^Componentes.
// ^Los componentes son uno de los conceptos más importantes y fundamentales dentro de React, ya que prácticamente toda una aplicación desarrollada con esta librería se construye a partir de componentes. Un componente puede entenderse como un bloque de construcción independiente que encapsula tanto la lógica como la estructura visual de una parte específica de la interfaz de usuario. Gracias a este enfoque, en lugar de desarrollar una interfaz enorme y difícil de mantener, React permite dividir toda la aplicación en múltiples componentes pequeños, reutilizables e independientes, haciendo que el código sea mucho más organizado, mantenible y escalable. Cada componente representa una pequeña porción de la interfaz, pudiendo contener desde un simple botón hasta una página completa. En conjunto, todos estos componentes forman la interfaz completa que el usuario visualiza e interactúa dentro de la aplicación.

// ~Tipos de componentes.
// ~Dentro de React existen principalmente dos tipos de componentes: los componentes de clase (*Class Components*) y los componentes funcionales (*Functional Components*). Ambos tienen el mismo objetivo, que es representar una parte de la interfaz de usuario, sin embargo, la manera en que son creados y la forma en que administran su estado interno es diferente. Actualmente, los componentes de clase han quedado prácticamente obsoletos para nuevos desarrollos, ya que React introdujo los Hooks, permitiendo que los componentes funcionales puedan realizar prácticamente las mismas tareas de una forma mucho más sencilla. Por esta razón, hoy en día la recomendación oficial es utilizar componentes funcionales. Independientemente del tipo de componente utilizado, estos deben exportarse para poder ser utilizados desde otros archivos JSX o TSX de la aplicación. La forma más común consiste en utilizar `export default`, aunque también es posible utilizar exportaciones nombradas mediante `export`.
// ?Componentes de tipo clase (cc).
// ?Aunque actualmente los componentes de clase ya casi no se utilizan en proyectos nuevos, todavía es muy común encontrarlos en aplicaciones desarrolladas hace algunos años, por lo que resulta importante conocer su funcionamiento. Estos componentes se construyen utilizando una clase de JavaScript que hereda de la clase `Component` proporcionada por React. Internamente cuentan principalmente con dos elementos fundamentales: `state` y `render()`. El objeto `state` almacena el estado interno del componente, es decir, información que puede cambiar durante la ejecución de la aplicación y provocar que el componente vuelva a renderizarse. Por otro lado, el método `render()` es el encargado de retornar el contenido JSX que React mostrará finalmente en pantalla. Todo el contenido visual del componente siempre será devuelto mediante este método.
class nombreComponente extends Component { //* Se declara un componente basado en clases heredando de Component.
    state = { } //* Objeto que almacena el estado interno del componente.
    render() { //* Método obligatorio encargado de retornar la interfaz visual.
        return ( //* Se retorna el contenido JSX que React renderizará.
            <h1>Hola Mundo!.</h1> //* Elemento JSX mostrado al usuario.
        ); //* Fin del return.
    } //* Fin del método render().
} //* Fin del componente de clase.

export default nombreComponente; //* Exporta el componente como exportación por defecto.

// ?Componentes de tipo función (ffc) (rafc).
// ?Actualmente, los componentes funcionales representan la forma estándar y recomendada de desarrollar aplicaciones con React. Su estructura es considerablemente más sencilla que la de los componentes de clase, ya que simplemente consisten en una función que retorna JSX. Originalmente estos componentes eran utilizados únicamente para mostrar información estática; sin embargo, gracias a la incorporación de los Hooks, ahora también pueden manejar estados, ciclos de vida, referencias y prácticamente todas las capacidades que anteriormente eran exclusivas de los componentes de clase. Debido a esto, React recomienda ampliamente utilizar componentes funcionales en proyectos modernos. Estos componentes pueden declararse mediante funciones tradicionales o utilizando funciones flecha, siendo esta última una de las formas más utilizadas actualmente.
// *Componente de funcion normal.
function nombreComponente() { //* Se declara un componente funcional mediante una función tradicional.
    return ( //* Se retorna el contenido JSX.
        <h1>Hola Mundo!.</h1> //* Elemento visual mostrado por el componente.
    ); //* Fin del return.
} //* Fin del componente.

export default nombreComponente; //* Exporta el componente como exportación por defecto.

// *Componente de funcion de tipo flecha.
const nombreComponente = () => { //* Se declara un componente funcional utilizando una función flecha.
    return ( //* Retorna el contenido JSX del componente.
        <h1>Hola Mundo!.</h1> //* Elemento mostrado al usuario.
    ) //* Fin del return.
} //* Fin del componente.

export default nombreComponente; //* Exporta el componente.

// ~Exportacion de componentes.
// ~Una vez creado un componente, el siguiente paso normalmente consiste en exportarlo para que pueda ser utilizado desde cualquier otro archivo de nuestra aplicación. React no obliga a utilizar un único sistema de exportación, sino que aprovecha el mismo sistema de módulos de JavaScript. Principalmente existen dos formas de exportar componentes: mediante `export default`, permitiendo exportar un único componente principal por archivo, o mediante `export`, permitiendo exportar múltiples componentes desde un mismo archivo. Cada enfoque tiene sus ventajas dependiendo de la organización del proyecto. En proyectos React modernos es bastante común encontrar un solo componente por archivo utilizando `export default`, aunque también existen escenarios donde resulta útil utilizar exportaciones nombradas.
// ?Exportacion de un solo componente por archivo.
// ?Como se comentó anteriormente, una práctica muy común consiste en que cada archivo JSX o TSX contenga únicamente un componente principal. Para ello se utiliza `export default`, el cual indica que ese componente será la exportación principal del archivo. Este tipo de exportación presenta la ventaja de que al importarlo posteriormente no es necesario utilizar llaves `{}`. Además, `export default` puede utilizarse directamente durante la declaración del componente o bien realizarse de forma independiente una vez declarado el componente.
// &Exportacion de componentes en la declaracion de los mismos.
// &Esta modalidad consiste en colocar directamente la palabra reservada `export default` antes de la declaración del componente. De esta manera, React exportará automáticamente dicho componente sin necesidad de escribir una instrucción adicional al final del archivo.
// *Exportacion de componente de funcion normal en la declaracion del mismo.
export default function nombreComponente() { //* Se declara y exporta el componente en una sola instrucción.
    return ( //* Retorna el contenido JSX.
        <h1>Hola Mundo!.</h1> //* Elemento visual del componente.
    ); //* Fin del return.
} //* Fin del componente.

// *Exportacion de componente de clase en la declaracion del mismo.
export default class nombreComponente extends Component { //* Se declara y exporta directamente un componente de clase.
    state = { } //* Estado interno del componente.
    render() { //* Método encargado de retornar el JSX.
        return ( //* Retorna el contenido visual.
            <h1>Hola Mundo!.</h1> //* Elemento mostrado al usuario.
        ); //* Fin del return.
    } //* Fin de render().
} //* Fin del componente.

// &Exportacion de componentes de manera independiente.
// &Otra forma muy utilizada consiste en declarar primero el componente normalmente y posteriormente, al final del archivo, utilizar `export default` indicando el nombre del componente que deseamos exportar. Esta forma resulta útil cuando primero queremos escribir completamente el componente y posteriormente decidir cuál será la exportación principal del archivo.
// *Exportacion de componente de funcion normal de manera independiente.
function nombreComponente() { //* Se declara normalmente el componente.
    return ( //* Retorna el JSX.
        <h1>Hola Mundo!.</h1> //* Elemento mostrado.
    ); //* Fin del return.
} //* Fin del componente.

export default nombreComponente; //* Exporta el componente previamente declarado.

// *Exportacion de componente de clase de manera independiente.
class nombreComponente extends Component { //* Declaración de componente de clase.
    state = { } //* Estado interno.
    render() { //* Método render.
        return ( //* Retorna el JSX.
            <h1>Hola Mundo!.</h1> //* Contenido visual.
        ); //* Fin del return.
    } //* Fin de render().
} //* Fin del componente.

export default nombreComponente; //* Exporta el componente.

// ?Exportacion de mas de un componente por archivo.
// ?Aunque lo más habitual es trabajar con un componente principal por archivo, React también permite exportar múltiples componentes desde un mismo archivo. Para ello se utiliza la palabra reservada `export` en lugar de `export default`. Este sistema recibe el nombre de exportaciones nombradas (*Named Exports*). A diferencia de `export default`, cuando posteriormente se importen estos componentes será obligatorio hacerlo utilizando llaves `{}` e indicando exactamente el nombre con el que fueron exportados. Este enfoque suele utilizarse cuando varios componentes pequeños están estrechamente relacionados entre sí.
// &Exportacion de componentes en la declaracion de los mismos.
// &Consiste en colocar la palabra reservada `export` directamente antes de la declaración del componente, haciendo que automáticamente forme parte de las exportaciones disponibles del archivo.
// *Exportacion de componente de funcion normal en la declaracion del mismo.
export function nombreComponente() { //* Se declara y exporta un componente funcional.
    return ( //* Retorna el JSX.
        <h1>Hola Mundo!.</h1> //* Contenido visual.
    ); //* Fin del return.
} //* Fin del componente.

// *Exportacion de componente de clase en la declaracion del mismo.
export class nombreComponente extends Component { //* Se declara y exporta un componente de clase.
    state = { } //* Estado del componente.
    render() { //* Método render.
        return ( //* Retorna el JSX.
            <h1>Hola Mundo!.</h1> //* Contenido visual.
        ); //* Fin del return.
    } //* Fin de render().
} //* Fin del componente.

// &Exportacion de componentes de manera independiente.
// &También es posible declarar primero los componentes normalmente y posteriormente exportarlos utilizando la sintaxis `export { nombreComponente }`. Este enfoque resulta especialmente útil cuando un mismo archivo contiene varios componentes y deseamos decidir exactamente cuáles serán exportados.
// *Exportacion de componente de funcion normal de manera independiente.
function nombreComponente() { //* Declaración del componente.
    return ( //* Retorna JSX.
        <h1>Hola Mundo!.</h1> //* Contenido visual.
    ); //* Fin del return.
} //* Fin del componente.

export { nombreComponente }; //* Exporta el componente mediante export nombrado.

// *Exportacion de componente de clase de manera independiente.
class nombreComponente extends Component { //* Declaración del componente de clase.
    state = { } //* Estado interno.
    render() { //* Método render.
        return ( //* Retorna JSX.
            <h1>Hola Mundo!.</h1> //* Elemento mostrado.
        ); //* Fin del return.
    } //* Fin de render().
} //* Fin del componente.

export { nombreComponente }; //* Exporta el componente de clase mediante export nombrado.

// ~Importacion de componentes.
// ~La importacion de nuestros componentes es un paso fundamental para poder utilizarlos dentro de otros archivos JSX o TSX de nuestra aplicación. React permite importar componentes utilizando la misma sintaxis de módulos de JavaScript, ya sea mediante `import` para exportaciones nombradas o `import` sin llaves para exportaciones por defecto. Por lo que el uso de extas varia de como exportamos nuestros componentes. Es importante tener en cuenta que al importar un componente, debemos especificar correctamente la ruta relativa al archivo donde se encuentra, así como el nombre exacto del componente si se trata de una exportación nombrada. Donde el uso de import sin usar llaves `{}` es para exportaciones por defecto mediante el uso de `export default`, mientras que el uso de llaves `{}` es para exportaciones nombradas mediante el uso de `export`.
// ?Importacion de un solo componente por archivo.
// ?Cuando un archivo contiene únicamente un componente principal exportado mediante `export default`, la importación de dicho componente se realiza sin utilizar llaves `{}`. Esto permite que el nombre del componente importado pueda ser diferente al nombre original del componente, ofreciendo flexibilidad en la nomenclatura dentro del archivo donde se realiza la importación. Por lo que igualmente podemos usar un nombre diferente al original del componente, ya que no es necesario que coincidan los nombres, ya que dicho archivo solo exporta un componente principal. Sin embargo, es recomendable mantener la coherencia en los nombres para mejorar la legibilidad del código y facilitar su mantenimiento.
import nombreComponente from './ruta/del/componente'; //* Importa un componente exportado por defecto desde la ruta especificada.

// ?Importacion de mas de un componente por archivo.
// ?Cuando un archivo contiene múltiples componentes exportados mediante `export`, la importación de dichos componentes requiere el uso de llaves `{}`. En este caso, es obligatorio utilizar exactamente los mismos nombres con los que fueron exportados, ya que las llaves indican que se trata de exportaciones nombradas.
import { nombreComponente1, nombreComponente2 } from './ruta/del/componente'; //* Importa múltiples componentes exportados mediante export nombrado desde la ruta especificada.