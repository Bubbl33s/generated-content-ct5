function CargadorBasico() {
  const [estaCargando, setEstaCargando] = useState(true);
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Simular petición a servidor (2 segundos)
    const timer = setTimeout(() => {
      setDatos("¡Datos cargados! 🎉");
      setEstaCargando(false);
    }, 2000);

    // Limpieza: cancelar timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // Solo al montar

  if (estaCargando) {
    return <p>🔄 Cargando datos...</p>;
  }

  return <p>{datos}</p>;
}
