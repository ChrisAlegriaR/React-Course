// ^UseMemo.
// ^UseMemo al igual que UseRef, UseState y UseEffect es un Hook propio de React, el cual este es uno de los mas importantes dentro de React, esto debido a que UseMemo nos ayudara mucho cuanod se redibuje un componente y que no queramos que se vuelvan a llamar los metodos que utilicen muchos recuersos de nuestro dispositivo (pc), por ejemplo calculos pesados o pueden ser llamadas a APIS o todo este tipo de metodos que vayan a requerir muchos recursos y que no queremos que todo se este ejecutando o repitirendo cada que se redibuje. Por ejemplo si tenemos un boton que muestra u oculta algo no queremos que vuelva a ser llamado a una API.  Por lo que UseMemo para memorizar algunos de los fragmentos de los metodos y no repetirnors unicamente que cambie una de las dependencias.
const getCalculo = (listaNumeros) => {
    console.log(listaNumeros)
}

export const UseMemoMainComponent = () => {
    const listaNumeros = [1, 2, 3, 4, 5];

    getCalculo(listaNumeros);

    return (
        <>
            <h2>Calculo</h2>
            <hr />
            <p>{}</p>
        </>
    )
}
