// ^Map
// ^Como bien sbaemos el uso de Map es propio de JavaScript, por lo que para recapitular un poco, este es una especie de ciclo el cual recorre absolutamente todos los elementos dentro del elemento al que le apliquemos el map mediante nombreVariable.map, por lo que normalmente map de manera por dfefecto retornara siempre lo que especificquemos dentro de este, por lo que en si map es una propiedad o una especi de ciclo for o if que se repetira hasta haber pasado atravez de cada elemento denmtro de nuestra variable, donde este por cada iteracion podra regresdar algo. Ahora bien podemos aplicar esta misma analitica y funcoion a useState e inlcusive retornar por cadas iteracion de map un elemento a renderizar. ya que como mecionamos maop no es necesario definir un return ya que este lo hara dem anera automatica. Recortdemois que la ewstrucrua de map es nombreVariable.map(item => accionesARealizarYretornae).
// ~Ejemplo de implmenetacion de Map mediante useState y renderisaciones.
// ~Ahora bien usando el ejemplo de la seccion 10, podemos ver que contamos con 2 diferentes componentes teniedo item que renderiza un item el cual tiene como objetivo este ser llamado y mediante el paso de propedades (props) mo0strar informacion, por lo que ahora biern dentro de el componente padre listado definimos 1 variables de nombre listadoCUrsos la cual contentendra o es un array de objetos que contieen cada objeto nombre curso y si ya fue visto, pósteriormente mediante use state definimos una variable y su funcoion donde le decimos que tome el valor de luistadocursos. Posteriormente dentro del renderizado de nuesotro componewnte mediante el uso de useSte que tiene los mismos valores que listadoCursos usaremos un map donde mediante arreglo.map(item => accionesARealizarYretornae), podras retornar cosas ocmo comentamos previamente asi que directamente podemos definir el componente item pasado por item del mapa la info nombre y visto para que retorne el itemp or casa objeto en useSate
import { useState } from "react"

function Item({nombre, visto}) {
    return (
        <>
            <li>{nombre}: {visto ? '✔️' : '❌'}</li>
        </>
    );
}

function Listado() {
    let listadoCursos = [
        {nombre: "Instalaciones necesarias.", visto: true},
        {nombre: "Uso de Vite.", visto: true},
        {nombre: "Componentes.", visto: true},
        {nombre: "Variables en JSX.", visto: true},
        {nombre: "Props.", visto: true},
        {nombre: "Eventos." , visto: true},
        {nombre: "useState.", visto: true},
        {nombre: "Redux.", visto: false},
        {nombre: "customHooks", visto: false}
    ]

    const [arreglo, setarreglo] = useState(listadoCursos);
    return (
        <>
            <h1>Maps</h1>
            <ol>
                {arreglo.map(item => <Item nombre={item.nombre} visto={item.visto}></Item>)}
            </ol>
        </>
    );
}

export default Listado;

// ~Key unica por iteracion de map.
// ~

