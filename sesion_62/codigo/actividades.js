// Ejemplo de componente híbrido

// Navbar híbrida
<nav class="navbar navbar-expand-lg hover:bg-blue-100">
  <div class="container-fluid flex items-center">
    <a class="navbar-brand text-xl hover:text-blue-600">MiApp</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item hover:bg-gray-100 rounded-lg">
          <a class="nav-link active">Inicio</a>
        </li>
        <li class="nav-item hover:bg-gray-100 rounded-lg">
          <a class="nav-link">Productos</a>
        </li>
        <li class="nav-item hover:bg-gray-100 rounded-lg">
          <a class="nav-link">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

// Card híbrida
<div class="card shadow-lg hover:shadow-xl transition-shadow">
  <div class="card-body p-0">
    <div class="p-6 space-y-4">
      <h5 class="card-title text-xl font-bold text-blue-600">Mi Card</h5>
      <p class="card-text text-gray-600 hover:text-gray-800">
        Este es un ejemplo de cómo combinar Bootstrap y Tailwind
        para crear componentes personalizados y únicos.
      </p>
      <button class="btn btn-primary hover:bg-blue-700 transform hover:scale-105 transition">
        Acción
      </button>
    </div>
  </div>
</div>