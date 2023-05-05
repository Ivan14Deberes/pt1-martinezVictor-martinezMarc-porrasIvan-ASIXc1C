let intervalo;

function programarDespertador() {
  const horaInput = document.getElementById("hora");
  const hora = horaInput.value;
  
  if (hora === "") {
    alert("Por favor, seleccione una hora para el despertador.");
    return;
  }
  
  const horaDespertar = new Date();
  horaDespertar.setHours(hora.substring(0, 2));
  horaDespertar.setMinutes(hora.substring(3));
  horaDespertar.setSeconds(0);
  
  const horaActual = new Date();
  
  if (horaDespertar < horaActual) {
    horaDespertar.setDate(horaDespertar.getDate() + 1);
  }
  
  const tiempoRestante = horaDespertar.getTime() - horaActual.getTime();
  
  intervalo = setTimeout(function() {
    alert("¡Despierta!");
  }, tiempoRestante);
  
  alert(`Despertador programado para las ${hora}.`);
}

function detenerDespertador() {
  clearTimeout(intervalo);
  alert("Despertador detenido.");
}