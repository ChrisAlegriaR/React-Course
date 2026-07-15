// ^Vite.config.js
// ^El archivo Vite.config.js es el archivo de configuracion de Vite, el cual si bien no tiene un impacto directo en el proyecto React como tal si lo tiene para Vite. Ya que este archivo es el que le dice a Vite como debe comportarse y que plugins debe usar para poder compilar correctamente el proyecto, esto se debe mas que nada a que estaremos ejecutando un proyecto React con Vite y para que Vite pueda compilar correctamente el proyecto es necesario que se le indique que debe usar el plugin de React, ademas de esto tambien se le indica a Vite que use el plugin de Babel para poder compilar correctamente el proyecto, esto es necesario ya que Vite no soporta JSX de manera nativa y necesita de Babel para poder compilarlo correctamente. Por lo que este archivo es la configuracion de entorno de Vite ademasd de claramente tener un impacto inclusive enm el empaquetafdo y generacion de la aplicacion, ya que Vite es el encargado de empaquetar y generar la aplicacion final, por lo que este archivo es de suma importancia para el correcto funcionamiento del proyecto.

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// *Mas informacion respecto a la configuración de Vite: https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
