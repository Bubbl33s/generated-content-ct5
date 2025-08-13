// Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenida a mi sitio</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  );
}

// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Inicio</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>Sobre mí</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  );
}

// GamesList.jsx
import { Link } from 'react-router-dom';

function GamesList() {
  const games = [
    { id: 1, name: "Super Mario" },
    { id: 2, name: "Minecraft" },
    { id: 3, name: "Pokemon" }
  ];

  return (
    <div>
      <h2>Mis Juegos Favoritos</h2>
      {games.map(game => (
        <div key={game.id}>
          <Link to={`/game/${game.id}`}>{game.name}</Link>
        </div>
      ))}
    </div>
  );
}

// GameDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';

function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Detalles del Juego {id}</h2>
      <button onClick={() => navigate('/games')}>Volver</button>
    </div>
  );
}