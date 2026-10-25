// ^UseReducer.
// ^UseReducer es de igual forma un Hook, el cual contiene toda la base vista en la seccion aenterior de reducer, en el cual el hook al igual que el ejemplo de la seccion previa es una funcion a la cual se le pasan 2 parametros siendo estos un estado inicial y una funcion reductora o una funcion que sera la encargada de actualizar el estado, por lo que una vez que pasemos un estado inicial mediante el hook useReducer este nos devolvera un arreglo con 2 elementos, el primero es el estado actual y el segundo es una funcion que nos permitira actualizar el estado- Por lo que para esto de igual forma que los hooks anteriores usereudcerf al ser un hook propio de react, este debe ser importado desde la libreria de react, por lo que una vez  se importe podremos hacer uso de este para poder actualizar el estado de nuestro componente, por lo que a continuacion se mostrara un ejemplo de como hacer uso del hook useReducer.
// ~Importacion de useReducer desde la libreria de react.
// ~Para poder implementar el hook useReducer, este debe ser importado desde la libreria de react, donde mediante el comando de importacion se podra hacer uso de este, quedando como "import { useReducer } from 'react';" de esta forma se podra hacer uso del hook useReducer en nuestro componente. Por lo que unicamente requeremos de la importacion para poder acceder a este hook y poder hacer uso de el en nuestro componente.
import { useReducer } from "react";

// ~Uso e implementacion de useReducer.
// ~Como vimos en la seccion anterior useReducer es un hook que nos permite manejar el estado de nuestro componente, por lo que para poder hacer uso de este hook debemos de pasarle 2 parametros siendo estos un estado inicial y una funcion reductora o mejor conocido como la accion que se encargara de actualizar el estado, por lo que una vez que pasemos estos 2 parametros a useReducer este nos devolvera un arreglo con 2 elementos siendo el primero el estado ya tratado con la accion que se le paso a useReducer y el segundo elemento es una funcion que nos permitira actualizar el estado de nuestro componente. Por lo que deberemos de contar con un inicialState y una funcion reductora para poder hacer uso de useReducer, por lo que una vez importemos el hook useReducer y tengamos un estado inicial y una funcion reductora podremos pasarles dichos parametros quedan un ejemplo como el siguiente "const [state, dispatch] = useReducer(reducer, initialState);" donde reducer es la funcion reductora y initialState es el estado inicial, por lo que una vez que hagamos esto podremos hacer uso de state para acceder al estado actual y de dispatch para poder actualizar el estado de nuestro componente. Donde posteriormente medciante el uso de dispatch podremos actualizar el estado de nuestro componente, donde al mandarlo llamar le pasaremos un objeto con el caso que el reducer lee y el payload que es la informacion que se le pasara a la funcion reductora para poder actualizar el estado con esta, quedando de la siguiente forma "dispatch({ type: 'accion', payload: { ... } });" donde type es el caso que el reducer lee y payload es la informacion que se le pasara a la funcion reductora para poder actualizar el estado, por lo que una vez que hagamos esto podremos actualizar el estado de nuestro componente mediante el uso de useReducer
// State inicial.
const initialState = {
    id: 1,
    sabor: 'Pollo',
    condicion: 'Crudo'
};

// 2. Función Reductora.
const maruchanReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[MARUCHAN] Agregar sopa':
            return { ...action.payload };

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
                ...state,
                id: null,
                sabor: 'Ninguno',
                condicion: 'Tirada en el bote 🗑️'
            };

        default:
            return state;
    }
};

// 3. Componente de React.
export const SopaComponent = () => {
    const [state, dispatch] = useReducer(maruchanReducer, initialState);

    const cocinarSopa = () => {
        dispatch({
            type: '[MARUCHAN] Cocinar sopa',
            payload: { condicion: 'Sopa cocinada 🤤' }
        });
    };

    const cambiarSabor = () => {
        dispatch({
            type: '[MARUCHAN] Cambiar sabor',
            payload: { sabor: 'Habanero 🌶️' }
        });
    };

    const tirarSopa = () => {
        dispatch({ type: '[MARUCHAN] Tirar a la basura' });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Estado de mi Maruchan</h2>
            <p><strong>ID:</strong> {state.id ?? 'N/A'}</p>
            <p><strong>Sabor:</strong> {state.sabor}</p>
            <p><strong>Condición:</strong> {state.condicion}</p>

            <button onClick={cocinarSopa}>Cocinar Sopa 🍳</button>
            <button onClick={cambiarSabor}>Cambiar Sabor 🌶️</button>
            <button onClick={tirarSopa}>Tirar Sopa 🗑️</button>
        </div>
    );
};