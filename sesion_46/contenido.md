# Sesión 46: Uso de IA para generación y manipulación de datos I

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Apoyarnos mutuamente
- Mantener las cámaras encendidas

## 🎯 Objetivos
- Aprender a usar IA para generar datos de prueba
- Manipular datos generados en componentes React
- Practicar el uso de useState y useEffect con datos dinámicos

## 🤔 Pregunta de reflexión inicial
Si pudieras crear una red social, ¿qué tipo de datos necesitarías para tus usuarios?

## 📚 Introducción a la generación de datos con IA

### ¿Por qué necesitamos datos de prueba?
- Para probar nuestros componentes
- Para simular interacciones reales
- Para visualizar el diseño con contenido

### Ventajas de usar IA para generar datos
- Datos realistas y coherentes
- Ahorro de tiempo
- Variedad de casos de prueba

## 💡 Usando ChatGPT para generar datos

### Ejemplo de prompt básico:
"Genera 5 objetos de usuario con: nombre, edad, correo y hobby"

### Mejorando el prompt:
"Genera 5 objetos de usuario en formato JSON con:
- nombres hispanos femeninos
- edades entre 15-25 años
- correos gmail
- hobbies creativos"

## 🛠️ Práctica guiada 1: Generación de datos

1. Abre ChatGPT
2. Copia el siguiente prompt:
"Crea 10 objetos de producto en JSON con:
- nombre de producto tecnológico
- precio entre $10-$100
- descripción corta
- categoría (elegir entre: gadgets, accesorios, audio)
- rating (1-5 estrellas)"

## 💻 Actividad práctica 1
Usa el JSON generado para crear un componente ProductList que:
- Almacene los productos en useState
- Muestre cada producto en una card
- Incluya toda la información del producto

## 🔄 Manipulación de datos con IA

### Transformación de datos
Podemos pedirle a la IA que transforme datos existentes:
- Cambiar formato
- Agregar campos
- Filtrar información

## 🛠️ Práctica guiada 2: Transformación

Usemos ChatGPT para:
1. Agregar imágenes a nuestros productos
2. Convertir precios a formato moneda
3. Agregar campos de stock y descuento

## 💻 Actividad práctica 2
Mejora tu componente ProductList:
- Agrega los nuevos campos
- Muestra precio formateado
- Aplica estilos según el stock/descuento

## 🎨 Filtrado y ordenamiento

### Usando IA para crear funciones de filtrado
Podemos pedirle que nos ayude a crear:
- Filtros por categoría
- Ordenamiento por precio
- Búsqueda por nombre

## 💻 Actividad final
Implementa en tu ProductList:
1. Un select para filtrar por categoría
2. Un botón para ordenar por precio
3. Una barra de búsqueda

## 🌟 Reto extra
Pide a ChatGPT que genere datos para un nuevo tipo de producto y adapta tu componente para mostrarlos.

## 📝 Reflexión final
- ¿Qué ventajas encontraste al usar IA para generar datos?
- ¿Qué otros casos de uso se te ocurren?
- ¿Cómo podrías mejorar los prompts usados?

## 🏠 Tarea
1. Genera un nuevo conjunto de datos usando IA
2. Crea un componente que los muestre
3. Implementa al menos un filtro

## 👋 Cierre
¡Excelente trabajo! Ahora puedes usar IA para generar y manipular datos de prueba en tus proyectos React.