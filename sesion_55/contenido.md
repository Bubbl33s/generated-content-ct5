# Hooks Personalizados 🎣

## Bienvenida y Check-in (10 min)

### 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Apoyarnos mutuamente

## 🎯 Objetivos de la sesión
- Comprender qué son los hooks personalizados y su propósito
- Aprender a crear hooks reutilizables para lógica común
- Identificar cuándo es apropiado usar un hook personalizado
- Implementar hooks para fetch de datos, localStorage y formularios
- Aplicar buenas prácticas en el diseño de hooks

### 💭 Pregunta inicial
Si pudieras crear tu propio superpoder para programar, ¿cuál sería?

---

## Introducción a Hooks Personalizados (20 min)

### ¿Qué son?
- Funciones que nos permiten reutilizar lógica entre componentes
- Empiezan con la palabra 'use'
- Nos ayudan a mantener nuestro código DRY (Don't Repeat Yourself)

### Ejemplo de la vida real 🌟
Imagina que tienes varias recetas de cocina. En lugar de escribir los pasos comunes una y otra vez, los pones en una "receta base" que puedes reutilizar.

---

## Nuestro Primer Hook Personalizado (30 min)

### useInput - Un hook para formularios
Vamos a crear un hook que nos ayude a manejar inputs de forma más sencilla.

```jsx
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};
```

### 💡 Actividad práctica (15 min)
Creemos un formulario simple usando nuestro nuevo hook:

```jsx
function Formulario() {
  const [nombre, handleNombre] = useInput('');
  const [email, handleEmail] = useInput('');

  return (
    <form>
      <input value={nombre} onChange={handleNombre} placeholder="Tu nombre" />
      <input value={email} onChange={handleEmail} placeholder="Tu email" />
    </form>
  );
}
```

---

## Hook para Tema Oscuro (30 min)

### useDarkMode
Creemos un hook para manejar el tema oscuro de nuestra aplicación:

```jsx
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return [isDark, toggleDarkMode];
};
```

### 🌗 Actividad práctica (20 min)
Implementemos un botón para cambiar entre tema claro y oscuro:

```jsx
function TemaToggle() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    </button>
  );
}
```

---

## Hook para Contador (30 min)

### useCounter
Creemos un hook para manejar contadores:

```jsx
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return [count, increment, decrement, reset];
};
```

### 🔢 Actividad práctica (20 min)
Creemos un componente que use nuestro hook:

```jsx
function Contador() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

---

## Reglas y Buenas Prácticas (20 min)

### 📌 Reglas importantes
1. Siempre empezar el nombre con 'use'
2. Solo llamar hooks en componentes o en otros hooks
3. Mantener la lógica simple y reutilizable

### 🎯 Tips
- Crear hooks para lógica común
- Documentar bien el propósito del hook
- Mantener una única responsabilidad

---

## Proyecto Práctico (30 min)

### 🎨 Creemos un hook para manejar colores favoritos

```jsx
const useColorFavorito = () => {
  const [color, setColor] = useState('#ffffff');
  const [nombreColor, setNombreColor] = useState('');

  const cambiarColor = (nuevoColor, nombre) => {
    setColor(nuevoColor);
    setNombreColor(nombre);
  };

  return [color, nombreColor, cambiarColor];
};
```

### 🌈 Actividad final
Crea un selector de colores favoritos usando el hook:

```jsx
function SelectorColores() {
  const [color, nombreColor, cambiarColor] = useColorFavorito();

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <h3>Mi color favorito es: {nombreColor}</h3>
      <button onClick={() => cambiarColor('#ff69b4', 'Rosa')}>Rosa</button>
      <button onClick={() => cambiarColor('#87ceeb', 'Celeste')}>Celeste</button>
      <button onClick={() => cambiarColor('#98fb98', 'Verde menta')}>Verde menta</button>
    </div>
  );
}
```

---

## Cierre y Reflexión (10 min)

### 💭 Preguntas de reflexión
- ¿Qué ventajas viste al usar hooks personalizados?
- ¿En qué otros casos crees que podrían ser útiles?
- ¿Qué hook personalizado te gustaría crear?

### 🌟 Tarea
Piensa en una funcionalidad que se repita en tu proyecto y crea un hook personalizado para ella.

### 👋 ¡Hasta la próxima clase!
Recuerda: Los hooks personalizados son como tus propios superpoderes en React. ¡Úsalos sabiamente! 💪
