// ^Variables en JSX.
// ^Como bien sabemos los archivos JSX son archivos de JavaScript con compatibilidad con HTML, por lo que podemos declarar variables y utilizarlas dentro de nuestro código JSX, pudiendo dibuharei dichas variables dentro del DOM de nuestra pagina, donde median te el uso de llaves "{}" dentor de estas podremos declarar y ejecutar cualquier codigo e JavaScript ademas de poder llamas las variables previamente declaradas.

// ~Declaracion de variables y su renderizado en DOM.
// ~Como bien sabemos existen diversos tipos de variables dentro de javascrtipt quer pueden swr declaradas puydioendo ser estas desde un siemple string hasta funciones, fechas y mas. Por lo que si bien estas pueden ser declaradas (recomendablemente fuera de los componentes), puedenm ser renderizadas dentro del Dom de la pagina, donde cada tipo de variable segun su tipo renbderizara de cierta manera u otra en el DOM. Por lo que para poder ser renderizadas es necesario declararlas, y estas se recomiendan ser declaradas fuera de nuestros componentes, ya que de esta manera podemos tener un mejor control de las mismas y poder utilizarlas en cualquier parte de nuestro codigo JSX, ya que si estas son declaradas dentro de un componente solo podran ser utilizadas dentro del mismo componente. Por lo que su declaracion es exactamente igual a javascript puro, pero en el caso de su renderizado se debe de implmenetar el uso de llaves "{}" dentro de las cuales no solamente podremos mandart llamar nuestras variables si no que tambien podremos ejecutar codigo directamente desde dichas llabes. Ademas cabe mencionar que existe un excepcion de renderizado y esto es con cualquoier tipo de variable de tipo objeto (objetc, date, etc) ya que estas no pueden ser renderizadas directamente en el DOM, por lo que si se desea renderizar este tipo de variables es necesario convertirlas a string o JSON para poder ser renderizadas en el DOM de la pagina.
// ?Declaracion de variables
// ?La declaracion de las variables dnetor de un archivo JSX mantiene la misma forma y formato que en JavaScript puro, donde se utriliza el tipo de variable (var, let, const), seguido del nombre de dicha variable simbolo = y el valor a asignar.
let string = "Hola mundo!";
let number = 12345;
let array = [1, 2, 3, 4, 5];
let boolean = true;
let funcion = () => 1 + 1;
let fecha = new Date();
let objeto = { nombre: "Jose", edad: 19}

// ?Renderizadop de variables.
// ?Para poder renderizar los vcalores o nuestras variables dentro del DOM de nuestra pagina es indispensable y necesario el uso de llabves debntro del componente y la seccion a renderizar, donde dentro de estas podemos siemplmente mandar llamar dichas variables o incluso ejecutar codigo javascript directamente, por lo que bien como se menciono previamente unicamente JSX podra renderizxar variables dieferentes al tipo objetc.
// &Renderizado de variables diferentes a object.
// &
let string = "Hola mundo!";
let number = 12345;
let array = [1, 2, 3, 4, 5];
let boolean = true;
let funcion = () => 1 + 1;

function nombreComponente() {
    return (
        <ul>
            <li>{string}</li>
            <li>{number}</li>
            <li>{array}</li>
            <li>{boolean}</li> // *Aqui le pones que boolean no se puede renderizar ya que es un elemento no string solo es como un metadato o yo que se
            <li>{funcion()}</li> // *Aqui le pones que funciones solo se pueden renderizar si retornan algo ademas de tener que ejecutarlas ya que no se puede renderizar la funcion como tal si no lo que retorna y que sea compatible claro;
        </ul>
    );
}

export default nombreComponente;
