// Actividad 1 - Botones
const PrimaryButton = () => (
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Botón Primario
  </button>
);

const SuccessButton = () => (
  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    Botón Éxito
  </button>
);

const AlertButton = () => (
  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    Botón Alerta
  </button>
);

// Actividad 2 - Tarjeta de perfil
const ProfileCard = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img 
      className="w-full h-48 object-cover"
      src="https://via.placeholder.com/300"
      alt="Profile"
    />
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">Ana García</h3>
      <p className="text-gray-700 text-base">
        Desarrolladora web frontend apasionada por el diseño y la tecnología.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Seguir
      </button>
    </div>
  </div>
);

// Actividad 4 - Formulario de contacto
const ContactForm = () => (
  <form className="max-w-md mx-auto">
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Tu nombre"
      />
    </div>
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="email"
        placeholder="Tu email"
      />
    </div>
    <div className="mb-4">
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="4"
        placeholder="Tu mensaje"
      ></textarea>
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      Enviar mensaje
    </button>
  </form>
);