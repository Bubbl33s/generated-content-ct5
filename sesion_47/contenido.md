# Enrutamiento con React Router
Sesión 47

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Mantener la cámara encendida
- Ayudarnos entre todas

## 🎯 Objetivos
- Comprender qué es el enrutamiento en aplicaciones web
- Aprender a usar React Router para crear navegación
- Implementar rutas y enlaces en nuestra aplicación

## 🤔 Pregunta inicial
Si fueras un emoji de navegación, ¿cuál serías?
🧭 🗺️ 🚗 🚀 ⛵

## ¿Qué es el enrutamiento?

### 🌐 Contexto: SPAs vs Páginas tradicionales
Antes de entender el enrutamiento, necesitamos comprender qué es una **SPA (Single Page Application)**:

**Páginas web tradicionales:**
- Cada click en un enlace recarga toda la página
- El servidor envía una nueva página HTML completa
- Experiencia más lenta con "parpadeos" entre páginas
- Ejemplo: sitios de noticias básicos, blogs tradicionales

**SPAs (Single Page Applications):**
- **Una sola página HTML** se carga inicialmente
- JavaScript cambia el contenido dinámicamente
- **Sin recargas** - navegación instantánea y fluida
- Experiencia similar a apps móviles
- Ejemplos: Instagram, Gmail, Netflix, WhatsApp Web

### 🗺️ ¿Qué es el enrutamiento entonces?
El enrutamiento es el sistema que decide **qué mostrar** según la **URL** actual:

- Es como el **GPS de nuestra aplicación**
- Nos permite mostrar diferentes páginas/componentes **sin recargar**
- Mantiene sincronizada la **URL del navegador** con lo que vemos en pantalla
- Maneja el **historial** (botón atrás/adelante del navegador)
- ¡Es como el menú de Netflix que nos lleva a diferentes secciones **instantáneamente**!

### 🤔 ¿Por qué React necesita un sistema de rutas?
React por sí solo **NO maneja URLs**. Sin React Router:
- Todas las páginas tendrían la misma URL
- El botón "atrás" del navegador no funcionaría
- No podrías compartir enlaces a páginas específicas
- Perdería la sensación de "aplicación web real"

## React Router al rescate 🦸‍♀️

React Router es la **biblioteca más popular** para manejar rutas en aplicaciones React. Piénsalo como el **director de orquesta** que coordina qué componente mostrar según la URL.

### 🎯 ¿Qué problemas resuelve?
- **Sincronización URL-Contenido**: La URL siempre refleja lo que estás viendo
- **Historial del navegador**: Los botones atrás/adelante funcionan correctamente
- **Enlaces compartibles**: Puedes enviar un link directo a cualquier página
- **Navegación fluida**: Sin recargas de página, experiencia SPA completa
- **SEO amigable**: Los motores de búsqueda pueden indexar diferentes "páginas"

### 🔧 Características principales:
- **Declarativo**: Defines rutas como componentes JSX
- **Anidable**: Puedes tener rutas dentro de rutas
- **Programático**: Navega desde código JavaScript cuando sea necesario
- **Flexible**: Rutas dinámicas con parámetros (`/usuario/:id`)
- **Fácil de usar**: Sintaxis intuitiva y documentación excelente

## Instalación
En la terminal de nuestro proyecto:
```bash
npm install react-router-dom
```

## Configuración básica

### 🧩 Componentes clave de React Router:
- **BrowserRouter**: El "contenedor maestro" que habilita el sistema de rutas
- **Routes**: El "organizador" que contiene todas las rutas posibles
- **Route**: Define una ruta específica (URL → Componente)

### 🎯 Analogía útil:
Imagina React Router como un **sistema de transporte**:
- **BrowserRouter** = La estación central que coordina todo
- **Routes** = El mapa de rutas disponibles
- **Route** = Una ruta específica (ej: "De Casa al Trabajo")

En App.jsx primero importamos:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

### ❓ ¿Qué hace cada parte?
- `path="/"` = La **URL** que activa esta ruta
- `element={<Home />}` = El **componente** que se muestra
- La ruta `"/"` es especial: representa la página de inicio

## 🔨 Actividad 1: Creemos nuestras primeras páginas
Crear 3 componentes básicos:
- Home.jsx
- About.jsx
- Contact.jsx

## Estructura de rutas

### 🏗️ Arquitectura de una SPA con rutas:
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

### 🔍 ¿Cómo funciona internamente?
1. **Usuario visita** `/about` en el navegador
2. **BrowserRouter** detecta el cambio de URL
3. **Routes** busca una ruta que coincida con `/about`
4. **Route** correspondiente renderiza `<About />`
5. **Sin recargar** la página - solo cambia el contenido

### 📋 Reglas importantes:
- Las rutas se evalúan **de arriba hacia abajo**
- Solo **una ruta** se activa a la vez
- Si ninguna coincide, no se muestra nada (por eso necesitamos 404)

## Link: Navegación sin recargar

### 🚀 La magia de la navegación SPA
En aplicaciones tradicionales, los enlaces `<a>` recargan toda la página. En SPAs necesitamos **Link** para mantener la experiencia fluida.

### ⚡ Diferencia clave:
```jsx
// ❌ MAL - Recarga toda la página (experiencia lenta)
<a href="/about">Sobre mí</a>

// ✅ BIEN - Navegación SPA (experiencia fluida)
<Link to="/about">Sobre mí</Link>
```

### 🎨 ¿Por qué Link es mejor?
- **Instantáneo**: Sin tiempos de carga
- **Mantiene estado**: Las variables de React no se pierden
- **Experiencia fluida**: Como apps móviles
- **Mejor rendimiento**: Solo cambia el contenido necesario

Importamos Link:
```jsx
import { Link } from 'react-router-dom';
```

Creamos enlaces:
```jsx
<Link to="/">Inicio</Link>
<Link to="/about">Sobre mí</Link>
<Link to="/contact">Contacto</Link>
```

### 💡 Tip profesional:
Siempre usa **Link** para navegación interna y **`<a>`** solo para enlaces externos

## 🎨 Actividad 2: Menú de navegación
Crear un componente Navbar.jsx con enlaces usando Link

## useNavigate: Navegación programática

### 🎮 Cuando necesitas navegar desde código
A veces no queremos un enlace visible, sino **navegar como resultado de una acción**:
- Después de enviar un formulario exitosamente
- Cuando el login es correcto
- Tras completar un proceso de pago
- En respuesta a condiciones específicas

### 🔧 ¿Cómo funciona useNavigate?
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/about');
```

### 🎯 Casos de uso comunes:
- **Formularios**: Redirigir tras envío exitoso
- **Autenticación**: Llevar al dashboard después del login
- **Procesos**: Avanzar pasos en un flujo
- **Condiciones**: Navegar basado en lógica de negocio

### 💡 Ejemplo práctico:
Imagina un botón que valida algo antes de navegar:
```jsx
const manejarClick = () => {
  if (usuarioEstaLogueado) {
    navigate('/dashboard');
  } else {
    navigate('/login');
  }
};
```

## 🎮 Actividad 3: Mini proyecto - Portal de Juegos
1. Crear componentes:
   - GamesList.jsx
   - GameDetail.jsx
2. Implementar rutas:
   - /games (lista)
   - /game/:id (detalle)
3. Agregar navegación entre páginas

## useParams: Acceder a parámetros

### 🎯 Rutas dinámicas: El poder de los parámetros
Los parámetros nos permiten crear **rutas dinámicas** que muestran contenido específico basado en la URL.

### 🌟 Ejemplos del mundo real:
- `/usuario/123` → Perfil del usuario con ID 123
- `/producto/laptop-gaming` → Detalles del producto "laptop-gaming"
- `/articulo/como-aprender-react` → Artículo específico

### 🔧 ¿Cómo definir rutas con parámetros?
```jsx
<Route path="/game/:id" element={<GameDetail />} />
```
El `:id` es un **parámetro variable** que puede ser cualquier valor.

### 📝 ¿Cómo usar los parámetros?
Para obtener valores de la URL:
```jsx
import { useParams } from 'react-router-dom';

const { id } = useParams();
```

### 🎮 Ejemplo práctico:
Si visitas `/game/zelda`, el valor de `id` será `"zelda"` dentro del componente.

### 💡 ¿Por qué es útil?
- **Una ruta, múltiples páginas**: Un componente puede mostrar diferentes contenidos
- **URLs semánticas**: `/producto/123` es más claro que `/producto?id=123`
- **SEO amigable**: Cada producto tiene su propia URL
- **Compartible**: Puedes compartir enlaces directos a contenido específico

## 404: Página no encontrada

### 🚫 ¿Qué pasa cuando alguien visita una URL que no existe?
Sin manejo de errores, el usuario vería una **página en blanco** - ¡muy confuso!

### 🛡️ La ruta comodín: path="*"
Manejando rutas inexistentes:
```jsx
<Route path="*" element={<NotFound />} />
```

### 📋 ¿Cómo funciona?
- El `*` significa "**cualquier cosa**"
- Se coloca **al final** de las rutas (es la última opción)
- Si ninguna ruta anterior coincide, se activa esta
- Es como el "plan B" de tu aplicación

### 🎨 Buenas prácticas para páginas 404:
- **Mensaje claro**: "Esta página no existe"
- **Enlace de regreso**: Botón para volver al inicio
- **Sugerencias útiles**: Enlaces a páginas populares
- **Diseño consistente**: Misma apariencia que el resto de la app
- **Tono amigable**: Evita culpar al usuario

### 💡 ¿Por qué es importante?
- **Experiencia de usuario**: Evita confusión
- **Profesionalismo**: Muestra que controlaste todos los escenarios
- **SEO**: Los motores de búsqueda prefieren sitios que manejan errores bien
- **Debugging**: Te ayuda a identificar enlaces rotos

## 🎯 Reto final
Crear una mini app de recetas con:
- Lista de recetas
- Detalle de receta
- Página About
- Manejo de 404

## 🎉 Resumen

### 🌟 Lo que aprendimos sobre SPAs y enrutamiento:
- **SPAs** crean experiencias fluidas sin recargas de página (como Instagram, Netflix)
- **React Router** es el sistema que hace posible la navegación en SPAs
- El enrutamiento **sincroniza URLs** con el contenido mostrado

### 🔧 Componentes y hooks principales:
- **BrowserRouter**: Habilita el sistema de rutas en toda la app
- **Routes y Route**: Definen qué componente mostrar para cada URL
- **Link**: Navegación instantánea sin recargas (mejor que `<a>`)
- **useNavigate**: Navegación programática desde código JavaScript
- **useParams**: Acceso a parámetros dinámicos de la URL

### 🎯 Conceptos clave que dominamos:
- **Rutas estáticas**: `/about`, `/contact` (contenido fijo)
- **Rutas dinámicas**: `/game/:id` (contenido variable)
- **Navegación declarativa**: Usando componentes Link
- **Navegación programática**: Desde funciones con useNavigate
- **Manejo de errores**: Páginas 404 para URLs inexistentes

### 💡 ¿Por qué esto es importante?
- **Experiencia de usuario**: Navegación rápida y fluida
- **URLs significativas**: Cada página tiene su dirección única
- **Funcionalidad completa**: Botones atrás/adelante funcionan
- **Aplicaciones profesionales**: Comportamiento esperado en apps modernas

## 🏠 Tarea
1. Personalizar el diseño del menú de navegación
2. Agregar más páginas a tu proyecto
3. Implementar una página 404 creativa

## 👋 ¡Nos vemos en la próxima clase!
Recuerda practicar y experimentar con las rutas
¡Tú puedes! 💪
