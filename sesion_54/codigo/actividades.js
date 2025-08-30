// Actividad 1: Componente Button
const Button = ({ color = 'primary', text, onClick }) => {
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    success: 'bg-green-500 hover:bg-green-600'
  };

  return (
    <button
      className={`${styles[color]} text-white px-4 py-2 rounded transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Actividad 2: Layout Blog
const BlogLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Blog</h1>
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-600">Inicio</a>
            <a href="#" className="hover:text-purple-600">Artículos</a>
            <a href="#" className="hover:text-purple-600">Acerca de</a>
          </div>
        </nav>
      </header>

      <div className="container mx-auto p-4 flex gap-4">
        <main className="flex-grow">{children}</main>
        <aside className="w-64 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-4">Categorías</h2>
          <ul className="space-y-2">
            <li>Tecnología</li>
            <li>Diseño</li>
            <li>Desarrollo</li>
          </ul>
        </aside>
      </div>

      <footer className="bg-white mt-8 p-4 text-center">
        <div className="container mx-auto">
          <p>© 2024 Mi Blog - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

// Mini proyecto: Galería de productos
const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-purple-600 font-bold">${price}</p>
      <Button text="Agregar al carrito" color="primary" onClick={() => alert('¡Producto agregado!')} />
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};