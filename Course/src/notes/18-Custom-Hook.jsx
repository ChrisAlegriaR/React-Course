// ^Custom Hook.
// ^Bien se sabe que el objetivo de los componentes casi siempre debido a su modelo y buenas practicas de diseño, es recomendable que sean lo mas pequeños posibles, debiendo por recomendacion evitar que estos contengan demasiada logica, ya que para esto existen diferentes maneras de ayudar a mantener nuestros componentes lo mejor posible, por lo que si contamos con demasiada logica dentro de estos podemos pasarlo a un helper con dicha logica o tambien se puede implemnentar los custom hooks el cual mediante estos podemos dejar neustros componentes al minimo y asi seguiur la ley de atomizacion de los componentes, por lo que si tenemos un componente con demasiada logica podemos crear un custom hook el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible. Recordar siempre la ley de atomizacion de los componentes, la cual nos dice que un componente debe ser lo mas pequeño posible y contener la menor logica posible, por lo que si tenemos demasiada logica dentro de un componente podemos crear un custom hook el cual contendra toda la logica y asi nuestro componente sera mucho mas limpio y entendible, donde dicha ley dice: De atomos a moléculas, de moléculas a organismos, de organismos a plantillas y de plantillas a páginas. Por lo que comunmente el uso de custom hooks suele generarse en una carpeta con el nombre "hooks" donde ademas los archivos que creqremos seran de tipo JavaSctript, esto debido a que como dijimos nates es unicamente logica, por ende no se utilizara o implementara el uso de archivos jsx.
// ~Estructura de Custom Hooks.


// ~Como antes se menciono comunmente los custom hoocks son funciones las cuales son creadas en archivos javascript para posteriormente exportarlos e importar dichas funciones en los componentes que se requiera, por lo que la estructura de un custom hook es muy similar a la de un componente, ya que este puede contener estados, efectos y demas logica que se requiera, por lo que la estructura de un custom hook, ya que sera exactamente igual pero en lugar de retornar codigo HTML, retornaremos un objeto o lo que se necesite, donde como se comento antes el objetuivo de los custome hoioks es unicamente reducir la logica en lso componentes por lo que estosp ueden extraer todo lo necesario y  retornar unicamente la informacion que sera utilizada por dicho componente. Ademas es super importante mencionar que la funcion del hook o el hook en si debe empezar por el nombre 'use', ya que de nop ser asi react bloqueara la ejecucion del mismo debido a que los hooks deben seguir ciertas reglas de uso, por lo que si no se sigue esta regla react no permitira la ejecucion del mismo. Por lo que de foram simple un hook es una funcion que procesara y realizara toda la logica que se requiera para posteriormente retornar la informacion que sera utilizada por el componente que lo importe, donde dicho hook debe empezar con el nombre 'use' y ser exportado para posteriormente ser importado en el componente que se requiera, donde comunmnete la informacion ya importada en el componente sera para renderizarla en el mismo o para realizar alguna logica que se requiera, pero siempre recordando que el objetivo de los custom hooks es reducir la logica en los componentes y asi mantenerlos lo mas pequeños posibles, siguiendo la ley de atomizacion de los componentes.
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


function Componente() {
    const { data } = useCustomHook();

    return (
        <ol>
            {data.map(item => <li key={item.id}>{item.name}</li>)}
        </ol>
    );
}

export default Componente;
