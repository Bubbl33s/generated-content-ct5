# Sesión 75: Control de sesión y rutas privadas

## 🎯 Objetivos
- Implementar rutas protegidas por autenticación
- Ocultar/mostrar secciones según estado de login
- Crear middleware de autenticación
- Manejar redirecciones automáticas

## 🛡️ Rutas privadas
- **ProtectedRoute** component
- **Redirección automática** si no autenticado
- **Loading states** durante verificación
- **Persistencia** entre recargas de página

## 👁️ Mostrar/ocultar por sesión
- **Navbar** diferente para usuarios logueados
- **Formularios** solo para autenticados
- **Datos personales** solo del usuario actual
- **Botones condicionales** según estado

## 🔄 Flujo de redirección
1. **Usuario intenta acceder** ruta privada
2. **Verificar autenticación**
3. **Si no autenticado** → Redirigir a login
4. **Si autenticado** → Mostrar contenido
5. **Recordar destino** para después del login

## 🎯 Meta de la sesión
- ✅ Sistema completo de rutas privadas
- ✅ UI adaptativa según sesión
- ✅ Redirecciones inteligentes
- ✅ Seguridad en frontend implementada
