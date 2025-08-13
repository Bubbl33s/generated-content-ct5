# Sesión 44: React Hooks y useState - Haciendo nuestros componentes interactivos

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Preguntar cuando tengas dudas
- Ayudar a tus compañeras

## 🌈 Inicio de sesión
¿Cómo te sientes hoy? Comparte un emoji que represente tu estado de ánimo

## ⚡ Repaso rápido
- ¿Qué es un componente en React?
- ¿Para qué sirven las props?
- ¿Cómo usamos la destructuración con props?

## 🎯 Lo que haremos hoy
- Introducción a **React Hooks**
- Entender qué es el **estado** en React
- Aprender **useState** para manejar datos que cambian
- Practicar con **eventos** para hacer componentes interactivos
- Recrear el contador que viene por defecto en Vite

## 🪝 Introducción a React Hooks

### ¿Qué son los Hooks?
Los Hooks son **funciones especiales** que nos permiten "engancharnos" a características de React:

- Son funciones que **empiezan con "use"** (useState, useEffect, etc.)
- Nos permiten usar **estado y otras características** en componentes funcionales
- Fueron introducidos en React 16.8 para hacer el código más simple
- **Solo funcionan dentro de componentes** de React

### 📋 Reglas importantes de los Hooks:
1. **Solo llama Hooks en el nivel superior** (no dentro de loops, condiciones o funciones anidadas)
2. **Solo llama Hooks desde componentes** de React o custom hooks
3. **Siempre usa el prefijo "use"** para crear tus propios hooks

### 🔗 Hooks más comunes:
- **useState**: Para manejar estado local
- **useEffect**: Para efectos secundarios (próxima clase)
- **useContext**: Para compartir datos globalmente
- **useReducer**: Para estado complejo

## 🎪 Estado en React

### ¿Qué es el estado?
El estado es como la **memoria de nuestro componente**:
- Almacena **datos que pueden cambiar** con el tiempo
- Al cambiar el estado, **el componente se re-renderiza automáticamente**
- Es lo que hace que nuestras apps sean **interactivas y dinámicas**

### 🌟 Ejemplo del mundo real
Piensa en aplicaciones que usas:
- **Instagram**: Contador de likes, botón seguir/no seguir
- **Netflix**: Lista de favoritos, progreso de reproducción
- **WhatsApp**: Estado de mensaje (enviado, entregado, leído)
- **TikTok**: Botón de like, comentarios, reproducciones

Todos estos son ejemplos de **estados que cambian** según nuestras acciones.

## 🪝 useState Hook - Nuestro primer Hook

### ¿Qué es useState?
```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
```

**useState** es el Hook más básico y útil:
- Es una **función especial de React** que debemos importar
- Nos permite **agregar estado** a componentes funcionales
- **Devuelve un array** con exactamente 2 elementos:
  1. **El valor actual** del estado (`count`)
  2. **Una función para actualizar** ese valor (`setCount`)

### 🔧 Sintaxis de useState:
```jsx
const [nombreVariable, setNombreVariable] = useState(valorInicial);
```

### 📝 Ejemplos de diferentes tipos de estado:
```jsx
// Número
const [edad, setEdad] = useState(18);

// String
const [nombre, setNombre] = useState("María");

// Boolean
const [activo, setActivo] = useState(false);

// Array
const [hobbies, setHobbies] = useState(["Gaming", "Música"]);

// Objeto
const [usuario, setUsuario] = useState({ nombre: "Ana", edad: 17 });
```

## 💪 ¡Practiquemos! - El Contador de Vite

¿Recuerdan el contador que aparece cuando creamos un proyecto nuevo con Vite? ¡Vamos a recrearlo y entenderlo paso a paso!

### 🎯 El famoso contador de Vite
Cuando creamos un proyecto con `npm create vite`, viene este contador por defecto:

```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
```

### 🔍 Analicemos el código línea por línea:

1. **`import { useState } from 'react';`**
   - Importamos el Hook useState desde React

2. **`const [count, setCount] = useState(0);`**
   - Creamos una variable de estado llamada `count` con valor inicial 0
   - `setCount` es la función para actualizar ese valor

3. **`onClick={() => setCount((count) => count + 1)}`**
   - Al hacer click, ejecutamos una función
   - Esa función llama a `setCount`
   - Le pasamos una función que toma el valor actual y le suma 1

4. **`count is {count}`**
   - Mostramos el valor actual de `count` en el botón

### 💡 Versión simplificada para entender mejor:
```jsx
function Contador() {
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <h2>Contador: {numero}</h2>
      <button onClick={aumentar}>
        Click para aumentar
      </button>
    </div>
  );
}
```

## 🎮 Eventos en React

### ¿Qué son los eventos?
Los eventos son **acciones que ocurren** en nuestros componentes:
- **Click** en un botón
- **Escribir** en un input
- **Pasar el mouse** por encima de un elemento
- **Enviar** un formulario

### 🎯 Eventos más comunes:
- **onClick**: cuando hacemos click
- **onChange**: cuando cambia el valor de un input
- **onMouseOver**: cuando el mouse pasa por encima
- **onSubmit**: cuando enviamos un formulario

### 📝 Sintaxis de eventos en React:
```jsx
// Función separada (recomendado)
const manejarClick = () => {
  console.log("¡Me hicieron click!");
};

<button onClick={manejarClick}>Click aquí</button>

// Función inline (para casos simples)
<button onClick={() => alert("¡Hola!")}>
  Saludo
</button>
```

## 🏃‍♀️ Actividades prácticas

### 🎯 Actividad 1: Contador completo
Mejora el contador de Vite agregando:
- Botón para **disminuir** (-1)
- Botón para **reset** (volver a 0)
- Botón para **incrementar de 5 en 5**

```jsx
function ContadorCompleto() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### 🎯 Actividad 2: Botón Me Gusta
Crea un componente que:
- Muestre un corazón que cambie entre 🤍 y ❤️
- Mantenga un contador de likes

```jsx
function BotonMeGusta() {
  const [likes, setLikes] = useState(0);
  const [gustado, setGustado] = useState(false);

  const manejarClick = () => {
    if (gustado) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setGustado(!gustado);
  };

  return (
    <button onClick={manejarClick}>
      {gustado ? '❤️' : '🤍'} {likes}
    </button>
  );
}
```

### 🎯 Actividad 3: Mood Tracker
Crea un componente que rastree tu estado de ánimo:

```jsx
function MoodTracker() {
  const [mood, setMood] = useState("😐");

  return (
    <div>
      <h2>Mi estado de ánimo: {mood}</h2>
      <button onClick={() => setMood("😊")}>Feliz</button>
      <button onClick={() => setMood("😌")}>Tranquila</button>
      <button onClick={() => setMood("😴")}>Cansada</button>
      <button onClick={() => setMood("🤔")}>Pensativa</button>
    </div>
  );
}
```

## � Eventos en formularios e inputs

Los formularios son una parte fundamental de las aplicaciones web. Con React y useState, podemos manejar fácilmente los datos de formularios y crear experiencias interactivas.

### 🎯 **Eventos más comunes en formularios:**

#### **onChange** - Cuando el usuario escribe o cambia el valor
```jsx
function FormularioBasico() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h3>Registrate:</h3>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Hola {nombre}! Tu email es: {email}</p>
    </div>
  );
}
```

#### **onSubmit** - Cuando se envía el formulario
```jsx
function FormularioConEnvio() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setMensaje(`¡Hola ${nombre}! Formulario enviado correctamente.`);
    setNombre(''); // Limpiar el campo
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h3>Envía tu nombre:</h3>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>

      {mensaje && <p style={{color: 'green'}}>{mensaje}</p>}
    </form>
  );
}
```

#### **onFocus y onBlur** - Cuando el input recibe o pierde el foco
```jsx
function InputConFoco() {
  const [texto, setTexto] = useState('');
  const [enfocado, setEnfocado] = useState(false);
  const [tocado, setTocado] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Haz click aquí"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onFocus={() => setEnfocado(true)}
        onBlur={() => {
          setEnfocado(false);
          setTocado(true);
        }}
        style={{
          border: enfocado ? '2px solid blue' : '1px solid gray',
          outline: 'none'
        }}
      />

      <div>
        <p>Enfocado: {enfocado ? '✅ Sí' : '❌ No'}</p>
        <p>Ya tocaste el input: {tocado ? '✅ Sí' : '❌ No'}</p>
        <p>Texto: {texto}</p>
      </div>
    </div>
  );
}
```

### 🎮 **Ejemplos prácticos con diferentes tipos de inputs:**

#### **Checkbox y Radio buttons**
```jsx
function FormularioCompleto() {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    color: '',
    hobbies: [],
    newsletter: false
  });

  const manejarCheckbox = (hobby) => {
    if (datos.hobbies.includes(hobby)) {
      // Quitar hobby si ya está seleccionado
      setDatos({
        ...datos,
        hobbies: datos.hobbies.filter(h => h !== hobby)
      });
    } else {
      // Agregar hobby si no está seleccionado
      setDatos({
        ...datos,
        hobbies: [...datos.hobbies, hobby]
      });
    }
  };

  return (
    <div>
      <h3>Formulario completo</h3>

      {/* Input de texto */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={datos.nombre}
          onChange={(e) => setDatos({...datos, nombre: e.target.value})}
        />
      </div>

      {/* Input numérico */}
      <div>
        <label>Edad:</label>
        <input
          type="number"
          value={datos.edad}
          onChange={(e) => setDatos({...datos, edad: e.target.value})}
        />
      </div>

      {/* Radio buttons */}
      <div>
        <label>Color favorito:</label>
        <label>
          <input
            type="radio"
            name="color"
            value="azul"
            checked={datos.color === 'azul'}
            onChange={(e) => setDatos({...datos, color: e.target.value})}
          />
          Azul
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="rojo"
            checked={datos.color === 'rojo'}
            onChange={(e) => setDatos({...datos, color: e.target.value})}
          />
          Rojo
        </label>
      </div>

      {/* Checkboxes */}
      <div>
        <label>Hobbies:</label>
        <label>
          <input
            type="checkbox"
            checked={datos.hobbies.includes('lectura')}
            onChange={() => manejarCheckbox('lectura')}
          />
          Lectura
        </label>
        <label>
          <input
            type="checkbox"
            checked={datos.hobbies.includes('gaming')}
            onChange={() => manejarCheckbox('gaming')}
          />
          Gaming
        </label>
        <label>
          <input
            type="checkbox"
            checked={datos.hobbies.includes('música')}
            onChange={() => manejarCheckbox('música')}
          />
          Música
        </label>
      </div>

      {/* Checkbox simple */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={datos.newsletter}
            onChange={(e) => setDatos({...datos, newsletter: e.target.checked})}
          />
          Quiero recibir el newsletter
        </label>
      </div>

      {/* Mostrar datos */}
      <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0'}}>
        <h4>Vista previa:</h4>
        <p><strong>Nombre:</strong> {datos.nombre}</p>
        <p><strong>Edad:</strong> {datos.edad}</p>
        <p><strong>Color favorito:</strong> {datos.color}</p>
        <p><strong>Hobbies:</strong> {datos.hobbies.join(', ')}</p>
        <p><strong>Newsletter:</strong> {datos.newsletter ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
}
```

#### **Select y Textarea**
```jsx
function FormularioAvanzado() {
  const [datos, setDatos] = useState({
    pais: '',
    comentarios: '',
    prioridad: 'media'
  });

  return (
    <div>
      <h3>Formulario avanzado</h3>

      {/* Select */}
      <div>
        <label>País:</label>
        <select
          value={datos.pais}
          onChange={(e) => setDatos({...datos, pais: e.target.value})}
        >
          <option value="">Selecciona un país</option>
          <option value="mexico">México</option>
          <option value="colombia">Colombia</option>
          <option value="argentina">Argentina</option>
          <option value="chile">Chile</option>
        </select>
      </div>

      {/* Textarea */}
      <div>
        <label>Comentarios:</label>
        <textarea
          value={datos.comentarios}
          onChange={(e) => setDatos({...datos, comentarios: e.target.value})}
          placeholder="Escribe tus comentarios aquí..."
          rows="4"
        />
      </div>

      {/* Select con opciones múltiples */}
      <div>
        <label>Prioridad:</label>
        <select
          value={datos.prioridad}
          onChange={(e) => setDatos({...datos, prioridad: e.target.value})}
        >
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      {/* Resumen */}
      <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
        <h4>Resumen:</h4>
        <p>País: {datos.pais || 'No seleccionado'}</p>
        <p>Prioridad: {datos.prioridad}</p>
        <p>Comentarios ({datos.comentarios.length} caracteres): {datos.comentarios}</p>
      </div>
    </div>
  );
}
```

### 🛠️ **Validación básica en tiempo real**
```jsx
function FormularioConValidacion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validaciones
  const emailValido = email.includes('@') && email.includes('.');
  const passwordValido = password.length >= 6;
  const passwordsCoinciden = password === confirmPassword && password !== '';

  return (
    <div>
      <h3>Registro con validación</h3>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: email === '' ? '1px solid gray' :
                   emailValido ? '2px solid green' : '2px solid red'
          }}
        />
        {email !== '' && !emailValido && (
          <p style={{color: 'red', fontSize: '12px'}}>Email no válido</p>
        )}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: password === '' ? '1px solid gray' :
                   passwordValido ? '2px solid green' : '2px solid red'
          }}
        />
        {password !== '' && !passwordValido && (
          <p style={{color: 'red', fontSize: '12px'}}>Mínimo 6 caracteres</p>
        )}
      </div>

      <div>
        <label>Confirmar contraseña:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            border: confirmPassword === '' ? '1px solid gray' :
                   passwordsCoinciden ? '2px solid green' : '2px solid red'
          }}
        />
        {confirmPassword !== '' && !passwordsCoinciden && (
          <p style={{color: 'red', fontSize: '12px'}}>Las contraseñas no coinciden</p>
        )}
      </div>

      <button
        disabled={!emailValido || !passwordValido || !passwordsCoinciden}
        style={{
          backgroundColor: emailValido && passwordValido && passwordsCoinciden ?
                          'green' : 'gray',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: emailValido && passwordValido && passwordsCoinciden ?
                  'pointer' : 'not-allowed'
        }}
      >
        Registrarse
      </button>
    </div>
  );
}
```

### 💡 **Tips importantes para formularios:**

1. **Siempre usa `value` y `onChange`** para inputs controlados
2. **Usa `e.preventDefault()`** en onSubmit para evitar recarga de página
3. **`e.target.value`** para inputs de texto
4. **`e.target.checked`** para checkboxes
5. **Valida en tiempo real** para mejor experiencia de usuario

### 🎯 **Patrón útil: Manejo múltiple de inputs**
```jsx
function FormularioEficiente() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });

  // Función genérica para manejar cambios
  const manejarCambio = (campo) => (e) => {
    setDatos({
      ...datos,
      [campo]: e.target.value
    });
  };

  return (
    <div>
      <input
        placeholder="Nombre"
        value={datos.nombre}
        onChange={manejarCambio('nombre')}
      />
      <input
        placeholder="Email"
        value={datos.email}
        onChange={manejarCambio('email')}
      />
      <input
        placeholder="Teléfono"
        value={datos.telefono}
        onChange={manejarCambio('telefono')}
      />

      <p>Datos: {JSON.stringify(datos, null, 2)}</p>
    </div>
  );
}

Vamos a crear una tarjeta estilo Instagram que combine todo lo aprendido:

```jsx
function TarjetaSocial() {
  const [likes, setLikes] = useState(245);
  const [gustado, setGustado] = useState(false);
  const [guardado, setGuardado] = useState(false);

  const manejarLike = () => {
    if (gustado) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setGustado(!gustado);
  };

  return (
    <div className="tarjeta-social">
      <img src="https://picsum.photos/300/200" alt="Post" />

      <div className="acciones">
        <button onClick={manejarLike}>
          {gustado ? '❤️' : '🤍'} {likes}
        </button>

        <button onClick={() => setGuardado(!guardado)}>
          {guardado ? '🔖' : '📌'}
          {guardado ? 'Guardado' : 'Guardar'}
        </button>
      </div>

      <p><strong>mi_usuario</strong> ¡Aprendiendo React con useState! 🚀</p>
    </div>
  );
}
```

### 🎨 CSS sugerido para la tarjeta:
```css
.tarjeta-social {
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
}

.tarjeta-social img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.acciones {
  padding: 10px;
  display: flex;
  gap: 10px;
}

.acciones button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}
```

## 🤓 Repaso de conceptos clave

### 📚 Lo que aprendimos hoy:
- **React Hooks** son funciones especiales que empiezan con "use"
- **useState** es nuestro primer Hook para manejar estado
- **Estado** es la memoria que permite que los componentes cambien
- **Eventos** nos permiten responder a acciones del usuario
- El **contador de Vite** es un ejemplo perfecto de useState en acción

### 🔑 Conceptos importantes:
- **Solo usar Hooks en el nivel superior** del componente
- **useState devuelve un array** con [valor, funcionParaActualizar]
- **Al cambiar el estado, el componente se re-renderiza** automáticamente
- **Los eventos en React** usan camelCase (onClick, onChange)

### 🎯 Pattern importante:
```jsx
// ✅ Patrón correcto
const [estado, setEstado] = useState(valorInicial);

// ✅ Actualizar estado
setEstado(nuevoValor);

// ✅ Evento con función
<button onClick={() => setEstado(nuevoValor)}>
```

## 💭 Reflexión final

### Comparte con la clase:
- ¿Qué diferencia notaste entre usar props y useState?
- ¿Cómo crees que useState hace que las apps sean más interactivas?
- ¿Qué componentes de tu vida diaria tienen "estado"?

## 🏠 Para la próxima clase
- **Practica** creando diferentes contadores
- **Experimenta** con diferentes tipos de estado (string, boolean, array)
- **Piensa** en qué datos de tu app necesitarían cambiar con el tiempo
- **Identifica** eventos que podrías necesitar en tus componentes

## 🔮 Próxima sesión:
Aprenderemos sobre **useEffect** - cómo ejecutar código cuando algo cambia en nuestro componente, perfecto para cargar datos y efectos secundarios.

¡Excelente trabajo! 🌟
Recuerda: **useState** es la base para hacer componentes interactivos. ¡Ahora tus apps pueden reaccionar y cambiar!
