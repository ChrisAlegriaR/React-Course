// ^UseReducer.
// ^UseReducer es de igual forma un Hook, el cual contiene toda la base vista en la sección anterior de reducer. Este Hook, al igual que el ejemplo de la sección previa, es una función a la cual se le pasan 2 parámetros: un estado inicial y una función reductora, que será la encargada de determinar cómo se actualizará el estado. Por lo que, una vez que pasemos estos parámetros mediante el Hook useReducer, este nos devolverá un arreglo con 2 elementos: el primero es el estado actual y el segundo es una función llamada dispatch, que nos permitirá solicitar actualizaciones del estado mediante el envío de acciones. Por lo que, de igual forma que los Hooks anteriores, useReducer, al ser un Hook propio de React, debe ser importado desde la librería de React. Una vez importado, podremos hacer uso de este para manejar el estado de nuestro componente, por lo que a continuación se mostrará un ejemplo de cómo utilizar el Hook useReducer.
// ~Importación de useReducer desde la librería de React.
// ~Para poder implementar el Hook useReducer, este debe ser importado desde la librería de React, donde mediante el comando de importación se podrá hacer uso de este, quedando como "import { useReducer } from 'react';". De esta forma se podrá hacer uso del Hook useReducer en nuestro componente. Por lo que únicamente requerimos de la importación para poder acceder a este Hook y utilizarlo en nuestro componente.
import { useReducer } from "react";

// ~Uso e implementación de useReducer.
// ~Como vimos en la sección anterior, useReducer es un Hook que nos permite manejar el estado de nuestro componente. Para poder hacer uso de este Hook debemos pasarle 2 parámetros: un estado inicial y una función reductora, la cual se encargará de determinar cómo debe actualizarse el estado. Una vez que pasemos estos 2 parámetros a useReducer, este nos permitirá acceder a un arreglo con 2 elementos mediante la desestructuración: el primero es el estado actual y el segundo es una función llamada dispatch, que nos permitirá enviar acciones para solicitar actualizaciones del estado de nuestro componente. Por lo que deberemos contar con un initialState y una función reductora para poder hacer uso de useReducer. Una vez que importemos el Hook y tengamos ambas partes definidas, podremos pasarles dichos parámetros, quedando un ejemplo como el siguiente: "const [state, dispatch] = useReducer(reducer, initialState);", donde reducer es la función reductora e initialState es el estado inicial. Una vez que hagamos esto, podremos hacer uso de state para acceder al estado actual y de dispatch para enviar acciones que permitan solicitar su actualización. Posteriormente, mediante el uso de dispatch, podremos actualizar el estado de nuestro componente enviándole un objeto con el tipo de acción que el reducer debe identificar y, cuando sea necesario, un payload con la información que se utilizará para realizar la actualización. Esto quedaría de la siguiente forma: "dispatch({ type: 'accion', payload: { ... } });", donde type es el tipo de acción que el reducer evalúa y payload es la información que se le pasará a la función reductora para determinar el nuevo estado. Por lo tanto, una vez que hagamos esto, podremos actualizar el estado de nuestro componente mediante el uso de useReducer.
// State inicial.
const initialState = { //* Declaramos el estado inicial que utilizaremos como punto de partida para representar la información de nuestra Maruchan. Este objeto contiene las propiedades que describen la sopa y sus valores iniciales, los cuales podrán actualizarse posteriormente mediante las acciones que procese nuestro reducer.
    id: 1, //* Establecemos el identificador inicial de la sopa, el cual nos permite distinguirla de otras comidas o elementos que pudiéramos administrar dentro de nuestra aplicación.
    sabor: 'Pollo', //* Definimos el sabor inicial de la Maruchan, utilizando una cadena de texto que representa la variedad de sopa que tenemos actualmente.
    condicion: 'Crudo' //* Indicamos mediante texto la condición inicial de la sopa; en este ejemplo, 'Crudo' representa que todavía no ha sido cocinada.
}; //* Finalizamos la declaración del objeto que contiene el estado inicial de nuestra Maruchan, el cual será proporcionado al Hook useReducer para establecer los valores con los que comenzará el componente.

// 2. Función Reductora.
const maruchanReducer = (state = initialState, action = {}) => { //* Declaramos la función reducer que recibirá el estado actual de la Maruchan y la acción que se desea ejecutar sobre dicho estado. El reducer evaluará el tipo de acción recibida y devolverá el nuevo estado correspondiente sin modificar directamente el objeto original.
    switch (action.type) { //* Evaluamos la propiedad type de la acción recibida para identificar qué operación debemos realizar y ejecutar el caso correspondiente.

        case '[MARUCHAN] Agregar sopa': //* Identificamos la acción encargada de agregar una nueva sopa. En este ejemplo, como el estado representa una sola Maruchan, los datos recibidos reemplazarán al estado anterior.
            return { ...action.payload }; //* Creamos y devolvemos un nuevo objeto con las propiedades contenidas en payload. De esta manera, utilizamos los datos de la nueva sopa para establecer el nuevo estado del componente.

        case '[MARUCHAN] Cocinar sopa': //* Identificamos la acción que representa la operación de cocinar nuestra Maruchan, permitiéndonos actualizar su condición sin modificar las demás propiedades.
            return { //* Retornamos un nuevo objeto que representará el estado actualizado de nuestra sopa.
                ...state, //* Copiamos todas las propiedades del estado actual para conservar la información que no necesitamos modificar, como el identificador y el sabor.
                condicion: action.payload.condicion //* Actualizamos la propiedad condicion con el nuevo valor recibido mediante payload, conservando el resto de las propiedades del estado anterior.
            }; //* Finalizamos la construcción del objeto y devolvemos el nuevo estado con la condición actualizada.

        case '[MARUCHAN] Cambiar sabor': //* Identificamos la acción encargada de modificar el sabor de la sopa, para ejecutar la actualización correspondiente.
            return { //* Retornamos un nuevo objeto que conservará la información de la Maruchan, pero con el sabor actualizado.
                ...state, //* Copiamos todas las propiedades del estado actual para mantener los datos que no necesitamos modificar.
                sabor: action.payload.sabor //* Actualizamos la propiedad sabor con el nuevo valor enviado mediante payload, conservando las demás propiedades del estado.
            }; //* Finalizamos la construcción del nuevo objeto y devolvemos el estado con el sabor modificado.

        case '[MARUCHAN] Tirar a la basura': //* Identificamos la acción que representa la operación de desechar la sopa, permitiéndonos establecer un estado que indique que la Maruchan ya no está disponible.
            return { //* Retornamos un nuevo objeto que representará el estado de la sopa después de haber sido desechada.
                ...state, //* Copiamos las propiedades actuales del estado antes de establecer los valores que representarán que la sopa ha sido desechada. En las siguientes propiedades, los nuevos valores sobrescribirán los anteriores.
                id: null, //* Establecemos el identificador en null para indicar que ya no tenemos una sopa activa asociada a un identificador válido dentro de este ejemplo.
                sabor: 'Ninguno', //* Asignamos el texto 'Ninguno' para representar que ya no tenemos un sabor de sopa disponible.
                condicion: 'Tirada en el bote 🗑️' //* Actualizamos la condición para indicar que la Maruchan ha sido desechada. Estos valores son una representación del estado que hemos decidido utilizar en nuestra aplicación.
            }; //* Finalizamos y devolvemos el nuevo objeto que representa el estado de la Maruchan después de ejecutar esta acción.

        default: //* Definimos el caso predeterminado que se ejecutará cuando el tipo de acción recibido no coincida con ninguno de los casos anteriores.
            return state; //* Devolvemos el estado actual sin modificarlo, permitiendo que el reducer conserve la información existente cuando recibe una acción que no reconoce.
    } //* Finalizamos la estructura switch que evalúa los distintos tipos de acción que puede recibir nuestro reducer.
}; //* Finalizamos la declaración de maruchanReducer, que ahora contiene la lógica necesaria para determinar cómo debe cambiar el estado de nuestra Maruchan según la acción recibida.

// 3. Componente de React.
export const SopaComponent = () => { //* Declaramos y exportamos un componente funcional de React llamado SopaComponent, dentro del cual utilizaremos useReducer para administrar el estado de nuestra Maruchan y actualizar la interfaz cuando se procesen acciones.

    const [state, dispatch] = useReducer(maruchanReducer, initialState); //* Invocamos el Hook useReducer y le proporcionamos la función reductora maruchanReducer junto con el estado inicial initialState. Mediante la desestructuración obtenemos dos elementos: state, que contiene el estado actual de la Maruchan, y dispatch, que nos permite enviar acciones al reducer para solicitar actualizaciones del estado.

    const cocinarSopa = () => { //* Declaramos una función que se ejecutará cuando queramos cocinar nuestra Maruchan. Esta función se encargará de enviar la acción correspondiente al reducer mediante dispatch.
        dispatch({ //* Ejecutamos dispatch y le enviamos un objeto que representa la acción que queremos procesar. React utilizará el reducer para determinar el nuevo estado a partir del estado actual y de esta acción.
            type: '[MARUCHAN] Cocinar sopa', //* Indicamos el tipo de acción que debe identificar el reducer para ejecutar el caso encargado de cocinar la sopa.
            payload: { condicion: 'Sopa cocinada 🤤' } //* Enviamos dentro de payload el nuevo valor de la propiedad condicion. El reducer utilizará esta información para actualizar la condición de la Maruchan y conservar las demás propiedades de su estado.
        }); //* Finalizamos la llamada a dispatch. Una vez procesada la acción, React actualizará el estado del componente y volverá a renderizarlo cuando corresponda.
    }; //* Finalizamos la declaración de la función cocinarSopa, que permite solicitar el cambio de condición de nuestra Maruchan.

    const cambiarSabor = () => { //* Declaramos una función que se ejecutará cuando queramos cambiar el sabor de la sopa. Su responsabilidad será enviar al reducer una acción con el nuevo sabor que deseamos establecer.
        dispatch({ //* Enviamos una acción mediante dispatch para que el reducer evalúe el tipo recibido y determine cómo debe actualizarse el estado.
            type: '[MARUCHAN] Cambiar sabor', //* Definimos el tipo de acción que permitirá al reducer identificar que queremos modificar el sabor de la Maruchan.
            payload: { sabor: 'Habanero 🌶️' } //* Proporcionamos el nuevo sabor dentro de payload, permitiendo que el reducer acceda a este valor y actualice la propiedad sabor sin modificar directamente el estado anterior.
        }); //* Finalizamos la llamada a dispatch, solicitando que se procese la acción de cambiar el sabor.
    }; //* Finalizamos la declaración de cambiarSabor, que permitirá cambiar el sabor de la sopa mediante la interacción con la interfaz.

    const tirarSopa = () => { //* Declaramos una función que se ejecutará cuando queramos tirar la Maruchan a la basura. Esta función enviará la acción correspondiente para que el reducer genere el estado que representa que la sopa ha sido desechada.
        dispatch({ type: '[MARUCHAN] Tirar a la basura' }); //* Enviamos una acción que contiene el tipo necesario para que el reducer identifique la operación de desechar la sopa. En este caso no necesitamos payload porque el reducer puede determinar el nuevo estado utilizando únicamente el tipo de acción.
    }; //* Finalizamos la declaración de tirarSopa, que permite solicitar el cambio de estado correspondiente a la acción de desechar la Maruchan.

    return ( //* Retornamos la estructura JSX que React utilizará para representar visualmente el estado actual de nuestra Maruchan y las opciones con las que el usuario podrá interactuar.
        <div style={{ padding: '20px' }}> {/* ^ Declaramos un contenedor div que agrupa la información de la sopa y los botones de interacción. Mediante la propiedad style aplicamos un relleno interno de 20 píxeles para separar el contenido de los bordes del contenedor. */}

            <h2>Estado de mi Maruchan</h2> {/* ^ Mostramos un encabezado que identifica la sección de la interfaz donde se presenta el estado actual de nuestra Maruchan. */}

            <p><strong>ID:</strong> {state.id ?? 'N/A'}</p> {/* ^ Mostramos el identificador actual de la sopa. Utilizamos el operador de coalescencia nula (??) para mostrar 'N/A' cuando state.id sea null o undefined, evitando que aparezca un identificador vacío después de desechar la Maruchan. */}

            <p><strong>Sabor:</strong> {state.sabor}</p> {/* ^ Mostramos el sabor actual de la Maruchan accediendo a la propiedad sabor del estado. Como este valor se obtiene directamente de state, React mostrará el sabor actualizado después de que se procese una acción que lo modifique. */}

            <p><strong>Condición:</strong> {state.condicion}</p> {/* ^ Mostramos la condición actual de la sopa, permitiéndonos observar si continúa cruda, ya fue cocinada o ha sido desechada, según las acciones que hayamos ejecutado. */}

            <button onClick={cocinarSopa}>Cocinar Sopa 🍳</button> {/* ^ Creamos un botón que ejecutará la función cocinarSopa cuando el usuario haga clic sobre él. Esta función enviará la acción correspondiente mediante dispatch para actualizar la condición de la Maruchan. */}

            <button onClick={cambiarSabor}>Cambiar Sabor 🌶️</button> {/* ^ Creamos un botón que ejecutará la función cambiarSabor cuando el usuario haga clic sobre él. Al hacerlo, se enviará una acción al reducer para modificar el sabor de la sopa y React actualizará la información mostrada en pantalla. */}

            <button onClick={tirarSopa}>Tirar Sopa 🗑️</button> {/* ^ Creamos un botón que ejecutará la función tirarSopa cuando el usuario haga clic sobre él. Esta función enviará la acción de desechar la Maruchan, haciendo que el reducer devuelva el estado correspondiente y que la interfaz muestre los nuevos valores. */}

        </div> //* Finalizamos el contenedor principal que agrupa el encabezado, los datos actuales de la Maruchan y los botones que permiten ejecutar las distintas acciones.
    ); //* Finalizamos el retorno del JSX del componente. La interfaz se construye a partir del estado actual y se actualizará cuando React procese las acciones enviadas mediante dispatch.
}; //* Finalizamos la declaración del componente SopaComponent, que utiliza useReducer para conectar el estado, las acciones y la interfaz, permitiéndonos administrar la información de nuestra Maruchan de una manera organizada.