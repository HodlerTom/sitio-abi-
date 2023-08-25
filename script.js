document.addEventListener("DOMContentLoaded", function() {
    // Fecha de referencia (17 de enero de 2022)
    const fechaReferencia = new Date("2022-01-17");
    
    // Fecha actual
    const fechaActual = new Date();

    // Cálculo de la diferencia en días
    const diferenciaEnTiempo = fechaActual - fechaReferencia;
    const diferenciaEnDias = Math.floor(diferenciaEnTiempo / (1000 * 60 * 60 * 24));

    // Actualizar el contenido del elemento HTML
    const elementoTexto = document.getElementById("dias-pasados");
    elementoTexto.textContent = `${diferenciaEnDias} días siendo feliz!`;
});
