# Sesión 54: Componentes reutilizables y layout

## 🤝 Acuerdos de clase
- Respetar turnos
- Compartir dudas y soluciones
- Probar ideas nuevas

## 🎯 Objetivos de la sesión
- Comprender el patrón children en React para máxima flexibilidad
- Crear layouts base reutilizables y escalables
- Aplicar el principio DRY (Don't Repeat Yourself) en componentes

---

## 🚀 Actividad inicial
¿Qué parte de una web te gustaría poder reutilizar en todos tus proyectos? ¿Por qué?

---

## 🧩 Children: El superpoder de React

En React, `children` permite que un componente envuelva y muestre cualquier otro contenido. Así puedes crear "contenedores" reutilizables.

### Ejemplo básico:
```jsx
const Panel = ({ children }) => (
  <div className="border rounded p-4 bg-white shadow">
    {children}
  </div>
);

// Uso:
<Panel>
  <h2>¡Hola!</h2>
  <p>Este contenido es flexible.</p>
</Panel>
```

---

## 🏗️ Layouts base: DRY desde la raíz

Un layout base es un componente que define la estructura general de la página y usa `children` para el contenido variable.

### Ejemplo de layout base:
```jsx
const BaseLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-indigo-700 text-white p-4">Mi App</header>
    <main className="flex-1 container mx-auto p-4">{children}</main>
    <footer className="bg-gray-200 p-4 text-center">© 2025</footer>
  </div>
);

// Uso:
<BaseLayout>
  <h1>Bienvenida</h1>
  <p>Este es el contenido principal.</p>
</BaseLayout>
```

---


## 🛠️ Componentes DRY: No repitas, compón (Slide 1)

El principio **DRY** (Don't Repeat Yourself) nos ayuda a evitar repetir código creando componentes reutilizables. Si ves que copias y pegas el mismo patrón varias veces, ¡hazlo componente!

### Ejemplo: Botón base reutilizable
```jsx
const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded font-semibold focus:outline-none bg-blue-600 text-white hover:bg-blue-700"
    {...props}
  >
    {children}
  </button>
);
```

Así puedes usar el mismo botón en toda tu app, cambiando solo el contenido:
```jsx
<Button>Guardar</Button>
<Button>Enviar</Button>
<Button>Cancelar</Button>
```

---

## 🛠️ Componentes DRY: Variantes y estilos flexibles (Slide 2)

El verdadero poder DRY es que puedes crear **variantes** fácilmente. Por ejemplo, puedes pasar una prop `variant` para cambiar el estilo del botón sin duplicar código:

```jsx
const Button = ({ children, variant = "primary", ...props }) => {
  const base = "px-4 py-2 rounded font-semibold focus:outline-none";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};
```

Ahora puedes crear muchos tipos de botones a partir de uno solo:
```jsx
<Button>Guardar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="danger">Eliminar</Button>
```

Esto te permite mantener tu código limpio, consistente y fácil de mantener.

---

## 🎨 Actividad práctica 1: Layout Blog
Crea un layout base para un blog que reciba children y tenga:
- Header con título
- Main para el contenido
- Footer simple

---

## 🎨 Actividad práctica 2: Componente Card flexible
Crea un componente `Card` que use children para mostrar cualquier contenido dentro de la tarjeta.

Ejemplo de uso:
```jsx
<Card>
  <h3>Producto destacado</h3>
  <p>¡Aprovecha la oferta!</p>
</Card>
```

---

## � Mini-proyecto: Dashboard DRY
Crea un dashboard con:
- Un layout base reutilizable
- Varias cards usando children
- Botones DRY para acciones

---

## 📦 Organización recomendada
```
src/
  components/
    layout/
      BaseLayout.jsx
    common/
      Button.jsx
      Card.jsx
```

---

## 📝 Reflexión final
- ¿Cómo te ayuda el patrón children a evitar código repetido?
- ¿Qué ventajas tiene separar layout y contenido?
- ¿Qué otro componente DRY podrías crear para tu proyecto?

---

## 📚 Recursos útiles
- [React: Children](https://es.react.dev/reference/react/Children)
- [Tailwind Layout Patterns](https://tailwindcss.com/docs/layout)
- [Principio DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
