let fecha = new Date(); //Devuelve la fecha completa
console.log(fecha);

let fechaActual = fecha.toLocaleString(); //Devuelve la fecha y hora
console.log(fechaActual);

let fechaActual1 = fecha.toLocaleDateString(); //Devuelve sólo la fecha
console.log(fechaActual1);

//Obtener el día de la semana
diaMes = fecha.getDate();
console.log(diaMes);
//Obtener el mes, da uno menos ya que empieza en 0
mes=fecha.getMonth();
console.log(mes);
//Obtener el dia de la semana (empieza en domingo)
diaSemana = fecha.getDay();
console.log(diaSemana);
//Obtener el año
anio=fecha.getFullYear();
console.log(anio);

//Obtener en que cuatrimestre estamos
let cuatrimestre;
if (mes >= 0 && mes <= 3){
    cuatrimestre="primer";
} else if (mes >= 4 && mes <= 7){
    cuatrimestre="segundo";
} else {
    cuatrimestre="tercer";
}

console.log(cuatrimestre + " cuatrimestre")

//Array de meses y días
let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre",
"octubre","noviembre","diciembre"];
let dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];

console.warn(`Estamos en el dia ${diaMes} (${dias[diaSemana]}) del mes ${mes+1} (${meses[mes]}) 
del ${cuatrimestre} cuatrimestre del año ${anio}`);