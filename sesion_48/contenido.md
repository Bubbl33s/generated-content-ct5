# Render Dinámico con .map()
Sesión 48

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Ayudarnos entre todas

## 🌟 Para comenzar...
¿Cuál es tu serie favorita y por qué?

## 🎯 Objetivos de la sesión
- Comprender el concepto de render dinámico
- Dominar el uso del método .map() en React
- Crear listas de elementos de forma eficiente

## 📝 ¿Qué es el render dinámico?
Es la capacidad de mostrar elementos en nuestra interfaz **basándonos en datos** que pueden cambiar. En lugar de escribir cada elemento manualmente, React los genera automáticamente.

### 🌟 ¿Por qué es importante?
- **Eficiencia**: No escribimos código repetitivo
- **Dinamismo**: El contenido se adapta a los datos
- **Escalabilidad**: Funciona con 5 o 5000 elementos

Por ejemplo:
- Lista de productos en una tienda
- Comentarios en una publicación
- Mensajes en un chat
- Posts en redes sociales

## 🔄 Método .map()
Es un método de arrays que nos permite crear **listas dinámicas** en React:
1. **Recorre** un array elemento por elemento
2. **Transforma** cada elemento en JSX
3. **Devuelve** un nuevo array con los componentes

### 💡 Analogía:
Es como una fábrica que toma ingredientes (datos) y produce productos (componentes JSX).

## 💡 Ejemplo básico con .map()
```jsx
const nombres = ['Ana', 'Belen', 'Carmen'];
const saludos = nombres.map(nombre => {
  return `¡Hola ${nombre}!`;
});
```

## 🎬 Práctica 1: Lista simple
Creemos una lista de películas:

```jsx
const Peliculas = () => {
  const peliculas = ['Barbie', 'Frozen', 'Moana'];

  return (
    <ul>
      {peliculas.map(pelicula => (
        <li>{pelicula}</li>
      ))}
    </ul>
  );
};
```

## 🔑 La prop key

### ¿Por qué React necesita keys?
React usa **keys** para identificar qué elementos cambiaron, se agregaron o eliminaron. Sin keys, React no puede actualizar la lista eficientemente.

### 🎯 Reglas importantes:
- **Única**: Cada key debe ser diferente
- **Estable**: No debe cambiar entre renders
- **Predecible**: Mismo elemento = misma key

```jsx
const Peliculas = () => {
  const peliculas = ['Barbie', 'Frozen', 'Moana'];

  return (
    <ul>
      {peliculas.map((pelicula, index) => (
        <li key={index}>{pelicula}</li>
      ))}
    </ul>
  );
};
```

### ⚠️ Tip: Si tienes IDs únicos, úsalos en lugar del index

## 🎨 Ejercicio 1
Crea una lista de tus 3 colores favoritos usando .map()

## 📱 Trabajando con arrays de objetos
```jsx
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Celular", precio: 500 },
  { id: 3, nombre: "Tablet", precio: 300 }
];
```

## 🛍️ Renderizando objetos
```jsx
const ListaProductos = () => {
  return (
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};
```

## 🎨 Ejercicio 2
Crea un array de 3 personajes favoritos con:
- nombre
- serie
- poder

Y renderízalos usando .map()

## 🤔 Renderizado condicional en listas

### ¿Qué pasa si queremos mostrar elementos solo bajo ciertas condiciones?
Podemos usar **operadores lógicos** dentro de .map():

```jsx
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000, disponible: true },
  { id: 2, nombre: "Celular", precio: 500, disponible: false },
  { id: 3, nombre: "Tablet", precio: 300, disponible: true }
];

const ListaProductos = () => {
  return (
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
          {producto.disponible ? (
            <span style={{color: 'green'}}>✅ Disponible</span>
          ) : (
            <span style={{color: 'red'}}>❌ Agotado</span>
          )}
        </div>
      ))}
    </div>
  );
};
```

### 💡 Técnicas útiles:
- **Operador ternario**: `condición ? siMuestra : noMuestra`
- **AND lógico**: `condición && <Componente />`
- **Combinado con filtros**: `.filter().map()`

## 🌈 Estilos con .map()
Podemos agregar estilos a cada elemento:

```jsx
const Colores = () => {
  const colores = ['red', 'blue', 'green'];

  return (
    <div>
      {colores.map(color => (
        <div
          key={color}
          style={{
            backgroundColor: color,
            width: '100px',
            height: '100px'
          }}
        />
      ))}
    </div>
  );
};
```

## 🎨 Ejercicio Final
Crea una galería de tarjetas con:
1. Array de 4 amigas
2. Cada amiga tiene: nombre, hobby, color favorito
3. Renderiza tarjetas con .map()
4. Usa el color favorito en el diseño

## 🌟 Bonus: Filtrado con .map()
Podemos **combinar métodos** para crear listas más inteligentes:

```jsx
const productos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Celular", precio: 500 },
  { id: 3, nombre: "Tablet", precio: 300 }
];

const ProductosCaros = () => {
  return (
    <div>
      {productos
        .filter(p => p.precio > 400)  // Primero filtra
        .map(producto => (            // Después mapea
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
          </div>
        ))}
    </div>
  );
};
```

### 🔧 Métodos útiles para combinar:
- **filter()**: Selecciona elementos que cumplen una condición
- **sort()**: Ordena el array antes de mapear
- **slice()**: Toma solo una porción del array

## 📝 Resumen

### 🎯 Conceptos clave dominados:
- **Listas dinámicas**: .map() transforma arrays en elementos JSX
- **Keys**: Identificadores únicos para que React funcione eficientemente
- **Renderizado condicional**: Mostrar contenido basado en condiciones
- **Combinación de métodos**: filter() + map() para listas inteligentes

### 💡 Lo que debes recordar:
- Siempre usar **key** en listas
- **Keys únicas** y estables
- **Operador ternario** para condiciones simples
- **filter() antes de map()** para filtrar datos

## 🏠 Tarea
Crea una página de "Mi Serie Favorita" con:
1. Array de personajes
2. Cada personaje con: nombre, imagen, descripción
3. Usa .map() para mostrarlos en tarjetas
4. Agrega estilos para hacerlo atractivo

¡Excelente trabajo! 🌟
