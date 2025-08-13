# Introducción a React
Sesión 42

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Preguntar cuando tengamos dudas
- Ayudarnos entre todas

## 🎯 Rompe hielo
¿Si fueras una superheroína, qué poder tendrías y cómo lo usarías para hacer código?

## 🌟 ¿Qué aprenderemos hoy?
- ¿Qué es React y por qué es tan popular?
- Componentes y la magia de la reutilización
- Nuestro primer proyecto en React
- JSX: HTML dentro de JavaScript

## 🤔 ¿Qué es React?
- Es una biblioteca de JavaScript para crear interfaces de usuario
- Creada por Facebook (Meta)
- Nos permite crear aplicaciones web de forma más organizada
- Es como armar con LEGO: cada pieza es un componente

## 🎮 Actividad: Pensemos en componentes
Miremos Instagram y analicemos qué elementos se repiten:
- Publicaciones
- Historias
- Comentarios
- Botones de like

¡Esos son componentes reutilizables!

## 💻 Preparando nuestro ambiente
Vamos a crear nuestro primer proyecto React:

1. Abre la terminal
2. Ejecuta: npx create-react-app mi-primera-app
3. Entra al proyecto: cd mi-primera-app
4. Inicia el servidor: npm start

## 🎨 Estructura del proyecto
Explora los archivos principales:
- src/App.js - Componente principal
- src/index.js - Punto de entrada
- public/index.html - HTML base

## ✨ JSX: HTML mágico
JSX nos permite escribir HTML dentro de JavaScript:

```jsx
function Saludo() {
  return (
    <div>
      <h1>¡Hola mundo!</h1>
      <p>Mi primer componente</p>
    </div>
  );
}
```

## 🎯 Actividad práctica
Creemos nuestro primer componente:
1. Crea un nuevo archivo Perfil.js
2. Diseña un componente que muestre:
   - Tu nombre
   - Una descripción
   - Tus hobbies

## 💡 Reglas importantes de JSX
- Siempre debe retornar un elemento padre
- Las clases CSS se escriben como className
- Los atributos usan camelCase
- Las expresiones JavaScript van entre {}

## 🎮 Mini proyecto: Tarjeta de perfil
Creemos una tarjeta de perfil personalizada:

```jsx
function TarjetaPerfil() {
  return (
    <div className="tarjeta">
      <img src="tu-foto.jpg" alt="Mi foto" />
      <h2>Tu nombre</h2>
      <p>Desarrolladora Frontend Jr</p>
    </div>
  );
}
```

## 🌈 Estilizando componentes
Agrega estilos a tu tarjeta:

```css
.tarjeta {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}
```

## 🎯 Reto final
Personaliza tu tarjeta de perfil:
1. Agrega más información
2. Incluye íconos o emojis
3. Aplica estilos creativos

## 🌟 Reflexión final
- ¿Qué fue lo más interesante que aprendiste hoy?
- ¿Cómo podrías usar React en tus proyectos?
- ¿Qué otras cosas te gustaría crear con React?

## 🏠 Tarea
1. Personaliza más tu tarjeta de perfil
2. Investiga sobre props en React
3. Piensa en una app que te gustaría crear

¡Felicitaciones por tu primer día con React! 🎉