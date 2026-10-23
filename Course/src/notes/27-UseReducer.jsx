// ^UseReducer.
// ^UseReducer es de igual forma un Hook, el cual contiene toda la base vista en la seccion aenterior de reducer, en el cual el hook al igual que el ejemplo de la seccion previa es una funcion a la cual se le pasan 2 parametros siendo estos un estado inicial y una funcion reductora o una funcion que sera la encargada de actualizar el estado, por lo que una vez que pasemos un estado inicial mediante el hook useReducer este nos devolvera un arreglo con 2 elementos, el primero es el estado actual y el segundo es una funcion que nos permitira actualizar el estado- Por lo que para esto de igual forma que los hooks anteriores usereudcerf al ser un hook propio de react, este debe ser importado desde la libreria de react, por lo que una vez  se importe podremos hacer uso de este para poder actualizar el estado de nuestro componente, por lo que a continuacion se mostrara un ejemplo de como hacer uso del hook useReducer.
// ~Importacion de useReducer desde la libreria de react.
// ~Para poder implementar el hook useReducer, este debe ser importado desde la libreria de react, donde mediante el comando de importacion se podra hacer uso de este, quedando como "import { useReducer } from 'react';" de esta forma se podra hacer uso del hook useReducer en nuestro componente. Por lo que unicamente requeremos de la importacion para poder acceder a este hook y poder hacer uso de el en nuestro componente.
const { useReducer } = require("react");

// ~Uso e implementacion de useReducer.
// ~Como vimos en la seccion anterior useReducer es un hook que nos permite manejar el estado de nuestro componente, por lo que para poder hacer uso de este hook debemos de pasarle 2 parametros siendo estos un estado inicial y una funcion reductora o mejor conocido como la accion que se encargara de actualizar el estado, por lo que una vez que pasemos estos 2 parametros a useReducer este nos devolvera un arreglo con 2 elementos siendo el primero el estado ya tratado con la accion que se le paso a useReducer y el segundo elemento es una funcion que nos permitira actualizar el estado de nuestro componente.
// 1. Estado Inicial
const initialState = {
    id: 1,
    sabor: 'Pollo',
    condicion: 'Crudo'
};

// 2. Función Reductora (Debe ir arriba)
const maruchanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[MARUCHAN] Agregar sopa':
            return { ...action.payload }; // Reemplaza todo el estado por la nueva sopa

        case '[MARUCHAN] Cocinar sopa':
            return {
                ...state,
                condicion: action.payload.condicion
            };

        case '[MARUCHAN] Cambiar sabor':
            return {
                ...state,
                sabor: action.payload.sabor
            };

        case '[MARUCHAN] Tirar a la basura':
            return {
                id: null,
                sabor: 'Ninguno',
                condicion: 'Tirada en el bote 🗑️'
            };

        default:
            return state; // Siempre es buena práctica tener el caso default
    }
};

// 3. Componente de React donde se implementa
export const SopaComponent = () => {
    // Implementación correcta de useReducer
    const [state, dispatch] = useReducer(maruchanReducer, initialState);

    // Funciones encargadas de disparar (dispatch) las acciones
    const cocinarSopa = () => {
        const cocinarAction = {
            type: '[MARUCHAN] Cocinar sopa',
            payload: { condicion: 'Sopa cocinada 🤤' }
        };
        dispatch(cocinarAction); // El dispatch envía la acción al reducer
    };

    const cambiarSabor = () => {
        const cambiarSaborAction = {
            type: '[MARUCHAN] Cambiar sabor',
            payload: { sabor: 'Habanero 🌶️' }
        };
        dispatch(cambiarSaborAction);
    };

    const tirarSopa = () => {
        dispatch({ type: '[MARUCHAN] Tirar a la basura' });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Estado de mi Maruchan</h2>
            <p><strong>ID:</strong> {state.id}</p>
            <p><strong>Sabor:</strong> {state.sabor}</p>
            <p><strong>Condición:</strong> {state.condicion}</p>

            <button onClick={cocinarSopa}>Cocinar Sopa 🍳</button>
            <button onClick={cambiarSabor}>Cambiar Sabor 🌶️</button>
            <button onClick={tirarSopa}>Tirar Sopa 🗑️</button>
        </div>
    );
};
