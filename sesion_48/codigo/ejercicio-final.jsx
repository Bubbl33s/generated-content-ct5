// Ejercicio Final - Sesión 48: Galería de Amigas
// Tema: Listas, keys y renderizado dinámico con .map()

import React from "react";

const EjercicioFinal = () => {
  // Array de 4 amigas con nombre, hobby y color favorito
  const amigas = [
    {
      id: 1,
      nombre: "Ana",
      hobby: "Leer libros",
      colorFavorito: "#ff6b6b",
    },
    {
      id: 2,
      nombre: "Belén",
      hobby: "Bailar",
      colorFavorito: "#4ecdc4",
    },
    {
      id: 3,
      nombre: "Carmen",
      hobby: "Pintar",
      colorFavorito: "#45b7d1",
    },
    {
      id: 4,
      nombre: "Daniela",
      hobby: "Cocinar",
      colorFavorito: "#96ceb4",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>💕 Galería de Mis Amigas</h1>

      <div style={styles.galeria}>
        {amigas.map((amiga) => (
          <div
            key={amiga.id}
            style={{
              ...styles.tarjeta,
              borderColor: amiga.colorFavorito,
              boxShadow: `0 4px 8px ${amiga.colorFavorito}40`,
            }}
          >
            <div
              style={{
                ...styles.header,
                backgroundColor: amiga.colorFavorito,
              }}
            >
              <h3 style={styles.nombre}>{amiga.nombre}</h3>
            </div>

            <div style={styles.contenido}>
              <p style={styles.hobby}>
                <span style={styles.etiqueta}>Hobby:</span>
                {amiga.hobby}
              </p>

              <div style={styles.colorInfo}>
                <span style={styles.etiqueta}>Color favorito:</span>
                <div
                  style={{
                    ...styles.colorMuestra,
                    backgroundColor: amiga.colorFavorito,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos del componente
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
    fontSize: "2rem",
  },
  galeria: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "10px",
  },
  tarjeta: {
    border: "3px solid",
    borderRadius: "15px",
    overflow: "hidden",
    backgroundColor: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  header: {
    padding: "15px",
    textAlign: "center",
  },
  nombre: {
    margin: 0,
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
  },
  contenido: {
    padding: "20px",
  },
  hobby: {
    margin: "0 0 15px 0",
    fontSize: "1rem",
    color: "#555",
  },
  etiqueta: {
    fontWeight: "bold",
    display: "inline-block",
    marginRight: "8px",
    color: "#333",
  },
  colorInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  colorMuestra: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "2px solid #ddd",
  },
};

export default EjercicioFinal;
