// ^Variables en JSX.
// ^Como bien sabemos, los archivos JSX son una extensión de JavaScript que incorpora una sintaxis muy similar a HTML, permitiendo combinar la lógica de JavaScript con la construcción de interfaces de usuario. Gracias a ello, dentro de un archivo JSX podemos declarar variables, funciones, arreglos, objetos y cualquier otra estructura propia de JavaScript para posteriormente utilizarlas dentro del contenido visual del componente. React permite renderizar dichas variables directamente en el DOM mediante el uso de llaves `{}`, las cuales representan una zona donde es posible escribir expresiones de JavaScript. Esto significa que dentro de ellas no solamente podemos acceder a variables previamente declaradas, sino también ejecutar operaciones, llamar funciones, realizar cálculos o evaluar expresiones, siempre y cuando el resultado final sea un valor que React sea capaz de renderizar.

// ~Declaracion de variables y su renderizado en DOM.
// ~Al tratarse de un archivo JavaScript, JSX conserva exactamente la misma sintaxis para declarar variables utilizando `let`, `const` o `var`. Estas variables pueden almacenar cualquier tipo de dato, como cadenas de texto, números, arreglos, valores booleanos, funciones, fechas, objetos, entre otros. Una buena práctica consiste en declarar aquellas variables que no dependan del componente fuera de él, ya que de esta manera únicamente serán creadas una vez y podrán ser reutilizadas durante todo el ciclo de vida de la aplicación. Si por el contrario una variable es declarada dentro del componente, esta será creada nuevamente cada vez que el componente vuelva a renderizarse. Una vez declaradas, React permite mostrar su contenido dentro del DOM utilizando llaves `{}`. Sin embargo, es importante conocer que no todos los tipos de datos pueden renderizarse directamente; algunos requieren un tratamiento especial antes de ser mostrados en pantalla.
// ?Declaracion de variables.
// ?La declaración de variables dentro de un archivo JSX es exactamente igual que en JavaScript puro, utilizando la palabra reservada correspondiente (`let`, `const` o `var`), seguida del nombre de la variable, el operador de asignación (`=`) y el valor que almacenará. React no modifica la sintaxis de JavaScript, únicamente añade la posibilidad de utilizar posteriormente dichas variables dentro del JSX para construir dinámicamente la interfaz de usuario.
let string = "Hola mundo!"; //* Variable de tipo String.
let number = 12345; //* Variable de tipo Number.
let array = [1, 2, 3, 4, 5]; //* Variable de tipo Array.
let boolean = true; //* Variable de tipo Boolean.
let funcion = () => 1 + 1; //* Función flecha que retorna un valor numérico.
let fecha = new Date(); //* Objeto de tipo Date.
let objeto = { nombre: "Jose", edad: 19 } //* Objeto literal de JavaScript.

// ?Renderizado de variables.
// ?Para poder mostrar el contenido de una variable dentro del DOM es indispensable utilizar llaves `{}` en la parte del JSX donde se desea visualizar. Estas llaves indican a React que el contenido interno debe interpretarse como una expresión de JavaScript y no como texto plano. Gracias a ello es posible acceder a variables, ejecutar operaciones matemáticas, utilizar operadores ternarios, llamar funciones e incluso invocar métodos de objetos. Sin embargo, React únicamente puede renderizar de forma directa determinados tipos de datos, mientras que otros, como los objetos, necesitan ser transformados previamente a un formato compatible.
// &Renderizado de variables diferentes a object.
// &Las variables de tipo `string`, `number` y `array` pueden renderizarse directamente dentro del DOM sin ningún problema. En el caso específico de los arreglos, React renderizará automáticamente cada elemento de forma consecutiva si estos contienen valores compatibles como cadenas o números. Por otra parte, las funciones no se renderizan como tal, sino que es necesario ejecutarlas para obtener el valor que retornan, y dicho valor deberá ser compatible con el renderizado de React. Respecto a los valores booleanos (`true` y `false`), React los interpreta como valores de control interno, por lo que no los muestra visualmente en pantalla aunque sí formen parte de la expresión.
let string = "Hola mundo!"; //* Variable de texto.
let number = 12345; //* Variable numérica.
let array = [1, 2, 3, 4, 5]; //* Arreglo de números.
let boolean = true; //* Variable booleana.
let funcion = () => 1 + 1; //* Función que retorna un número.

function NombreComponente() { //* Declaración del componente funcional.
    return ( //* Retorna el contenido JSX.
        <ul> //* Lista donde se mostrarán los distintos ejemplos de renderizado.
            <li>{string}</li> //* React renderiza directamente el contenido de la cadena de texto.
            <li>{number}</li> //* Los valores numéricos también pueden renderizarse directamente.
            <li>{array}</li> //* React renderiza cada elemento del arreglo de manera consecutiva siempre que sean valores compatibles.
            <li>{boolean}</li> //* Los valores booleanos (`true` y `false`) **no se muestran visualmente en el DOM**. React los utiliza internamente durante el renderizado, por lo que esta línea no producirá ningún contenido visible.
            <li>{funcion()}</li> //* Las funciones no pueden renderizarse directamente. Es necesario ejecutarlas para obtener su valor de retorno, el cual deberá ser un dato compatible con React (String, Number, JSX, etc.).
        </ul> //* Fin de la lista.
    ); //* Fin del return.
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente como exportación por defecto.

// &Renderizado de variables de tipo object.
// &A diferencia de los tipos de datos anteriores, los objetos de JavaScript no pueden renderizarse directamente dentro del DOM. Esto incluye objetos literales, instancias de clases, objetos Date, Map, Set y cualquier estructura cuyo tipo sea `object`. Si React intenta renderizar un objeto directamente, generará un error indicando que dicho tipo de dato no es válido como hijo de un elemento JSX. Para poder visualizar su contenido es necesario convertirlo previamente a un formato compatible, siendo la opción más utilizada `JSON.stringify()`, ya que transforma el objeto completo en una cadena de texto con formato JSON. Este método resulta especialmente útil durante el desarrollo para inspeccionar rápidamente el contenido de un objeto o verificar la información que está siendo almacenada.
let objeto = { nombre: "Jose", edad: 19 } //* Objeto literal de JavaScript.

function NombreComponente() { //* Declaración del componente.
    return (
        <h1>{JSON.stringify(objeto)}</h1> //* JSON.stringify() convierte el objeto en una cadena de texto, permitiendo que React pueda renderizarlo correctamente en el DOM.
    );
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente.