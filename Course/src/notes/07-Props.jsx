// ^Props.
// ^Las propiedades, mejor conocidas como **Props (Properties)**, son uno de los mecanismos más importantes y fundamentales de React, ya que permiten pasar información desde un componente padre hacia un componente hijo. Los Props son objetos que contienen uno o varios valores, los cuales sirven como medio de comunicación entre componentes, permitiendo que un componente padre envíe datos para que el componente hijo los utilice según sus necesidades. La implementación de Props es extremadamente común dentro de React, ya que son utilizados tanto en componentes pequeños (como botones, tarjetas, inputs o etiquetas), permitiendo reutilizar un mismo componente múltiples veces cambiando únicamente la información que recibe, como en componentes mucho más grandes (por ejemplo páginas completas, secciones o pestañas) para recibir información dinámica proveniente de una base de datos, una API, la URL o cualquier otra fuente externa. Es importante mencionar que los Props son **inmutables**, es decir, una vez que el componente padre los envía, el componente hijo únicamente puede leerlos y utilizarlos, pero nunca modificarlos directamente. Si se desea cambiar el valor de un Prop, dicho cambio siempre deberá realizarse desde el componente padre para posteriormente volver a enviarlo al componente hijo con el nuevo valor. En resumen, los Props representan el mecanismo de comunicación unidireccional entre componentes dentro de React, favoreciendo la reutilización de componentes, la separación de responsabilidades, la creación de aplicaciones escalables, mantenibles y fáciles de comprender. De manera simplificada, un Prop puede entenderse como un parámetro que permite pasar prácticamente cualquier tipo de dato de JavaScript entre componentes, tales como strings, numbers, boolean, objetos, arrays, funciones, fechas e incluso componentes completos, pudiendo utilizar dicha información en botones, tarjetas, formularios, listas, tablas, menús y prácticamente cualquier componente que forme parte de una aplicación React.
// ~Paso de Props desde el componente padre.
// ~Para poder implementar el uso de Props dentro de React, como se comentó previamente, es indispensable contar con un componente padre, ya que será este el encargado de enviar la información al componente hijo. Para ello es necesario que dentro del retorno (`return`) del componente padre exista la llamada al componente hijo, ya que será justamente en ese momento donde podremos definir los Props que dicho componente recibirá. Cada Prop estará compuesto por un nombre y un valor, donde dicho valor puede pertenecer a prácticamente cualquier tipo de dato existente en JavaScript. Una vez que el componente hijo reciba los Props, podrá utilizarlos dentro de su lógica interna, mostrarlos directamente en pantalla, realizar operaciones con ellos o incluso utilizarlos para controlar el comportamiento del propio componente. Es importante recordar nuevamente que los Props son inmutables, por lo que el componente hijo nunca deberá modificarlos directamente; si se requiere un cambio, este deberá realizarse desde el componente padre y posteriormente reenviar el nuevo valor. Cabe destacar que existe una pequeña diferencia entre la sintaxis utilizada para enviar Props de tipo String y Props de tipo Number (o cualquier expresión de JavaScript). Los Strings se envían entre comillas, mientras que los valores numéricos, booleanos, arreglos, objetos, funciones o cualquier expresión JavaScript deberán enviarse utilizando llaves `{}`. Esto sucede porque las comillas indican texto plano, mientras que las llaves le indican a JSX que lo que contiene debe ser interpretado como código JavaScript.
// ?Paso de Props de tipo String.
// ?El paso de un Prop de tipo **String** consiste en, dentro del lugar donde se llama a nuestro componente hijo, declarar un atributo con la estructura `nombreProp=''`. Dentro de las comillas escribiremos el texto que deseamos enviar. React interpretará automáticamente dicho valor como un String y lo almacenará dentro del objeto de Props que recibirá el componente hijo. Este es el formato más utilizado para enviar nombres, títulos, mensajes, descripciones o cualquier información de tipo texto.
createRoot(document.getElementById('root')).render( //* Se comienza el renderizado principal de la aplicación React.
    <StrictMode> //* StrictMode ayuda a detectar posibles problemas durante el desarrollo.
        <App nombre='Daniel' apellido='Gonzalez'/> //* Se envían dos Props de tipo String al componente App.
    </StrictMode>, //* Finaliza StrictMode.
) //* Finaliza el renderizado principal.

// ?Paso de Props de tipo Number.
// ?El paso de un Prop de tipo **Number** cambia ligeramente respecto al de tipo String. Aunque la estructura `nombreProp=` continúa siendo exactamente la misma, en este caso el valor ya no se coloca entre comillas, sino dentro de llaves `{}`. Esto se debe a que JSX interpretará el contenido de las llaves como una expresión de JavaScript y no como texto plano. Esta misma sintaxis también es utilizada para enviar booleanos, arreglos, objetos, funciones, variables o cualquier expresión JavaScript.
createRoot(document.getElementById('root')).render( //* Se comienza nuevamente el renderizado principal.
    <StrictMode> //* StrictMode supervisa el comportamiento del componente durante el desarrollo.
        <App num1={1} num2={2}/> //* Se envían dos Props de tipo Number utilizando expresiones JavaScript.
    </StrictMode>, //* Finaliza StrictMode.
) //* Finaliza el renderizado.

// ~Uso e implementación de Props dentro de componentes hijos.
// ~Una vez que el componente padre ha enviado los Props, el componente hijo podrá recibirlos y utilizarlos libremente. Para ello es necesario declarar dentro de la función que conforma el componente un parámetro encargado de recibir el objeto de Props enviado por el componente padre. Existen principalmente dos formas de trabajar con dichos Props. La primera consiste en recibir el objeto completo y acceder a cada Prop mediante la notación `nombreParametro.nombreProp`, mientras que la segunda consiste en utilizar la **desestructuración**, la cual extrae directamente los Props necesarios desde los parámetros de la función. Ambas formas realizan exactamente la misma función; la diferencia radica únicamente en la sintaxis utilizada. En cualquiera de los dos casos, los Props podrán utilizarse dentro de operaciones JavaScript, condiciones, ciclos, funciones o mostrarse directamente dentro del HTML (JSX) retornado por el componente.
// ?Llamado de Props mediante estructuración.
// ?Para utilizar los Props mediante su forma estructurada, únicamente deberemos declarar un parámetro dentro de la función que conforma nuestro componente (comúnmente llamado `props`). Dicho parámetro contendrá un objeto con todos los Props enviados por el componente padre. Para acceder a cualquiera de ellos bastará con utilizar la sintaxis `props.nombreProp`. Esta forma resulta especialmente útil cuando queremos acceder a muchos Props dinámicamente o cuando deseamos manipular el objeto completo. Como los Props representan datos JavaScript, si queremos mostrarlos dentro del HTML deberemos hacerlo mediante llaves `{}`, tal como sucede con cualquier otra expresión JavaScript utilizada dentro de JSX.
function NombreComponente(props) { //* El parámetro props recibe automáticamente todos los Props enviados por el componente padre.
    let suma = props.numero + 1; //* Se realiza una operación utilizando uno de los Props recibidos.
    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment permite retornar varios elementos sin agregar nodos extras al DOM.
            <h1>{props.nombre}</h1> //* Se renderiza el Prop nombre.
            <h2>{props.apellido}</h2> //* Se renderiza el Prop apellido.
            <h3>{suma}</h3> //* Se renderiza el resultado de la operación realizada con los Props.
        </> //* Finaliza Fragment.
    ); //* Finaliza el return.
} //* Finaliza el componente.

export default NombreComponente; //* Se exporta el componente para poder utilizarlo desde otros archivos.

// ?Llamado de Props mediante desestructuración.
// ?Otra forma muy utilizada para trabajar con Props consiste en utilizar la desestructuración. En este caso, en lugar de recibir el objeto completo, colocaremos llaves `{}` dentro de los parámetros de la función y escribiremos directamente el nombre de cada Prop que deseamos utilizar. React extraerá automáticamente dichos Props del objeto recibido, permitiéndonos utilizarlos directamente sin necesidad de escribir constantemente `props.nombreProp`. Actualmente esta es la forma más utilizada dentro de React moderno debido a que hace el código más limpio, corto y fácil de leer. Al igual que en el método anterior, dichos Props pueden utilizarse dentro de operaciones JavaScript o mostrarse directamente dentro del JSX utilizando llaves.
function NombreComponente({nombre, apellido, numero}) { //* Se desestructuran directamente los Props necesarios.
    let suma = numero + 1; //* Se utiliza el Prop numero sin escribir props.numero.
    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment agrupa varios elementos.
            <h1>{nombre}</h1> //* Se renderiza el Prop nombre.
            <h2>{apellido}</h2> //* Se renderiza el Prop apellido.
            <h3>{suma}</h3> //* Se muestra el resultado obtenido utilizando el Prop numero.
        </> //* Finaliza Fragment.
    ); //* Finaliza el return.
} //* Finaliza el componente.

export default NombreComponente; //* Se exporta el componente.

// ~Props obligatorios y restricciones.
// ~Como bien sabemos, dentro del mundo de la programación es una buena práctica validar la información que reciben nuestros componentes para evitar errores durante la ejecución de la aplicación. En React esto también es posible mediante la utilización de la librería **prop-types**, la cual permite establecer restricciones sobre los Props que un componente puede recibir. Gracias a esta librería podemos indicar el tipo de dato esperado para cada Prop (String, Number, Boolean, Array, Object, Function, etc.), además de especificar si dicho Prop es obligatorio mediante la propiedad `isRequired`. Esto ayuda a detectar errores durante el desarrollo cuando un componente recibe un tipo de dato incorrecto o cuando un Prop obligatorio no fue enviado desde el componente padre. Para poder utilizar esta funcionalidad primero es necesario instalar la librería mediante `npm install prop-types` y posteriormente importarla dentro del componente donde deseemos aplicar dichas validaciones. Además de `propTypes`, React también permite utilizar `defaultProps`, los cuales sirven para asignar valores por defecto cuando el componente padre no proporciona determinado Prop. Aunque actualmente con JavaScript moderno suele utilizarse la asignación de valores por defecto mediante desestructuración, es importante conocer `defaultProps`, ya que continúa apareciendo en muchos proyectos existentes.
// ?Importación de la librería prop-types.
// ?La importación de la librería **prop-types** es necesaria para poder establecer restricciones, validaciones y requerimientos sobre los Props recibidos por nuestros componentes. Una vez instalada mediante `npm install prop-types`, bastará con importarla utilizando `import PropTypes from 'prop-types';`. A partir de ese momento podremos utilizar todas las herramientas que dicha librería proporciona para validar nuestros Props.
import PropTypes from 'prop-types'; //* Se importa la librería encargada de validar los Props del componente.

// ?Implementación de restricciones y requerimientos en Props.
// ?Una vez instalada e importada la librería **PropTypes**, podremos comenzar a definir las restricciones correspondientes para nuestros Props. Para ello, después de la declaración del componente, deberemos crear la propiedad `NombreComponente.propTypes`, la cual contendrá un objeto donde cada clave representará el nombre de un Prop y cada valor representará el tipo de dato esperado junto con la restricción correspondiente. La sintaxis general utilizada es `nombreProp: PropTypes.tipoDeDato.restriccion`. Existen múltiples tipos disponibles como `string`, `number`, `bool`, `array`, `object`, `func`, `node`, `element`, entre otros. La restricción más utilizada es `isRequired`, la cual obliga a que dicho Prop sea enviado desde el componente padre; en caso contrario React mostrará una advertencia dentro de la consola indicando que el Prop requerido no fue proporcionado. Estas validaciones ayudan a mantener componentes mucho más robustos, seguros y fáciles de mantener.
function NombreComponente({nombre, apellido, numero}) { //* Se reciben los Props mediante desestructuración.
    let suma = numero + 1; //* Se utiliza uno de los Props para realizar una operación.
    return ( //* Se retorna el contenido del componente.
        <> //* Fragment agrupa los elementos retornados.
            <h1>{nombre}</h1> //* Se muestra el Prop nombre.
            <h2>{apellido}</h2> //* Se muestra el Prop apellido.
            <h3>{suma}</h3> //* Se muestra el resultado de la suma.
        </> //* Finaliza Fragment.
    ); //* Finaliza el return.
} //* Finaliza el componente.

export default NombreComponente; //* Se exporta el componente.

NombreComponente.propTypes = { //* Se declaran las validaciones de los Props del componente.
    nombre: PropTypes.string.isRequired, //* El Prop nombre debe existir y ser un String.
    apellido: PropTypes.string.isRequired, //* El Prop apellido debe existir y ser un String.
    numero: PropTypes.number.isRequired //* El Prop numero debe existir y ser un Number.
}; //* Finalizan las validaciones del componente.