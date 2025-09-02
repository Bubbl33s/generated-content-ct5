# Sesión 67: Actualización de datos (updateDoc)

## 🤝 Acuerdos de clase
- Experimentar sin miedo a equivocarnos
- Celebrar cuando algo funcione
- Apoyarnos en los errores

## 🎯 Objetivos de la sesión
- Implementar updateDoc para editar datos existentes
- Crear interfaz de edición inline o modal
- Manejar estados de edición y actualización
- Completar la funcionalidad de modificación del CRUD

## 🌟 Actividad inicial
¿Alguna vez has querido corregir algo que escribiste? ¡Hoy aprenderemos a editar nuestros datos guardados!

## ✏️ ¿Qué es updateDoc?

`updateDoc` nos permite **modificar campos específicos** de un documento sin afectar el resto.

## 🔄 Flujo de actualización

1. **Usuario hace clic en "Editar"**
2. **Formulario se llena con datos actuales**
3. **Usuario modifica y guarda**
4. **updateDoc envía cambios**
5. **Interfaz se actualiza automáticamente**

## 🎨 Interfaz de edición

Implementaremos:
- **Botón "Editar" en cada tarea**
- **Formulario de edición (inline o modal)**
- **Botones "Guardar" y "Cancelar"**
- **Estados visuales durante la edición**

## ⚡ Estados de edición

- **isEditing**: ¿Estamos editando esta tarea?
- **editingId**: ¿Cuál tarea estamos editando?
- **tempData**: Datos temporales durante edición
- **isUpdating**: ¿Estamos guardando cambios?

## 🎯 Meta de la sesión

- ✅ Funcionalidad completa de edición
- ✅ Validación antes de guardar
- ✅ Feedback visual durante actualización
- ✅ Manejo de errores de actualización
