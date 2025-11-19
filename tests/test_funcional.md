# Pruebas Funcionales – Prototipo TRL5
## Centro Digital Natagaima

Este documento presenta las pruebas funcionales realizadas sobre el prototipo TRL5 del **Centro Comunitario Digital Natagaima**, con el fin de validar la navegación, formularios y funcionamiento básico del sistema.

---

## 1. Prueba 01 – Navegación general

**Objetivo:** Verificar que todas las páginas del prototipo cargan correctamente.  
**Pasos:**
1. Abrir `index.html`
2. Hacer clic en cada enlace del menú
3. Comprobar que cargan:
   - login.html  
   - registro.html  
   - cursos.html  
   - panel.html (solo desde login)

**Resultado esperado:**  
Todas las páginas deben abrirse sin errores.

**Resultado obtenido:**  
✔ Navegación funcional.

---

## 2. Prueba 02 – Formulario de inicio de sesión

**Objetivo:** Validar la simulación de login.  
**Pasos:**
1. Abrir `login.html`
2. Digitar un usuario cualquiera
3. Digitar una contraseña cualquiera
4. Presionar el botón *Ingresar*

**Resultado esperado:**  
Debe aparecer un mensaje:  
> "Inicio de sesión exitoso"

Y redirigir a `panel.html`.

**Resultado obtenido:**  
✔ La prueba funciona correctamente.

---

## 3. Prueba 03 – Formulario de registro

**Objetivo:** Verificar que los campos del formulario aceptan datos.  
**Pasos:**
1. Abrir `registro.html`
2. Llenar los campos obligatorios
3. Hacer clic en "Registrarse"

**Resultado esperado:**  
El formulario acepta la entrada de datos (no guarda información todavía).

**Resultado obtenido:**  
✔ Registro simulado exitosamente.

---

## 4. Prueba 04 – Visualización de cursos

**Objetivo:** Comprobar que la página de cursos muestra correctamente la información.  
**Pasos:**
1. Abrir `cursos.html`
2. Verificar que aparecen las tarjetas de cursos

**Resultado esperado:**  
Se deben ver los cursos:
- Alfabetización Digital Básica  
- Internet Seguro  
- Herramientas TIC  

**Resultado obtenido:**  
✔ Cursos visibles correctamente.

---

## 5. Conclusión de pruebas

El prototipo cumple con las pruebas básicas de navegación, entrada de datos y visualización, por lo que se considera **funcional en entorno relevante**, cumpliendo el nivel de madurez tecnológica **TRL5**.

---

**Autor:** Centro Digital Natagaima  
**Versión:** 1.0 – 2025
