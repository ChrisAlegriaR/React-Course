// ^Fetch con Hook.
// ^Esta sección tiene como objetivo principal poner en práctica la mayoría de los conceptos vistos en las secciones anteriores. Por ello, las descripciones, explicaciones y la estructura general del componente se dividirán en diferentes archivos (como Hooks, Helpers, Componentes, etc.). En las secciones previas se procuró incluir todo el contenido en un solo archivo para ofrecer una explicación simple y cómoda de entender; sin embargo, esta sección está dedicada enteramente al enfoque práctico más que al teórico. Cabe resaltar que este ejercicio se basará en gran parte en el ejemplo mostrado en la sección 22, pero se integrarán adiciones que incrementarán su complejidad. Asimismo, con el fin de priorizar la práctica, este código no contendrá comentarios explicativos línea por línea.
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