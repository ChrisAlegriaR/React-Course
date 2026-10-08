// ^UseCallback


// ^Use CallBack es un Hook nativo de React, el cual es realmente fundamental y muy utrilizado dentro de proyectos React. Este cuanta de igual manera con su mememorizador al igual que usememo donde los cuales ambos van de la mano, pero en lugar de memorizar variables usecallback puede memorizar metodos, por ende de ahi probiene su nombre por que colback es una funcion que se pasa dentro de otra funcion como aegumento.
import { useState } from "react"

export const Incrementar = ({incrementar}) => {
    console.log('Me estoy redibujando.');

    return (
        <button onClick={() => incrementar(10)}>+1</button>
    )
}

export const ComponenteParaUseCallback = () => {
    const [counter, setCounter] = useState(0);

    const incrementarPadre = (valorEnviado) => {
        setCounter(counter + valorEnviado);
    }

    return (
        <>
            <h1>Contador</h1>
            <p>Contador: {counter}</p>
            <hr />
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}
