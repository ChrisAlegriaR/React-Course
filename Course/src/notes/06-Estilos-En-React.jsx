// ^Estilos en React/
// ^Dentro de React podemos aplicar estilos CSS a nuestros componentes y a toda la plicacion,por lo que para ello podremos utilizar archivos CSS, donde mediante el uso de import podremos especificar la ubicacion de nuestro elemento css (o mas elementos ya que como con hmtl y css puro podemops implementar mas de dos archivos de estilado.). Por lo que dentro de nuestro componente de manera automatica el archivo JSX, mediante la importacion de dichos archivos los aplicara a todo el codigo html que declaremos dentreo de nuestros componentes.
// ~Importacion de archivo css.
// ~Mediante del uso de import '' y la ubicacion del archvio/archivos css a querer implementar dentro del codigo HTML dentro de nuestros componentes, se aplicaran los estilos declarados dentro de estos. por lo que unicamente es necesario especificar la ruta o ubicacion de los css, yta que de manera automatica JSX aplica dichos estilos, por lo que podemos decir que en React el uso de import equivale a HTML el uso de link:style. Ademas es importante recordar que en el import de archivos CSS es fundamental poner la estencion del archivo.
import '../styles/06-Estilos-En-React.css'

// ~Declaracion y exportacion del componente.
// ~Una vez importado el archivo CSS a implmentar dentro de nuestro componente lo unico que queda es crear nuestro(s) componentes, declarando dentro de este(os) el codigo HTML a exportar, el cual una vez exportado se exportara con los estilos ya aplicados.
function NombreComponente() {
    return (  
        <>
            <div>
                <h1>¡Hola mundo!.</h1>
                <h2>¡Hola amigos!.</h2>
            </div>
        </>
    );
}

export default NombreComponente;