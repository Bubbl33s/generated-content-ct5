// Actividad 1: Botón básico con Tailwind
const BotonTailwind = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      ¡Haz clic!
    </button>
  )
}

// Actividad 2: Tarjeta de perfil
const TarjetaPerfil = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Foto de perfil"
        className="w-24 h-24 rounded-full"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">
        Ana García
      </h2>
      <p className="mt-2 text-gray-600">
        Desarrolladora Frontend
      </p>
    </div>
  )
}

// Reto: Variaciones de botones
const BotonesPersonalizados = () => {
  return (
    <div className="space-x-4">
      <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        Botón Rosa
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
        Botón Verde
      </button>
      <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
        Botón Redondeado
      </button>
    </div>
  )
}