// ^Reducer.
// ^Reduce es muy importante al momento de manejar estados generales dentro de aplicaciones muy grandes, donde mediante el proyecto vaya escalando es muy importante utilizar estados muy bien roganizados y los reducer nos ayudaran precisamente a eso, por lo que Reducer es una funcion comun y corriente que recibe un estado iniciual, una accion para hacer puntualmente y retorna o devuelve un estado modificado. Donde adeamas este tiiene que cumplir siertas normas por ejemplo que este nio puede realizar acciones asyncronas dentro de este, y tampoco puede realizar cosas como swetear cosas como setear en el local storage. Por lo que en resumen un reducer es una funcion qcomun y corriente que recibe un estado inicial y una accion como parametros, y retorna un nuevo estado modificado, cumpliendo con ciertas reglas y restricciones para garantizar un manejo adecuado del estado en aplicaciones grandes y complejas.
// ~Declaración y estructura de Reducer.
// ~Un Reducer es una funcion comun y corriente que recibe un estado inicial y una accion como parametros, y retorna un nuevo estado modificado, cumpliendo con ciertas reglas y restricciones para garantizar un manejo adecuado del estado en aplicaciones grandes y complejas. Donde dentro de esta funcion no se podran realizar acciones asyncronas o modificar el estado directamente, sino que se debe retornar un nuevo estado basado en el estado anterior y la accion recibida. Esto permite mantener la inmutabilidad del estado y facilita el seguimiento de los cambios en la aplicacion, ademas de permitir una mejor organizacion y escalabilidad del codigo. En resumen, un Reducer es una herramienta fundamental para manejar estados de manera eficiente y predecible en aplicaciones React, especialmente cuando se trabaja con estados complejos o compartidos entre varios componentes. Por lo que unicamente su declaracion consta en una funcion con dos parametros, el estado inicial y la accion a realizar, y dentro de esta funcion se debe implementar la logica para retornar un nuevo estado modificado basado en el estado anterior y la accion recibida.
const sumarReducer = (estado, accion) => {
    return estado + accion;
};

// --- Ejemplo de uso super simple ---
// Estado actual: 10. Acción (el número a sumar): 5
const resultado = sumarReducer(10, 5); 
console.log(resultado); // Resultado: 15

// ~Ejemplo de uso de Reducer en React.
// ~
const initialState = {
    id: 1,
    tarea: 'Explicar Reducer',
    finalizada: false
}

const tareaReducer = (initialState, action) => {

}

export const ListaTareas = () => {
    return (
        <>
        </>
    )
}
