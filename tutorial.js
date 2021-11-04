//Declaración de una función anónima
funcionAnonima = function () {
  console.log("función aníónima");
};
funcionAnonima();

//Creación de un prototipo (sin necesidad de clases)
const vehiculo1 = {
  nombre: "coche",
  acelerar: function () {
    console.log("esto es aumentar velocidad");
  },
};

//Spred operator sirve para pasar tantos valores como se quieran
function suma(num1, num2, ...numx) {
  let resultado = num1 + num2;
  numx.forEach(function (num) {
    resultado += num;
  });
  return console.log(resultado);
}
suma(1, 3, 5, 7, 9);
//El spred operator (…) se puede usa para unir dos arrays.
const array1 = [10, 20, 30, 40],
  array2 = [50, 60, 70, 80, 90];
const array3 = [...array1, ...array2];
console.log(array3);

//ARROW FUNCTION
//Sin argumentos:
let numero = () => {
  console.log("hola");
};
numero();
//Con un solo argumento:
var nombres = ["pepe", "ana"];
nombres.forEach((parametro) => {
  document.write("nombre: " + parametro + "<br>");
});
//Múltiples argumentos (paréntesis necesarios):
var suma=(a,b)=>{ return a+b;}
alert(suma(3,5));

//Pasar parámetros por defecto a una función
function saludar(nombre="miguel", apellidos="gil pérez",
apellnom = nombre+ ' '+apellidos){
document.write('Hola, ' + apellnom);
};
saludar();
saludar('Juan');
saludar('Pedro', 'Luz Liz');

//Maneras de importar
import alias from "archivo.js";
import * as name from "archivo.js";
import { funcionnombrada } from "archivo.js";
import { funcionnombrada as alias } from "archivo.js";
import { funcionnombrada1 , funcionnombrada2 } from "archivo.js";
import { funcionnombrada1 , funcionnombrada2 as alias2 , [...] } from "archivo.js";
import alias, { funcionnombrada [ , [...] ] } from "archivo.js";
import alias, * as name from "archivo.js";
import "archivo.js";

//Temporizadores
setTimeout(()=>{console.log("Esto se ejecuta una sola vez a los 3 segundos");},3000);
setInterval(()=>{console.log("Esto se ejecuta indefinidamente cada segundo");},1000);
setInterval(()=>{});
//------------------------------------------------
var temporizador1 = setTimeout(()=>{document.write("Esto se ejecuta una sola vez a los 3 segundos"+"<br>");},3000);
var temporizador2 = setInterval(()=>{document.write("Esto se ejecuta indefinidamente cada segundo"+"<br>");},1000);
clearTimeout(temporizador1);
clearInterval(temporizador2);

//DOM
//Ejemplos:
//acceder al primer párrafo de la página
var parrafos = document.getElementsByTagName("p");
var parrafo=parrafos[0];
//acceder a todos todos los párrafos de la página
for(var i=0; i<parrafos.length; i++) { var parrafo = parrafos[i]; }
// acceder a todos los enlaces del primer párrafo de la página
var parrafos = document.getElementsByTagName("p");
var primerParrafo = parrafos[0];
var enlaces = primerParrafo.getElementsByTagName("a"); 

//getElementsByTagName sirve para obtener los elementos cuyo atributo name sea igual al 
//parámetro proporcionado.
// obtener el único párrafo con el nombre especificado
var parrafo = document.getElementsByName("especial");

//getElementById Devuelve el elemento XHTML cuyo atributo id coincide con el parámetro
//indicado en la función. Como el atributo id debe ser único para cada elemento de una misma 
//página, la función devuelve únicamente el nodo deseado.
var imagen = document.getElementById("imagen1"); 

//querySelector devuelve solo el primer elemento que coincida con un selector válido css, 
//mientras que si no coincide, devuelve null.
document.querySelector("p");

//querySelectorAll devuelve todos los elementos que coincidan con el selector css válido, en 
//forma de array de nodos. Si no hay elementos que coincidan devuelve un array vacío.
document.querySelectorAll("p");

//Creación de nodos
createElement(etiqueta); //crea un nodo de tipo Element que representa al
//elemento XHTML cuya etiqueta se pasa como parámetro.
createTextNode(contenido); //crea un nodo de tipo Text que almacena el contenido textual de 
//los elementos XHTML.
parentNode.appendChild(nodoHijo); //añade un nodo como hijo de otro nodo padre.
//Se debe utilizar al menos dos veces con los nodos habituales: en primer lugar se añade el
//nodo Text como hijo del nodo Element y a continuación se añade el nodo Element como hijo de 
//algún nodo de la página.
parentNode.removeChild(elemento); //Elimina el elemento que se le pase al documento