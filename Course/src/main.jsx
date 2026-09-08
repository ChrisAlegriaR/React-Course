// ^main.jsx
// ^El archivo main.jsx es el punto de entrada principal de la aplicación React, el cual es responsable de renderizar el componente raíz (App) en el DOM. Este archivo importa las dependencias necesarias, incluyendo React, ReactDOM y los estilos CSS globales, y utiliza la función createRoot de ReactDOM el cual extrera un elemento del archivo de entrada index.html para dentro de este montar la aplicación en un elemento del DOM con el id 'root'. Además, envuelve a App el cual contendra los componentes a renderizar mediante StrictMode de React, lo que ayuda a identificar problemas potenciales en la aplicación durante el desarrollo. Donde de manera simple podemos decir que este archivo es el encargado de iniciar la aplicación React y asegurarse de que se renderice correctamente en el navegador, siguiendo las mejores prácticas de desarrollo y proporcionando un entorno seguro para detectar errores y advertencias en el código, tomando un elemento del DOM con el id 'root' para dentro de este renderizar los componentes que ingresemos dentro del componente App, el cual es el componente principal de la aplicación y que contiene la estructura y funcionalidad de la misma, siendo este importado desde el archivo App.jsx. Sinedo asi este archivo el encargado de iniciar la aplicación React y asegurarse de que se renderice correctamente en el navegador, siguiendo las mejores prácticas de desarrollo y proporcionando un entorno seguro para detectar errores y advertencias en el código.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Componente from './notes/18-Custom-Hook';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componente />
  </StrictMode>,
); 