// ^Formulario Con Hooks.
// ^Como bien sabemos la implementacion de todos los apartados previamente explicados en secciones anteriores tienden a tener ciertos usos y aplicaciones segun el tipo de caso, pir lo que en esta seccion se integra un ejemplo de un formulario dentro de react implementando todos los conceptos de secciones previas, por lo que uno de los factores mas importantes a visualizar dentro de esta seccion es varios conceptos simples pero fundamentales, como por ejemplo el uso de una vafriable de objetos de tipo useState podemos usarlas para almacenar multiples valores de un formulario y mediante la desestructuracion de este objeto podemos acceder a cada uno de los valores de manera individual, ademas de que mediante el uso del evento onChange podemos acceder a cada uno de los elementos del formulario y mediante el uso del evento target podemos acceder a las propiedades de cada uno de estos elementos, como por ejemplo el name y el value, lo cual nos permite actualizar el estado del formulario de manera dinamica y eficiente, finalmente ademas dentro de variables de objetos de tipo useSatet existe una manera donde mediante el paso de un nimbre de manera automatica el useSate buscara y sustituira unicamente el valor de la propiedad que coincida con el nombre pasado, lo cual nos permite actualizar de manera dinamica y eficiente el estado del formulario sin necesidad de crear multiples funciones para cada uno de los elementos del formulario.
// ~Variable de objetos de tipo useState.
// ~Dentro de las tipos de variables que podemos crear con useState existe una manera de crear variables de tipo objeto, lo cual nos permite almacenar multiples valores dentro de un mismo estado, ademas de que mediante la desestructuracion de este objeto podemos acceder a cada uno de los valores de manera individual, lo cual nos permite actualizar el estado y la informacion de cada objeto de manera dinamica y eficiente, esto nos permite trabajar con un conjunto de datos que pertenecen a un mismo estado, lo cual nos permite tener un control mas eficiente de la informacion y el estado de nuestro componente.
import { useState } from "react"

function ComponenteObjetos() {
    const [data, setData] = useState({
        nombre: 'Jesus Ramirez',
        edad: 39,
    })

    const { nombre, edad} = data;

    return (
        <>
            <h3>{nombre}</h3>
            <h3>{edad}</h3>
        </>
    )
}

// ~Acceso de informacion de elementos que ejecutan eventos.
// ~Cuando asignamos un evento a cualquier elemento sabemos que podemos ejecutar un conjunto de acciones que especifiquemos dentro del evento pero cuando se asigna la ejecucion de una funcion dentro de estos eventos podemos acceder a la informacion de los elemnetos que ejecutaron dicho evento, por lo que para ello se usa el parametro (event) en el cual se encuentra diversa informacion de quien arrojo  oejecuto dicho evento, de igual manera se puede acceder a esta informacion sin siquiera declarar el parametro (event) ya que este es un parametro implicito que se puede acceder de manera automatica, por lo que mediante el uso de este parametro podemos acceder a la informacion de los elementos que ejecutaron dicho evento, como por ejemplo el name y el value de un input, lo cual nos permite actualizar el estado de nuestro componente de manera dinamica y eficiente. Finalmente se puede desestructurar el parametro (event, target) para acceder de manera mas eficiente a la informacion de los elementos que ejecutaron dicho evento, lo cual nos permite actualizar el estado de nuestro componente de manera dinamica y eficiente. Para poder desestructurar directamente a target desde parametro es necesario que solamente se pase un solo paramtreo siendo en este caso el mismo target.
function ComponenteEvent() {
    const onSubmit = (event) => {
        event.preventDefault();

        const { target } = event;
        const { name } = target;
        console.log(event.target.name);
        console.log(name);
    }

    return (
        <button type="submit" name="boton de envio" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    );
}

// ~Modificacion de informacion de un solo objeto en variable de objetos de tipo useState.
// ~Dentro de una variable de objetos de tipo useState podemos almacenar multiples valores dentro de un mismo estado, ademas de que mediante la desestructuracion de este objeto podemos acceder a cada uno de los valores de manera individual, lo cual nos permite actualizar el estado y la informacion de cada objeto de manera dinamica y eficiente, por lo que en estos casos podemos modificar unicamente el valor de la propiedad que coincida con el nombre pasado, lo cual nos permite actualizar de manera dinamica y eficiente el estado del formulario sin necesidad de crear multiples funciones para cada uno de los elementos del formulario. Donde mediante esto mediante el set de nuestra variable de tipo useState podemos actualizar unicamente el valor de la propiedad que coincida con el nombre pasado por lo que el formato para actualizar el estado de un objeto de tipo useState es el siguiente: setNombreVariable({ ...nombreVariable, [name]: value }), donde nombreVariable es el nombre de la variable que pasaremos para que useState busque y sustituya unicamente el valor de la propiedad que coincida con el nombre pasado, name es el nombre de la propiedad que queremos actualizar y value es el valor que queremos asignar a dicha propiedad, guardando asi lo valores de las demas propiedades del objeto que no se modificaron mediante el operador de propagacion (...nombreVariable) y actualizando unicamente el valor de la propiedad que coincida con el nombre pasado mediante el uso de corchetes ([name]: value).
function ComponenteUseState() {
    const [data, setData] = useState({
        nombre: '',
        edad: 0
    })

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setData({
            ...data,
            [name]: value 
        })      
        
        console.log(data);
    }

    return (
        <form>
            <label htmlFor="nombre">Nombre: </label>
            <input name="nombre" type="text" placeholder="Ingresa tu nombre" onChange={onInputChange}/>
            <hr />
            <label htmlFor="edad">Edad: </label>
            <input name="edad" type="number" min={0} max={100} onChange={onInputChange}/>
        </form>
    );
}


// ~Ejemplo de formulario aplicado a caso real.
// ~
function ComponenteFormulario() {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const { userName, email, password} = useState; //*Agregar que se pueden declarar en un usestate diferntes valores y desestructurarlo para mediante el usop del state del objeto actualizar mediane su set cualquiervalor

    const onInputChange = ({target}) => { //*Agregar ademas que mediante event no solo nos permite recibir y ver informacion de que elemento ejecuto el evento y mediante este evento se genera una especie de reporte (event) desee el cual podemos hacceder no solamente a el valor del input que ejecuto el evento si n oincluso al nombre, id y propiedades de estos elementos.
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input type="text" className="form-control" name="userName" placeholder="Enter tour user name" onChange={onInputChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onInputChange}/>
                <small name="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" onChange={onInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    )
}

export {ComponenteObjetos, ComponenteEvent, ComponenteFormulario, ComponenteUseState };
