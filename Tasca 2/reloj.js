actualizaReloj()
function actualizaReloj(I) {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    if (hora < 10) hora = "0" + hora
    if (minuto < 10) minuto = "0" + minuto
    if (segundo < 10) segundo = "0" + segundo

    if (segundo % 2 == 0) {
        puntos = ":"
    }
    else {
        puntos = " "
    }

    horaActual.innerHTML = hora
    puntos1Actual.innerHTML = puntos
    puntos2Actual.innerHTML = puntos
    minutoActual.innerHTML = minuto
    segundoActual.innerHTML = segundo

    setTimeout("actualizaReloj()", 1000)
}

function iniciarCuentaAtras() {
    let element = document.getElementById("botonForm");
    console.log(element)
    element.classList.add("deshabilitado");


    const hora = document.getElementById("hora").value;
    const minutos = document.getElementById("minutos").value;
    const segundos = document.getElementById("segundos").value;

    const tiempoTotal = (hora * 3600) + (minutos * 60) + parseInt(segundos);

    let tiempoRestante = tiempoTotal;

    let horaActual = momentoActual.getHours();
    let minutoActual = momentoActual.getMinutes();

    const segundosActual = (horaActual * 3600) + (minutoActual * 60);

    const tiempoAcabar = segundosActual + tiempoTotal;
    let horasAcabar = Math.floor(tiempoAcabar / 3600);
    let minutosAcabar = Math.floor((tiempoAcabar % 3600) / 60);
    if (horasAcabar < 10) horasAcabar = "0" + horasAcabar
    if (minutosAcabar < 10) minutosAcabar = "0" + minutosAcabar
    console.log(horasAcabar, minutosAcabar);

    setInterval(() => {
        let horas = Math.floor(tiempoRestante / 3600);
        let minutos = Math.floor((tiempoRestante % 3600) / 60);
        let segundos = tiempoRestante % 60;

        tiempoRestante--;

        if (tiempoRestante < -1) {
            if (tiempoRestante == -2) {
                alert("¡Despierta!");
                clearInterval();
                element.classList.remove("deshabilitado");
            }
        }
        else {
            if (segundo % 2 == 0) {
                puntos = ":"
            }
            else {
                puntos = " "
            }
            if (horas < 10) horas = "0" + horas
            if (minutos < 10) minutos = "0" + minutos
            if (segundos < 10) segundos = "0" + segundos
            horaRestantes.innerHTML = horas
            puntos1Restantes.innerHTML = puntos
            puntos2Restantes.innerHTML = puntos
            minutoRestantes.innerHTML = minutos
            segundoRestantes.innerHTML = segundos

            horasAcabara.innerHTML = horasAcabar
            minutosAcabara.innerHTML = minutosAcabar
            puntos1Acabara.innerHTML = puntos
        }
    }, 1000);
}