// ^UseCallback
// ^Use CallBack es un Hook nativo de React, el cual es realmente fundamental y muy utrilizado dentro de proyectos React. Este cuanta de igual manera con su mememorizador al igual que usememo donde los cuales ambos van de la mano, pero en lugar de memorizar variables usecallback puede memorizar metodos, por ende de ahi probiene su nombre por que colback es una funcion que se pasa dentro de otra funcion como aegumento. Donde ademas su estructura es muy similar a useMemo y useeffect, donde dentro de este podremos incluir los metodos a memorizar e igualmente poner un paramentro que mertiria volver a ejecutar dichos metodos si es que cambio algo dentro de estos. Donde de manera importante que hay que recalcar que al ser un memorizador si unlcuimos una variable de tipo state el Hook useDCallback no nos permitira actualizar la info de dicha variable esto debido a que recordara el valor previo y siempre este hook le asignara el valor uqe memorizo por lo que es importante saber y mencionas que para estos casos al usar el set de las variables de tiñpo state deberemos de asignar un nuevo valor para que se haga referencia a lo que tenia antes el variable teniedo setDelState(nombreNuevo => nombreNuevo restoOperacion). Lo que esto genera que el hook no lo memorice si no lo referencie. Cbae mencionar que al ser un hook debera importarse.
import React, { useCallback, useState } from "react"

export const Incrementar = React.memo(({incrementar}) => {
    console.log('Me estoy redibujando.');

    return (
        <button onClick={() => incrementar(10)}>+1</button>
    )
})

export const ComponenteParaUseCallback = () => {
    const [counter, setCounter] = useState(0);

    const incrementarPadre = useCallback((valorEnviado) => {
        setCounter(contador => contador + valorEnviado);
    }, [])

    return (
        <>
            <h1>Contador</h1>
            <p>Contador: {counter}</p>
            <hr />
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}