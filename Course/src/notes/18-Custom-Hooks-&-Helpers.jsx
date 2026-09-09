// ^Custom Hooks & Herlpers.
// ^DFnetro de React existen dos conceptos que son muy importantes y que son muy utilizados dentro de la programacion, los cuales son los custom hooks y los helpers, donde ambos conceptos son muy similares ya que ambos son funciones que contienen logica y que son escritas en archivos JavaScript, pero la diferencia es que los custom hooks siguen las reglas de los hooks, por lo que es necesario que su nombre empiece con 'use' y ademas pueden contener estados y efectos, mientras que los helpers no siguen las reglas de los hooks, por lo que no es necesario que su nombre empiece con 'use' y ademas no pueden contener estados ni efectos. Por lo que comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde su principal ovbjetivo es mantener a los componentes lo mas limpios posibles, ya que si tenemos demasiada logica dentro de un componente podemos crear un helper el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible, respetando asi la ley de atomizacion de los componentes, la cual nos dice que un componente debe ser lo mas pequeño posible y contener la menor logica posible, por lo que si tenemos demasiada logica dentro de un componente podemos crear un helper el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible, donde dicha ley dice: De atomos a moléculas, de moléculas a organismos, de organismos a plantillas y de plantillas a páginas. Por lo que comunmente el uso de helpers suele generarse en una carpeta con el nombre "helpers" donde ademas los archivos que creqremos seran de tipo JavaSctript, esto debido a que como dijimos nates es unicamente logica, por ende no se utilizara o implementara el uso de archivos jsx. Por otro lado tenemos los custom hooks, los cuales al iguao que estos ultimos son funciones que contienen logica y que son escritas en archivos JavaScript, los cuales tiene como objetivo de igua lforma mantener un codigo limpio pero en este caso los helpers suelen mantener el codigo de nuestros hooks lo mas limpio posible, ya que si tenemos demasiada logica dentro de un hook podemos crear un helper el cual contendra toda la logica y asi nuestro hook sera mucho mas limpio y entendible, y dividiendo asi la logica de nuestro hook en diferentes helpers, donde comunmente el uso de helpers suele generarse en una carpeta con el nombre "helpers" donde ademas los archivos que creqremos seran de tipo JavaSctript, esto debido a que como dijimos nates es unicamente logica.
// ~Hooks.
// ~Bien se sabe que el objetivo de los componentes casi siempre debido a su modelo y buenas practicas de diseño, es recomendable que sean lo mas pequeños posibles, debiendo por recomendacion evitar que estos contengan demasiada logica, ya que para esto existen diferentes maneras de ayudar a mantener nuestros componentes lo mejor posible, por lo que si contamos con demasiada logica dentro de estos podemos pasarlo a un helper con dicha logica o tambien se puede implemnentar los custom hooks el cual mediante estos podemos dejar neustros componentes al minimo y asi seguiur la ley de atomizacion de los componentes, por lo que si tenemos un componente con demasiada logica podemos crear un custom hook el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible. Recordar siempre la ley de atomizacion de los componentes, la cual nos dice que un componente debe ser lo mas pequeño posible y contener la menor logica posible, por lo que si tenemos demasiada logica dentro de un componente podemos crear un custom hook el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible, donde dicha ley dice: De atomos a moléculas, de moléculas a organismos, de organismos a plantillas y de plantillas a páginas. Por lo que comunmente el uso de custom hooks suele generarse en una carpeta con el nombre "hooks" donde ademas los archivos que creqremos seran de tipo JavaSctript, esto debido a que como dijimos nates es unicamente logica, por ende no se utilizara o implementara el uso de archivos jsx. Por otro lado los helpers son muy similares a los custom hooks, ya que estos tambien son funciones que contienen logica y que son escritas en archivos JavaScript, pero la diferencia es que los helpers no siguen las reglas de los hooks, por lo que no es necesario que su nombre empiece con 'use' y ademas no pueden contener estados ni efectos, por lo que comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe.
// ?Como antes se menciono comunmente los custom hoocks son funciones las cuales son creadas en archivos javascript para posteriormente exportarlos e importar dichas funciones en los componentes que se requiera, por lo que la estructura de un custom hook es muy similar a la de un componente, ya que este puede contener estados, efectos y demas logica que se requiera, por lo que la estructura de un custom hook, ya que sera exactamente igual pero en lugar de retornar codigo HTML, retornaremos un objeto o lo que se necesite, donde como se comento antes el objetuivo de los custome hoioks es unicamente reducir la logica en lso componentes por lo que estosp ueden extraer todo lo necesario y  retornar unicamente la informacion que sera utilizada por dicho componente. Ademas es super importante mencionar que la funcion del hook o el hook en si debe empezar por el nombre 'use', ya que de nop ser asi react bloqueara la ejecucion del mismo debido a que los hooks deben seguir ciertas reglas de uso, por lo que si no se sigue esta regla react no permitira la ejecucion del mismo. Por lo que de foram simple un hook es una funcion que procesara y realizara toda la logica que se requiera para posteriormente retornar la informacion que sera utilizada por el componente que lo importe, donde dicho hook debe empezar con el nombre 'use' y ser exportado para posteriormente ser importado en el componente que se requiera, donde comunmnete la informacion ya importada en el componente sera para renderizarla en el mismo o para realizar alguna logica que se requiera, pero siempre recordando que el objetivo de los custom hooks es reducir la logica en los componentes y asi mantenerlos lo mas pequeños posibles, siguiendo la ley de atomizacion de los componentes.
import { useEffect, useState } from "react";

export function useCustomHook() {
    const [data, setData] = useState([]);
    const fetchUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const dataApi = await response.json();
            setData(dataApi)
        } catch(error){
            console.warn(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])
    
    return {
        data
    }
}


function Componente1() {
    const { data } = useCustomHook();

    return (
        <ol>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ol>
    );
}

export { Componente1 };

// ?Exportacion de Hooks desde archivos JavaScript a componentes.
// ?Como antes se menciono los custom hooks son funciones que contienen logica y que son escritos o declarados en archivos JavaScript, por lo que para poder utilizar dicha logica dentro de un componente debemos exportar la funcion del hook y posteriormente importarla en el componente que se requiera, donde comunmente los custom hooks son exportados de manera nombrada, por lo que al momento de importarlos debemos hacerlo de la misma manera, ya que si no lo hacemos de esta manera react nos lanzara un error. Donde mediante 'export function' podemos exportar la funcion del hook y posteriormente mediante 'import { nombreDelHook } from "./hooks/nombreDelHook"' podemos importar dicha funcion en el componente que se requiera, donde comunmente los custom hooks son exportados de manera nombrada, donde unicamente para utilizar dichos hooks en un componente debemos importarlos y posteriormente ejecutar la funcion del hook para asi poder utilizar la logica que contiene dicho hook, donde comunmente los custom hooks son exportados de manera nombrada, por lo que al momento de importarlos debemos hacerlo de la misma manera, ya que si no lo hacemos de esta manera react nos lanzara un error.
import { hookExportadoDesdeJavaScript } from "../hooks/18-Custom-Hooks-&-Helpers";

function Componente2() {
    const { data } = hookExportadoDesdeJavaScript;

    return (
        <ol>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ol>
    );
}

export { Componente2 };

// ~Helpers.
// ~Por lo que comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe. Mayormente los helpers son implementados junto con los hooks cuando por ejemplo se devlara alguna funcion dentro del hook y dicha funcion contenga demasiada logica, por lo que para mantener el hook lo mas limpio posible podemos extraer dicha funcion a un helper y asi mantener el hook lo mas limpio posible, donde comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe. Por lo que comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe. Mayormente los helpers son implementados junto con los hooks cuando por ejemplo se devlara alguna funcion dentro del hook y dicha funcion contenga demasiada logica, por lo que para mantener el hook lo mas limpio posible podemos extraer dicha funcion a un helper y asi mantener el hook lo mas limpio posible.
// ?Estructura de Helpers.
// ?Los helpers mantienen una estructura muy similar a la de los custom hooks, ya que estos son funciones que contienen logica y que son escritas en archivos JavaScript, pero la diferencia es que los helpers no siguen las reglas de los hooks, por lo que no es necesario que su nombre empiece con 'use' y ademas no pueden contener estados ni efectos, por lo que comunmente los helpers son funciones que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe. Por lo que comunmente los helpers son funciones simples que contienen logica y retornan un valor o un objeto, donde comunmente estos son utilizados para realizar alguna logica y retornar un valor o un objeto para posteriormente ser utilizado en el componente que lo importe. Mayormente los helpers son implementados junto con los hooks cuando por ejemplo se devlara alguna funcion dentro del hook y dicha funcion contenga demasiada logica, por lo que para mantener el hook lo mas limpio posible podemos extraer dicha funcion a un helper y asi mantener el hook lo mas limpio posible. Donde ojo miuy7 iomportante ya que si implementamos helpers de tipo async y estos los mandamos llamar en nuestors hooks dentro de useEffect, debemos tener en cuenta que los helpers de tipo async no pueden ser llamados directamente dentro de useEffect, por lo que para poder llamar a un helper de tipo async dentro de un hook mediante useEffect debemos de integrarle el uso de .then en el helper, ya que de no ser asi react nos lanzara un error, por lo que para poder llamar a un helper de tipo async dentro de un hook mediante useEffect debemos de integrarle el uso de .then en el helper, ya que de no ser asi react nos lanzara un error. 
async function helper(){
    const [data, setData] = useState([]);
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const dataApi = await response.json();
        setData(dataApi)
    } catch(error){
        console.warn(error);
    }

    return {
        data
    }
}

export function customHook() {
    const { data } = helper();

    useEffect(() => {
        helper();
    }, [])
    
    return {
        data
    }
}

function Componente3() {
    const { data } = hookExportadoDesdeJavaScript;

    return (
        <ol>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ol>
    );
}

export { Componente3 };
