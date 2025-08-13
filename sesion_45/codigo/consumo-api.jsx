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
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/pikachu"
        );

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error("Error al obtener el Pokémon");
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
          tipos: data.types.map((type) => type.type.name),
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
    <div
      style={{
        border: "2px solid #ffcc00",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        maxWidth: "300px",
      }}
    >
      <h2>
        #{pokemon.id} - {pokemon.nombre}
      </h2>
      <img
        src={pokemon.imagen}
        alt={pokemon.nombre}
        style={{ width: "150px", height: "150px" }}
      />

      <div>
        <p>
          <strong>Peso:</strong> {pokemon.peso / 10} kg
        </p>
        <p>
          <strong>Altura:</strong> {pokemon.altura / 10} m
        </p>
        <p>
          <strong>Tipos:</strong> {pokemon.tipos.join(", ")}
        </p>
      </div>
    </div>
  );
}
