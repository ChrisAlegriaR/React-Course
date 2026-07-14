# Vite
## ¿Que es Vite?
Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo mas rapida y agil para proyectos web modernos. Por lo que vite se puede definir como una plantilla sobre la cual los desarrolladores pueden crear y trabajar en sus proyectos sin la necesidad de crear de manera manual cada apartado, siento Vite compatible con diversas tecnologias, entre ellas REACT. Por lo que de forma mas simplificada Vit se puede definir como un servidor local de desarrollo que permite armas una estructura, en este caso de REACT, atravez de una plantilla facilitando la creacion del proyecto, donde mediante la ejecucion de una sola linea/comando en nuestra terminal nos permitira crear y armar la estructura del proyecto para nbosotors como programadores emepezar desde una plantilla pre armada.

Esto es extremadamente util ya que todas las aplicaciones React tienen y comparten una misma base, la cual mediante Vit la podemos crear mediante la ejecicoion de una sola linea de codigo, ademas de que Vit proporciona diferentes mejoras realmente utiles como HMR(Hot Module Replacement), el cual solamente modificara en nuestra pagina y sertvidor en ejecucion aquellas secciones, elementos o componentes que modifiquemos, esto sin actualizar toda la pagfina y actualizando solo y unicamente dichos elementos modificados.

## ¿Como se utiliza Vite?
Vite es una herramienta de compilacion la cual no es necesario descargar, instalaro o agfregar ninguna aplicacion oi extension dentro de nuestors proyectos, ya que esta herramienta puede ser totalmente invocada o utilizada mediante una terminal, teniendo asi que el unico requisito previo para poder utilizarlo es necesario e indispnesbale contar con Node.JS instalado en nuestro dispositivo, ya que esta funciona mediante la paqueteria Node Package Manager(npm), la cual nos permitira utilizar Vite dentro de nuestros proyectos. Adicionalmente cabe destacar que Vite requiere versiones Node 14.18 y 16, sin embargo, algunas plantillas requieren una version superior de Node.JS para fuincionar.

## Creacion de proyecto mediante Vite.
Para proceder con la ejecucion de Vite y poder asi crerar nuestro proyecto React y trabajar mediante una plantilla pre-creada se debera utilizar el comando `npm create vite@latest`, donde dicho comando como se peude visualizar esta divididio en 3 palabras las cuales son fundamentales para la ejecucion de Vite:

- **npm:** Indica que mediante Node Package Manager(npm), ejecutara el comando, sinedo asi por ende un comando que requiere de dicha libreria para poder ser ejecutado

- **create:** Le indica al Node Package Manager(npm) que creara, iniciara o ejecutara algo mediante el uso de esta misma libreria.

- **vite@latest:** Este comando es fundamental, ya que indica a Node Package Manager(npm) que creara un nuevo proyecto mediante la ultima version de Vite, el cual este podria implicar que esta utilizara versiones superiores de Node.JS a la minima para funcionar.

Por lo que una vez ejecutado dicho comando la consola nos arrojara diversas opciones las cuales nos indicara en seleciconar entre dichas opciones para crear nuestro proyecto/plantilla. Donde el primer dato a solicitarnos Vite sera el nombre del proyecto con el cual creara el mismo y dara de altya diversos archivos importantes, entree ellso el nombre inclusive de la carpeta del proyecto.

```bash
◆  Project name:
│  vite-project
```
 
Posteriroemtne Vite mediante la consola nos preguntara la tecnologia quew utilizaremos en nuestor proyecto, ya que como bien se coment oantes Vite es compatrible y crea asi mismo proyectros de diferentes tecnologicas, entre estas esta React.

```bash
◆  Select a framework:
│  ● Vanilla
│  ● Vue
│  ● React
│  ● Preact
│  ● Lit
│  ● Svelte
│  ● Solid
│  ● Ember
│  ● Qwik
│  ● Angular
│  ● Marco
│  ...
│  ↑/↓ to navigate • Enter: confirm
└
```
Una vez seleccionada la tecnologia se nos preguntara respecto a el tipo de lenguaje que deseamos implementar en nuestro proyecto, esto debido a que Vite en el caso de usar React nos permite crear proyectos React con JavaScript o TypeScript, por lo que se nos preguntara cual de estos dos lenguajes deseamos utilizar en nuestro proyecto. De igual manera se encuntran las opciones de lenguaje junto con react compiler el cual e s un compilador de React que permite a los desarrolladores escribir código React utilizando una sintaxis más concisa y expresiva, lo que puede mejorar la legibilidad y mantenibilidad del código. Ademas de que React Compiler puede optimizar el rendimiento de las aplicaciones React al realizar transformaciones en tiempo de compilación, lo que puede resultar en un código más eficiente y rápido y al momento de generar nuestro builder de nuestro proyecto, React Compiler puede aplicar optimizaciones específicas para mejorar el rendimiento de la aplicación final.

```bash
◆  Select a variant:
│  ● TypeScript
│  ● TypeScript + React Compiler
│  ● JavaScript
│  ● JavaScript + React Compiler
│  ● RCS (npm exec tiged vitejs/vite-plugin-react/packages plugin-rsc/examples/starter)
│  ● React Router v7 ↗ https://reactrouter.com (npm create react-router@latest)

│  ● TanStack Router ↗ https://tanstack.com/router (npm exec -- @tanstack/cli@latest create TARGET_DIR --framework react --interactive)
│  ● RedwoodSDK ↗ https://rwsdk.com (npm create rwsdk@latest)
│  ● Vike ↗ https://vike.dev (npm create -- vike@latest --react)
│  ...
│  ↑/↓ to navigate • Enter: confirm
└
```

Adicionalmente Vite nos preguntara que linter deseamos utilizar en nuestro proyecto, ya que Vite nos permite seleccionar entre dos linters, el cual un linter es una herramienta que analiza el código fuente para identificar errores, problemas de estilo y posibles mejoras en la calidad del código. Los linters ayudan a mantener un código más limpio y consistente, lo que facilita la colaboración entre desarrolladores y reduce la probabilidad de errores en el software. Por lo que se nos permite seleccionar entre Oxlint y ESLint, donde la diferencia entre estos es que ESLint es un linter ampliamente utilizado y altamente configurable para JavaScript y JSX, mientras que Oxlint es un linter más reciente y menos conocido, diseñado específicamente para proyectos de React y TypeScript, ofreciendo reglas y configuraciones optimizadas para estos entornos.

```bash
◆  Which linter to use?
│  ● Oxlint
│  ● ESLint
└
```

Por ultimo Vite nos preguntara si deseamos instalar las dependencias necesarias para el proyecto y asi mismo iniciar el proyecto de manera automatica, o si deseamos instalar dichas dependencias de manera manual y posteriormente iniciar el proyecto.

```bash
◆  Install with npm and start now?
│  ● Yes / ○ No
└
```

## Levantamiento de proyecto mediante Vite.
Una vez tengamos nueastro proyecto React creado mediante Vite, tendremos que levantar o ejecutar nuestro proyecto en nuestro servidor local, para asi poder visualizar y trabajar en nuestro proyecto React. Por lo que para levantar nuestro proyecto mediante Vite, primero tendremos que ingresar a la carpeta de nuestro proyecto mediante el comando `cd nombre-de-nuestro-proyecto`, donde dicho comando nos permitira ingresar a la carpeta de nuestro proyecto y asi mismo poder ejecutar el siguiente comando `npm run dev`, el cual mediante la paqueteria npm(Node Package Manager) nos permitira levantar nuestro proyecto en un servidor local, el cual nos proporcionara una url para poder visualizar nuestro proyecto en un navegador web.

# React.
React es una libreria de JavaScript de codigo abierto desarrollada por Facebook, la cual contiene mucha interactividad hacia el usuario, siendoi esta reactiva. Donde ademas React se aprovecha de un componente y de JSX que es un tipo de HTML con esteroides. Donde de manera adicional React es una libreria que permite a los desarrolladores crear interfaces de usuario de manera eficiente y escalable, utilizando un enfoque basado en componentes. Esto significa que las aplicaciones se construyen a partir de piezas reutilizables de código llamadas componentes, lo que facilita el mantenimiento y la evolución del software, sienbdo ademas esta tecnologia una de las mas solicitadas y usadas en el mercado.

## Diferencia entre React Doom y React Native.
Existen dos versiones popularmente utuilizadas de React, las cuales son React Doom y React Native, donde la diferencia entre estas dos versiones es que React Doom es una libreria de JavaScript que permite a los desarrolladores crear interfaces de usuario para aplicaciones web, mientras que React Native es un framework de desarrollo móvil que permite a los desarrolladores crear aplicaciones móviles nativas para iOS y Android utilizando JavaScript y React. Por lo que la diferencia principal entre estas dos versiones es el tipo de plataforma para la cual estan diseñadas, siendo React Doom para aplicaciones web y React Native para aplicaciones moviles.


