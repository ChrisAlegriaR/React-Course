// ^Props.
// ^Las propiedades o mejor conocidas como props, son un mecanismo para pasar informacion deun componente padre a un componente hijo, son objetois que tienen valores que nos permiten la comunicacion entre componentes. Las implementiacion de los props son comunmente utilizados en componentes pequeños (como botones o tarjetas) para reciclarlos en toda la app cambiando sus datos, y en componentes grandes (pestañas enteras) para recibir info dinamica de la base de datos o URL, es decir, para recibir info que cambia constantemente. Los props son inmutables, es decir, no se pueden modificar desde el componente hijo, solo se pueden leer. Para modificar los props se debe hacer desde el componente padre, y pasarle los nuevos valores al componente hijo. Los props son una forma de comunicar componentes entre si, y son muy utiles para crear aplicaciones escalables y mantenibles. Donde de forma simplificada es una funcion que permite el paso de informacion mediante un componente hacia otro componente, y que se puede utilizar para pasar cualquier tipo de dato, como strings, numeros, booleanos, objetos, arrays, funciones, etc. Pudiendo utilizar dicha informacion en componentes como botones, tarjetas, formularios, listas, etc, donde el uso de esto permite la reutilizacion de componentes y la creacion de aplicaciones mas complejas y dinamicas.
// ~Paso de Props desde el componente padre.
// ~Para poder implementar el uso de Props dentro de React como se comento previamente es requerido un componenter padre el cual mediante este podremos pasar la informacion a el componente hijo, para ello es necesario que el componente padre tenga un return que contenga al componente hijo, donde ademas cada prop tendra un nombre y un valor, el cual puede ser cualquier tipo de dato. Una vez que el componente hijo reciba los props, podra utilizarlos dentro de su return para mostrar la informacion en pantalla o para realizar alguna logica con ellos. Es importante recordar que los props son inmutables, es decir, no se pueden modificar desde el componente hijo, solo se pueden leer. Para modificar los props se debe hacer desde el componente padre, y pasarle los nuevos valores al componente hijo. Ademas cabe destacar que el paso de los props cambvia ligeramente entre el paso de props de tipo string y de tipo numerico, ya que los props de tipo string se pasan entre comillas, mientras que los props de tipo numerico se pasan entre llaves. Esto es debido a que los props de tipo string son considerados como texto plano, mientras que los props de tipo numerico son considerados como expresiones de JavaScript. Por lo tanto, es importante tener en cuenta esta diferencia al momento de pasar los props desde el componente padre al componente hijo.
// ?Paso de Props de tipo String.
// ?El paso de un prop de tipo string cosnta en dentor de donde se llama a nuestro componente (el cual sera el componente hijo) dentor mediante la estructura de nombreProp='', declararemos el nombre del prop y seguid de = y '', ddentro de laas comillas definiremos el valor de tipo string que pasaremos dentro de dicho prop.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App nombre='Daniel' apellido='Gonzalez'/>
    </StrictMode>,
)

// ?Paso de Props de tipo Number.
// ?El paso de un prop de tipo number cambia ligeramente del paso de un prop de tipo string, esto debido a qu si bien se mantiene el uso de nombreProp= en este caso se eliminara las comillas '' y se remplezaran por llaves {} donde dentro de estas especificaremos direcamtente los valores Number a pasar dentro de nustro prop.
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App num1={1} num2={2}/>
    </StrictMode>,
)


// ~Uso e implementacion de Prop dentro de componentes hijo.
// ~
// ?
// ?
function NombreComponente(props) {
    return ( 
        <>
            <h2>{props.nombre}</h2>
            <h1>{props.apellido}</h1>
        </>
    );
}

export default NombreComponente;

function NombreComponente({nombre, apellido}) {
    return ( 
        <>
            <h1>{nombre}</h1>
            <h2>{apellido}</h2>
        </>
    );
}

export default NombreComponente;

// ~
// ~
