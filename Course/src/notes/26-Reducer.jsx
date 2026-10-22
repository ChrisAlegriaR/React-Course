// ^Reducer.
// ^Reducer es una herramienta muy importante al momento de manejar y organizar estados dentro de aplicaciones grandes desarrolladas con React, donde, conforme el proyecto va creciendo y adquiriendo una mayor complejidad, resulta fundamental mantener los estados bien organizados para facilitar su administración, actualización y mantenimiento. Los reducers nos ayudan precisamente a conseguir esto, ya que permiten centralizar la lógica encargada de modificar un estado en una función específica, evitando tener que distribuir dicha lógica entre diferentes componentes o funciones de nuestra aplicación. Por lo que un reducer es una función que recibe dos parámetros fundamentales: un estado actual y una acción que indica qué operación se desea realizar sobre dicho estado. A partir de estos dos elementos, la función ejecuta la lógica correspondiente y retorna un nuevo estado modificado. Donde es importante destacar que, aunque comúnmente se habla de un estado inicial, el primer parámetro de un reducer representa el estado actual que se está procesando, el cual puede ser el estado inicial durante la primera ejecución o un estado previamente actualizado durante las siguientes ejecuciones. Por otro lado, el segundo parámetro representa la acción que se desea realizar, la cual puede contener información adicional para indicarle al reducer cómo debe modificar el estado. Además, este debe cumplir ciertas reglas fundamentales, por ejemplo, no debe realizar operaciones asíncronas directamente dentro de su lógica ni ejecutar efectos secundarios, como realizar peticiones a servidores, modificar el almacenamiento local mediante localStorage o manipular directamente elementos del DOM. Asimismo, debe evitar modificar directamente el estado que recibe como parámetro, por lo que, en lugar de alterar el estado existente, deberá retornar un nuevo estado con las modificaciones correspondientes. Esto permite mantener la inmutabilidad del estado y hace que el comportamiento de nuestra aplicación sea más predecible y sencillo de analizar. Por lo que, en resumen, un reducer es una función que recibe un estado actual y una acción como parámetros, procesa dicha acción mediante una lógica previamente definida y retorna un nuevo estado actualizado, cumpliendo con ciertas reglas y restricciones que permiten garantizar un manejo adecuado, organizado y predecible del estado, especialmente en aplicaciones React grandes y complejas.
// ~Declaración y estructura de Reducer.
// ~Un reducer es una función común de JavaScript que recibe un estado actual y una acción como parámetros, y retorna un nuevo estado modificado de acuerdo con la operación que se desea realizar. Su estructura es relativamente sencilla, ya que únicamente necesitamos declarar una función que reciba ambos parámetros e implementar dentro de ella las condiciones o instrucciones necesarias para determinar qué modificación deberá aplicarse al estado. Donde el parámetro del estado representa la información que tenemos actualmente y el parámetro de la acción representa la operación que queremos ejecutar sobre dicha información. Por ejemplo, si contamos con un estado numérico y queremos incrementar su valor, la acción podría representar la cantidad que deseamos sumar; mientras que, si trabajamos con un estado que contiene una lista de tareas, la acción podría indicar que queremos agregar una tarea, eliminar una existente o modificar su estado de finalización. Por lo tanto, la lógica implementada dentro del reducer dependerá directamente del tipo de información que estemos administrando y de las operaciones que necesitemos realizar sobre ella. Además, dentro de esta función no debemos ejecutar operaciones asíncronas ni modificar directamente el estado recibido, sino que debemos retornar un nuevo estado basado en el estado anterior y la acción recibida. Esto permite mantener la inmutabilidad del estado, facilita el seguimiento de los cambios realizados y ayuda a evitar comportamientos inesperados dentro de nuestra aplicación. Es importante comprender que un reducer, por sí solo, no es exclusivo de React, ya que podemos declararlo y ejecutarlo directamente en JavaScript como cualquier otra función; sin embargo, dentro de React podemos utilizarlo junto con el Hook useReducer para administrar estados de una manera más estructurada. En resumen, un reducer es una herramienta que nos permite centralizar y organizar la lógica encargada de actualizar un estado, donde su declaración consta de una función con dos parámetros fundamentales, el estado actual y la acción que se desea procesar, y dentro de esta función debemos implementar la lógica necesaria para retornar un nuevo estado actualizado según la acción recibida.
const sumarReducer = (estado, accion) => { //* Declaramos una función de tipo reducer que recibe el estado actual y la acción que se desea ejecutar.
    return estado + accion; //* Retornamos un nuevo valor calculado a partir del estado actual y la acción recibida, sin modificar directamente el valor original.
}; //* Finalizamos la declaración de la función reducer.

// --- Ejemplo de uso super simple ---
// Estado actual: 10. Acción (el número a sumar): 5
const resultado = sumarReducer(10, 5); //* Ejecutamos manualmente el reducer enviándole 10 como estado actual y 5 como acción; en este ejemplo, ambos parámetros son valores numéricos y la acción representa la cantidad que queremos sumar.

console.log(resultado); //* Mostramos en la consola el resultado retornado por el reducer, que será 15, debido a que la función suma el estado actual (10) y la acción recibida (5).

// ~Ejemplo de uso de Reducer en React.
// ~Ahora bien, una vez que comprendemos cómo funciona un reducer de manera independiente en JavaScript, podemos comenzar a observar cómo se puede aplicar este concepto dentro de React para administrar estados más complejos. Para ello, imaginemos que tenemos una aplicación que necesita gestionar una lista de tareas, donde cada tarea cuenta con información propia, como un identificador, una descripción y un valor booleano que indica si ya fue finalizada. En este caso, podríamos utilizar un reducer para centralizar las operaciones que se pueden realizar sobre dichas tareas, como agregar una nueva, modificar una existente o cambiar su estado de finalización. Para conseguirlo, primero declararemos un estado inicial mediante un objeto que contenga la información de nuestra tarea y, posteriormente, declararemos una función reducer que recibirá dicho estado y una acción como parámetros. Dentro de esta función podremos analizar el tipo de acción recibida y determinar qué operación deberá ejecutarse, retornando el nuevo estado correspondiente. Es importante recordar que, para que este ejemplo funcione como un reducer completo, debemos definir las acciones que aceptará y la lógica necesaria para procesarlas; por el momento, únicamente estableceremos la estructura inicial del estado y la función que posteriormente contendrá dicha lógica. Asimismo, cuando trabajemos con useReducer, React será el encargado de ejecutar el reducer cuando se despache una acción y de utilizar el estado retornado para actualizar el estado administrado por el Hook. Por lo tanto, declarar un reducer no actualiza automáticamente la interfaz ni provoca un renderizado por sí mismo: para integrarlo con React necesitaremos utilizarlo mediante useReducer dentro de nuestro componente.const initialState = { //* Declaramos el estado inicial que utilizaremos como punto de partida para representar la información de nuestra Maruchan.
const initialState = { //* Declaramos el estado inicial que utilizaremos como punto de partida para representar la información de nuestra Maruchan.
    id: 1, //* Establecemos el identificador de la sopa, el cual nos permite distinguirla de otras comidas dentro de la alacena.
    sabor: 'Pollo', //* Definimos el sabor de la sopa, es decir, el texto que indica de qué variedad es nuestro alimento.
    condicion: 'Crudo' //* Indicamos mediante texto el estado físico de la sopa; 'Crudo' significa que permanece pendiente de cocinar y 'Cocinada' indicaría que ya está lista.
}; //* Finalizamos la declaración del objeto que contiene el estado inicial de nuestra Maruchan.

const nuevaMaruchan = { //* Declaramos un nuevo objeto que representa otra Maruchan, con sus propias propiedades y valores, el cual utilizaremos para demostrar cómo podemos reemplazar el estado actual mediante una acción.
    id: 2, //* Asignamos un identificador diferente para distinguir esta nueva sopa de la Maruchan que declaramos en el estado inicial.
    sabor: 'Camarón con Limón 🔥', //* Definimos el sabor de la nueva sopa, utilizando un texto y un emoji para representar visualmente su variedad.
    condicion: 'Crudo' //* Indicamos que esta nueva Maruchan todavía no ha sido cocinada y que, por lo tanto, se encuentra en su estado inicial de preparación.
} //* Finalizamos la declaración del objeto nuevaMaruchan, que posteriormente enviaremos mediante una acción para que el reducer pueda utilizar sus propiedades.

const agregarMaruchanAction = { //* Declaramos una acción cuya finalidad es representar la operación de agregar una nueva Maruchan, definiendo el tipo de operación y los datos que necesitaremos para ejecutarla.
    type: '[MARUCHAN] Agregar sopa', //* Establecemos el tipo de acción que permitirá identificar la operación que queremos realizar dentro del reducer. El texto entre corchetes funciona como una convención para agrupar las acciones relacionadas con nuestra Maruchan.
    payload: nuevaMaruchan //* Enviamos el objeto nuevaMaruchan mediante la propiedad payload, la cual utilizamos para transportar los datos que el reducer necesita para procesar esta acción.
} //* Finalizamos la declaración de la acción agregarMaruchanAction, que por sí sola no modifica el estado, sino que describe la operación que deberá procesar el reducer.

const cocinarAction = { //* Declaramos una acción que representa la operación de cocinar nuestra Maruchan, permitiéndonos actualizar su condición mediante el reducer.
    type: '[MARUCHAN] Cocinar sopa', //* Definimos el tipo de acción que permitirá al reducer identificar que queremos cocinar la sopa y ejecutar la lógica correspondiente.
    payload: { condicion: 'Sopa cocinada 🤤' } // *Enviamos el nuevo estado físico que queremos representar mediante la propiedad condicion. El reducer utilizará este valor para actualizar la condición de la sopa sin modificar directamente el objeto original.
} //* Finalizamos la declaración de cocinarAction, que contiene el tipo de operación y el nuevo valor que deseamos establecer en el estado.

const cambiarSaborAction = { //* Declaramos una acción que representa la operación de cambiar el sabor de nuestra Maruchan, enviando el nuevo valor que queremos asignar a esta propiedad.
    type: '[MARUCHAN] Cambiar sabor', //* Definimos el tipo de acción que permitirá al reducer reconocer que queremos modificar el sabor de la sopa y ejecutar el caso correspondiente.
    payload: { sabor: 'Habanero 🌶️' } // *Enviamos el nuevo sabor que queremos establecer en la Maruchan mediante la propiedad sabor, permitiendo que el reducer actualice este dato y conserve las demás propiedades del estado.
} //* Finalizamos la declaración de cambiarSaborAction, que transporta la información necesaria para realizar el cambio de sabor cuando el reducer procese la acción.

const tirarAction = { //* Declaramos una acción que representa la operación de tirar nuestra Maruchan a la basura, indicando al reducer que queremos cambiar el estado para representar que la sopa ya no está disponible.
    type: '[MARUCHAN] Tirar a la basura', //* Establecemos el tipo de acción que permitirá al reducer identificar la operación de desechar la sopa y ejecutar la lógica correspondiente.
    payload: null // *No ocupamos datos extra, solo la orden de tirarla, ya que el reducer puede determinar el nuevo estado a partir del tipo de acción recibido.
} //* Finalizamos la declaración de tirarAction, que comunica la operación que queremos realizar sin necesidad de transportar información adicional.

const maruchanReducer = (state = initialState, action = {}) => { //* Declaramos la función reducer que recibirá el estado actual de la Maruchan y la acción que se desea ejecutar sobre dicho estado.
    
    // *Aquí evaluamos el tipo de acción recibida para retornar la Maruchan actualizada sin modificar directamente el objeto original.
    switch (action.type) { //* Evaluamos la propiedad type de la acción recibida para identificar qué operación debemos realizar y ejecutar el bloque de código correspondiente.
        
        case '[MARUCHAN] Agregar sopa': //* Comparamos el tipo de acción recibido con el identificador de la operación de agregar una sopa para determinar si debemos ejecutar este caso.
            // *Si estuviéramos en una lista, aquí la añadiríamos. Como es una sola sopa, retornamos la nueva.
            return { ...action.payload }; //* Creamos y retornamos un nuevo objeto que contiene las propiedades de la Maruchan recibida mediante payload. Como nuestro estado representa una sola sopa, esta operación reemplaza el estado anterior por los datos de la nueva Maruchan.
            
        case '[MARUCHAN] Cocinar sopa': //* Identificamos la acción encargada de cocinar la sopa para actualizar su condición sin modificar las demás propiedades.
            // *Tomamos los datos actuales de la sopa (...state) pero actualizamos su condición
            return { //* Retornamos un nuevo objeto que representará el estado actualizado de nuestra Maruchan.
                ...state, //* Copiamos todas las propiedades del estado actual para conservar la información que no necesitamos modificar.
                condicion: action.payload.condicion //* Actualizamos la propiedad condicion con el nuevo valor recibido en payload, manteniendo las demás propiedades del estado con sus valores anteriores.
            }; //* Finalizamos la construcción del nuevo estado y devolvemos el objeto resultante.
            
        case '[MARUCHAN] Cambiar sabor': //* Identificamos la acción encargada de cambiar el sabor de la sopa para ejecutar la actualización correspondiente.
            // *Tomamos los datos actuales de la sopa (...state) pero le cambiamos el sabor
            return { //* Retornamos un nuevo objeto que conservará la información de la Maruchan, pero con el sabor actualizado.
                ...state, //* Copiamos las propiedades del estado actual para mantener el identificador, la condición y cualquier otro dato que no deseamos modificar.
                sabor: action.payload.sabor //* Actualizamos la propiedad sabor con el nuevo valor enviado mediante payload, conservando el resto de las propiedades del estado.
            }; //* Finalizamos la construcción del objeto y devolvemos el nuevo estado con el sabor modificado.
            
        case '[MARUCHAN] Tirar a la basura': //* Identificamos la acción encargada de desechar la sopa para devolver un estado que represente que la Maruchan ya no está disponible.
            // *Devolvemos un estado vacío o destruido porque ya no hay sopa
            return { //* Retornamos un nuevo objeto que representará el estado de la Maruchan después de haber sido desechada.
                id: null, //* Establecemos el identificador en null para indicar que ya no existe una sopa activa asociada a un identificador válido en este ejemplo.
                sabor: 'Ninguno', //* Asignamos el texto 'Ninguno' para representar que ya no tenemos un sabor de sopa disponible.
                condicion: 'Tirada en el bote 🗑️' //* Indicamos mediante texto que la Maruchan ha sido desechada. Estos valores son una representación del estado que queremos manejar en nuestra aplicación.
            }; //* Finalizamos y devolvemos el nuevo objeto que representa la sopa después de ejecutar la acción de desecharla.
    } //* Finalizamos la estructura switch que evalúa los diferentes tipos de acción que puede recibir nuestro reducer.

    return state; // *Si nos mandan una acción desconocida, regresamos la sopa tal cual estaba. De esta manera, evitamos realizar cambios cuando el tipo de acción recibido no coincide con ninguno de los casos definidos.
}; //* Finalizamos la declaración del reducer; ahora esta función puede procesar las acciones que hemos definido y devolver el estado correspondiente. Para integrarla en un componente de React y actualizar la interfaz, posteriormente podemos utilizar el Hook useReducer.


// *Prueba en consola para ver cómo cambia:
const sopaCocinada = maruchanReducer(initialState, cocinarAction); //* Ejecutamos directamente el reducer y le proporcionamos el estado inicial junto con la acción de cocinar la sopa. El resultado se almacena en sopaCocinada y contiene un nuevo objeto con la condición actualizada, mientras que initialState conserva sus valores originales.

console.log("Estado Inicial:", initialState); //* Mostramos en la consola el estado inicial de la Maruchan para observar los valores que tenía antes de ejecutar la acción y comprobar que el objeto original no fue modificado directamente.
console.log("Estado Final:", sopaCocinada); //* Mostramos en la consola el estado resultante después de procesar cocinarAction, permitiéndonos comparar ambos objetos y observar que la propiedad condicion cambió mientras que las demás propiedades permanecieron iguales.