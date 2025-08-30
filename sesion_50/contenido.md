# Introducción a Tailwind CSS 🎨
Sesión 50

## Acuerdos de clase 🤝
- Ser amable y respetuosa
- Participar activamente
- Trabajar en equipo
- ¡Preguntar cuando tengamos dudas!

## 🎯 Objetivos de la sesión
- Comprender qué es Tailwind CSS y sus ventajas
- Configurar Tailwind en nuestro proyecto React
- Aprender las clases básicas de espaciado y colores
- Crear nuestros primeros componentes estilizados con Tailwind
- Comparar Tailwind CSS vs CSS tradicional

## Actividad inicial 💭
¿Si pudieras diseñar tu propia red social, qué aspecto visual tendría?

## ¿Qué es Tailwind CSS? 🌟
- Framework de CSS "utility-first"
- Nos permite estilizar usando clases predefinidas
- Más rápido que escribir CSS tradicional
- Muy popular en proyectos React modernos

## Ventajas de Tailwind 🚀
- No necesitamos escribir CSS desde cero
- Clases intuitivas y fáciles de recordar
- Diseño consistente
- Altamente personalizable
- Excelente para proyectos React

## Configuración en nuestro proyecto React ⚙️
1. Instalar Tailwind:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configurar tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Agregar directivas en index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Clases básicas de Tailwind 🎯

### Colores de texto
- text-blue-500 → Color azul
- text-red-600 → Color rojo
- text-green-400 → Color verde

### Tamaños de texto
- text-sm → Pequeño
- text-base → Normal
- text-lg → Grande
- text-xl → Extra grande

### Espaciado
- m-2 → Margin
- p-4 → Padding
- my-3 → Margin vertical
- px-5 → Padding horizontal

## 🔨 Actividad práctica 1: Mi primer componente con Tailwind

Creemos un botón estilizado:

```jsx
const BotonTailwind = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      ¡Haz clic!
    </button>
  )
}
```

## 🎯 Reto: Personaliza tu botón
Modifica las clases para crear:
1. Un botón rosa
2. Un botón verde
3. Un botón con bordes redondeados grandes

## Flexbox con Tailwind 📦

### Contenedor flex
- flex → display: flex
- flex-row → dirección horizontal
- flex-col → dirección vertical

### Alineación
- justify-center → centrar horizontalmente
- items-center → centrar verticalmente
- space-x-4 → espacio horizontal entre elementos

## 🔨 Actividad práctica 2: Tarjeta de perfil

Creemos una tarjeta de perfil simple:

```jsx
const TarjetaPerfil = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="Foto de perfil"
        className="w-24 h-24 rounded-full"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">
        Ana García
      </h2>
      <p className="mt-2 text-gray-600">
        Desarrolladora Frontend
      </p>
    </div>
  )
}
```

## 🎯 Reto final: Crea tu propia tarjeta
Personaliza la tarjeta de perfil con:
1. Tus colores favoritos
2. Tu nombre y rol
3. Agrega un botón de "Seguir"

## Recursos adicionales 📚
- [Documentación oficial de Tailwind](https://tailwindcss.com/)
- [Cheatsheet de Tailwind](https://tailwindcomponents.com/cheatsheet/)
- [Playground de Tailwind](https://play.tailwindcss.com/)

## Para la próxima clase... 🔜
- Exploraremos más componentes visuales con Tailwind
- Aprenderemos a crear layouts más complejos
- ¡Prepara tus ideas creativas! 🎨

## Reflexión final 💭
¿Qué ventajas encuentras en usar Tailwind vs CSS tradicional?
¿Qué tipo de proyectos crees que se beneficiarían más del uso de Tailwind?
