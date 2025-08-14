# Componentes visuales con Tailwind

## Acuerdos de clase 🤝
- Ser amable
- Trabajar en equipo
- Pedir ayuda cuando la necesites
- Respetar los tiempos

## Actividad inicial 🎮
Cuéntanos...
¿Cuál es tu página web favorita y qué elementos visuales te llaman más la atención de ella?

## Repaso rápido 🔄
En la clase anterior aprendimos:
- Instalación de Tailwind
- Clases utilitarias básicas
- Sintaxis de Tailwind

## Componentes visuales comunes 🎨

### 1. Botones estilizados
Tailwind nos permite crear botones atractivos fácilmente:

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me!
</button>
```

### Actividad práctica 1 💪
Crea 3 botones diferentes usando Tailwind:
- Un botón primario (azul)
- Un botón de éxito (verde)
- Un botón de alerta (rojo)

### 2. Tarjetas (Cards)
Las tarjetas son elementos muy comunes en diseño web:

```jsx
<div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
  <h3 className="font-bold text-xl mb-2">Título de la tarjeta</h3>
  <p className="text-gray-700">Contenido de la tarjeta</p>
</div>
```

### Actividad práctica 2 🎨
Diseña una tarjeta de perfil que incluya:
- Imagen (puedes usar placeholder.com)
- Nombre
- Descripción
- Botón de "Seguir"

### 3. Navegación responsive
Creemos una barra de navegación básica:

```jsx
<nav className="bg-gray-800 p-4">
  <div className="flex items-center justify-between">
    <div className="text-white font-bold">Logo</div>
    <div className="flex space-x-4">
      <a className="text-white hover:text-gray-300" href="#">Inicio</a>
      <a className="text-white hover:text-gray-300" href="#">Acerca</a>
      <a className="text-white hover:text-gray-300" href="#">Contacto</a>
    </div>
  </div>
</nav>
```

### Actividad práctica 3 🚀
Personaliza la barra de navegación:
- Cambia los colores
- Agrega un logo (puede ser texto)
- Incluye un botón de login

### 4. Formularios con estilo
Creemos campos de formulario atractivos:

```jsx
<input 
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Tu nombre"
/>
```

### Actividad práctica 4 ✨
Crea un formulario de contacto con:
- Campo de nombre
- Campo de email
- Área de mensaje
- Botón de enviar

### 5. Badges y etiquetas
Perfectos para mostrar estados o categorías:

```jsx
<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
  Nuevo
</span>
```

### Actividad final 🎯
Crea una página de perfil completa combinando todos los elementos que aprendimos:
- Navegación
- Card de perfil
- Formulario de contacto
- Badges para habilidades
- Botones de acción

## Recursos adicionales 📚
- Documentación oficial de Tailwind
- Tailwind UI (componentes gratuitos)
- Tailwind Components (comunidad)

## Reflexión final 💭
¿Qué componente te pareció más útil y por qué?
¿Cómo podrías usar estos componentes en tu proyecto final?

## Tarea 📝
Crea al menos 2 componentes visuales nuevos usando Tailwind para tu proyecto. ¡Sé creativa!

¡Nos vemos en la próxima clase! 👋