// ^Fragment en JSX.
// ^Como bien sabemos, dentro de los componentes de React escritos en JSX es posible retornar código con una sintaxis muy similar a HTML. Sin embargo, una de las reglas fundamentales de JSX es que **cada componente únicamente puede retornar un único elemento raíz**. Dicho elemento puede contener una cantidad ilimitada de elementos hijos, pero React necesita que todo el contenido retornado se encuentre agrupado bajo un solo nodo padre para poder construir correctamente el árbol de componentes y realizar el proceso de renderizado del Virtual DOM. Si un componente intenta retornar dos o más elementos hermanos sin un contenedor común, React generará un error de compilación. Para solucionar esta limitación, React incorpora una utilidad llamada **Fragment**, cuya finalidad consiste en agrupar múltiples elementos sin necesidad de crear un elemento HTML adicional dentro del DOM. Gracias a ello es posible mantener una estructura mucho más limpia, evitando la creación de etiquetas innecesarias como `<div>` que únicamente existirían para satisfacer esta regla. Esto ayuda a mantener un DOM más ligero, semántico y optimizado, especialmente en aplicaciones grandes donde el exceso de nodos puede dificultar el mantenimiento de la interfaz.

// ~Retornos admitidos por JSX sin el uso de "Fragment".
// ~De forma predeterminada, JSX únicamente permite retornar un único nodo raíz dentro de cada componente. Esto significa que podemos devolver un solo elemento que, a su vez, contenga todos los elementos hijos que sean necesarios. Sin embargo, si intentamos retornar varios elementos hermanos directamente, React no podrá determinar cuál de ellos será el nodo principal del componente y mostrará un error de compilación. Por ello, cuando no utilizamos Fragment, siempre será obligatorio envolver todo el contenido dentro de un único elemento padre.
// ?Retorno de un solo elemento en componente sin implementar Fragment.
// ?Si un componente retorna un único elemento principal, aunque este contenga múltiples elementos hijos en su interior, React podrá renderizar correctamente todo el contenido. Esto sucede porque únicamente existe un nodo raíz, el cual cumple con la estructura que React necesita para construir el árbol de componentes y posteriormente representarlo dentro del DOM.
function NombreComponente() { //* Declaración del componente funcional.
    return ( //* Se retorna un único nodo principal.
        <div> {/* Nodo raíz del componente. */}
            <h1>¡Hola Mundo!.</h1> //* Primer elemento hijo.
            <h2>¡Hola Vida!.</h2> //* Segundo elemento hijo.
            <h3>¡Hola Amigos!.</h3> //* Tercer elemento hijo.
        </div> //* Fin del nodo raíz.
    ); //* Fin del return.
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente como exportación por defecto.

// ?Retorno de varios elementos en componente sin implementar Fragment.
// ?Si intentamos retornar varios elementos hermanos directamente desde un componente sin envolverlos dentro de un único nodo padre, React generará un error durante la compilación. Esto ocurre porque JSX exige que exista un único elemento raíz sobre el cual React pueda construir correctamente el árbol de renderizado. Aunque visualmente los elementos parezcan independientes, internamente React necesita un solo punto de entrada para representar el componente.
function NombreComponente() { //* Declaración del componente.
    // return ( //* Este retorno provocaría un error de compilación.
    //     <h1>¡Hola Mundo!.</h1> //* Primer elemento hermano.
    //     <h2>¡Hola Vida!.</h2> //* Segundo elemento hermano.
    //     <h3>¡Hola Amigos!.</h3> //* Tercer elemento hermano.
    // ); //* React no permite retornar múltiples nodos raíz sin Fragment.

} //* Fin del componente.

export default NombreComponente; //* Exporta el componente.

// ~Retornos admitidos por JSX mediante el uso de "Fragment".
// ~Para evitar agregar elementos HTML innecesarios únicamente con el propósito de cumplir la regla del nodo raíz, React proporciona **Fragment**. Un Fragment permite agrupar múltiples elementos hermanos y retornarlos como si fueran un único nodo lógico para React, pero **sin generar ningún elemento adicional dentro del DOM**. Esto significa que el navegador nunca verá un `<Fragment>`, ya que React elimina esta estructura durante el proceso de renderizado. Gracias a ello se obtiene un DOM mucho más limpio, ligero y semántico. Además, Fragment puede utilizarse tanto para agrupar varios elementos hermanos como para organizar estructuras más complejas dentro del componente. React ofrece dos formas de utilizar Fragment: la sintaxis clásica mediante la etiqueta `<Fragment>` y la sintaxis abreviada mediante `<> </>`, siendo esta última la más utilizada y recomendada actualmente.
// ?Importacion de Fragment desde React.
// ?Fragment forma parte del propio núcleo de React, por lo que no es necesario instalar ninguna librería adicional para utilizarlo. Únicamente debemos importarlo desde el paquete `react` cuando vayamos a utilizar la sintaxis tradicional `<Fragment>`. En cambio, si utilizamos la sintaxis abreviada `<> </>`, en versiones modernas de React ni siquiera será necesario realizar esta importación.
import { Fragment } from "react"; //* Se importa Fragment desde la librería React para utilizar su sintaxis tradicional.

// ?Retorno de diversos elementos en componente mediante el uso de Fragment.
// ?Al utilizar Fragment, React interpreta todos los elementos contenidos dentro de él como si pertenecieran a un único nodo lógico. Gracias a ello es posible retornar múltiples elementos hermanos sin necesidad de envolverlos dentro de un `<div>` u otro elemento HTML. Esto permite mantener una estructura mucho más limpia y evita introducir nodos que únicamente servirían como contenedores. Actualmente existen dos formas de utilizar Fragment: la sintaxis clásica mediante `<Fragment>` y la sintaxis abreviada mediante `<> </>`, siendo esta última la más utilizada en proyectos modernos.
// &Retorno de varios elementos en componente mediante el uso de Fragment al estilo antiguo.
// &La primera forma de utilizar Fragment consiste en emplear explícitamente las etiquetas `<Fragment>` y `</Fragment>`. Aunque actualmente esta sintaxis ha sido reemplazada en la mayoría de los proyectos por su versión abreviada, sigue siendo completamente válida y aún puede encontrarse en aplicaciones desarrolladas hace algunos años. Su funcionamiento consiste simplemente en envolver todos los elementos que deseamos retornar dentro de dichas etiquetas.
function NombreComponente() { //* Declaración del componente.
    return ( //* Se retorna un Fragment tradicional.
        <Fragment> {/* Inicio del Fragment. No genera ningún nodo en el DOM. */}
            <h1>¡Hola Mundo!.</h1> //* Primer elemento.
            <h2>¡Hola Vida!.</h2> //* Segundo elemento.
            <h3>¡Hola Amigos!.</h3> //* Tercer elemento.
        </Fragment> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente.

// &Retorno de varios elementos en componente mediante el uso de Fragment al estilo moderno.
// &Actualmente, la forma recomendada de utilizar Fragment consiste en emplear su sintaxis abreviada mediante las etiquetas vacías `<>` y `</>`. Internamente esta sintaxis funciona exactamente igual que `<Fragment>`, con la diferencia de que el código resulta más limpio, más corto y mucho más fácil de leer. Debido a ello, esta es la forma que se utiliza prácticamente en todos los proyectos modernos desarrollados con React.
function NombreComponente() { //* Declaración del componente.
    return ( //* Se retorna un Fragment abreviado.
        <> {/* Inicio del Fragment abreviado. */}
            <h1>¡Hola Mundo!.</h1> //* Primer elemento.
            <h2>¡Hola Vida!.</h2> //* Segundo elemento.
            <h3>¡Hola Amigos!.</h3> //* Tercer elemento.
        </> //* Fin del Fragment abreviado.
    ); //* Fin del return.
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente.

