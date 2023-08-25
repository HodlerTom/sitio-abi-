document.addEventListener("DOMContentLoaded", function() {
    // Fecha de destino (17 de enero de 2142)
    const fechaDestino = new Date("2142-01-17");

    // Fecha actual
    const fechaActual = new Date();

    // Cálculo de la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaDestino - fechaActual;

    // Cálculo de años, meses y días
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
    const años = Math.floor(diferenciaEnDias / 365);
    const meses = Math.floor((diferenciaEnDias % 365) / 30);
    const días = Math.floor(diferenciaEnDias % 30);

    // Mostrar la diferencia en el elemento HTML
    const elementoContador = document.getElementById("contador");
    elementoContador.textContent = `Te voy a amar con locura por los próximos ${años} años, ${meses} meses y ${días} días.`;
});
