// ^Eventos
// ^Los eventos en React son mecanismos por los cuales los componentes pueden reaccionar a la interaccion del usuario, pudiendo ser mediante un click, escrituras es inputs, mover el mousey cualquier tipode interaccion que realice el usuario con el navegador. Por lo que existen una inmensa cantidad de eventos dentro de react pudiendo encontrar todos los tipos aqui "https://es.legacy.reactjs.org/docs/events.html". Cimunmnete y en su malloria los eventgos inician con "on", pudiendo encontrar erjemplos como onClic, onHover. etc.. Por lo que ademas es importante resatas y es que si bien recordamos cuando teniamos un archivo HTML que mediante script estaba vinculado a un archivo JS, la forma de declarar eventos dentro de las etiquetas html consistia en colocar el nombre del evento dentro de la etiqueta html y luego asignarle una funcion que se ejecutaria cuando el evento se disparara, quedando algo como lo siguiente: <button onclick="miFuncion()">Click me</button>, esto debido a que en HTML los eventos se declaraban de manera global, por lo que cualquier funcion declarada en el archivo JS podia ser llamada desde cualquier parte del archivo HTML. Por lo que en React la forma de declarar eventos es diferente, ya que los eventos se declaran dentro de los componentes y no de manera global, por lo que si queremos declarar un evento dentro de un componente debemos hacerlo dentro del mismo componente, y no fuera de este, ya que si lo hacemos fuera del componente el evento no funcionara. Por lo que la forma correcta de declarar un evento dentro de un componente es la siguiente: <button onClick={miFuncion}></button>, donde miFuncion es una funcion declarada dentro del mismo componente y no fuera de este. Por lo que es importante resaltar que los eventos en React son declarados dentro de los componentes y no de manera global, por lo que si queremos declarar un evento dentro de un componente debemos hacerlo dentro del mismo componente, y no fuera de este, ya que si lo hacemos fuera del componente el evento no funcionara.
//
function NombreComponente() {
    let sumar = () => {}
    return (
        <>
            <button onClick={sumar()}></button>
        </>
    );
}

export default NombreComponente;