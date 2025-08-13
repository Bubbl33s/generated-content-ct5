// Proyecto: Perfil con estado de carga
import { useState, useEffect } from 'react';

function PerfilUsuaria() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    // Simulamos la carga de datos
    setTimeout(() => {
      setPerfil({
        nombre: 'Ana',
        emoji: '🦋',
        color: 'Morado'
      });
      setEstaCargando(false);
    }, 2000);
  }, []);

  if (estaCargando) {
    return <div className="cargando">Cargando perfil...</div>;
  }

  return (
    <div className="perfil">
      <h2>¡Hola! Soy {perfil.nombre}</h2>
      <p>Mi emoji favorito es: {perfil.emoji}</p>
      <p>Mi color favorito es: {perfil.color}</p>
    </div>
  );
}

export default PerfilUsuaria;