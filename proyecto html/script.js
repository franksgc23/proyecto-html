function verMas(boton) {
    const descripcion = boton.previousElementSibling;
    descripcion.textContent += " ¡Reserva ya tu cupo para esta experiencia inolvidable!";
    boton.disabled = true;
}

document.querySelectorAll('.paquete').forEach(function(paquete) {
    paquete.addEventListener('mouseenter', function() {
        let audio = new Audio('audio1.mp3'); // Cambia la ruta al archivo de audio que desees
        audio.play();
    });
});

