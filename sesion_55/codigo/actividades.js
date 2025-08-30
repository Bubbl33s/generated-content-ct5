// Archivo: useInput.js
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return [value, handleChange];
};

// Archivo: useDarkMode.js
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  
  return [isDark, toggleDarkMode];
};

// Archivo: useCounter.js
export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return [count, increment, decrement, reset];
};

// Archivo: useColorFavorito.js
export const useColorFavorito = () => {
  const [color, setColor] = useState('#ffffff');
  const [nombreColor, setNombreColor] = useState('');
  
  const cambiarColor = (nuevoColor, nombre) => {
    setColor(nuevoColor);
    setNombreColor(nombre);
  };
  
  return [color, nombreColor, cambiarColor];
};