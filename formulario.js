document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Simulamos la validación del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        // Ocultamos el formulario
        document.getElementById('contactForm').style.display = 'none';

        // Mostramos el mensaje de agradecimiento
        document.getElementById('thankYouMessage').style.display = 'block';
    } else {
        // Si falta algún campo, mostramos un mensaje de error
        document.getElementById('error-message').style.display = 'block';
    }
});