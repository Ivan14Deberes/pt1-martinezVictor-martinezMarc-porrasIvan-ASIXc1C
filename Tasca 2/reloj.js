actualizaReloj()
function actualizaReloj(I) {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    if (hora < 10) hora = "0" + hora
    if (minuto < 10) minuto = "0" + minuto
    if (segundo < 10) segundo = "0" + segundo

    if (segundo%2 == 0)
        puntos = ":"
    else
        puntos = " "

    horaActual.innerHTML = hora
    puntos1Actual.innerHTML = puntos
    puntos2Actual.innerHTML = puntos
    minutoActual.innerHTML = minuto
    segundoActual.innerHTML = segundo

    setTimeout("actualizaReloj()", 1000)
}