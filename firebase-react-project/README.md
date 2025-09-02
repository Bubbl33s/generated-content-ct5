# Firebase React Task Manager

Una aplicación simple de gestión de tareas construida con React, Vite, Tailwind CSS y Firebase.

## 🚀 Características

- ✅ CRUD completo de tareas
- ✅ Autenticación con email/password y Google
- ✅ Datos en tiempo real con Firestore
- ✅ Rutas privadas y control de sesión
- ✅ UI responsiva con Tailwind CSS
- ✅ Validación de formularios
- ✅ Manejo de errores

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Backend**: Firebase (Firestore + Auth)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── ProtectedRoute.jsx
│   ├── tasks/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskFilters.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   └── Spinner.jsx
│   └── layout/
│       ├── Navbar.jsx
│       ├── Header.jsx
│       └── Layout.jsx
├── hooks/
│   ├── useAuth.js
│   ├── useTasks.js
│   └── useFirestore.js
├── services/
│   ├── firebase.js
│   ├── auth.js
│   └── firestore.js
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Dashboard.jsx
├── utils/
│   ├── constants.js
│   └── helpers.js
├── App.jsx
└── main.jsx
```

## 🔧 Instalación y configuración

### 1. Crear proyecto Vite
```bash
npm create vite@latest firebase-task-manager -- --template react
cd firebase-task-manager
npm install
```

### 2. Instalar dependencias
```bash
npm install firebase react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configurar Tailwind
Ver archivo `tailwind.config.js` en el proyecto.

### 4. Configurar Firebase
1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilitar Firestore Database
3. Habilitar Authentication (Email/Password + Google)
4. Copiar configuración en `src/services/firebase.js`

## 🎯 Funcionalidades por sesión

Este proyecto se desarrolla progresivamente a lo largo de 15 sesiones:

### Sesiones 64-66: CRUD Básico
- Configuración inicial de Firebase
- Crear, leer y mostrar tareas
- Estados de carga y validación básica

### Sesiones 67-69: CRUD Completo
- Editar tareas existentes
- Eliminar con confirmación
- Validación robusta y manejo de errores

### Sesiones 70-71: Optimización
- Reglas de seguridad
- Estructura de datos optimizada
- Validación avanzada

### Sesiones 73-75: Autenticación
- Login/Register con email
- Autenticación con Google
- Rutas privadas y control de sesión

### Sesiones 76-78: Integración Final
- Datos por usuario
- Aplicación completa integrada
- Optimización y organización del código

## 🔥 Configuración de Firebase

```javascript
// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
```

## 📊 Estructura de datos en Firestore

### Colección: `tasks`
```javascript
{
  id: "auto-generated",
  title: "string",
  description: "string",
  completed: "boolean",
  userId: "string", // UID del usuario
  createdAt: "timestamp",
  updatedAt: "timestamp"
}
```

### Colección: `users` (opcional)
```javascript
{
  id: "uid-from-auth",
  email: "string",
  displayName: "string",
  photoURL: "string",
  createdAt: "timestamp"
}
```

## 🎨 Componentes principales

### TaskItem.jsx
Muestra una tarea individual con opciones de editar/eliminar.

### TaskForm.jsx
Formulario para crear/editar tareas con validación.

### TaskList.jsx
Lista todas las tareas del usuario con filtros.

### LoginForm.jsx / RegisterForm.jsx
Formularios de autenticación con validación.

### ProtectedRoute.jsx
Componente para proteger rutas que requieren autenticación.

## 🚀 Scripts disponibles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 📱 Responsive Design

La aplicación está diseñada para funcionar en:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🔒 Reglas de seguridad de Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Solo usuarios autenticados pueden leer/escribir sus propios datos
    match /tasks/{taskId} {
      allow read, write: if request.auth != null &&
                           request.auth.uid == resource.data.userId;
      allow create: if request.auth != null &&
                      request.auth.uid == request.resource.data.userId;
    }
  }
}
```

## 🎯 Próximos pasos

Una vez completado el proyecto básico, se puede extender con:

- 📂 Categorías de tareas
- 📅 Fechas de vencimiento
- 🔔 Notificaciones
- 👥 Tareas colaborativas
- 📊 Estadísticas y reportes
- 🌙 Modo oscuro
- 📱 PWA (Progressive Web App)

## 📚 Recursos adicionales

- [Documentación de Firebase](https://firebase.google.com/docs)
- [Guía de React](https://react.dev)
- [Documentación de Tailwind](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
