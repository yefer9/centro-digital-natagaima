// Simulación simple de inicio de sesión

function login(event) {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Simulación de validación (no hay base de datos)
    alert("Inicio de sesión exitoso. Bienvenido " + user);
    window.location.href = "panel.html";
}

// Aquí se podrán agregar futuras funciones como:
// - validar registro
// - cargar cursos
// - mostrar avances
// - conexión con base de datos o API
