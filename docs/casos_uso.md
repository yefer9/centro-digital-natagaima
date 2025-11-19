# Casos de Uso – Centro Digital Natagaima

Este documento describe los principales casos de uso del prototipo funcional TRL5 del **Centro Comunitario Digital Natagaima**, los cuales permiten entender cómo interactúan los usuarios con el sistema.

---

## 1. Actores

### **1.1 Estudiante**
Usuario que accede al sistema para aprender, registrarse, iniciar sesión y ver cursos.

### **1.2 Administrador (Futuro)**
Encargado de gestionar cursos, usuarios y contenidos.  
*Nota: Este actor aplica para fases posteriores del proyecto.*

---

## 2. Casos de Uso Principales

### **CU-01: Registrarse en el sistema**

**Actor:** Estudiante  
**Descripción:** El usuario llena un formulario con sus datos para crear una cuenta.  
**Flujo básico:**
1. El usuario accede a `registro.html`.
2. Completa los campos del formulario.
3. Envía los datos.
4. El sistema confirma el registro (simulado).

---

### **CU-02: Iniciar sesión**

**Actor:** Estudiante  
**Descripción:** Permite que el usuario ingrese al sistema con sus credenciales.  
**Flujo básico:**
1. El usuario accede a `login.html`.
2. Ingresa usuario y contraseña.
3. El sistema valida (simulación en JS).
4. Redirige al panel del estudiante (`panel.html`).

---

### **CU-03: Ver cursos disponibles**

**Actor:** Estudiante  
**Descripción:** El usuario consulta el listado de cursos disponibles.  
**Flujo básico:**
1. El usuario accede a `cursos.html`.
2. Visualiza la lista de cursos presentados en tarjetas.
3. Puede regresar al inicio.

---

### **CU-04: Acceder al Panel del Estudiante**

**Actor:** Estudiante  
**Descripción:** En el panel se presentan opciones generales de navegación.  
**Flujo básico:**
1. Tras iniciar sesión, el estudiante llega a `panel.html`.
2. Visualiza acceso futuro a cursos matriculados, avances, etc.
3. Puede cerrar sesión y volver al inicio.

---

## 3. Diagrama de Casos de Uso (Descripción textual)

   +-------------------+
    |     Estudiante    |
    +-------------------+
       /     |       \
      /      |        \
Registrarse Iniciar Ver Sesión Cursos

---

## 4. Reglas del Sistema

1. El sistema permite navegación básica entre pantallas.  
2. No existe manejo de base de datos en esta fase.  
3. La validación de inicio de sesión es simulada en JavaScript.  
4. Todas las pantallas son completamente funcionales a nivel prototipo.  

---

## 5. Estado Actual del Proyecto (TRL5)

Los casos de uso **están implementados parcialmente**, cumpliendo con TRL5:

- Todas las páginas fueron desarrolladas.  
- La navegación es operativa.  
- El flujo de inicio de sesión funciona mediante simulación.  
- La estructura del sistema permite futuras expansiones.

---

**Autor:** Centro Digital Natagaima  
**Versión:** 1.0 – 2025
