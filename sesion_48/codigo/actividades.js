// Ejercicio 1: Lista de colores
const Colores = () => {
  const colores = ['rosa', 'morado', 'azul'];
  
  return (
    <ul>
      {colores.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
};

// Ejercicio 2: Lista de personajes
const Personajes = () => {
  const personajes = [
    { id: 1, nombre: 'Harry Potter', serie: 'Harry Potter', poder: 'Magia' },
    { id: 2, nombre: 'Eleven', serie: 'Stranger Things', poder: 'Telequinesis' },
    { id: 3, nombre: 'Spider-Man', serie: 'Marvel', poder: 'Trepar paredes' }
  ];

  return (
    <div>
      {personajes.map(personaje => (
        <div key={personaje.id}>
          <h3>{personaje.nombre}</h3>
          <p>Serie: {personaje.serie}</p>
          <p>Poder: {personaje.poder}</p>
        </div>
      ))}
    </div>
  );
};

// Ejercicio Final: Galería de amigas
const GaleriaAmigas = () => {
  const amigas = [
    { id: 1, nombre: 'Ana', hobby: 'Pintar', colorFavorito: '#FF69B4' },
    { id: 2, nombre: 'Belen', hobby: 'Bailar', colorFavorito: '#9370DB' },
    { id: 3, nombre: 'Carmen', hobby: 'Cantar', colorFavorito: '#20B2AA' },
    { id: 4, nombre: 'Diana', hobby: 'Fotografía', colorFavorito: '#FFB6C1' }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {amigas.map(amiga => (
        <div
          key={amiga.id}
          style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: amiga.colorFavorito,
            color: 'white',
            width: '200px'
          }}
        >
          <h3>{amiga.nombre}</h3>
          <p>Hobby: {amiga.hobby}</p>
        </div>
      ))}
    </div>
  );
};