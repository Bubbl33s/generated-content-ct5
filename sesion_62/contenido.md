
# Sesión 62: Archivos de configuración y entorno de desarrollo

## 🤝 Acuerdos de clase
- Compartir dudas y soluciones
- Probar herramientas nuevas
- Mantener el entorno ordenado

---

## 🎯 Objetivos de la sesión
- Entender la importancia de los archivos de configuración en proyectos modernos
- Aprender a personalizar Tailwind para coexistir con otros frameworks (ej: Bootstrap)
- Conocer herramientas clave para el entorno de desarrollo: Prettier, ESLint, Commitlint, etc.

---

## 🚀 Actividad inicial
¿Qué archivo de configuración te ha dado más miedo o curiosidad? ¿Por qué?

---

## 🗂️ ¿Qué es un archivo de configuración?
Son archivos que definen cómo se comporta una herramienta, framework o el propio proyecto. Permiten personalizar, automatizar y mantener el entorno de desarrollo.

Ejemplos comunes:
- `tailwind.config.js` (Tailwind)
- `.eslintrc.json` (ESLint)
- `.prettierrc` (Prettier)
- `package.json` (NPM)
- `commitlint.config.js` (Commitlint)

---


## 🛠️ Slide 1: Personalizando Tailwind con prefijo

¿Por qué usar un prefijo? Si usas Tailwind junto a Bootstrap, puedes evitar conflictos de clases agregando un prefijo personalizado.

### Pasos generales de instalación y configuración:
1. Instala Tailwind:
  ```bash
  npm install -D tailwindcss
  npx tailwindcss init
  ```
2. Abre `tailwind.config.js` y agrega el prefijo:
  ```js
  module.exports = {
    prefix: 'tw-',
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: { extend: {} },
    plugins: [],
  }
  ```
3. Usa las clases con el prefijo en tu HTML/JSX:
  ```html
  <div class="tw-bg-blue-500 tw-p-4">Contenido</div>
  ```
4. Instala Bootstrap si lo necesitas:
  ```bash
  npm install bootstrap
  ```
5. Importa ambos estilos en tu proyecto y ¡listo!

Ahora puedes usar Bootstrap y Tailwind juntos sin que se pisen las clases.

---

## 🛠️ Slide 2: Archivos de configuración clave


### Prettier
Formato automático de código. Archivo: `.prettierrc`

**Instalación y configuración:**
1. Instala Prettier:
  ```bash
  npm install --save-dev prettier
  ```
2. Crea el archivo `.prettierrc` en la raíz del proyecto:
  ```json
  {
    "semi": false,
    "singleQuote": true,
    "tabWidth": 2
  }
  ```
3. (Opcional) Agrega un script en `package.json` para formatear:
  ```json
  "scripts": {
    "format": "prettier --write ."
  }
  ```

### ESLint
Detecta errores y malas prácticas en JS/TS. Archivo: `.eslintrc.json`

**Instalación y configuración:**
1. Instala ESLint:
  ```bash
  npm install --save-dev eslint
  npx eslint --init
  ```
2. Configura el archivo `.eslintrc.json`:
  ```json
  {
    "extends": ["react-app", "eslint:recommended"],
    "rules": {
     "no-unused-vars": "warn"
    }
  }
  ```
3. (Opcional) Agrega un script en `package.json` para revisar:
  ```json
  "scripts": {
    "lint": "eslint src"
  }
  ```

### Commitlint
Verifica que los mensajes de commit sigan una convención. Archivo: `commitlint.config.js`

**Instalación y configuración:**
1. Instala Commitlint y husky:
  ```bash
  npm install --save-dev @commitlint/{config-conventional,cli} husky
  ```
2. Crea el archivo `commitlint.config.js`:
  ```js
  module.exports = { extends: ['@commitlint/config-conventional'] };
  ```
3. Configura Husky para verificar los commits:
  ```bash
  npx husky install
  npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
  ```

---

## 🧩 Slide 3: ¿Por qué usar estas herramientas?
- Mejoran la calidad y consistencia del código
- Facilitan el trabajo en equipo
- Automatizan tareas repetitivas
- Ayudan a detectar errores antes de que lleguen a producción

---


## 🎨 Actividad práctica: Configura tu entorno
1. Agrega un prefijo a Tailwind y úsalo en un componente junto a Bootstrap
2. Instala y configura Prettier y ESLint siguiendo los pasos anteriores
3. Instala y configura Commitlint y Husky para verificar los mensajes de commit
4. Prueba los scripts de formato y lint en tu proyecto

---

## 🏆 Mini-proyecto: Entorno profesional
Crea una pequeña app que use:
- Tailwind con prefijo personalizado
- Bootstrap para algunos componentes
- Prettier y ESLint configurados
- Commitlint para los mensajes de commit
Documenta en un README cómo se configuran y para qué sirve cada archivo.

---

## 💭 Reflexión final
- ¿Qué archivo de configuración te pareció más útil?
- ¿Cómo te ayuda tener un entorno bien configurado?
- ¿Qué herramienta te gustaría probar en tu próximo proyecto?

---

## 📚 Recursos útiles
- [Tailwind Configuración de prefijo](https://tailwindcss.com/docs/configuration#prefix)
- [Prettier](https://prettier.io/docs/en/configuration.html)
- [ESLint](https://eslint.org/docs/latest/use/configure/)
- [Commitlint](https://commitlint.js.org/#/)

---

¡Gracias por participar! Tu entorno es tu mejor aliado para trabajar mejor �
