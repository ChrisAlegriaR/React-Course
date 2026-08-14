// ^Condicional y Ternario.
// ^Como bien sabemos, dentro de JavaScript puro existen condicionales y diferentes herramientas propias del lenguaje que no dependen necesariamente de React para poder ser utilizadas. Entre estas herramientas se encuentran las **condicionales ternarias**, las cuales pueden entenderse como una forma simplificada y reducida de escribir una condición `if...else` utilizando una sola expresión. Los operadores ternarios nos permiten mostrar información, ejecutar una expresión o realizar determinada acción dependiendo de si una condición se cumple o no. Para utilizarlos únicamente necesitamos una condición, la cual puede estar basada en una variable booleana, un número, una comparación, una expresión lógica o prácticamente cualquier valor que pueda evaluarse como verdadero o falso. Posteriormente, mediante el operador `?` podemos especificar qué queremos mostrar o realizar cuando la condición sea verdadera, mientras que mediante `:` podemos establecer qué sucederá cuando la condición sea falsa. Dentro de React, los ternarios son especialmente útiles porque podemos utilizarlos directamente dentro de JSX para decidir dinámicamente qué contenido debe mostrarse en pantalla según el estado actual de nuestros datos. Esto resulta extremadamente útil en situaciones como comprobar si un usuario está logueado o no, verificar si un producto está disponible, determinar si una actividad fue completada, mostrar diferentes mensajes según una condición o incluso decidir qué componente debe renderizarse. Gracias a esto, nuestras aplicaciones pueden reaccionar dinámicamente a las condiciones que se presenten en cada momento, haciendo que la interfaz sea mucho más interactiva y adaptable.
// ~Declaracion de condicionales ternarios para mostrar informacion en caso falso y caso verdadero.
// ~La declaración de las condiciones ternarias es realmente sencilla de implementar, ya que únicamente necesitamos una variable, un valor o una expresión a la cual deseamos aplicar nuestra condición. Esta puede ser una comparación numérica, como comprobar si un número es mayor, menor o igual a determinado valor, una variable booleana, una comparación entre Strings o cualquier otra expresión que devuelva un valor que pueda evaluarse como verdadero o falso. La estructura básica de un ternario utiliza el signo de interrogación `?` y los dos puntos `:`. Antes del signo de interrogación se coloca la condición que queremos evaluar; inmediatamente después del signo `?` se define aquello que queremos que suceda o se muestre si la condición resulta verdadera; finalmente, después de los dos puntos `:` se define la acción o el resultado que deberá utilizarse si la condición no se cumple. De esta manera, podemos reemplazar estructuras `if...else` sencillas por una expresión mucho más corta que además puede utilizarse directamente dentro de JSX. Dentro de las dos posibles respuestas del ternario podemos colocar texto, números, operaciones, llamadas a funciones, elementos JSX o prácticamente cualquier expresión válida de JavaScript.
function NombreComponente1() { //* Se declara el primer componente funcional donde se demostrarán diferentes condiciones ternarias.
    const booleano1 = false; //* Variable booleana que contiene un valor falso para comprobar el funcionamiento del ternario.
    const booleano2 = true; //* Variable booleana que contiene un valor verdadero para comprobar el caso contrario.
    const num1 = 0; //* Variable numérica utilizada para realizar una comparación.
    const num2 = 1; //* Segunda variable numérica utilizada para comprobar una condición verdadera.
    return ( //* Se retorna el contenido JSX del componente.
        <> //* Fragment que permite agrupar el contenido sin generar un nodo adicional en el DOM.
            <ol> //* Se crea una lista ordenada para mostrar cada ejemplo.
                <li><b>¿El booleano es verdadero?:</b> {booleano1 ? '✔️' : '❌'}</li> //* Si booleano1 es true se muestra ✔️; si es false se muestra ❌.
                <li><b>¿El booleano es verdadero?:</b> {booleano2 ? '✔️' : '❌'}</li> //* Como booleano2 contiene true, el ternario selecciona el resultado correspondiente al caso verdadero.
                <li><b>Si el número es mayor a 0 se le sumará 4:</b> {num1 > 0 ? num1 + 4 : 'El número no es mayor que 0'}</li> //* Se comprueba si num1 es mayor que 0; si no lo es, se muestra el mensaje alternativo.
                <li><b>Si el número es mayor a 0 se le sumará 4:</b> {num2 > 0 ? num2 + 4 : 'El número no es mayor que 0'}</li> //* Se comprueba si num2 es mayor que 0; como la condición es verdadera, se suma 4 y se muestra el resultado.
            </ol> //* Fin de la lista ordenada.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

export { NombreComponente1 }; //* Se exporta el componente mediante una exportación nombrada.

// ~Declaracion de condicionales ternarios para mostrar informacion unicamente en caso de ser verdadero.
// ~Ahora bien, también podemos implementar condiciones dentro de React en las que únicamente queremos mostrar determinada información cuando una condición sea verdadera, pero no necesitamos definir qué deberá ocurrir cuando la condición sea falsa. Para estos casos podemos utilizar el operador lógico **AND (`&&`)**. Aunque normalmente se relaciona con condiciones lógicas y no es propiamente un operador ternario, dentro de JSX se utiliza frecuentemente para realizar un renderizado condicional corto. La estructura consiste en colocar primero la condición, seguida de `&&` y posteriormente el contenido que queremos mostrar cuando dicha condición sea verdadera. Si la condición es verdadera, React evaluará y mostrará la expresión ubicada después de `&&`; si la condición es falsa, la segunda expresión no se ejecutará y React no mostrará ese contenido. Esto resulta especialmente útil cuando únicamente necesitamos mostrar un elemento en determinados casos y no necesitamos establecer una alternativa para cuando la condición sea falsa.
function NombreComponente2() { //* Se declara el segundo componente funcional para demostrar el renderizado condicional mediante &&.
    const booleano1 = false; //* Variable booleana que representa una condición falsa.
    const booleano2 = true; //* Variable booleana que representa una condición verdadera.
    return ( //* Se retorna el contenido JSX del componente.
        <> //* Fragment para agrupar todos los elementos.
            <h1>Listado de actividades.</h1> //* Encabezado principal del listado.
            <ol> //* Lista ordenada de actividades.
                <li>Despertarse: {booleano2 && '✔️'}</li> //* Como booleano2 es true, React muestra el checkmark.
                <li>Correr: {booleano2 && '✔️'}</li> //* La condición vuelve a ser verdadera y se muestra el checkmark.
                <li>Desayunar: {booleano2 && '✔️'}</li> //* Se muestra el checkmark porque la condición es verdadera.
                <li>Estudiar: {booleano1 && '✔️'}</li> //* Como booleano1 es false, React no renderiza el checkmark.
                <li>Quehaceres: {booleano1 && '✔️'}</li> //* La condición también es falsa, por lo que no se muestra contenido después de &&.
            </ol> //* Fin de la lista.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

export { NombreComponente2 }; //* Se exporta el componente mediante una exportación nombrada.

// ~Ejemplo de implementación de condicionales ternarios mediante Props.
// ~Ahora bien, podemos implementar condicionales ternarios para mostrar información dependiendo de si se cumple o no una condición, pero podemos hacer que este comportamiento sea todavía más dinámico utilizando **Props**. De esta manera, el componente puede recibir información desde el componente padre y utilizar dichos valores para determinar qué debe mostrar en cada momento. Esto permite crear componentes reutilizables que no dependen de valores escritos directamente dentro de ellos, sino que reciben los datos que necesitan desde el exterior. Por ejemplo, podemos crear un componente llamado `Items` que reciba dos Props: uno llamado `nombre`, que será un String y contendrá el nombre de una actividad, y otro llamado `visto`, que será un Boolean y representará si dicha actividad ya fue completada o no. Posteriormente, mediante un operador ternario podemos evaluar el valor de `visto` para mostrar un checkmark cuando la actividad esté completada o una cruz cuando todavía no lo esté. Después podemos crear otro componente llamado `Listado`, el cual contendrá todas las actividades y se encargará de utilizar el componente `Items` varias veces, enviando diferentes Props en cada llamada. De esta manera, un único componente puede reutilizarse para representar diferentes elementos cambiando únicamente la información que recibe, demostrando cómo Props y renderizado condicional pueden trabajar conjuntamente para construir interfaces dinámicas y reutilizables.
// *Componente hijo que recibe Props y utiliza un ternario para decidir qué mostrar.
function Items({nombre, visto}) { //* Se declara el componente Items y se desestructuran los Props nombre y visto.
    return ( //* Se retorna el contenido visual del componente.
        <> //* Fragment utilizado para agrupar el contenido.
            <li>{nombre} {visto ? '✔️' : '❌'}</li> //* Se muestra el nombre y se utiliza un ternario para mostrar ✔️ si visto es true o ❌ si es false.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

// *Componente padre que utiliza múltiples veces el componente Items.
function Listado() { //* Se declara el componente encargado de representar todo el listado.
    return ( //* Se retorna el contenido JSX.
        <> //* Fragment que agrupa todos los elementos.
            <h1>Listado de Temas del Curso.</h1> //* Encabezado principal del listado.
            <ol> //* Lista ordenada donde se mostrarán los temas.
                <Items nombre="Instalaciones necesarias." visto={true}/> //* Se envía el nombre del tema y se indica mediante visto que ya fue completado.
                <Items nombre="Uso de Vite." visto={true}/> //* Se envían los Props correspondientes al segundo tema.
                <Items nombre="Componentes." visto={true}/> //* El tema Componentes aparece como completado.
                <Items nombre="Variables en JSX." visto={true}/> //* El tema Variables en JSX aparece como completado.
                <Items nombre="Props." visto={true}/> //* El tema Props aparece como completado.
                <Items nombre="Eventos." visto={true}/> //* El tema Eventos aparece como completado.
                <Items nombre="useState." visto={true}/> //* El tema useState aparece como completado.
                <Items nombre="Redux." visto={false}/> //* Redux recibe false, por lo que se mostrará la cruz.
                <Items nombre="customHooks" visto={false}/> //* customHooks también recibe false y se mostrará como pendiente.
            </ol> //* Fin de la lista ordenada.
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

export { Listado }; //* Se exporta el componente Listado mediante una exportación nombrada.