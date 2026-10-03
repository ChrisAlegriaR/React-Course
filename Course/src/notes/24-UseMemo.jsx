// ^UseMemo.
// ^UseMemo al igual que UseRef, UseState y UseEffect es un Hook propio de React, el cual este es uno de los mas importantes dentro de React, esto debido a que UseMemo nos ayudara mucho cuanod se redibuje un componente y que no queramos que se vuelvan a llamar los metodos que utilicen muchos recuersos de nuestro dispositivo (pc), por ejemplo calculos pesados o pueden ser llamadas a APIS o todo este tipo de metodos que vayan a requerir muchos recursos y que no queremos que todo se este ejecutando o repitirendo cada que se redibuje. Por ejemplo si tenemos un boton que muestra u oculta algo no queremos que vuelva a ser llamado a una API.  Por lo que UseMemo para memorizar algunos de los fragmentos de los metodos y no repetirnors unicamente que cambie una de las dependencias y actualizara la informacion o ejecutara dichas cosas unicmanete si ciertos valores cambian. De igual forma a los hooks nativos de React estos deben ser importados para poder ser implementados y usados dentro de nuestr JSX. Por lo que la estruc5tura de useMemo es realmente bastante similar e igual que useeffect.
// ~Importacion de useMemo.
// ~Ahora bien, como se mencionó previamente, `useMemo` es un Hook proporcionado por React, por lo que para poder utilizarlo dentro de nuestros componentes primero debemos importarlo desde la librería de React. Al igual que sucede con `useState`, esta importación nos permitirá utilizar la función `useMemo` posteriormente dentro del componente y definir los efectos secundarios que deseamos controlar. Es importante recordar que los Hooks deben utilizarse siguiendo las reglas establecidas por React, por lo que `useMemo` deberá declararse directamente dentro del componente y no dentro de condiciones, ciclos o funciones anidadas que alteren el orden de ejecución de los Hooks.
import { useMemo } from "react";

// ~Uso e implementacion de useEffect.
import { useState } from 'react';

export const UseMemoMainComponent = () => {
    const [numeroPesado, setNumeroPesado] = useState(5);
    const [likes, setLikes] = useState(0);

    // ⚡ El cálculo memorizado
    const resultadoMultiplicacion = useMemo(() => {
        console.log('¡Haciendo la multiplicación pesada!');
        return numeroPesado * 100;
    }, [numeroPesado]); // <-- SOLO se vuelve a hacer si cambia "numeroPesado"

    return (
        <div style={{ padding: '20px' }}>
            {/* Botón 1: Modifica el número del cálculo */}
            <h3>Número: {numeroPesado} | Resultado: {resultadoMultiplicacion}</h3>
            <button onClick={() => setNumeroPesado(numeroPesado + 1)}>
                Cambiar Número
            </button>

            <hr />

            {/* Botón 2: Un contador de likes simple */}
            <h3>Likes totales: {likes} 👍</h3>
            <button onClick={() => setLikes(likes + 1)}>
                Dar Like
            </button>
        </div>
    );
};