// ^UseReducer.
// ^UseReducer es de igual forma un Hook, el cual contiene toda la base vista en la seccion aenterior de reducer, en el cual el hook al igual que el ejemplo de la seccion previa es una funcion a la cual se le pasan 2 parametros siendo estos un estado inicial y una funcion reductora o una funcion que sera la encargada de actualizar el estado, por lo que una vez que pasemos un estado inicial mediante el hook useReducer este nos devolvera un arreglo con 2 elementos, el primero es el estado actual y el segundo es una funcion que nos permitira actualizar el estado- Por lo que para esto de igual forma que los hooks anteriores usereudcerf al ser un hook propio de react, este debe ser importado desde la libreria de react, por lo que una vez  se importe podremos hacer uso de este para poder actualizar el estado de nuestro componente, por lo que a continuacion se mostrara un ejemplo de como hacer uso del hook useReducer.
// ~
const { useReducer } = require("react");
const initialState = {    
    id: 1,
    sabor: 'Pollo',
    condicion: 'Crudo'
};

const nuevaMaruchan = {
    id: 2,
    sabor: 'Camarón con Limón 🔥',
    condicion: 'Crudo'
}

const agregarMaruchanAction = {
    type: '[MARUCHAN] Agregar sopa',
    payload: nuevaMaruchan
}

const cocinarAction = {
    type: '[MARUCHAN] Cocinar sopa',
    payload: { condicion: 'Sopa cocinada 🤤' }
}

const cambiarSaborAction = {
    type: '[MARUCHAN] Cambiar sabor',
    payload: { sabor: 'Habanero 🌶️' }
}

const tirarAction = {
    type: '[MARUCHAN] Tirar a la basura',
    payload: null
}

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
                id: null, 
                sabor: 'Ninguno', 
                condicion: 'Tirada en el bote 🗑️' 
            };
    } 

    return state; 
}; 

const sopaCocinada = maruchanReducer(initialState, cocinarAction);

console.log("Estado Inicial:", initialState);
console.log("Estado Final:", sopaCocinada);

