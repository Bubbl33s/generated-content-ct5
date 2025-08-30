# Sesión 57: Integración de datos locales (JSON, arrays)

## 🤝 Acuerdos de clase
- Mantener las cámaras encendidas
- Participar activamente
- Respetar los turnos de palabra
- Preguntar cuando tengamos dudas

## � Objetivos de la sesión
- Aprender a trabajar con datos locales en archivos JSON
- Integrar arrays de datos en componentes React
- Crear interfaces dinámicas usando datos estáticos
- Practicar el mapeo de datos para generar componentes
- Preparar la base para futuras conexiones con APIs

## 🔄 Actividad inicial: ¿Qué comes hoy?
Comparte en el chat 3 emojis que representen tu comida favorita 🍕 🍣 🥑

## 💡 ¿Por qué necesitamos datos locales?
- Para tener información estática en nuestra aplicación
- Para practicar antes de conectarnos a APIs reales
- Para hacer prototipos rápidos

## 📋 Creando nuestro primer archivo de datos
Vamos a crear un archivo llamado `data.json` con información sobre películas:

```json
{
  "peliculas": [
    {
      "id": 1,
      "titulo": "Barbie",
      "año": 2023,
      "genero": "Comedia"
    },
    {
      "id": 2,
      "titulo": "Elementos",
      "año": 2023,
      "genero": "Animación"
    }
  ]
}
```

## 🔍 Importando datos JSON en React
```jsx
import datos from './data.json';

function ListaPeliculas() {
  return (
    <div>
      {datos.peliculas.map(pelicula => (
        <div key={pelicula.id}>
          <h3>{pelicula.titulo}</h3>
          <p>{pelicula.año}</p>
        </div>
      ))}
    </div>
  );
}
```

## 💪 Ejercicio práctico 1
Crea un archivo `libros.json` con tus 3 libros favoritos incluyendo:
- Título
- Autor
- Año
- Género

## 🎯 Trabajando con arrays locales
```jsx
const colores = [
  { id: 1, nombre: "Rosa", hex: "#FF69B4" },
  { id: 2, nombre: "Morado", hex: "#800080" },
  { id: 3, nombre: "Azul", hex: "#0000FF" }
];
```

## 🎨 Usando arrays en componentes
```jsx
function PaletaColores() {
  return (
    <div>
      {colores.map(color => (
        <div
          key={color.id}
          style={{
            backgroundColor: color.hex,
            width: '100px',
            height: '100px'
          }}
        >
          {color.nombre}
        </div>
      ))}
    </div>
  );
}
```

## 💪 Ejercicio práctico 2
Crea un array de objetos con tus 5 canciones favoritas incluyendo:
- Título
- Artista
- Duración
- Género

## 🔄 useState con datos locales
```jsx
function ListaCanciones() {
  const [canciones, setCanciones] = useState(misCanciones);
  const [filtro, setFiltro] = useState('');

  const cancionesFiltradas = canciones.filter(cancion =>
    cancion.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar canción..."
      />
      {cancionesFiltradas.map(cancion => (
        <div key={cancion.id}>
          <h3>{cancion.titulo}</h3>
          <p>{cancion.artista}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🎯 Mini-proyecto: Catálogo de Series
Crea un componente que muestre un catálogo de series usando datos locales con:
- Título
- Imagen (URL)
- Descripción
- Categoría

## 💭 Reflexión final
¿Qué ventajas y desventajas encuentras al trabajar con datos locales vs. datos de una API?

## 🏠 Tarea
1. Amplía tu catálogo de series añadiendo más datos
2. Agrega funcionalidad de filtrado por categoría
3. Implementa un botón para ordenar por título

## 👏 ¡Excelente trabajo!
Has aprendido a:
- Trabajar con archivos JSON
- Manejar arrays de datos
- Crear componentes dinámicos
- Implementar filtrado básico
