# Sesión 63 - Accesibilidad y Usabilidad Práctica 👥

## Acuerdos de clase 🤝
- Ser amable y respetuosa
- Participar activamente
- Aprender de los errores

## Actividad inicial 💫
¿Alguna vez has intentado usar un sitio web con una sola mano? ¿O con los ojos cerrados? ¿O sin poder usar el mouse?

## ¿Qué es la Accesibilidad Web? 🌟
- Es hacer nuestros sitios web utilizables por TODAS las personas
- Incluye personas con:
  - Discapacidades visuales
  - Discapacidades auditivas
  - Discapacidades motoras
  - Discapacidades cognitivas

## Importancia de la Accesibilidad 🎯
- Inclusión digital
- Requisito legal en muchos países
- Mejora SEO
- Beneficia a TODOS los usuarios

## Principios WCAG 📋
1. Perceptible
2. Operable
3. Comprensible
4. Robusto

## Actividad Práctica 1: Experiencia de Usuario 🔍
1. Formen parejas
2. Una compañera cierra los ojos
3. La otra le guía para navegar en un sitio web
4. Intercambien roles
5. Reflexionen: ¿Qué fue difícil? ¿Qué podría mejorar?

## HTML Semántico para Accesibilidad 💻
Usar las etiquetas correctas:
```html
<!-- MAL -->
<div class="header">Título</div>

<!-- BIEN -->
<h1>Título</h1>
```

## Textos Alternativos 🖼️
```html
<!-- MAL -->
<img src="logo.png">

<!-- BIEN -->
<img src="logo.png" alt="Logo de la empresa">
```

## Actividad Práctica 2: Mejorando el HTML 🛠️
Revisa el código proporcionado y mejora su accesibilidad:
- Agregar alt a imágenes
- Usar encabezados correctamente
- Implementar etiquetas semánticas

## Formularios Accesibles 📝
```html
<!-- MAL -->
<input type="text">

<!-- BIEN -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

## Contraste y Color 🎨
- No usar solo color para transmitir información
- Mantener buen contraste texto/fondo
- Probar en escala de grises

## Actividad Práctica 3: Análisis de Contraste 🔬
1. Visita [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Analiza los colores de tu proyecto
3. Ajusta según sea necesario

## Usabilidad Práctica 🎯
- Navegación clara
- Consistencia en diseño
- Feedback al usuario
- Prevención de errores

## Actividad Práctica 4: Evaluación de Usabilidad 📊
1. Revisa tu proyecto actual
2. Lista 3 mejoras de usabilidad
3. Implementa al menos una

## Herramientas Útiles 🛠️
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse en Chrome DevTools
- aXe DevTools

## Checklist de Accesibilidad ✅
1. HTML semántico
2. Alt en imágenes
3. Labels en formularios
4. Contraste adecuado
5. Navegación por teclado

## Actividad Final: Mejora tu Proyecto 🚀
1. Aplica la checklist a tu proyecto
2. Identifica puntos de mejora
3. Implementa 3 mejoras de accesibilidad

## Reflexión Final 💭
- ¿Por qué es importante la accesibilidad?
- ¿Cómo beneficia a todos los usuarios?
- ¿Qué aprendiste hoy?

## Para la Casa 🏠
1. Revisa [A11Y Project](https://www.a11yproject.com/)
2. Implementa 2 mejoras adicionales en tu proyecto
3. Comparte tus hallazgos en la siguiente clase