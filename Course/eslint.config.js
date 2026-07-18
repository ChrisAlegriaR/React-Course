// ^eslint.config.js
// ^El archivo eslint.config.js es un archivo de configuración para ESLint, el cual es una herramienta de análisis de código estático para identificar y reportar patrones problemáticos en el código JavaScript, siendo este seleccionado durante la creacion del proyecto con Vite y React. Este archivo define las reglas y configuraciones que ESLint utilizará para analizar el código del proyecto, incluyendo la extensión de configuraciones recomendadas y la definición de opciones de lenguaje específicas para JSX y el entorno del navegador. Por lo que en palabras mas simples, este archivo ayuda a mantener un código limpio y consistente en el proyecto, asegurando que se sigan las mejores prácticas de desarrollo y evitando errores comunes en el código JavaScript y JSX, relacionado todo esto mas a el tipado de proyecto que se esta desarrollando, en este caso un proyecto de React con Vite.


import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
