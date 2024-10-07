// script.js

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que se recargue la página

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación simple
    if (name === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Simular envío de datos
    console.log("Datos del usuario:", { name, email, password });

    // Mostrar mensaje de éxito
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("registrationForm").reset();
});
