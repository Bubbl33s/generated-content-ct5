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

## � Consumo de APIs - Conectando con el mundo exterior

Hasta ahora hemos trabajado con datos que creamos nosotras, pero en aplicaciones reales necesitamos obtener información de **APIs** (servidores externos). ¡Vamos a aprender cómo!

### 🤔 **¿Qué es una API?**

**API** significa **Application Programming Interface** (Interfaz de Programación de Aplicaciones). Es como un **"mesero digital"** que:

- 📝 **Recibe tu pedido** (solicitud de datos)
- 🏃‍♀️ **Va a la cocina** (servidor/base de datos)
- 🍽️ **Te trae lo que pediste** (respuesta con datos)

### 🌍 **APIs populares que usamos todos los días:**
- **Instagram**: Para ver fotos y stories
- **WhatsApp**: Para enviar y recibir mensajes
- **Spotify**: Para buscar y reproducir música
- **Google Maps**: Para encontrar direcciones
- **Clima**: Para saber si lloverá hoy

### 📊 **¿Qué tipo de datos nos dan las APIs?**
Las APIs nos devuelven información en formato **JSON** (JavaScript Object Notation):

```json
{
  "nombre": "Pikachu",
  "tipo": "eléctrico",
  "peso": 6,
  "altura": 40,
  "imagen": "https://..."
}
```

### 🛠️ **¿Cómo obtenemos datos de una API?**

En JavaScript usamos **fetch()** - una función especial para hacer peticiones a APIs:

```jsx
// Estructura básica
fetch('URL_DE_LA_API')
  .then(response => response.json())  // Convertir a JSON
  .then(data => console.log(data))    // Usar los datos
  .catch(error => console.log(error)) // Manejar errores
```

### ⚡ **Fetch con async/await (más moderno y fácil de leer):**
```jsx
async function obtenerDatos() {
  try {
    const response = await fetch('URL_DE_LA_API');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}
```

## 🐾 Ejemplo práctico: API de Pokémon

Vamos a crear un componente que obtenga información de un Pokémon usando la **PokéAPI** (una API gratuita y muy popular):

### �🎯 **Ejemplo básico: Mostrar un Pokémon**
```jsx
function PokemonBasico() {
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener datos del Pokémon
    const obtenerPokemon = async () => {
      try {
        setCargando(true);

        // Hacer petición a la API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Error al obtener el Pokémon');
        }

        // Convertir respuesta a JSON
        const data = await response.json();

        // Guardar solo los datos que necesitamos
        const pokemonInfo = {
          nombre: data.name,
          id: data.id,
          peso: data.weight,
          altura: data.height,
          imagen: data.sprites.front_default,
          tipos: data.types.map(type => type.type.name)
        };

        setPokemon(pokemonInfo);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPokemon();
  }, []); // Solo ejecutar al montar el componente

  // Estados de carga
  if (cargando) return <p>🔄 Cargando Pokémon...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (!pokemon) return <p>😥 No se encontró el Pokémon</p>;

  return (
    <div style={{
      border: '2px solid #ffcc00',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '300px'
    }}>
      <h2>#{pokemon.id} - {pokemon.nombre}</h2>
      <img
        src={pokemon.imagen}
        alt={pokemon.nombre}
        style={{ width: '150px', height: '150px' }}
      />

      <div>
        <p><strong>Peso:</strong> {pokemon.peso / 10} kg</p>
        <p><strong>Altura:</strong> {pokemon.altura / 10} m</p>
        <p><strong>Tipos:</strong> {pokemon.tipos.join(', ')}</p>
      </div>
    </div>
  );
}
```

### 🎮 **Ejemplo interactivo: Buscar cualquier Pokémon**
```jsx
function BuscadorPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [nombreBusqueda, setNombreBusqueda] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const buscarPokemon = async () => {
    if (!nombreBusqueda.trim()) {
      setError('Por favor escribe un nombre');
      return;
    }

    try {
      setCargando(true);
      setError(null);
      setPokemon(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombreBusqueda.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }

      const data = await response.json();

      setPokemon({
        nombre: data.name,
        id: data.id,
        imagen: data.sprites.front_default,
        peso: data.weight,
        altura: data.height,
        tipos: data.types.map(type => type.type.name),
        habilidades: data.abilities.map(ability => ability.ability.name)
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    buscarPokemon();
  };

  return (
    <div>
      <h2>🔍 Buscador de Pokémon</h2>

      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
          placeholder="Escribe un nombre de Pokémon (ej: pikachu, charmander)"
          style={{
            padding: '10px',
            width: '250px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          disabled={cargando}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ffcc00',
            border: 'none',
            borderRadius: '5px',
            cursor: cargando ? 'not-allowed' : 'pointer'
          }}
        >
          {cargando ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          ❌ {error}
        </p>
      )}

      {pokemon && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          border: '2px solid #3498db',
          borderRadius: '10px',
          backgroundColor: '#f8f9fa'
        }}>
          <h3>#{pokemon.id} - {pokemon.nombre.toUpperCase()}</h3>

          {pokemon.imagen && (
            <img
              src={pokemon.imagen}
              alt={pokemon.nombre}
              style={{ width: '120px', height: '120px' }}
            />
          )}

          <div style={{ textAlign: 'left', marginTop: '10px' }}>
            <p><strong>📏 Altura:</strong> {pokemon.altura / 10} metros</p>
            <p><strong>⚖️ Peso:</strong> {pokemon.peso / 10} kg</p>
            <p><strong>🏷️ Tipos:</strong> {pokemon.tipos.join(', ')}</p>
            <p><strong>⭐ Habilidades:</strong> {pokemon.habilidades.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

### 🌤️ **Ejemplo adicional: API del Clima**
```jsx
function ClimaBasico() {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerClima = async () => {
      try {
        // API gratuita de OpenWeatherMap (requiere registrarse para obtener API key)
        // Para este ejemplo usamos una API de prueba
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=TU_API_KEY&units=metric');

        if (!response.ok) {
          throw new Error('Error al obtener clima');
        }

        const data = await response.json();

        setClima({
          ciudad: data.name,
          temperatura: Math.round(data.main.temp),
          descripcion: data.weather[0].description,
          humedad: data.main.humidity
        });

      } catch (error) {
        console.log('Error del clima:', error);
        // Para el ejemplo, usamos datos de prueba
        setClima({
          ciudad: 'Ciudad de México',
          temperatura: 22,
          descripcion: 'parcialmente nublado',
          humedad: 65
        });
      } finally {
        setCargando(false);
      }
    };

    obtenerClima();
  }, []);

  if (cargando) return <p>🔄 Cargando clima...</p>;

  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#e3f2fd',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h3>🌤️ Clima actual</h3>
      <p><strong>📍 Ciudad:</strong> {clima.ciudad}</p>
      <p><strong>🌡️ Temperatura:</strong> {clima.temperatura}°C</p>
      <p><strong>☁️ Condición:</strong> {clima.descripcion}</p>
      <p><strong>💧 Humedad:</strong> {clima.humedad}%</p>
    </div>
  );
}
```

## 💡 Conceptos importantes sobre APIs

### 🔐 **Estados de una petición HTTP:**
- **200**: ✅ Éxito - Todo salió bien
- **404**: ❌ No encontrado - El recurso no existe
- **500**: 💥 Error del servidor - Problema en la API

### 🛡️ **Buenas prácticas:**
1. **Siempre manejar errores** con try/catch
2. **Mostrar estados de carga** para mejor experiencia
3. **Limpiar peticiones** si el componente se desmonta
4. **No hacer demasiadas peticiones** (evitar en cada render)
5. **Validar datos** antes de usarlos

### ⚠️ **Errores comunes:**
```jsx
// ❌ MAL - Petición en cada render
function ComponenteMalo() {
  const [data, setData] = useState(null);

  fetch('https://api.ejemplo.com/datos')  // ¡Se ejecuta constantemente!
    .then(res => res.json())
    .then(setData);

  return <div>{data?.nombre}</div>;
}

// ✅ BIEN - Petición solo al montar
function ComponenteBueno() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.ejemplo.com/datos')
      .then(res => res.json())
      .then(setData);
  }, []); // Solo al montar

  return <div>{data?.nombre}</div>;
}
```

### 🎯 **¿Cuándo usar cada patrón?**
- **Al montar**: Cargar datos iniciales del usuario, configuración
- **Con dependencias**: Buscar cuando cambia un filtro o ID
- **Con botón**: Cuando el usuario hace una acción específica

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

4. **Peticiones API sin control**:
```jsx
// ❌ MAL - Petición en cada render
function ComponenteMalo() {
  const [data, setData] = useState(null);

  fetch('https://api.ejemplo.com/datos')  // ¡Se ejecuta constantemente!
    .then(res => res.json())
    .then(setData);

  return <div>{data?.nombre}</div>;
}

// ✅ BIEN - Petición solo al montar
function ComponenteBueno() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.ejemplo.com/datos')
      .then(res => res.json())
      .then(setData);
  }, []); // Solo al montar

  return <div>{data?.nombre}</div>;
}
```

### 📋 **Reglas de oro para useEffect:**
- Siempre incluir **todas las variables** que uses dentro del efecto en las dependencias
- **Limpiar siempre** timers, intervals, suscripciones
- **Array vacío []** = solo al montar/desmontar
- **Sin array** = en cada renderizado (usar con cuidado)
- **Con dependencias** = cuando esas variables cambien
- **Manejar errores** en peticiones a APIs
- **Mostrar estados de carga** para mejor experiencia de usuario

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
- **APIs** nos permiten obtener datos de servidores externos
- **fetch()** es la función para hacer peticiones HTTP
- **async/await** hace el código más legible que .then()
- **Limpieza** es crucial para evitar memory leaks
- **Múltiples useEffect** pueden coexistir para diferentes propósitos

### 🔑 **Patrones importantes de useEffect:**

```jsx
// 1. Solo al montar/desmontar
useEffect(() => {
  // Configuración inicial, cargar datos de API
  return () => {
    // Limpieza
  };
}, []);

// 2. Cuando cambian dependencias específicas
useEffect(() => {
  // Reaccionar a cambios, buscar en API
}, [dependency1, dependency2]);

// 3. En cada renderizado (usar con cuidado)
useEffect(() => {
  // Se ejecuta siempre
});
```

### 🌐 **Patrones de APIs:**
```jsx
// Patrón básico de fetch
useEffect(() => {
  const obtenerDatos = async () => {
    try {
      setCargando(true);
      const response = await fetch('URL_API');
      if (!response.ok) throw new Error('Error en la petición');
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  };

  obtenerDatos();
}, []);
```

### 🎯 **Casos de uso comunes:**
- **Cargar datos** del servidor (al montar)
- **Buscar información** cuando cambia un filtro o término de búsqueda
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
- ¿Qué APIs conoces o usas en tu día a día?
- ¿Por qué crees que es importante manejar estados de carga al obtener datos?

## 🏠 Tarea para la próxima clase
1. **Practica** los 3 tipos de useEffect con diferentes ejemplos
2. **Experimenta** con la API de Pokémon buscando diferentes pokémones
3. **Investiga** otras APIs gratuitas (JSONPlaceholder, API de gatos, etc.)
4. **Crea** un componente que muestre la hora actual y se actualice cada segundo
5. **Intenta** hacer una petición a una API diferente (con manejo de errores)
6. **Identifica** qué efectos secundarios y APIs necesitarías en una app real

## 🔮 Próxima sesión:
Combinaremos **useState + useEffect + APIs** para crear una aplicación más compleja con formularios, validaciones en tiempo real y persistencia de datos.

¡Excelente trabajo! 🌟
Ahora puedes hacer que tus componentes **reaccionen** a cambios, **carguen datos** de APIs como aplicaciones profesionales, y **manejen el ciclo de vida** completo. ¡Tus apps pueden conectarse con el mundo exterior!
