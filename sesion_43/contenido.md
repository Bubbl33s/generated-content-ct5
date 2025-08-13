# Sesión 43: Componentes base y props en React

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Preguntar cuando tengas dudas
- Ayudar a tus compañeras

## 🌟 Inicio de sesión
Si pudieras elegir un superpoder, ¿cuál sería y por qué?

## ⚡ Repaso rápido
¿Qué aprendimos en la clase anterior?
- **Node.js y npm** son fundamentales para desarrollo web
- **React es una biblioteca** (no framework) para crear interfaces
- **Vite** nos permite crear proyectos React súper rápido
- **JSX** combina HTML con JavaScript de forma natural
- Trabajamos directamente en **App.jsx** para personalizar nuestra app

## 🎯 Lo que haremos hoy
- Entender qué son los **componentes** y cómo crearlos
- Aprender sobre **props** para pasar datos entre componentes
- Practicar la **sintaxis de componentes** en React
- Dominar la **destructuración** para un código más limpio
- Crear una mini red social con múltiples componentes

## 🧩 ¿Qué son los componentes?

Los componentes son como piezas de LEGO que podemos reutilizar:
- Son **bloques de código independientes** y reutilizables
- Pueden contener HTML, CSS y JavaScript
- Tienen nombres que **empiezan con mayúscula**
- Nos permiten dividir la UI en partes más pequeñas y manejables

### 🏗️ Sintaxis de un componente
Un componente en React sigue esta estructura básica:

```jsx
// 1. Declaración de la función (nombre en PascalCase)
function MiComponente() {

  // 2. Lógica JavaScript (opcional)
  const mensaje = "¡Hola desde mi componente!";

  // 3. Return con JSX
  return (
    <div>
      <h1>{mensaje}</h1>
      <p>Este es mi primer componente</p>
    </div>
  );
}

// 4. Export para poder usarlo en otros archivos
export default MiComponente;
```

### 📋 Reglas importantes:
1. **Nombre**: Siempre empezar con mayúscula (PascalCase)
2. **Return**: Debe retornar JSX
3. **Elemento padre**: El JSX debe tener un elemento contenedor
4. **Export**: Para poder usar el componente en otros archivos

## 🎨 Creando nuestro primer componente

```jsx
function Saludo() {
  return (
    <div>
      <h1>¡Hola, chicas!</h1>
      <p>Este es mi primer componente React</p>
    </div>
  );
}

export default Saludo;
```

**Para usarlo en App.jsx:**
```jsx
import Saludo from './Saludo';

function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}
```

## 👩‍💻 Actividad práctica 1: Mi primer componente
Crea un componente llamado `Tarjeta` que muestre:
- Tu nombre
- Tu serie favorita
- Tu comida favorita

**Pasos:**
1. Crea archivo `Tarjeta.jsx` en la carpeta `src`
2. Escribe tu componente siguiendo la sintaxis
3. Impórtalo y úsalo en `App.jsx`

## 🎁 ¿Qué son las props?

Las props (properties) son como "regalos" que pasamos a los componentes:
- Son **datos que enviamos** de un componente padre a un hijo
- Nos permiten **reutilizar componentes** con información diferente
- Son de **solo lectura** (no podemos modificarlas dentro del componente)
- Hacen nuestros componentes **dinámicos y flexibles**

### 🔍 Usando props (forma básica)

```jsx
// Componente que recibe props
function Saludo(props) {
  return (
    <div>
      <h1>¡Hola, {props.nombre}!</h1>
      <p>Tienes {props.edad} años</p>
    </div>
  );
}

// Cómo usar el componente pasando props
function App() {
  return (
    <div>
      <Saludo nombre="Ana" edad={17} />
      <Saludo nombre="María" edad={16} />
      <Saludo nombre="Sofía" edad={18} />
    </div>
  );
}
```

## 💝 Actividad práctica 2: Tarjeta con props
Modifica tu componente `Tarjeta` para recibir props:
- nombre
- serie
- comida

```jsx
function Tarjeta(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Serie favorita: {props.serie}</p>
      <p>Comida favorita: {props.comida}</p>
    </div>
  );
}
```

## 🎯 Destructuración de props (forma elegante)

La destructuración nos permite escribir código más limpio y legible:

### ❌ Sin destructuración (repetitivo):
```jsx
function Tarjeta(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>Serie favorita: {props.serie}</p>
      <p>Comida favorita: {props.comida}</p>
      <p>Edad: {props.edad}</p>
    </div>
  );
}
```

### ✅ Con destructuración (más limpio):
```jsx
function Tarjeta({ nombre, serie, comida, edad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Serie favorita: {serie}</p>
      <p>Comida favorita: {comida}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}
```

### 🔧 ¿Qué es la destructuración?
- Es una forma de **extraer valores** de objetos o arrays
- Nos permite **"desempacar"** las props directamente en variables
- Hace el código **más legible** y **menos repetitivo**
- Es una característica de **JavaScript moderno** (ES6+)

### 🌟 Ejemplo con diferentes tipos de datos:
```jsx
function PerfilUsuario({ nombre, edad, hobbies, activo }) {
  return (
    <div>
      <h2>{nombre}</h2> {/* String */}
      <p>Edad: {edad}</p> {/* Number */}
      <p>Hobbies: {hobbies.join(', ')}</p> {/* Array */}
      <p>Estado: {activo ? 'En línea' : 'Desconectado'}</p> {/* Boolean */}
    </div>
  );
}

// Uso:
<PerfilUsuario
  nombre="Ana"
  edad={17}
  hobbies={['Gaming', 'Música', 'Arte']}
  activo={true}
/>
```

## 🦸‍♀️ Actividad práctica 3: Tarjeta de Personaje

Crea un componente `TarjetaPersonaje` usando destructuración que reciba:
- nombre
- poder
- imagen
- descripcion

```jsx
function TarjetaPersonaje({ nombre, poder, imagen, descripcion }) {
  return (
    <div className="tarjeta-personaje">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p><strong>Poder:</strong> {poder}</p>
      <p>{descripcion}</p>
    </div>
  );
}
```

Úsalo para mostrar tu personaje favorito de serie, película o videojuego.

## 🛡️ Props por defecto

Podemos dar valores por defecto a las props por si no se pasan:

```jsx
function Saludo({ nombre = "Invitada", emoji = "👋" }) {
  return <h1>{emoji} ¡Hola, {nombre}!</h1>;
}

// Si no pasamos props:
<Saludo /> // Resultado: 👋 ¡Hola, Invitada!

// Si pasamos algunas props:
<Saludo nombre="María" /> // Resultado: 👋 ¡Hola, María!
```

## 📱 Reto final: Mini Red Social

Crea componentes para una mini red social usando todo lo aprendido:

### 1. Componente `Post`
```jsx
function Post({ titulo, contenido, autor, fecha }) {
  return (
    <div className="post">
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <div className="post-info">
        <span>Por: {autor}</span>
        <span>{fecha}</span>
      </div>
    </div>
  );
}
```

### 2. Componente `Comentario`
```jsx
function Comentario({ texto, usuario, tiempo = "Hace un momento" }) {
  return (
    <div className="comentario">
      <strong>{usuario}:</strong>
      <p>{texto}</p>
      <small>{tiempo}</small>
    </div>
  );
}
```

### 3. Componente `MeGusta`
```jsx
function MeGusta({ cantidad = 0, activo = false }) {
  return (
    <button className={`me-gusta ${activo ? 'activo' : ''}`}>
      ❤️ {cantidad} Me gusta
    </button>
  );
}
```

### 4. Úsalos en App.jsx:
```jsx
function App() {
  return (
    <div>
      <Post
        titulo="Mi primer post en React"
        contenido="¡Estoy aprendiendo a crear componentes!"
        autor="Ana"
        fecha="Hoy"
      />
      <MeGusta cantidad={5} activo={true} />
      <Comentario
        usuario="María"
        texto="¡Muy bueno!"
      />
    </div>
  );
}
```

## 🤓 Repaso de conceptos clave

### 📚 Lo que aprendimos hoy:
- **Componentes** son bloques reutilizables de código
- **Sintaxis de componentes**: función con PascalCase que retorna JSX
- **Props** permiten pasar datos entre componentes
- **Destructuración** hace el código más limpio y legible
- **Props por defecto** evitan errores cuando no se pasan valores

### 🔑 Conceptos importantes:
- Nombres de componentes siempre empiezan con **mayúscula**
- Props son **solo lectura** dentro del componente
- **Destructuración** es una característica de JavaScript moderno
- **Export/Import** para usar componentes en otros archivos

## 💭 Reflexión final
- ¿Qué fue lo más interesante que aprendiste hoy?
- ¿Cómo la destructuración hace el código más fácil de leer?
- ¿Qué componentes te gustaría crear para tu proyecto?

## 🏠 Para la próxima clase
- **Practica** creando más componentes con diferentes props
- **Piensa** en cómo dividir una página web completa en componentes
- **Experimenta** con diferentes tipos de datos en las props
- **Identifica** qué props necesitarías para cada componente

## 🔮 Próxima sesión:
Aprenderemos sobre **Estado (useState)** - cómo hacer que nuestros componentes sean interactivos y cambien en respuesta a las acciones del usuario.

¡Excelente trabajo! 🌟
