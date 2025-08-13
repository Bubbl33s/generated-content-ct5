// ProductList.jsx
import React, { useState } from 'react';

// Datos de ejemplo generados por IA
const productosIniciales = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    precio: 49.99,
    descripcion: "Auriculares inalámbricos con cancelación de ruido",
    categoria: "audio",
    rating: 4.5
  },
  // ... más productos
];

const ProductList = () => {
  const [productos, setProductos] = useState(productosIniciales);
  const [categoria, setCategoria] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  const filtrarProductos = () => {
    return productos
      .filter(p => categoria === 'todos' || p.categoria === categoria)
      .filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
  };

  const ordenarPorPrecio = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(productosOrdenados);
  };

  return (
    <div className="container">
      <div className="controles">
        <select 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="gadgets">Gadgets</option>
          <option value="accesorios">Accesorios</option>
          <option value="audio">Audio</option>
        </select>

        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <button onClick={ordenarPorPrecio}>
          Ordenar por precio
        </button>
      </div>

      <div className="productos-grid">
        {filtrarProductos().map(producto => (
          <div key={producto.id} className="producto-card">
            <h3>{producto.nombre}</h3>
            <p>${producto.precio.toFixed(2)}</p>
            <p>{producto.descripcion}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Rating: {producto.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;