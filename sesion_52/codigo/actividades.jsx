// Componente ProductGrid.jsx
import React from 'react';

const products = [
  {
    id: 1,
    nombre: "Camiseta Oversized",
    precio: 299,
    categoria: "tops"
  },
  // ... más productos
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-100 p-4 rounded">
          <h2 className="font-bold text-lg mb-4">Filtros</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Tops
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Pantalones
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                <h3 className="text-lg font-bold">{product.nombre}</h3>
                <p className="text-gray-600">${product.precio}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductGrid;