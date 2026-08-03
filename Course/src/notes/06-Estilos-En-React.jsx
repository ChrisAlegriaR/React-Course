// ^Estilos en React.
// ^Dentro de React es posible aplicar estilos CSS a nuestros componentes y, por extensión, a toda la aplicación. Para ello, React permite importar directamente archivos CSS dentro de los archivos JSX mediante la palabra reservada `import`. Una vez realizado el import, los estilos contenidos dentro del archivo CSS quedarán disponibles automáticamente para todos los elementos HTML (JSX) definidos dentro del componente que realizó la importación. Esto permite separar completamente la estructura (JSX) de la presentación (CSS), manteniendo un código mucho más organizado, reutilizable y fácil de mantener. Además, al igual que en HTML tradicional, es posible utilizar uno o varios archivos CSS dentro de un mismo componente dependiendo de las necesidades del proyecto, permitiendo dividir los estilos por módulos, secciones o funcionalidades.
// ~Importacion de archivo CSS.
// ~La implementación de estilos mediante archivos CSS dentro de React es muy sencilla, ya que únicamente es necesario importar el archivo utilizando la palabra reservada `import`, seguida de la ruta donde se encuentra almacenado el archivo CSS. A diferencia de la importación de componentes o funciones, en este caso no es necesario almacenar el import en ninguna variable, ya que simplemente al ser importado React y la herramienta de construcción (como Vite o Webpack) detectarán automáticamente que se trata de un archivo de estilos y aplicarán su contenido al componente correspondiente. De cierta forma, este `import` cumple una función muy similar a la etiqueta `<link rel="stylesheet">` utilizada en HTML tradicional. Es importante recordar que, al importar archivos CSS, siempre debe especificarse la extensión `.css`, ya que React necesita identificar correctamente el tipo de archivo que está cargando.
import '../styles/06-Estilos-En-React.css' //* Importa el archivo CSS ubicado en la ruta especificada para aplicar automáticamente sus estilos al componente.

// ~Declaracion y exportacion del componente.
// ~Una vez que el archivo CSS ha sido importado, no es necesario realizar ninguna configuración adicional para comenzar a utilizar sus estilos. Todos los elementos HTML (JSX) declarados dentro del componente podrán utilizar las clases, identificadores o selectores definidos en dicho archivo CSS. Posteriormente, únicamente resta declarar el componente de React de forma habitual y exportarlo para que pueda ser utilizado desde cualquier otro archivo de la aplicación. Cuando el componente sea renderizado, React aplicará automáticamente los estilos previamente importados, logrando así separar completamente la lógica de la presentación visual.
function NombreComponente() { //* Declaración del componente funcional.
    return ( //* Retorna el contenido visual del componente.
        <> {/* Fragment que agrupa el contenido sin generar un nodo adicional en el DOM. */}
            <div> {/* Contenedor principal del componente. */}
                <h1>¡Hola mundo!.</h1> //* Título principal al que podrán aplicarse estilos desde el archivo CSS importado.
                <h2>¡Hola amigos!.</h2> //* Segundo encabezado que igualmente podrá ser estilizado mediante CSS.
            </div> {/* Fin del contenedor principal. */}
        </> //* Fin del Fragment.
    ); //* Fin del return.
} //* Fin del componente.

export default NombreComponente; //* Exporta el componente como exportación por defecto para poder importarlo en otros archivos.