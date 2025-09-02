# Sesión 64: Introducción a backend y Firebase

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Preguntar cuando tengamos dudas

## 🎯 Objetivos de la sesión
- Comprender qué es un backend y por qué lo necesitamos
- Conocer Firebase como solución Backend-as-a-Service (BaaS)
- Configurar nuestro primer proyecto con Firestore
- Entender la arquitectura moderna de aplicaciones web

## 🌟 Actividad inicial
¿Alguna vez te has preguntado dónde se guardan los datos cuando publicas en redes sociales? ¿O cómo Instagram "recuerda" tus fotos?

## 🏗️ ¿Qué es un Backend?

### Frontend vs Backend
- **Frontend**: Lo que ves y tocas (interfaz de usuario)
- **Backend**: Lo que no ves pero que hace que todo funcione (servidor, base de datos)

### ¿Por qué necesitamos un backend?
- **Persistencia**: Guardar datos permanentemente
- **Seguridad**: Proteger información sensible
- **Escalabilidad**: Manejar miles de usuarios
- **Sincronización**: Compartir datos entre dispositivos

## 🔥 ¿Qué es Firebase?

Firebase es una plataforma de Google que nos da:
- **Base de datos en tiempo real** (Firestore)
- **Autenticación** de usuarios
- **Hosting** para desplegar aplicaciones
- **Storage** para archivos
- **Analytics** para estadísticas

### Ventajas de Firebase
- **Sin servidor**: No necesitas configurar nada
- **Tiempo real**: Los cambios se ven instantáneamente
- **Escalable**: Crece con tu aplicación
- **Gratis**: Plan generoso para empezar

## 🏛️ Arquitectura Moderna

### Antes (Arquitectura tradicional)
```
Frontend → Servidor → Base de datos
```

### Ahora (Arquitectura moderna)
```
Frontend → Firebase (BaaS)
```

## 🗄️ ¿Qué es Firestore?

Firestore es una base de datos **NoSQL** que organiza los datos en:
- **Colecciones**: Como carpetas
- **Documentos**: Como archivos con información
- **Campos**: Los datos específicos dentro de cada documento

### Ejemplo de estructura:
```
tasks (colección)
  ├── doc1 (documento)
  │   ├── title: "Estudiar React"
  │   ├── description: "Repasar hooks"
  │   └── userEmail: "ana@email.com"
  └── doc2 (documento)
      ├── title: "Hacer ejercicio"
      ├── description: "Ir al gimnasio"
      └── userEmail: "luis@email.com"
```

## 🛠️ Setup de nuestro proyecto

Hoy configuraremos:
1. **Proyecto en Firebase Console**
2. **Firestore Database**
3. **Conexión con nuestro proyecto React**
4. **Primeras configuraciones de seguridad**

## 📋 Lo que lograremos en este módulo

Al final de estas sesiones tendrás:
- ✅ Una aplicación React completa con Tailwind
- ✅ CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ Autenticación con email y Google
- ✅ Datos en tiempo real
- ✅ Seguridad básica implementada

## 🚀 ¡Manos a la obra!

En la guía práctica veremos paso a paso cómo:
- Crear proyecto en Firebase
- Configurar Firestore
- Conectar con React
- Hacer nuestra primera escritura de datos

## 💭 Reflexión final
- ¿Qué aplicaciones conoces que usen bases de datos?
- ¿Por qué crees que Firebase es popular entre desarrolladores?
- ¿Qué te emociona más de poder guardar datos?
