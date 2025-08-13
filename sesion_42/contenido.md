# Sesión 42: Introducción a React

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Preguntar cuando tengas dudas
- Ayudar a tus compañeras

## 🎯 Objetivos de la sesión
- Entender qué es React y cómo se diferencia de un framework
- Conocer otros frameworks/bibliotecas de frontend
- Crear nuestra primera aplicación React con Vite
- Comprender JSX en profundidad
- Trabajar con la estructura básica de un proyecto React

## 🤔 Pregunta de reflexión inicial
Si pudieras crear cualquier aplicación web, ¿cuál harías y por qué?

## 🌍 El ecosistema de Frontend

### � Bibliotecas vs Frameworks
Antes de empezar con React, entendamos la diferencia:

**🔧 Frameworks (completos):**
- Angular: Framework completo de Google
- Vue.js: Framework progresivo
- Svelte: Compilador de componentes

**📖 Bibliotecas (específicas):**
- React: Solo para interfaces de usuario
- jQuery: Manipulación del DOM
- D3.js: Visualización de datos

### 🤖 ¿Qué es React realmente?
React es una **biblioteca** de JavaScript (no un framework) que nos permite:
- Crear interfaces de usuario interactivas
- Organizar el código en componentes reutilizables
- Manejar el estado de la aplicación de forma eficiente

### 🌟 ¿Por qué React es especial?
- Creada por Facebook (Meta) en 2013
- Virtual DOM para mejor rendimiento
- Ecosistema gigante y comunidad activa
- Usada por Instagram, WhatsApp, Netflix, Airbnb
- Sintaxis JSX que veremos a fondo

## 🔨 Creando nuestra primera app React

### 🛠️ Preparando nuestro entorno de desarrollo

Antes de crear nuestra app, necesitamos instalar algunas herramientas esenciales:

#### 📦 ¿Qué es Node.js?
**Node.js** es un entorno que nos permite ejecutar JavaScript fuera del navegador:
- Originalmente JavaScript solo funcionaba en navegadores
- Node.js nos permite usar JavaScript en nuestro computador
- Es la base para muchas herramientas de desarrollo web modernas

#### 🚀 ¿Qué es npm?
**npm (Node Package Manager)** es el administrador de paquetes de Node.js:
- Viene incluido automáticamente con Node.js
- Nos permite instalar bibliotecas y herramientas (como React)
- Es como una "tienda de aplicaciones" para desarrolladores
- Gestiona las dependencias de nuestros proyectos

#### 💻 Instalación necesaria
**Paso 0:** Antes que nada, necesitas instalar Node.js:
1. Ve a [nodejs.org](https://nodejs.org)
2. Descarga la versión LTS (recomendada)
3. Instala siguiendo las instrucciones
4. Verifica en terminal con: `node --version` y `npm --version`

> 💡 **Nota:** Si ya tienes Node.js instalado, ¡perfecto! Puedes continuar.

### ⚡ Vite vs Create React App

**🚀 Vite (Recomendado - Moderno):**
- Súper rápido para desarrollo
- Mejor experiencia de desarrollador
- Hot Module Replacement instantáneo
- Construido para el futuro

**📦 Create React App (Tradicional):**
- Más establecido
- Configuración automática
- Bueno para principiantes

### 🎯 ¿Por qué elegimos Vite?
- Velocidad de desarrollo increíble
- Menos tiempo de espera
- Configuración más limpia
- Es el estándar moderno

### Paso 1: Creando proyecto con Vite
**¡Ahora sí!** Con Node.js y npm instalados, abrimos la terminal y escribimos:

```bash
# Crear nuevo proyecto React con Vite
npm create vite@latest mi-primera-app -- --template react

# Entrar a la carpeta del proyecto
cd mi-primera-app

# Instalar todas las dependencias necesarias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

> 🎯 **Explicación de comandos:**
> - `npm create vite@latest` - Crea un nuevo proyecto con Vite
> - `--template react` - Especifica que queremos una plantilla de React
> - `npm install` - Descarga todas las bibliotecas necesarias
> - `npm run dev` - Inicia nuestro servidor local para desarrollo

### 🎨 Estructura del proyecto Vite
```
mi-primera-app/
├── node_modules/    # 📚 Todas las bibliotecas instaladas con npm
├── public/          # 📁 Archivos estáticos (imágenes, iconos)
├── src/             # 💻 ¡Nuestro código fuente!
│   ├── App.jsx      # 🏠 Componente principal
│   ├── main.jsx     # 🚀 Punto de entrada de la aplicación
│   └── index.css    # 🎨 Estilos globales
├── index.html       # 📄 HTML base
├── package.json     # 📋 Lista de dependencias y scripts npm
└── vite.config.js   # ⚙️ Configuración de Vite
```

> 🔍 **Archivos importantes:**
> - **package.json**: Como una "receta" que lista todos los ingredientes (bibliotecas) que necesita nuestro proyecto
> - **node_modules**: La "despensa" donde npm guarda todas las bibliotecas descargadas
> - **src**: Nuestra "cocina" donde escribiremos todo nuestro código

## 🏃‍♀️ Actividad práctica 1: Explorando el proyecto
1. Abre la carpeta `src`
2. Encuentra `App.jsx` (¡nota la extensión .jsx!)
3. Observa el archivo `main.jsx`
4. Cambia el texto que aparece en pantalla

## 💡 JSX: La magia de React ✨

### 🤔 ¿Qué es JSX?
JSX (JavaScript XML) es una extensión de sintaxis que nos permite escribir HTML dentro de JavaScript:

```jsx
// ❌ JavaScript tradicional (complicado)
const elemento = React.createElement(
  'h1',
  { className: 'saludo' },
  '¡Hola Mundo!'
);

// ✅ JSX (¡súper fácil!)
const elemento = <h1 className="saludo">¡Hola Mundo!</h1>;
```

### 🎯 Características importantes de JSX

**1. 📦 Debe tener un elemento padre**
```jsx
// ❌ Incorrecto
return (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ Correcto - con div
return (
  <div>
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);

// ✅ Correcto - con Fragment
return (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
```

**2. 🔄 className en lugar de class**
```jsx
// ❌ HTML normal
<div class="mi-clase">Contenido</div>

// ✅ JSX
<div className="mi-clase">Contenido</div>
```

**3. 🧮 Expresiones JavaScript con {}**
```jsx
const nombre = "María";
const edad = 16;

return (
  <div>
    <h1>¡Hola {nombre}!</h1>
    <p>Tienes {edad} años</p>
    <p>El próximo año tendrás {edad + 1}</p>
  </div>
);
```

**4. 🏷️ Atributos en camelCase**
```jsx
// ❌ HTML
<button onclick="miFuncion()">Click</button>

// ✅ JSX
<button onClick={miFuncion}>Click</button>
```

## 🏃‍♀️ Actividad práctica 2: Modificando App.jsx
Vamos a personalizar nuestro componente principal:

**Paso 1:** Abre `src/App.jsx` y reemplaza el contenido con:
```jsx
function App() {
  const miNombre = "Tu nombre aquí";
  const miHobby = "Tu hobby favorito";
  const miEmoji = "🌟";

  return (
    <div className="App">
      <header>
        <h1>¡Hola! Soy {miNombre} {miEmoji}</h1>
        <p>Me encanta {miHobby}</p>
        <p>Esta es mi primera app en React</p>
      </header>
    </div>
  );
}

export default App;
```

**Paso 2:** Guarda y observa los cambios automáticos

**Paso 3:** Experimenta cambiando:
- Los valores de las variables
- Los emojis
- Agregando más información sobre ti

## 🎨 Agregando estilos
En `src/App.css`, puedes agregar:
```css
.App {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

header p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
```

## 🎉 Mini-proyecto: Tarjeta de presentación personalizada
Expande tu App.jsx para incluir:
- Tu edad (calculada automáticamente)
- Tus colores favoritos
- Una lista de tus hobbies
- Un contador simple

```jsx
function App() {
  const miNombre = "Tu nombre";
  const añoNacimiento = 2008; // Cambia por tu año
  const añoActual = new Date().getFullYear();
  const miEdad = añoActual - añoNacimiento;

  const misHobbies = ["Gaming", "Música", "Arte"];

  return (
    <div className="App">
      <header>
        <h1>¡Hola! Soy {miNombre} ✨</h1>
        <p>Tengo {miEdad} años</p>

        <h3>Mis hobbies:</h3>
        <ul>
          {misHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

        <p>¡Esta es mi primera app en React con Vite! 🚀</p>
      </header>
    </div>
  );
}
```

## 🤓 Repaso de conceptos clave

### 📚 Lo que aprendimos hoy:
- **Node.js** nos permite ejecutar JavaScript fuera del navegador
- **npm** es nuestro administrador de paquetes y herramientas
- **React es una biblioteca** (no framework) para crear UIs
- **Vite** es más rápido que Create React App para desarrollo
- **JSX** nos permite mezclar HTML con JavaScript de forma natural
- Los **componentes** son funciones que retornan JSX
- Las **expresiones JavaScript** van entre llaves {}

### 🔑 Conceptos importantes:
- **Node.js y npm** son fundamentales para desarrollo web moderno
- `package.json` gestiona nuestras dependencias
- `className` en lugar de `class`
- Elementos JSX necesitan un padre único
- Variables JavaScript se acceden con {}
- Hot Module Replacement con Vite es súper rápido

## 🏠 Tarea para la próxima clase
1. **Asegúrate de tener Node.js instalado** y funcionando
2. **Personaliza tu tarjeta** con más información
3. **Experimenta con estilos CSS** en App.css
4. **Agrega más expresiones JavaScript** (cálculos, fechas)
5. **Investiga** otros proyectos hechos con React
6. **Practica comandos npm** básicos en terminal

## 👋 Pregunta de cierre
¿Qué fue lo que más te gustó de trabajar con React y JSX?

## 🎯 Reflexión final
- ¿Qué diferencias notaste entre escribir HTML normal y JSX?
- ¿Qué te gustaría crear en las próximas sesiones?
- ¿Cómo te sentiste trabajando con Vite?

## 🔮 Próxima sesión:
Aprenderemos sobre **Props** - cómo pasar información entre componentes para hacer nuestras apps más dinámicas e interactivas.
