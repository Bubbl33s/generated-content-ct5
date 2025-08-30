# Render Condicional y Optimización 🚀

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Ayudarnos entre todas

## 🎯 Objetivos de la sesión
- Dominar el render condicional en React usando diferentes técnicas
- Aplicar operador ternario y operador && efectivamente
- Implementar técnicas de optimización de performance
- Usar React.memo para evitar re-renders innecesarios
- Crear interfaces dinámicas que respondan a diferentes estados

## 🎯 Pregunta inicial
¿Alguna vez has jugado "Si esto... entonces aquello"? Por ejemplo:
- Si llueve ➡️ llevo paraguas
- Si hace frío ➡️ me pongo abrigo
- Si tengo hambre ➡️ como algo

¡Así funciona el render condicional! 😊


## 🧠 Recordatorio: Expresiones vs Sentencias en React

En React, **solo puedes usar expresiones** dentro del JSX, no sentencias completas.

- **Sentencia:** Una instrucción completa, como un `if`, `for`, `while`, etc. (no devuelve valor)
- **Expresión:** Algo que devuelve un valor, como `2 + 2`, `nombre === 'Ana'`, o una llamada a función.

Por eso, dentro de las llaves `{}` en JSX, solo puedes poner expresiones:
```jsx
// Correcto:
<h1>{2 + 2}</h1>
<p>{usuario ? 'Hola' : 'Adiós'}</p>

// Incorrecto:
<h1>{if (cond) { ... }}</h1> // ❌
```

Esto es clave para entender el **operador ternario** en React.

---

## 💡 Render Condicional
Es mostrar diferentes elementos según ciertas condiciones.

### Ejemplo con if (fuera del JSX):
```jsx
function Saludo({ estaLogueado }) {
  if (estaLogueado) {
    return <h1>¡Bienvenida de nuevo! 👋</h1>
  }
  return <h1>Por favor inicia sesión</h1>
}
```

Pero dentro del JSX, usamos **expresiones** como el operador ternario:
```jsx
<h1>{estaLogueado ? '¡Bienvenida de nuevo! 👋' : 'Por favor inicia sesión'}</h1>
```

## 🎮 Actividad 1: Mi primer render condicional
Creemos un componente que muestre diferentes mensajes según la hora del día:
- Mañana (6-12): "¡Buenos días!"
- Tarde (12-18): "¡Buenas tardes!"
- Noche (18-6): "¡Buenas noches!"

## 🎯 Operador Ternario
Una forma más corta de escribir condiciones:
```jsx
condición ? valor_si_verdadero : valor_si_falso
```

### Ejemplo:
```jsx
function BotonLike({ meGusta }) {
  return (
    <button>
      {meGusta ? "❤️" : "🤍"}
    </button>
  )
}
```

## 🎮 Actividad 2: Modo claro/oscuro
Usemos el operador ternario para crear un botón que cambie entre:
- Modo claro: "☀️ Cambiar a oscuro"
- Modo oscuro: "🌙 Cambiar a claro"

## 🌟 Operador &&
Para mostrar algo solo si una condición es verdadera:
```jsx
{condicion && <ElementoAMostrar />}
```

### Ejemplo:
```jsx
function Notificacion({ tienesMensajes }) {
  return (
    <div>
      {tienesMensajes && <span>📬 ¡Tienes mensajes nuevos!</span>}
    </div>
  )
}
```

## 🎮 Actividad 3: Alerta de notificaciones
Creemos un componente que muestre un 🔔 solo cuando hay notificaciones sin leer

## 🚀 Optimización

### Tips para optimizar:
1. Evitar re-renders innecesarios
2. Usar React.memo() para componentes que reciben las mismas props
3. Mantener el estado lo más simple posible

### Ejemplo de React.memo():
```jsx
const TarjetaUsuario = React.memo(function TarjetaUsuario({ nombre }) {
  return <div>{nombre}</div>
})
```

## 🎮 Actividad Final: Mini Red Social
Creemos una interfaz que combine todo lo aprendido:
- Mostrar/ocultar likes
- Cambiar entre modo claro/oscuro
- Mostrar notificaciones cuando existan

## 🌈 Repaso
- ¿Cuándo usar if vs ternario vs &&?
- ¿Por qué es importante optimizar?
- ¿Qué aprendimos hoy?

## 🏡 Tarea
Mejora tu proyecto personal aplicando:
1. Al menos un render condicional
2. Una optimización con React.memo()
3. ¡Sé creativa! 🎨

## 👋 ¡Hasta la próxima clase!
Recuerda: La práctica hace la maestra 💪
