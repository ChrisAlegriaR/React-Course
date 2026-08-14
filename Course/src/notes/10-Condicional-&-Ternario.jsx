// ^Condicional y Ternario.
// ^Como bien sabemos dentro de JavaScript puro existen condicionales y cosas propias de dicho lenguaje que no necesariamente es obligatorio contar con React para poder realizarlas, entree ellas se enecuentran las condicionales ternarias, las cuales consta basicamente de un condicional if pero simplificado y reudcido a unicamente a una sola condicion, el cual los ternarios nos permitiran mostrar o realiozar acciones dependiendo si se cumple o no la condicion. Por lo que para esto unicamente deberemos de tomar una variable, pudiendo utilizar booleanos, numericos, etc.. donde posteriomente direactnmente mediante los ternarios podremos definir que se muestre cierta informacion en caso de cumplirse y que se muestre otra en caso de n cumplirse, igualmente podemos limitarnos a mostrar unicamente cuand se cumple o cuando no se cumple la condicional. Esto es realmente util ya que los ternarios nos permitiran mostrar ciertos elementos dependiendo de si se cumple o no la condicion, lo cual es realmente util para mostrar informacion dependiendo de ciertas condiciones, como por ejemplo si un usuario esta logueado o no, si un producto esta disponible o no, etc.. y nos permitiran hacer que nuestra aplicacion sea mas dinamica y reactiva a las condiciones que se presenten en el momento.
// ~Declaracion de condicionales ternarios para mostrar informacion en caso falso y caso verdadero.
// ~La declaracion de las condiciones ternariaas son realmente simples de implementar ya que unicamente necesitaremos una variable o un valor al que deseamos aplicarle nuestro ternario, donde por ejemplo podemos implementar condiciones donde un numero sea mayor, menor o igual, uso de booleanos y mucho mas, donde la estructura basica para cualquier tipo, ya que mediante el uso ademnas de signo de cierre de pregunta '?' ademas de dos punbtos ':' donde en donde se declara la variable y antes del signo de pregunta se puede definir la condicoion popr ejemplo en caso de aplicarl oa una numerica u otrotipo poisteriormente entre el signo de pregunta y los dos puntos podemos definir que sucedera si la condicioon se cumple siendo esto por ejemplo ejecutar una funcion una suma mostrar texto. etc... y por otro lado despues de los puntos podemos definir la accion que se realiozara en caso de que n o se cumpla elk tenrario.
function NombreComponente1() {
    const booleano1 = false;
    const booleano2 = true;
    const num1 = 0;
    const num2 = 1;
    return (
        <>
            <ol>
                <li><b>¿El boleano es verdadero?:</b> {booleano1 ? '✔️' : '❌'}</li>
                <li><b>¿El boleano es verdero?:</b> {booleano2 ? '✔️' : '❌'}</li>
                <li><b>Si el numero es mayor a 0 se le sumara 4:</b> {num1 > 0 ? num1 + 4 : 'El numero no es mayor que 0' }</li>
                <li><b>Si el numero es mayor a 0 se le sumara 4:</b> {num2 > 0 ? num1 + 4 : 'El numero no es mayor que 0' }</li>
            </ol>
        </>
    );
}

export { NombreComponente1 };

// ~Declaracion de condicionales ternarios para mostrar informacion unicamente en caso de ser verdadero.
// ~Ahora bien podemos implementar condicionales ternarioos para uqe unicamente muestr sierta informacion cuando se cumple o es verdadera la condicion, por lo que para esos casos la estructura cambia, donde ahora mediante nuestra variable en lugar dei mplementar signo de interrogacion final '?', deberemos implementar dopble ampersan '&&', donde de igfual manera despeus de estos podemos definir la accion que queremos que uscxeda cuando esta se cumpla, por lo que en caso de no cuplirse evidentemente es ternario no hara nada a comparacion del otr
function NombreComponente2() {
    const booleano1 = false;
    const booleano2 = true;
    return (
        <>
            <h1>Listado de actividades.</h1>
            <ol>
                <li>Despertarse: {booleano2 && '✔️'}</li>
                <li>Correr: {booleano2 && '✔️'}</li>
                <li>Desayunar: {booleano2 && '✔️'}</li>
                <li>Estudiar: {booleano1 && '✔️'}</li>
                <li>Quehaceres: {booleano1 && '✔️'}</li>
            </ol>
        </>
    );
}

export { NombreComponente2 };

// ~Ejemplo de implementacion de condicionales ternarios mediante Props.
// ~Ahora bien podemos implementar condicionales ternarios para mostrar informacion dependiendo de si se cumple o no la condicion, pero en este caso podemos implementar props para que el componente sea mas dinamico y pueda recibir informacion desde el componente padre, donde mediante el uso de props podremos recibir variables y valores para poder implementar nuestros ternarios y mostrar informacion dependiendo de si se cumple o no la condicion. Por ejemplo en este caso podemos implementar un componente llamado Items el cual recibira dos props, una llamada nombre y otra llamada visto, donde la prop nombre sera un string que contendra el nombre de la actividad y la prop visto sera un booleano que indicara si la actividad se ha completado o no, donde mediante el uso de ternarios podremos mostrar un checkmark si la actividad se ha completado o una cruz si no se ha completado, donde posteriormente podemos implementar otro componente llamado Listado el cual contendra una lista de actividades y utilizara el componente Items para mostrar cada actividad con su respectivo estado de completado o no completado.
function Items({nombre, visto}) {
    return (
        <>
            <li>{nombre} {visto ? '✔️' : '❌'}</li>
        </>
    );
}

function Listado() {
    return ( 
        <>
            <h1>Listado de Temas del Curso.</h1>
            <ol>
                <Items nombre="Instalaciones necesarias." visto={true}/>
                <Items nombre="Uso de Vite." visto={true}/>
                <Items nombre="Componentes." visto={true}/>
                <Items nombre="Variables en JSX." visto={true}/>
                <Items nombre="Props." visto={true}/>
                <Items nombre="Eventos." visto={true}/>
                <Items nombre="useState." visto={true}/>
                <Items nombre="Redux." visto={false}/>
                <Items nombre="customHooks" visto={false}/>
            </ol>
        </>
    );
}

export { Listado };