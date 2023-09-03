
    // Fecha objetivo para la cuenta regresiva
    var targetDate = new Date("2023-09-30T17:00:00").getTime(); //Año, mes, dia, hora, minutos, segundos new Date(1995, 11, 17, 3, 24, 0);

    // Actualiza el contador cada segundo
    var countdownInterval = setInterval(function() {
      // Obtiene la fecha y hora actual
      var currentDate = new Date().getTime();

      // Calcula la diferencia entre la fecha objetivo y la fecha actual
      var difference = targetDate - currentDate;

     // Calcula los componentes de la cuenta regresiva
      var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.42));
      var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.42)) / (1000 * 60 * 60 * 24));
      var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Muestra la cuenta regresiva en el elemento con id "countdown"
      document.getElementById("countdown").innerHTML =
      	`     
<div class="tabla">
    <div class="fila" id="fontsize">
      <div class="columna">${years}</div>
      <div class="columna">${months}</div>
      <div class="columna">${days}</div>
    </div>
    <div class="fila">
      <div class="columna">Año${(years != 1) ? "s" : ""}</div>
      <div class="columna">Mes${(months != 1) ? "es" : ""}</div>
      <div class="columna">Día${(days != 1) ? "s" : ""}</div>
    </div>

    <div class="fila" id="fontsize">
      <div class="columna">${hours}</div>
      <div class="columna">${minutes}</div>
      <div class="columna">${seconds}</div>
    </div>
    <div class="fila">
      <div class="columna">Hora${(hours != 1) ? "s" : ""}</div>
      <div class="columna">Minuto${(minutes != 1) ? "s" : ""}</div>
      <div class="columna">Segundo${(seconds != 1) ? "s" : ""}</div>
    </div>
</div>
         `

      // Termina la cuenta regresiva cuando se alcanza la fecha objetivo
      if (difference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
      }
    }, 1000);
