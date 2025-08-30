# Diseño Responsive con Tailwind + IA para Datos

## 🎯 Objetivos
- Implementar diseño responsive usando Tailwind CSS
- Usar IA para generar y manipular datos de prueba

## 💭 Reflexión inicial
¿Qué dispositivos usas más para navegar en internet?

## 📱 Diseño Responsive con Tailwind

### Breakpoints en Tailwind
Tailwind usa prefijos para diferentes tamaños de pantalla:
- sm: >= 640px
- md: >= 768px 
- lg: >= 1024px
- xl: >= 1280px

### Ejemplo básico:
```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Contenido responsivo
</div>
```

## 🏃‍♀️ Actividad 1: Menú Responsive
Creemos un menú que se adapte a diferentes dispositivos:

```jsx
<nav className="bg-purple-600 p-4">
  <div className="hidden md:flex space-x-4">
    <a className="text-white">Inicio</a>
    <a className="text-white">Productos</a>
    <a className="text-white">Contacto</a>
  </div>
  <div className="md:hidden">
    <button className="text-white">☰</button>
  </div>
</nav>
```

## 🤖 IA para Datos

Usemos ChatGPT para generar datos de prueba para nuestra app.

### Prompt efectivo:
"Genera un array de 10 productos con: nombre, precio, descripción y categoría en formato JSON para una tienda de ropa juvenil"

## 🏃‍♀️ Actividad 2: Grid Responsive
Implementemos una grid de productos usando los datos generados:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {products.map(product => (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{product.nombre}</h3>
      <p className="text-gray-600">${product.precio}</p>
    </div>
  ))}
</div>
```

## 💪 Reto
Agregar filtros responsivos a la grid de productos:

```jsx
<div className="flex flex-col md:flex-row gap-4">
  <aside className="w-full md:w-1/4">
    <h2 className="font-bold mb-2">Filtros</h2>
    {/* Agregar checkboxes para categorías */}
  </aside>
  <main className="w-full md:w-3/4">
    {/* Grid de productos */}
  </main>
</div>
```

## 🎨 Tips de Diseño Responsive
1. Mobile First: Diseña primero para móvil
2. Usa unidades flexibles (%, rem)
3. Prueba en diferentes dispositivos

## 🤖 Tips para Prompts de IA
1. Sé específica con el formato
2. Indica el contexto y uso
3. Pide ejemplos realistas

## 🎯 Proyecto práctico
Crea una página de productos responsiva usando:
- Menú responsive
- Grid de productos
- Filtros laterales
- Datos generados por IA

## 🌟 Recursos adicionales
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [ChatGPT Playground](https://platform.openai.com/playground)

## 👩‍💻 Reflexión final
¿Cómo mejoró la IA tu flujo de trabajo hoy?