function juego() {
  //Genera un número al azar y llama al método probar
  na = Math.round(Math.random() * (100 - 1) + 1);
  probar(na);
}

function probar(na) {
  intentos = 0;
  max = 100;
  min = 0;

  do {
    var n = prompt("Escribe un número entre " + min + " y " + max, "¡Adivina!");

    intentos++;

    if (intentos == 10) { //Antes de nada, comprobar si se ha llegado 10 intentos para no ejecutar las siguientes líneas
      //Si se llega a 10 intentos se pierde
      alert("¡Has perdido!");
      break;
    }

    if (n == na) {
      //Ir comprobando si el número es correcto / mayor / menor
      alert("¡Has acertado en " + intentos + " intentos!");
    } else if (n > max || n < min){
      alert("Has introducido un número fuera de los límites.");
    } else if (n < na) {
      min = n;
    } else if (n > na) {
      max = n;
    } 

  } while (n != na);
}
