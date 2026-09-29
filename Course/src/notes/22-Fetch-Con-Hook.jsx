// ^Fetch con Hook.
// ^Esta seccion tiene como objetivo principal poner en practica varios o la mayoria de los conceptios visto previamente en las secciones anteriores, por lo que las descripciones, explicaciones y en si todo el componente estara dividido por difernetes archivos pudiendo ser Hooks, Helpers, Componentes, etc.. ya que como bien se ha manejado en secciones anteriores todo el contenido se a procurado incluir en un solo archivo para comodidad y explicacion simple y sencilla de entender, pero nuevamente esta seccion esta dedicada mas al lado practicoo que teorico. Ademas cabe resaltar que esta seccion estara basada en el ejemplo mostrado en la seccion 22 en su mayoria, pero en esta seccion se integraran adiciones que incrementaran la complejidad de dicho ejercicio.
import { UsuariosComponente } from "../components/22-UsuariosComponente";
import '../styles/22-Fetch-Con-Hook.css'

export function ComponentePrincipal() {
    return (
        <>
            <h1>Formulario</h1>
            <hr />
            <UsuariosComponente />
        </>
    );
}