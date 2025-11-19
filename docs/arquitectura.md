# Arquitectura del Prototipo – Centro Digital Natagaima

Este documento describe la arquitectura general del prototipo funcional TRL5 del **Centro Comunitario Digital Natagaima**.

---

## 1. Arquitectura General

El prototipo utiliza una arquitectura **cliente-ligero**, donde toda la lógica funciona en el navegador del usuario.

### Componentes principales:

- **HTML5** → Estructura de las vistas del sistema.  
- **CSS3** → Estilos, diseño visual y maquetación.  
- **JavaScript (JS)** → Funciones básicas, validaciones y navegación simulada.  
- **GitHub Pages** (opcional) → Para despliegue del prototipo.  

---

## 2. Estructura del proyecto

src/
│ index.html
│ cursos.html
│ login.html
│ registro.html
│ panel.html
│
├── css/
│ style.css
│
├── js/
│ main.js
│
└── img/
logo.png (opcional)

---

## 3. Patrón de diseño utilizado

El prototipo está basado en un esquema **MVC simplificado**:

- **Vista (V):** HTML + CSS  
- **Controlador (C):** JavaScript  
- **Modelo (M):** No aplica en este prototipo, pues aún no se usan datos reales  

---

## 4. Flujo de navegación

1. **index.html** → Página principal  
2. **login.html** → Inicio de sesión  
3. **panel.html** → Panel del estudiante (simulado)  
4. **cursos.html** → Listado de cursos  
5. **registro.html** → Registro de usuario  

---

## 5. Nivel de madurez tecnológica – TRL5

El prototipo cumple TRL5 porque:

- Está desarrollado y probado en entorno relevante.  
- Todas las pantallas están implementadas.  
- La navegación es funcional.  
- Existe lógica básica de usuario (JS).  
- Está alojado en repositorio con control de versiones.  
- Se puede desplegar en entorno web.  

---

## 6. Próximos pasos (para fases 5 y 6)

- Integración de base de datos.  
- Gestión de usuarios real.  
- Panel de progreso estudiantil.  
- Cursos interactivos.  
- Módulo de evaluaciones.  

---

**Autor:** Centro Digital Natagaima  
**Versión:** 1.0 – 2025
