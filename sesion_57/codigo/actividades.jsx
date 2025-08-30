// data.json
{
  "series": [
    {
      "id": 1,
      "titulo": "Stranger Things",
      "imagen": "https://ejemplo.com/stranger.jpg",
      "descripcion": "Una serie de ciencia ficción y misterio",
      "categoria": "Ciencia Ficción"
    },
    {
      "id": 2,
      "titulo": "Wednesday",
      "imagen": "https://ejemplo.com/wednesday.jpg",
      "descripcion": "Una serie de misterio y fantasía",
      "categoria": "Fantasía"
    }
  ]
}

// CatalogoSeries.jsx
import React, { useState } from 'react';
import datos from './data.json';

function CatalogoSeries() {
  const [series, setSeries] = useState(datos.series);
  const [categoria, setCategoria] = useState('');

  const seriesFiltradas = categoria
    ? series.filter(serie => serie.categoria === categoria)
    : series;

  return (
    <div className="catalogo">
      <select 
        value={categoria} 
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
        <option value="Fantasía">Fantasía</option>
      </select>

      <div className="grid-series">
        {seriesFiltradas.map(serie => (
          <div key={serie.id} className="tarjeta-serie">
            <img src={serie.imagen} alt={serie.titulo} />
            <h3>{serie.titulo}</h3>
            <p>{serie.descripcion}</p>
            <span className="categoria">{serie.categoria}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoSeries;