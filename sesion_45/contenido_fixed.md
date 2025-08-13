# Sesión 45: useEffect - Efectos secundarios y ciclo de vida

## 🤝 Acuerdos de clase
- Ser amable y respetuosa
- Participar activamente
- Apoyarnos mutuamente
- Preguntar cuando tengamos dudas

## ⚡ Repaso rápido
- ¿Qué son los React Hooks?
- ¿Cómo funciona useState?
- ¿Qué diferencia hay entre props y estado?

## 🎯 Lo que haremos hoy
- Entender **useEffect** y los efectos secundarios
- Aprender los **diferentes momentos** de ejecución de useEffect
- Practicar con **estados de carga** realistas
- Crear componentes que **reaccionen a cambios**

## 🌟 Actividad inicial: ¿Qué es lo que más te emociona aprender hoy?
Comparte con la clase mientras nos preparamos para descubrir el fascinante mundo de useEffect 💫

## 🔄 El ciclo de vida de un componente React

Antes de aprender nuevos Hooks, es importante entender que **todos los componentes React pasan por 3 fases principales** en su "vida":

### 🌱 **1. MONTAJE (Mount)** - "Nacer"
- El componente se crea y se añade al DOM por primera vez
- Es como cuando una página web carga por primera vez
- **Sucede solo UNA VEZ** por componente

### 🔄 **2. ACTUALIZACIÓN (Update)** - "Crecer y cambiar"
- El componente se vuelve a renderizar porque cambió algo (estado o props)
- Es como cuando escribes en un input y la pantalla se actualiza
- **Puede suceder MUCHAS VECES** durante la vida del componente

### 💀 **3. DESMONTAJE (Unmount)** - "Despedirse"
- El componente se elimina del DOM
- Es como cuando cambias de página o cierras una ventana
- **Sucede solo UNA VEZ** al final de la vida del componente

### 🎭 **¿Qué necesitaríamos hacer en cada fase?**
- **🌱 Al montar**: Cargar datos, configurar timers, cambiar el título
- **🔄 Al actualizar**: Reaccionar a cambios, guardar datos, validar
- **💀 Al desmontar**: Limpiar timers, cancelar peticiones, guardar estado

### 🤔 **¿Cómo manejamos esto en React?**
En React clásico (con clases) existían métodos especiales para cada fase. Pero con Hooks, usamos **useEffect** para manejar todo el ciclo de vida.

## 📱 ¿Qué es useEffect?

**useEffect** es nuestro segundo Hook más importante. Es como un **ayudante especial** que nos permite controlar el ciclo de vida y realizar efectos secundarios:

- Ejecutar código **después** de que el componente se renderiza
- **Reaccionar a cambios** en el estado o props
- Realizar **efectos secundarios** (side effects)
- **Limpiar recursos** cuando sea necesario

### 🤔 ¿Qué son los efectos secundarios?
Son acciones que ocurren **"además"** del renderizado normal:
- 🌐 **Hacer peticiones** a APIs o servidores
- 📱 **Cambiar el título** de la página
- ⏰ **Crear temporizadores** o intervalos
- 💾 **Guardar datos** en localStorage
- 🎵 **Reproducir sonidos** o música
- 📊 **Conectarse a servicios** externos

### ⚡️ Sintaxis básica de useEffect:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Código del efecto secundario
  console.log('¡El componente se renderizó!');
}, []); // Array de dependencias
```

### 📋 **useEffect y el ciclo de vida:**
- **Array vacío `[]`** → Solo en MONTAJE y DESMONTAJE
- **Con dependencias `[variable]`** → En MONTAJE + cada ACTUALIZACIÓN de esas variables
- **Sin array** → En MONTAJE + TODAS las actualizaciones

### 🎭 **Ejemplo visual: useEffect controlando el ciclo de vida**
```jsx
function ComponenteConCicloDeVida() {
  const [contador, setContador] = useState(0);

  // 🌱 MONTAJE: Solo cuando el componente "nace"
  useEffect(() => {
    console.log('🌱 ¡Hola! Soy un componente nuevo');
    return () => {
      console.log('💀 ¡Adiós! Me voy del DOM');
    };
  }, []); // Array vacío = solo al montar/desmontar

  // 🔄 ACTUALIZACIÓN: Cada vez que el contador cambia
  useEffect(() => {
    console.log('🔄 ¡Me actualicé! Contador:', contador);
  }, [contador]); // Se ejecuta cuando contador cambia

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar (me actualizo)
      </button>
    </div>
  );
}
```

## 🎨 Anatomía completa de useEffect

```jsx
useEffect(() => {
  // 1. EFECTO: Código que queremos ejecutar
  console.log('Ejecutando efecto');

  // 2. LIMPIEZA (opcional): Se ejecuta antes del próximo efecto o al desmontar
  return () => {
    console.log('Limpiando efecto anterior');
  };
}, [dependencia1, dependencia2]); // 3. DEPENDENCIAS: Controlan cuándo se ejecuta
```

### 📋 Las 3 partes de useEffect:
1. **Función de efecto**: El código que queremos ejecutar
2. **Función de limpieza** (opcional): Limpia el efecto anterior
3. **Array de dependencias**: Controla cuándo se re-ejecuta

## 💡 ¿Cuándo se ejecuta useEffect? - Los 3 casos principales

### 🚀 **Caso 1: Solo al montar (renderizado inicial)**
```jsx
useEffect(() => {
  console.log('Solo se ejecuta UNA VEZ al cargar el componente');
  document.title = 'Mi App React';
}, []); // Array VACÍO = solo al montar
```
**Uso típico**: Cargar datos iniciales, configurar títulos, suscripciones iniciales

### 🔄 **Caso 2: En cada renderizado**
```jsx
useEffect(() => {
  console.log('Se ejecuta CADA VEZ que el componente se renderiza');
}); // SIN array de dependencias = siempre
```
**⚠️ Cuidado**: Puede crear loops infinitos, usar con precaución

### 🎯 **Caso 3: Cuando cambian dependencias específicas**
```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState('Ana');

useEffect(() => {
  console.log('Solo cuando count cambia:', count);
}, [count]); // Se ejecuta cuando 'count' cambia

useEffect(() => {
  console.log('Cuando count O name cambian');
}, [count, name]); // Se ejecuta cuando cualquiera de los dos cambia
```

## 🔍 Ejemplos prácticos de cada caso

### ⚡ **Ejemplo 1: Solo al montar - Título dinámico**
```jsx
function TituloDinamico() {
  useEffect(() => {
    document.title = '¡Bienvenida a mi App!';
    console.log('Título cambiado solo una vez');
  }, []); // Solo al cargar

  return <h1>Mi aplicación React</h1>;
}
```

### 🔄 **Ejemplo 2: Cuando cambia el estado - Contador reactivo**
```jsx
function ContadorReactivo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
    console.log('El contador cambió a:', count);
  }, [count]); // Solo cuando count cambia

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  );
}
```

### 🎨 **Ejemplo 3: Múltiples dependencias**
```jsx
function PerfilUsuario() {
  const [nombre, setNombre] = useState('María');
  const [edad, setEdad] = useState(17);

  useEffect(() => {
    console.log(`Perfil actualizado: ${nombre}, ${edad} años`);
    // Aquí podríamos guardar en localStorage o enviar a servidor
  }, [nombre, edad]); // Se ejecuta cuando cambia nombre O edad

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder="Tu edad"
      />
    </div>
  );
}
```

## 🎯 Ejemplos SÚPER CLAROS: useEffect que reacciona a cambios

### 🎨 **Ejemplo: Detectar si un número es par o impar**
```jsx
function DetectorParImpar() {
  const [numero, setNumero] = useState(0);
  const [mensaje, setMensaje] = useState('');

  // ¡Este useEffect se ejecuta CADA VEZ que 'numero' cambia!
  useEffect(() => {
    console.log('⚡ El número cambió a:', numero);

    if (numero % 2 === 0) {
      setMensaje('El número es PAR');
    } else {
      setMensaje('El número es IMPAR');
    }
  }, [numero]); // 👈 Cuando 'numero' cambia, este efecto se ejecuta

  return (
    <div>
      <h2>Número: {numero}</h2>
      <p>{mensaje}</p>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Escribe un número"
      />
    </div>
  );
}
```

### 🔊 **Ejemplo: Mensaje que aparece cuando cambias tu estado de ánimo**
```jsx
function EstadoAnimo() {
  const [mood, setMood] = useState('😐');
  const [mensaje, setMensaje] = useState('');

  // ¡Este useEffect se ejecuta cada vez que 'mood' cambia!
  useEffect(() => {
    console.log('⚡ El estado de ánimo cambió a:', mood);

    // Mostrar mensaje diferente según el mood
    if (mood === '😊') {
      setMensaje('¡Qué bueno que estés feliz!');
    } else if (mood === '😢') {
      setMensaje('Espero que te sientas mejor pronto');
    } else if (mood === '😴') {
      setMensaje('¿Necesitas una siesta?');
    } else {
      setMensaje('¿Cómo te sientes hoy?');
    }
  }, [mood]); // 👈 Solo cuando 'mood' cambie

  return (
    <div>
      <h2>Mi estado: {mood}</h2>
      <p style={{ color: 'blue', fontStyle: 'italic' }}>{mensaje}</p>

      <div>
        <button onClick={() => setMood('😊')}>Feliz</button>
        <button onClick={() => setMood('😢')}>Triste</button>
        <button onClick={() => setMood('😴')}>Cansada</button>
        <button onClick={() => setMood('😐')}>Normal</button>
      </div>
    </div>
  );
}
```

### 💾 **Ejemplo: Guardar en localStorage cuando cambia el nombre**
```jsx
function GuardadorNombre() {
  const [nombre, setNombre] = useState('');
  const [guardadoEn, setGuardadoEn] = useState('');

  // ¡Este useEffect se ejecuta cada vez que 'nombre' cambia!
  useEffect(() => {
    if (nombre.length > 0) {
      console.log('⚡ Guardando nombre:', nombre);
      localStorage.setItem('nombreUsuario', nombre);
      setGuardadoEn(new Date().toLocaleTimeString());
    }
  }, [nombre]); // 👈 Solo cuando 'nombre' cambie

  return (
    <div>
      <h3>Escribe tu nombre:</h3>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre aquí..."
      />
      {guardadoEn && (
        <p style={{ color: 'green' }}>
          ✅ Guardado a las {guardadoEn}
        </p>
      )}
    </div>
  );
}
```

### 🎲 **Ejemplo: Dos estados que se vigilan mutuamente**
```jsx
function ContadorDoble() {
  const [contadorA, setContadorA] = useState(0);
  const [contadorB, setContadorB] = useState(0);
  const [ganador, setGanador] = useState('');

  // Este useEffect vigila ambos contadores
  useEffect(() => {
    console.log('⚡ Algún contador cambió:', { contadorA, contadorB });

    if (contadorA > contadorB) {
      setGanador('🔴 Contador A va ganando!');
    } else if (contadorB > contadorA) {
      setGanador('🔵 Contador B va ganando!');
    } else {
      setGanador('🤝 ¡Empate!');
    }
  }, [contadorA, contadorB]); // 👈 Cuando CUALQUIERA de los dos cambie

  return (
    <div>
      <h2>Batalla de contadores</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>🔴 Contador A: {contadorA}</h3>
          <button onClick={() => setContadorA(contadorA + 1)}>+1</button>
        </div>
        <div>
          <h3>🔵 Contador B: {contadorB}</h3>
          <button onClick={() => setContadorB(contadorB + 1)}>+1</button>
        </div>
      </div>
      <h2 style={{ textAlign: 'center' }}>{ganador}</h2>
    </div>
  );
}
```

## 🎯 Ciclo de vida en acción: Ejemplos prácticos

### 🌱 **Ejemplo: Solo al MONTAR - Configuración inicial**
```jsx
function ComponenteQueSeConfigura() {
  useEffect(() => {
    console.log('🌱 Me monté! Configurando...');
    document.title = 'Mi App - Página Principal';

    // Simular carga de datos iniciales
    console.log('📊 Cargando datos del usuario...');

    // Función de limpieza (se ejecuta al DESMONTAR)
    return () => {
      console.log('💀 Me voy! Limpiando configuración...');
      document.title = 'Navegador';
    };
  }, []); // Solo al montar/desmontar

  return <h1>¡Página configurada!</h1>;
}
```

### 🔄 **Ejemplo: En cada ACTUALIZACIÓN - Reaccionar a cambios**
```jsx
function ComponenteReactivo() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  // Se ejecuta cada vez que nombre O apellido cambian
  useEffect(() => {
    console.log('🔄 Algo cambió en el perfil');
    console.log(`Nombre completo: ${nombre} ${apellido}`);

    // Guardar en localStorage cada vez que cambia
    if (nombre || apellido) {
      localStorage.setItem('perfil', JSON.stringify({ nombre, apellido }));
    }
  }, [nombre, apellido]); // Se ejecuta cuando cualquiera cambie

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Apellido"
      />
      <h3>Hola, {nombre} {apellido}</h3>
    </div>
  );
}
```

### 💀 **Ejemplo: Al DESMONTAR - Limpieza importante**
```jsx
function ComponenteConTimer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    console.log('🌱 Iniciando timer...');

    // Crear un timer que cuenta segundos
    const interval = setInterval(() => {
      setSegundos(prev => prev + 1);
    }, 1000);

    // 💀 LIMPIEZA: Muy importante para evitar memory leaks
    return () => {
      console.log('💀 Limpiando timer antes de irme...');
      clearInterval(interval); // ¡Detener el timer!
    };
  }, []); // Solo configurar el timer una vez

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
      <p>Este timer se limpia automáticamente al desmontar</p>
    </div>
  );
}
```

### 🔄 **Ejemplo: Ciclo completo - Montar, Actualizar, Desmontar**
```jsx
function ComponenteCicloCompleto() {
  const [clicks, setClicks] = useState(0);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // 🌱 MONTAJE: Configuración inicial
  useEffect(() => {
    console.log('🌱 MONTAJE: Componente creado');

    return () => {
      console.log('💀 DESMONTAJE: Componente eliminado');
    };
  }, []);

  // 🔄 ACTUALIZACIÓN: Reaccionar a cambios en clicks
  useEffect(() => {
    console.log('🔄 ACTUALIZACIÓN: Clicks cambió a', clicks);

    if (clicks >= 5) {
      setMostrarMensaje(true);
    }
  }, [clicks]);

  // 🔄 ACTUALIZACIÓN: Reaccionar a cambios en mostrarMensaje
  useEffect(() => {
    if (mostrarMensaje) {
      console.log('🔄 ACTUALIZACIÓN: Mensaje activado');

      // Auto-ocultar el mensaje después de 3 segundos
      const timer = setTimeout(() => {
        setMostrarMensaje(false);
      }, 3000);

      return () => clearTimeout(timer); // Limpiar timer
    }
  }, [mostrarMensaje]);

  return (
    <div>
      <h2>Clicks: {clicks}</h2>
      <button onClick={() => setClicks(clicks + 1)}>
        Hacer click
      </button>

      {mostrarMensaje && (
        <p>🎉 ¡Llegaste a 5 clicks!</p>
      )}

      <p>Abre la consola para ver el ciclo de vida</p>
    </div>
  );
}
```

## 🔄 Estados de carga - Simulando aplicaciones reales

En aplicaciones reales, los datos no aparecen instantáneamente. Necesitamos mostrar:

### 📱 Los 3 estados típicos:
1. **🔄 Loading**: "Cargando..." (estado inicial)
2. **✅ Success**: Datos cargados correctamente
3. **❌ Error**: Algo salió mal

### 🎮 Práctica 1: Simulador de carga básico
```jsx
function CargadorBasico() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Simular petición a servidor (2 segundos)
    const timer = setTimeout(() => {
      setDatos('¡Datos cargados! 🎉');
      setEstaCargando(false);
    }, 2000);

    // Limpieza: cancelar timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // Solo al montar

  if (estaCargando) {
    return <p>🔄 Cargando datos...</p>;
  }

  return <p>{datos}</p>;
}
```

### 🌸 Práctica 2: Cargador con datos realistas
```jsx
function CargadorFlores() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [flores, setFlores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Iniciando carga de flores...');

    const cargarFlores = setTimeout(() => {
      try {
        // Simular datos que vienen del servidor
        const floresDelServidor = [
          { id: 1, nombre: 'Rosa', emoji: '🌹' },
          { id: 2, nombre: 'Girasol', emoji: '🌻' },
          { id: 3, nombre: 'Tulipán', emoji: '🌷' },
          { id: 4, nombre: 'Margarita', emoji: '🌼' }
        ];

        setFlores(floresDelServidor);
        setEstaCargando(false);
        console.log('Flores cargadas exitosamente');
      } catch (err) {
        setError('Error al cargar flores');
        setEstaCargando(false);
      }
    }, 2000);

    return () => clearTimeout(cargarFlores);
  }, []);

  if (error) return <p>❌ {error}</p>;
  if (estaCargando) return <p>🔄 Cargando flores hermosas...</p>;

  return (
    <div>
      <h3>🌺 Jardín de flores</h3>
      {flores.map(flor => (
        <div key={flor.id}>
          {flor.emoji} {flor.nombre}
        </div>
      ))}
    </div>
  );
}
```

## 🎯 Actividades prácticas

### 👩‍💻 **Actividad 1: Emoji que cambia cada 3 segundos**
Crea un componente que muestre un emoji diferente cada 3 segundos:

```jsx
function EmojiCambiante() {
  const [emoji, setEmoji] = useState('😊');
  const emojis = ['😊', '😎', '🤔', '😴', '🥳', '😍'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      setEmoji(emojis[randomIndex]);
    }, 3000);

    // ¡IMPORTANTE! Limpiar el interval
    return () => clearInterval(interval);
  }, []); // Solo configurar una vez

  return <h1>Estado de ánimo: {emoji}</h1>;
}
```

### 🎨 **Actividad 2: Contador que actualiza el título**
Modifica el contador para que también cambie el título de la página:

```jsx
function ContadorConTitulo() {
  const [count, setCount] = useState(0);

  // useEffect que se ejecuta cuando count cambia
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### 🌈 **Actividad 3: Color que cambia según el número**
```jsx
function ColorCambiante() {
  const [numero, setNumero] = useState(1);
  const [color, setColor] = useState('black');

  useEffect(() => {
    if (numero > 10) {
      setColor('red');
    } else if (numero > 5) {
      setColor('orange');
    } else {
      setColor('green');
    }
  }, [numero]); // Se ejecuta cuando numero cambia

  return (
    <div>
      <h2 style={{ color: color }}>Número: {numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>
        Aumentar
      </button>
    </div>
  );
}
```

## 🌈 Tips importantes para useEffect

### ⚠️ **Errores comunes que debemos evitar:**

1. **Loop infinito sin dependencias**:
```jsx
// ❌ MAL - Loop infinito
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1); // Esto causa loop infinito
});

// ✅ BIEN - Con dependencias apropiadas
useEffect(() => {
  console.log('Count cambió:', count);
}, [count]);
```

2. **Olvidar la limpieza**:
```jsx
// ❌ MAL - No limpia el timer
useEffect(() => {
  setInterval(() => {
    console.log('Timer ejecutándose');
  }, 1000);
}, []);

// ✅ BIEN - Limpia el timer
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer ejecutándose');
  }, 1000);

  return () => clearInterval(timer); // ¡Limpieza!
}, []);
```

3. **Dependencias faltantes**:
```jsx
// ❌ MAL - Falta 'name' en dependencias
const [count, setCount] = useState(0);
const [name, setName] = useState('Ana');

useEffect(() => {
  console.log(`${name} tiene ${count} puntos`);
}, [count]); // Falta 'name'

// ✅ BIEN - Todas las dependencias incluidas
useEffect(() => {
  console.log(`${name} tiene ${count} puntos`);
}, [count, name]); // Ambas dependencias
```

### 📋 **Reglas de oro para useEffect:**
- Siempre incluir **todas las variables** que uses dentro del efecto en las dependencias
- **Limpiar siempre** timers, intervals, suscripciones
- **Array vacío []** = solo al montar/desmontar
- **Sin array** = en cada renderizado (usar con cuidado)
- **Con dependencias** = cuando esas variables cambien

## 🎨 Proyecto práctico: Perfil con carga realista

Vamos a crear una página de perfil completa que simule cargar datos del servidor:

```jsx
function PerfilConCarga() {
  const [cargando, setCargando] = useState(true);
  const [perfil, setPerfil] = useState(null);
  const [error, setError] = useState(null);
  const [contador, setContador] = useState(0);

  // Efecto 1: Cargar datos al montar
  useEffect(() => {
    console.log('Iniciando carga del perfil...');

    const cargarPerfil = setTimeout(() => {
      try {
        const datosDelServidor = {
          nombre: 'María García',
          edad: 17,
          emoji: '🌟',
          color: '#ff6b9d',
          hobbies: ['Gaming', 'Música', 'Arte'],
          ultimaConexion: new Date().toLocaleDateString()
        };

        setPerfil(datosDelServidor);
        setCargando(false);
        console.log('Perfil cargado exitosamente');
      } catch (err) {
        setError('Error al cargar perfil');
        setCargando(false);
      }
    }, 2000);

    return () => clearTimeout(cargarPerfil);
  }, []); // Solo al montar

  // Efecto 2: Actualizar título cuando cambia el contador
  useEffect(() => {
    if (perfil) {
      document.title = `${perfil.nombre} - Clicks: ${contador}`;
    }
  }, [contador, perfil]); // Cuando cambie contador O perfil

  // Efecto 3: Log cuando cambia el contador
  useEffect(() => {
    if (contador > 0) {
      console.log(`Contador actualizado a: ${contador}`);
    }
  }, [contador]);

  if (error) {
    return <div>❌ {error}</div>;
  }

  if (cargando) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>🔄 Cargando perfil...</h2>
        <p>Obteniendo datos del servidor...</p>
      </div>
    );
  }

  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: perfil.color + '20',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h1>{perfil.emoji} {perfil.nombre}</h1>
      <p>Edad: {perfil.edad} años</p>
      <p>Último acceso: {perfil.ultimaConexion}</p>

      <h3>Hobbies:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {perfil.hobbies.map((hobby, index) => (
          <li key={index}>🎯 {hobby}</li>
        ))}
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <h3>Interacciones: {contador}</h3>
        <button
          onClick={() => setContador(contador + 1)}
          style={{
            padding: '10px 20px',
            backgroundColor: perfil.color,
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          👋 Saludar
        </button>
      </div>
    </div>
  );
}
```

### 🌟 **¿Qué demuestra este ejemplo?**
- **useEffect con array vacío**: Cargar datos una sola vez
- **useEffect con dependencias**: Reaccionar a cambios específicos
- **Múltiples useEffect**: Diferentes responsabilidades separadas
- **Estados de carga realistas**: Loading, success, error
- **Limpieza apropiada**: Cancelar timers si es necesario

## 🤓 Repaso de conceptos clave

### 📚 **Lo que aprendimos hoy:**
- **Ciclo de vida**: Montaje, Actualización, Desmontaje
- **useEffect** es nuestro Hook para efectos secundarios y control del ciclo de vida
- **3 formas de ejecutar useEffect**: al montar, en cada render, cuando cambian dependencias
- **Estados de carga** son fundamentales en apps reales
- **Limpieza** es crucial para evitar memory leaks
- **Múltiples useEffect** pueden coexistir para diferentes propósitos

### 🔑 **Patrones importantes de useEffect:**

```jsx
// 1. Solo al montar/desmontar
useEffect(() => {
  // Configuración inicial
  return () => {
    // Limpieza
  };
}, []);

// 2. Cuando cambian dependencias específicas
useEffect(() => {
  // Reaccionar a cambios
}, [dependency1, dependency2]);

// 3. En cada renderizado (usar con cuidado)
useEffect(() => {
  // Se ejecuta siempre
});
```

### 🎯 **Casos de uso comunes:**
- **Cargar datos** del servidor (al montar)
- **Actualizar título** de la página (cuando cambia estado)
- **Crear timers/intervals** (con limpieza)
- **Suscribirse a eventos** (con desuscripción)
- **Guardar en localStorage** (cuando cambian datos)

## 💭 Reflexión final

### 🎉 Comparte con la clase:
- ¿Qué diferencia notaste entre useEffect con y sin dependencias?
- ¿Por qué es importante limpiar los efectos?
- ¿En qué situaciones de tu vida diaria hay "efectos secundarios"?
- ¿Cómo se relaciona el ciclo de vida con las fases de un proyecto?

## 🏠 Tarea para la próxima clase
1. **Practica** los 3 tipos de useEffect con diferentes ejemplos
2. **Crea** un componente que cambie de color según la hora del día
3. **Experimenta** con timers y limpieza
4. **Identifica** qué efectos secundarios necesitarías en una app real

## 🔮 Próxima sesión:
Combinaremos **useState + useEffect** para crear una aplicación más compleja con manejo de formularios y validaciones en tiempo real.

¡Excelente trabajo! 🌟
Ahora puedes hacer que tus componentes **reaccionen** a cambios y **carguen datos** como aplicaciones profesionales.
