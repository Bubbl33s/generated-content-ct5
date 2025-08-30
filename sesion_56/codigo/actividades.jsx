// Actividad 1: Saludo según hora
import React, { useState, useEffect } from 'react';

function SaludoHora() {
  const [hora, setHora] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (hora >= 6 && hora < 12) {
    return <h2>¡Buenos días! 🌅</h2>;
  } else if (hora >= 12 && hora < 18) {
    return <h2>¡Buenas tardes! ☀️</h2>;
  } else {
    return <h2>¡Buenas noches! 🌙</h2>;
  }
}

// Actividad 2: Modo claro/oscuro
function TemaBoton() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <button onClick={() => setModoOscuro(!modoOscuro)}>
      {modoOscuro ? "🌙 Cambiar a claro" : "☀️ Cambiar a oscuro"}
    </button>
  );
}

// Actividad 3: Notificaciones
function Notificaciones({ cantidad }) {
  return (
    <div>
      {cantidad > 0 && (
        <span>🔔 Tienes {cantidad} notificaciones</span>
      )}
    </div>
  );
}

// Actividad Final: Mini Red Social
const Post = React.memo(function Post({ titulo, likes, modo }) {
  return (
    <div style={{ 
      background: modo ? '#333' : '#fff',
      color: modo ? '#fff' : '#333'
    }}>
      <h3>{titulo}</h3>
      {likes > 0 && <span>❤️ {likes} likes</span>}
    </div>
  );
});

function MiniRedSocial() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [notificaciones, setNotificaciones] = useState(3);

  return (
    <div>
      <TemaBoton />
      <Notificaciones cantidad={notificaciones} />
      <Post 
        titulo="Mi primer post" 
        likes={5}
        modo={modoOscuro}
      />
    </div>
  );
}