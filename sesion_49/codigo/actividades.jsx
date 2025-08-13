// FormularioRegistro.jsx
import { useState } from 'react';

function FormularioRegistro() {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const [errores, setErrores] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const validarCampo = (nombre, valor) => {
    switch(nombre) {
      case 'nombre':
        if (valor.length < 3) return 'El nombre debe tener al menos 3 caracteres';
        break;
      case 'email':
        if (!valor.includes('@')) return 'Email inválido';
        break;
      case 'password':
        if (valor.length < 6) return 'La contraseña debe tener al menos 6 caracteres';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prev => ({
      ...prev,
      [name]: value
    }));
    
    const error = validarCampo(name, value);
    setErrores(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar todos los campos antes de enviar
    const nuevosErrores = {};
    Object.keys(datos).forEach(campo => {
      nuevosErrores[campo] = validarCampo(campo, datos[campo]);
    });
    setErrores(nuevosErrores);

    // Si no hay errores, enviar el formulario
    if (!Object.values(nuevosErrores).some(error => error !== '')) {
      console.log('Formulario válido', datos);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="campo">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          className={errores.nombre ? 'error' : ''}
        />
        {errores.nombre && <span className="mensaje-error">{errores.nombre}</span>}
      </div>

      <div className="campo">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={datos.email}
          onChange={handleChange}
          className={errores.email ? 'error' : ''}
        />
        {errores.email && <span className="mensaje-error">{errores.email}</span>}
      </div>

      <div className="campo">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={datos.password}
          onChange={handleChange}
          className={errores.password ? 'error' : ''}
        />
        {errores.password && <span className="mensaje-error">{errores.password}</span>}
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
}

export default FormularioRegistro;