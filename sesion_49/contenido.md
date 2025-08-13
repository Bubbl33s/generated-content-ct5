# Formulario Controlado + Validación
Sesión 49

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Ayudar a las compañeras

## 🎯 Objetivos
- Crear formularios controlados en React
- Implementar validación de campos
- Manejar errores y feedback al usuario

## 🤔 Pregunta inicial
¿Alguna vez han llenado un formulario que les avise cuando algo está mal?
¿Qué tipo de mensajes han visto?

## 📝 Formularios Controlados

### ¿Qué es un formulario controlado?
Es un formulario donde **React controla completamente** los datos:
- Los valores de los campos se almacenan en **estado de React**
- Las actualizaciones se manejan con **onChange**
- React es la "**fuente de verdad**" de los datos

### 🆚 Controlado vs No Controlado:
**No controlado**: HTML maneja los datos → React los lee cuando necesite
**Controlado**: React maneja los datos → HTML solo muestra lo que React dice

### 💡 Ventajas del estado controlado:
- **Validación en tiempo real**
- **Formateo automático** de datos
- **Reseteo fácil** del formulario
- **Sincronización** entre componentes

### Ejemplo básico
```jsx
const [nombre, setNombre] = useState('');

<input
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>
```

### 🔍 ¿Qué hace onChange?
- **Detecta** cada cambio en el input
- **Recibe** el evento con el nuevo valor
- **Actualiza** el estado de React
- **Re-renderiza** el componente con el nuevo valor

## 🏋️‍♀️ Ejercicio 1: Formulario Simple
Creemos un formulario de registro con:
- Nombre
- Email
- Contraseña

## 💡 Validación de Campos

### ¿Por qué validar?
- **Asegurar datos correctos** antes de enviar al servidor
- **Mejor experiencia de usuario** con feedback inmediato
- **Prevenir errores** y problemas de seguridad
- **Guiar al usuario** sobre qué formato necesita

### 🎯 Cuándo validar:
- **En tiempo real**: Mientras el usuario escribe (onChange)
- **Al salir del campo**: Cuando pierde el foco (onBlur)
- **Al enviar**: Antes de procesar el formulario

### Tipos de validación básicas:
1. **Campos requeridos**: No pueden estar vacíos
2. **Formato de email**: Debe contener @ y dominio válido
3. **Longitud**: Mínima y máxima de caracteres
4. **Caracteres permitidos**: Solo números, solo letras, etc.
5. **Patrones específicos**: Teléfonos, códigos postales, etc.

## 🛠️ Implementando Validación

### 📊 Estado para manejar errores
```jsx
const [errores, setErrores] = useState({
  nombre: '',
  email: '',
  password: ''
});
```

### 🔧 Función de validación básica
```jsx
const validarCampo = (nombre, valor) => {
  if (!valor) return 'Este campo es requerido';

  if (nombre === 'email' && !valor.includes('@')) {
    return 'Email inválido';
  }

  if (nombre === 'password' && valor.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres';
  }

  return ''; // Sin errores
}
```

### ⚡ Validación en tiempo real con onChange
```jsx
const manejarCambio = (e) => {
  const { name, value } = e.target;

  // Actualizar el valor
  setFormData({...formData, [name]: value});

  // Validar el campo
  const error = validarCampo(name, value);
  setErrores({...errores, [name]: error});
};
```

### 🎯 Ventajas de validar con onChange:
- **Feedback inmediato**: Usuario ve errores al instante
- **Corrección fácil**: Puede arreglar errores mientras escribe
- **Menos frustración**: No espera hasta el final para saber qué está mal

## 🏋️‍♀️ Ejercicio 2: Agregar Validación
Agregamos validación al formulario anterior:
1. Nombre: mínimo 3 caracteres
2. Email: formato válido
3. Contraseña: mínimo 6 caracteres

## 💡 Mejores prácticas para formularios controlados

### 🔑 Patrones útiles:
- **Un objeto para todos los valores**: `const [formData, setFormData] = useState({})`
- **Un objeto para todos los errores**: `const [errores, setErrores] = useState({})`
- **Función genérica de onChange**: Reutilizable para todos los campos
- **Validación incremental**: Más estricta conforme el usuario avanza

### ⚡ Optimización:
- **Debounce** para validaciones costosas (consultas al servidor)
- **Validar solo cuando sea necesario** (no en cada keystroke si no es crítico)
- **Limpiar errores** cuando el usuario corrija el campo

## 🎨 Mostrando Errores

### 🎯 Principios de buen feedback visual:
- **Claro y específico**: "Email inválido" mejor que "Error"
- **Inmediato**: Mostrar errores en tiempo real
- **Positivo también**: Mostrar cuando algo está correcto
- **Consistente**: Mismos colores y estilos siempre

### 💻 Técnicas de feedback visual:
```jsx
<input
  style={{
    borderColor: errores.email ? 'red' : 'green',
    backgroundColor: errores.email ? '#ffe6e6' : '#e6ffe6'
  }}
/>
{errores.email && (
  <span style={{color: 'red'}}>❌ {errores.email}</span>
)}
```

### 🌈 Elementos de feedback:
- **Mensajes de error** en rojo debajo del campo
- **Bordes de input** que cambian de color
- **Íconos** de error (❌) y éxito (✅)
- **Colores de fondo** sutiles para el estado

## 🏋️‍♀️ Ejercicio Final
Crear un formulario completo de registro con:
1. Todos los campos necesarios
2. Validación en tiempo real
3. Mensajes de error claros
4. Estilos para feedback

## 🎯 Reto Extra
Agregar validación de:
- Contraseña fuerte (números + letras)
- Confirmación de contraseña

## 🏁 Cierre

### 🎯 Conceptos clave dominados:
- **Estado controlado**: React maneja todos los datos del formulario
- **onChange**: Detecta y actualiza cambios en tiempo real
- **Validaciones básicas**: Campos requeridos, formatos, longitudes
- **Feedback visual**: Errores claros y feedback positivo
- **Mejores prácticas**: Código reutilizable y experiencia de usuario fluida

### 💡 Lo que debes recordar:
- **Siempre** usar `value` y `onChange` juntos
- **Validar incrementalmente** para mejor UX
- **Errores específicos** mejor que mensajes genéricos
- **Limpiar errores** cuando el usuario corrija

### 🔄 Repaso de conceptos clave
- Compartir dificultades encontradas
- Mostrar formularios terminados
- Identificar qué patrones usar en proyectos futuros
