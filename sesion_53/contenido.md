# Context API - Estado Global 🌍

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Mantener la cámara encendida cuando sea posible
- Ayudarnos mutuamente
- Preguntar cuando tengamos dudas

## 🎯 Objetivos de la sesión
- Entender qué es el estado global y cuándo usarlo
- Comprender y resolver el problema del "prop drilling"
- Aprender a implementar Context API paso a paso
- Crear un sistema de temas con estado global
- Aplicar Context API en un proyecto práctico con Tailwind

## 🌟 Actividad inicial
¿Alguna vez has necesitado compartir algo importante (como tu WiFi password) con varias personas? ¿Cómo lo hiciste?
¡Así funciona el estado global! 📡

## 🔄 Repaso rápido: ¿Dónde estamos?
En sesiones anteriores aprendimos:
- **useState**: Para manejar estado en un componente
- **Props**: Para pasar datos de padre a hijo
- **Componentes**: Para organizar nuestra aplicación

Pero... ¿qué pasa cuando necesitamos compartir datos entre componentes que están **muy lejos** entre sí?

## 🤯 El problema: Prop Drilling

### 🚫 ¿Qué es prop drilling?
Imagina esta situación familiar:

```jsx
// App → Header → Navbar → UserProfile
// Solo UserProfile necesita el nombre, pero tenemos que pasarlo por TODOS

function App() {
  const [userName, setUserName] = useState("Ana");
  return <Header userName={userName} />;
}

function Header({ userName }) {
  return <Navbar userName={userName} />;  // Solo pasando...
}

function Navbar({ userName }) {
  return <UserProfile userName={userName} />;  // Solo pasando...
}

function UserProfile({ userName }) {
  return <span>Hola, {userName}!</span>;  // ¡Finalmente se usa!
}
```

### 😵 Problemas del prop drilling:
- **Componentes intermedios** reciben props que no necesitan
- **Código repetitivo** para pasar la misma prop
- **Difícil mantenimiento** cuando cambias la estructura
- **Props "fantasma"** que solo están de paso

### 💡 ¿Te suena familiar?
Es como tener que repetir un mensaje persona por persona hasta que llegue al destinatario. ¡Necesitamos un WhatsApp para componentes!

## 🌐 La solución: Context API (El WhatsApp de React)

### ¿Qué es Context API?
Context API es como un **"almacén central"** donde guardas datos que **muchos componentes** necesitan acceder.

### 🏪 Analogía del supermercado:
- **Context** = El supermercado (almacén central)
- **Provider** = La entrada del supermercado (da acceso)
- **useContext** = Tu carrito de compras (tomas lo que necesitas)
- **Componentes** = Los clientes (pueden comprar lo que necesiten)

### 🎯 ¿Cuándo usar Context?
- **Datos del usuario** (nombre, foto, preferencias)
- **Temas** (modo claro/oscuro, colores)
- **Idioma** de la aplicación
- **Carrito de compras** en e-commerce
- **Estado de autenticación** (logueado/no logueado)

### ⚠️ ¿Cuándo NO usar Context?
- Datos que solo 1-2 componentes necesitan
- Estados muy específicos de un componente
- Datos que cambian muy frecuentemente

## 🏗️ Implementando Context paso a paso

### **Paso 1: Crear el Context (Ejemplo: Usuario)**

#### **Subpaso 1.1: Crear el contexto base**
```jsx
// contexts/UserContext.js
import { createContext } from 'react';

// Crear el contexto vacío
const UserContext = createContext();
```
> 💡 **¿Qué hace?** `createContext()` crea un "contenedor" vacío que puede almacenar cualquier valor y compartirlo entre componentes.

#### **Subpaso 1.2: Crear el hook personalizado**
```jsx
// Agregar al mismo archivo
import { createContext, useContext } from 'react';

const UserContext = createContext();

// Hook para acceder al contexto de forma segura
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
};
```
> 💡 **¿Para qué sirve?** Este hook personalizado:
> - Facilita el uso del contexto (no tienes que importar `useContext` cada vez)
> - Detecta errores si olvidas el Provider
> - Hace el código más limpio y reutilizable

#### **Subpaso 1.3a: Definir el estado del Provider**
```jsx
// Agregar useState
import { createContext, useContext, useState } from 'react';

// ... código anterior ...

export const UserProvider = ({ children }) => {
  // Estado principal del usuario
  const [user, setUser] = useState({
    name: 'Ana García',
    email: 'ana@email.com',
    avatar: '👩‍💻',
    isLoggedIn: true
  });
```
> 💡 **¿Qué contiene?** El estado inicial con toda la información del usuario que queremos compartir.

#### **Subpaso 1.3b: Crear las funciones del Provider**
```jsx
// Continuando en UserProvider...
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({...});

  // Función para actualizar datos del usuario
  const updateUser = (newData) => {
    setUser(prevUser => ({ ...prevUser, ...newData }));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser({ name: '', email: '', avatar: '', isLoggedIn: false });
  };
```
> 💡 **¿Por qué funciones?** En lugar de exponer `setUser` directamente, creamos funciones específicas que:
> - Son más fáciles de usar
> - Controlan cómo se modifica el estado
> - Evitan errores accidentales

#### **Subpaso 1.3c: Crear el objeto value y Provider**
```jsx
// Completando UserProvider...
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({...});
  const updateUser = (newData) => {...};
  const logout = () => {...};

  // Objeto con todo lo que queremos compartir
  const value = {
    user,
    updateUser,
    logout
  };

  // Provider que envuelve a los componentes hijos
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
```
> 💡 **¿Cómo funciona?**
> - `value`: Contiene todo lo que los componentes pueden usar
> - `{children}`: Son todos los componentes que estarán dentro del Provider
> - `UserContext.Provider`: El componente especial que "inyecta" el valor a sus hijos

#### **Código completo del Paso 1:**
```jsx
// contexts/UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Ana García',
    email: 'ana@email.com',
    avatar: '👩‍💻',
    isLoggedIn: true
  });

  const updateUser = (newData) => {
    setUser(prevUser => ({ ...prevUser, ...newData }));
  };

  const logout = () => {
    setUser({ name: '', email: '', avatar: '', isLoggedIn: false });
  };

  const value = { user, updateUser, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
```

### **Paso 2: Envolver la aplicación con el Provider**
```jsx
// App.js
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </UserProvider>
  );
}
```

### **Paso 3: Usar el Context en cualquier componente**
```jsx
// components/Header.js
import { useUser } from '../contexts/UserContext';

function Header() {
  const { user, logout } = useUser();

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Mi App</h1>

        {user.isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-2xl">{user.avatar}</span>
            <span className="text-gray-700">Hola, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  );
}
```

## 🌙 Ejemplo avanzado: Sistema de temas con Tailwind

Ahora veamos cómo implementar correctamente un sistema de temas usando las clases `dark:` de Tailwind:

```jsx
// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Aplicar la clase 'dark' al documento cuando cambie el tema
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Uso correcto con clases `dark:` de Tailwind:
```jsx
// components/ThemeButton.js
import { useTheme } from '../contexts/ThemeContext';

function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        px-4 py-2 rounded-lg
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-colors
      "
    >
      {isDark ? '☀️ Modo claro' : '🌙 Modo oscuro'}
    </button>
  );
}

// components/Card.js
function Card({ title, content }) {
  return (
    <div className="
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-gray-100
      p-6 rounded-lg shadow-md
      border border-gray-200 dark:border-gray-700
    ">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
}
```

### Configuración necesaria en `tailwind.config.js`:
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Habilitar modo oscuro con clase
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 💪 Ejercicio práctico 1: Sistema de carrito de compras

Vamos a crear un contexto para manejar un carrito de compras:

```jsx
// contexts/CartContext.js
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};
```

### 🎯 Tu misión:
1. Crea el CartContext siguiendo el ejemplo
2. Crea un componente `ProductCard` que use el carrito
3. Crea un componente `CartIcon` que muestre el total de items

## 🎨 Ejercicio práctico 2: Combinando User y Cart

Ahora vamos a usar ambos contextos juntos en un componente:

```jsx
// components/UserCart.js
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';

function UserCart() {
  const { user, logout } = useUser();
  const { items, getTotalPrice, getTotalItems } = useCart();

  if (!user.isLoggedIn) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <p>Inicia sesión para ver tu carrito</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Carrito de {user.name}
        </h2>
        <button
          onClick={logout}
          className="text-sm text-red-600 hover:text-red-800"
        >
          Cerrar sesión
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Tu carrito está vacío</p>
      ) : (
        <div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            {getTotalItems()} items en el carrito
          </p>
          <p className="text-lg font-semibold text-green-600">
            Total: ${getTotalPrice().toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
```

### Componentes que usan múltiples contextos:

```jsx
// components/ProductCard.js
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useUser();

  const handleAddToCart = () => {
    if (!user.isLoggedIn) {
      alert('Debes iniciar sesión para agregar productos');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-colors">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-6xl">{product.emoji}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        ${product.price}
      </p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
// components/CartIcon.js
import { useCart } from '../contexts/CartContext';

function CartIcon() {
  const { getTotalItems } = useCart();

  return (
    <div className="relative">
      <span className="text-2xl">🛒</span>
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {getTotalItems()}
        </span>
      )}
    </div>
  );
}
```

## 🏆 Proyecto final: Tienda con tema y carrito

Vamos a combinar todo lo aprendido:

### 🎯 Objetivo:
Crear una mini tienda que tenga:
1. **Sistema de temas** (claro/oscuro) con Tailwind
2. **Carrito de compras** con estado global
3. **Información de usuario** persistente
4. **Interface responsive** y bonita

### 📋 Estructura del proyecto:
```
src/
├── contexts/
│   ├── ThemeContext.js
│   ├── CartContext.js
│   └── UserContext.js
├── components/
│   ├── Header.js
│   ├── ProductCard.js
│   ├── CartIcon.js
│   ├── CartModal.js
│   └── UserProfile.js
└── App.js
```

### 🎨 Características con Tailwind:
- **Modo oscuro**: Usando clases `dark:` de Tailwind
- **Transiciones suaves**: Para cambios de tema
- **Cards responsive**: Grid que se adapta al tamaño
- **Indicadores visuales**: Para items en carrito

## 💡 Mejores prácticas con Context

### ✅ Haz esto:
1. **Un contexto por responsabilidad** (Theme, User, Cart separados)
2. **Hooks personalizados** para encapsular la lógica
3. **Validaciones** en los hooks (como el `throw new Error`)
4. **Valores por defecto** sensatos
5. **Providers en el nivel correcto** de la aplicación

### ❌ Evita esto:
1. **Un contexto gigante** con todo mezclado
2. **Usar Context para todo** (usa props para datos simples)
3. **Cambiar el contexto muy frecuentemente** (puede causar re-renders)
4. **Olvidar el Provider** (tu app no funcionará)

## 🤓 Repaso de conceptos clave

### 📚 Lo que aprendimos:
- **Prop drilling**: El problema de pasar props por muchos niveles
- **Context API**: La solución para estado global
- **Provider/Consumer**: Patrón para compartir datos
- **useContext**: Hook para acceder al contexto
- **Hooks personalizados**: Para encapsular lógica de contexto

### 🔧 Patrones útiles:
- **Múltiples contexts**: Separar responsabilidades
- **Context + Tailwind**: Para sistemas de temas
- **Validación en hooks**: Para detectar errores
- **Estado derivado**: Computed values como `getTotalItems()`

## 💭 Reflexión final

### 🎉 Comparte con la clase:
- ¿En qué partes de tu proyecto final podrías usar Context?
- ¿Qué ventajas ves vs pasar props?
- ¿Cómo cambiaría la forma de estructurar tu aplicación?
- ¿Qué fue lo más desafiante de Context API?

## 🏠 Tarea para la próxima clase
1. **Implementa** al menos 2 contexts en tu proyecto personal
2. **Crea** un sistema de temas con Tailwind y Context
3. **Refactoriza** algún componente que tenga prop drilling
4. **Documenta** cómo usar tus contexts para futuros desarrolladores
5. **Experimenta** con contextos anidados (ThemeProvider dentro de UserProvider)

## 🔮 Próxima sesión:
Aprenderemos sobre **Hooks personalizados** para encapsular lógica reutilizable y crear abstracciones aún más poderosas.

¡Excelente trabajo! 🌟
Ahora puedes crear **aplicaciones con estado compartido** que escalan y se mantienen fácilmente. ¡Context API es tu nueva superpoder! 🦸‍♀️
