class AscenDescen { //Crear una clase para generar un objeto en el que se guarden los arrays ordenados
  constructor(asc, dsc) {
    this.asc = asc;
    this.dsc = dsc;
  }
}

function ascDsc(...nums) {
  numeros = nums.toString().split(",");//Separar los numeros por comas guardandolos en un array numeros
  let ascendente = []; //Declarar de antemano los arrays vacíos
  let descendente = [];

  numeros.forEach((n) => { //ForEach para pasar los numeros pasados a los arrays
    ascendente.push(n);
    descendente.push(n);
  });

  function comparar(a, b) { //Funciones necesarias al usar sort() 
    return a - b; //Ordena de menor a mayor
  }
  function compararB(a, b) {
    return b - a; //Ordena de mayor a menor
  }
  ascendente.sort(comparar);
  descendente.sort(compararB);

  n = new AscenDescen(ascendente,descendente);//Crear el objeto pasándole los arrays ordenados
  return n;
}
