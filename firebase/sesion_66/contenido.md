# Sesión 66: Lectura de datos (getDocs)

## 🤝 Acuerdos de clase
- Compartir hallazgos y errores
- Ayudarnos mutuamente
- Disfrutar ver nuestros datos aparecer

## 🎯 Objetivos de la sesión
- Implementar getDocs para leer datos de Firestore
- Mostrar la lista de tareas guardadas en tiempo real
- Manejar estados de carga durante la lectura
- Crear una interfaz que se actualice automáticamente

## 🌟 Actividad inicial
¿Alguna vez has abierto una aplicación y visto "Cargando..."? ¡Hoy entenderemos qué pasa detrás de esas pantallas!

## 📖 ¿Qué es getDocs?

`getDocs` nos permite **leer todos los documentos** de una colección en Firestore.

### Sintaxis básica:
```javascript
import { getDocs, collection } from 'firebase/firestore';

// Leer todos los documentos
const querySnapshot = await getDocs(collection(db, 'tasks'));
querySnapshot.forEach((doc) => {
  console.log(doc.id, doc.data());
});
```

## 🔄 Flujo de lectura

1. **Componente se monta** → React
2. **Solicitar datos** → getDocs → Firebase
3. **Firebase envía datos** → React
4. **Procesar y mostrar** → Interfaz actualizada
5. **Usuario ve sus tareas** → ¡Éxito!

## 📋 Lo que construiremos hoy

Una lista dinámica que muestre:
- **Todas las tareas guardadas**
- **Estado de carga** mientras se obtienen datos
- **Mensaje vacío** si no hay tareas
- **Actualización en tiempo real** (opcional con onSnapshot)

## 🎨 Componentes de la interfaz

### Lista de tareas:
- Card individual por cada tarea
- Título y descripción visibles
- Fecha de creación
- Estado de completado

### Estados visuales:
- **Cargando**: Skeleton o spinner
- **Vacío**: Mensaje motivacional
- **Con datos**: Lista organizada
- **Error**: Mensaje de error amigable

## ⚡ Hooks que usaremos

- **useState**: Para guardar las tareas
- **useEffect**: Para cargar datos al montar
- **Custom hook**: useFirestore (opcional)

## 🔍 Diferencia: getDocs vs onSnapshot

### getDocs (Una sola lectura):
```javascript
// Lee datos una vez
const tasks = await getDocs(collection(db, 'tasks'));
```

### onSnapshot (Tiempo real):
```javascript
// Escucha cambios en tiempo real
onSnapshot(collection(db, 'tasks'), (snapshot) => {
  // Se ejecuta cada vez que hay cambios
});
```

## 📊 Estructura de datos recibidos

Cada documento viene con:
```javascript
{
  id: "abc123", // ID único del documento
  data: {       // Los datos que guardamos
    title: "Mi tarea",
    description: "Descripción...",
    createdAt: timestamp
  }
}
```

## 🎯 Meta de la sesión

Al final tendremos:
- ✅ Lista que muestra todas las tareas
- ✅ Carga automática al abrir la app
- ✅ Interfaz responsiva con Tailwind
- ✅ Manejo de estados de carga y error

## 🔧 Optimizaciones que aprenderemos

- **Evitar re-renders innecesarios**
- **Manejar datos grandes eficientemente**
- **Cachear datos cuando sea posible**
- **Mostrar skeleton mientras carga**

## 🚀 Conexión con sesión anterior

Ahora veremos cómo:
- Los datos que guardamos ayer aparecen hoy
- El ciclo completo: Escribir → Leer → Mostrar
- La magia del tiempo real en acción

## 💭 Reflexión final
- ¿Cómo se siente ver tus propios datos aparecer de la base de datos?
- ¿Qué aplicaciones conoces que muestren datos de esta manera?
