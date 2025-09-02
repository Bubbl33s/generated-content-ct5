# Sesión 65: Escritura en Firestore (addDoc)

## 🤝 Acuerdos de clase
- Trabajar en equipo
- Celebrar los pequeños logros
- Pedir ayuda cuando sea necesario

## 🎯 Objetivos de la sesión
- Implementar la función addDoc de Firestore
- Enviar datos desde un formulario React a la base de datos
- Manejar estados de carga y confirmación
- Ver nuestros primeros datos guardados en Firebase Console

## 🌟 Actividad inicial
¿Cuál fue la primera vez que "guardaste" algo importante? ¿Un dibujo, una foto, un documento? ¡Hoy guardaremos datos digitalmente!

## 📝 ¿Qué es addDoc?

`addDoc` es la función de Firebase que nos permite **agregar documentos** a una colección.

### Sintaxis básica:
```javascript
import { addDoc, collection } from 'firebase/firestore';

// Agregar un documento
addDoc(collection(db, 'nombreColeccion'), {
  campo1: 'valor1',
  campo2: 'valor2'
});
```

## 🔄 Flujo de guardado

1. **Usuario llena formulario** → Frontend
2. **Clic en "Guardar"** → Frontend
3. **addDoc envía datos** → Firebase
4. **Confirmación de guardado** → Firebase → Frontend
5. **Mostrar mensaje de éxito** → Frontend

## 🎨 Lo que construiremos hoy

Un formulario simple para agregar tareas con:
- **Campo título** (input text)
- **Campo descripción** (textarea)
- **Botón guardar** con estado de carga
- **Mensaje de confirmación** cuando se guarde

## 📊 Estructura de nuestros datos

Cada tarea tendrá:
```javascript
{
  title: "Estudiar React",
  description: "Repasar hooks y Firebase",
  createdAt: "2025-09-02T10:30:00Z",
  completed: false
}
```

## ⚡ Estados importantes

Durante esta sesión manejaremos:
- **Estado del formulario** (título, descripción)
- **Estado de carga** (mostrando "Guardando...")
- **Estado de error** (si algo sale mal)
- **Estado de éxito** (confirmación de guardado)

## 🔧 Herramientas que usaremos

- **React hooks**: useState, useEffect
- **Firebase**: addDoc, collection
- **Tailwind**: Para estilos simples
- **Validación**: Campos obligatorios

## 📱 Experiencia de usuario

El usuario podrá:
1. Escribir título y descripción
2. Ver botón "Guardar" que cambia a "Guardando..."
3. Recibir confirmación visual de éxito
4. Ver formulario limpio listo para nueva tarea

## 🎯 Meta de la sesión

Al final tendremos:
- ✅ Formulario funcional conectado a Firestore
- ✅ Datos guardándose correctamente
- ✅ Validación básica implementada
- ✅ Feedback visual para el usuario

## 🚀 Seguimiento en Firebase Console

Después de cada guardado podremos:
- Ver nuestros datos en tiempo real
- Confirmar que la estructura es correcta
- Celebrar que ¡estamos guardando en la nube!

## 💭 Reflexión final
- ¿Cómo se siente poder guardar datos en una base de datos real?
- ¿Qué otras aplicaciones podrías crear con esta funcionalidad?
