// Actividad: Mi primer componente
function Tarjeta() {
  return (
    <div className="tarjeta">
      <h2>Ana López</h2>
      <p>Serie favorita: Stranger Things</p>
      <p>Comida favorita: Pizza</p>
    </div>
  );
}

// Actividad: Tarjeta con props
function Tarjeta(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Serie favorita: {props.serie}</p>
      <p>Comida favorita: {props.comida}</p>
    </div>
  );
}

// Uso:
<Tarjeta 
  nombre="Ana López"
  serie="Stranger Things"
  comida="Pizza"
/>

// Ejercicio: Tarjeta de Personaje
function TarjetaPersonaje({ nombre, poder, imagen }) {
  return (
    <div className="tarjeta-personaje">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Superpoder: {poder}</p>
    </div>
  );
}

// Uso:
<TarjetaPersonaje
  nombre="Wonder Woman"
  poder="Súper fuerza"
  imagen="wonder-woman.jpg"
/>

// Reto final: Red Social
function Post({ titulo, contenido, autor }) {
  return (
    <div className="post">
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <small>Por: {autor}</small>
    </div>
  );
}

function Comentario({ texto, usuario }) {
  return (
    <div className="comentario">
      <p>{texto}</p>
      <small>- {usuario}</small>
    </div>
  );
}

function MeGusta({ cantidad = 0 }) {
  return (
    <div className="me-gusta">
      <span>❤️ {cantidad}</span>
    </div>
  );
}