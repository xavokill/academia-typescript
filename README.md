# ACADEMIA - TYPESCIPT 101

Este repositorio está dedicado a comprender lo más básico y elemental de este lenguaje, de tal suerte que tengas un _quick start_ sobre los principales componentes de este lenguaje y logres visualizar su posible uso en diferentes casos de uso.

Ten en cuenta que todo el material depositado en este repositorio es un **_COMPLEMENTO_** y no un riguroso curso. Esto significa que los ejercicios están pensados para que complementes ese conocimiento que tú ya estás revisando en algún otro medio (un curso en línea, un libro, etc.).

## TEMARIO

El siguiente minicurso contempla los siguientes temas:

* Introducción
* Instalación

  * Extensiones para VS Code.
* Introducción a TypeScript

  * Beneficios.
  * Tipos base (number, string y boolean).
  * Tipos complejos (Objetos, Arreglos, Enumeraciones yTuplas).
  * Programación orientada a objetos.

## #1 - INTRODUCCIÓN

JavaScript (también conocido como ECMAScript) comenzó su vida como un lenguaje de programación simple para navegadores. En el momento en que se inventó, se esperaba que se usara para fragmentos cortos de código incrustados en una página web; escribir más de unas pocas docenas de líneas de código habría sido algo inusual. Debido a esto, los primeros navegadores web ejecutaban dicho código con bastante lentitud. Sin embargo, con el tiempo, JS se hizo cada vez más popular y los desarrolladores web comenzaron a utilizarlo para crear experiencias interactivas.

Más que esto, JS se ha vuelto lo suficientemente popular como para usarse fuera del contexto de los navegadores, como la implementación de servidores JS usando node.js. La naturaleza de "ejecutar en cualquier lugar" de JS lo convierte en una opción atractiva para el desarrollo multiplataforma.

TypeScript tiene una relación inusual con JavaScript. TypeScript ofrece todas las funciones de JavaScript y una capa adicional además de ellas: el sistema de tipos de TypeScript. Por ejemplo, JavaScript proporciona datos primitivos de lenguaje como _string_ y _number_, pero este no verifica que se hayan asignado de manera consistente, TypeScript si lo hace.

Esto significa que tu código JavaScript en funcionamiento existente también es código TypeScript. El principal beneficio de TypeScript es que puede resaltar comportamientos inesperados en su código, lo que reduce la posibilidad de errores.

## #2 - INSTALACIÓN

Tener un ambiente de desarrollo para Typescript implica tener instalado los siguientes componentes de software de manera obligatoria:

* [NodeJS](https://nodejs.org/en) - La versión LTS más reciente.

Se recomienda que se instalen los siguientes componentes de software de manera opcional _(o en su defecto alguno parecido)_:

* [Visual Studio Code](https://code.visualstudio.com/) - La versión más reciente.

Teniendo una vez ambos componentes de software instalados en tu pc, ejecuta los siguientes comandos para instalar de manera global TypeScript.

```bash
   foo@bar:~$ npm install -g typescript
   foo@bar:~$ tsc --version
```

O si lo prefieres, también puedes instalar de manera local Typescript.

```bash
   foo@bar:~$ npm install typescript --save-dev
   foo@bar:~$ npx tsc --version
```

### #2.1 - EXTENSIONES PARA VS CODE

Las siguientes extensiones te pueden ser muy útiles para tus futuros desarrollos en TypeScript:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Office Viewer(Markdown Editor)](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office)
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## 3 - EJERCICIOS

A continuación, se resumen los ejercicios contenidos en este repositorio.

Cada uno de los ejercicios está pensado para abordar temas específicos y cumplir una serie de objetivos bien definidos.

### ¿Cómo trabajar con los ejercicios?

Los ejercicios y su código asociado representan el producto final, esto quiere decir que los archivos que ves en la carpeta ya están resueltos.

La idea principal es que, a tu ritmo y entendimiento propio, puedas seguir paso a paso las instrucciones que se detallan cada uno de los archivos **README.md** que se encuentran en cada una de las carpetas de los ejercicios. Esto con el fin de que puedas ir analizando y replicando cada una de las problemáticas que en estos se plantean.

Se recomienda que **NO TRABAJES SOBRE ESTOS EJERCICIOS**, si no en otra carpeta de tu equipo para tengas tu propio espacio y libremente puedas replicar los ejercicios propuestos.

A continuación, se resumen los ejercicios de este repositorio.

### # 3.1 - Simple Typescript

En este ejercicio se ejemplifica el uso de TypeScript en un proyecto simple de HTML5.

Se deben cumplir los siguientes objetivos:

* Entender los comandos básicos de la consola de TypeScript.

### # 3.2 - JS vs TypeScript

En este ejercicio se introducen los tipos base de TypeScript y se hacen visibles los beneficios de este lenguaje sobre su predecesor _Java Script_ (no significa que ya este deprecado).

Se deben cumplir los siguientes objetivos:

* Entender las principales razones por la cual TypeScript tiene una ventaja sobre JS nativo.
* Entender los tipos de datos básicos que utiliza TypeScript y la sintaxis esencial.

### # 3.3 - Arreglos

En este ejercicio nos adentramos un poco más en la extensa variedad de tipos que TypeScript nos permite utilizar. Vamos a usar los arreglos en TypeScript para resolver una problemática muy común.

Se deben cumplir los siguientes objetivos:

* Reforzar el conocimiento previo de los otros ejercicios.
* Mostrar las configuraciones que se pueden hacer en el compilador de TypeScript.
* Conocer y entender el manejo de arreglos en TypeScript.

### # 3.4 - POO

En este ejercicio vas a revisar los conceptos más utilizados sobre la POO en TypeScript, tales como clases, interfaces, herencia, etc.

Se deben cumplir los siguientes objetivos:

* Repasar los conceptos de la POO.
* Entender el manejo de clases en TypeScript.
* Entender el manejo de interfaces en TypeScript.
* Entender el manejo de los modificadores de acceso en TypeScript.
* Entender la herencia y polimorfismo en TypeScript.

### # 3.5 - Observables

En este ejercicio vas a conocer el uso de los **"observables"** utilizando TypeScript.

Se deben cumplir los siguientes objetivos:

* Entender el concepto de **"observables"** y los patrones de diseño involucrados.
* Instalar RxJS.
* Conocer los posibles usos de los **"observables"**.
