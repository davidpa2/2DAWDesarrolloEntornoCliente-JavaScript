//Obtener el número de enlaces del documento
let numEnlaces = document.querySelectorAll("a");
console.log(`Numero de enlaces: ${numEnlaces.length}`);
document.write(`Numero de enlaces: ${numEnlaces.length}<br>`);

//Dirección del penúltimo enlace del documento
let penultimoEnlace = numEnlaces[numEnlaces.length - 2];
console.log(`Dirección del penúltimo enlace: ${penultimoEnlace}`);
document.write(`Dirección del penúltimo enlace: ${penultimoEnlace}<br>`);

//Numero de enlaces al marca
let numEnlacesMarca = 0;
numEnlaces.forEach(enlace => {
    if (enlace.href=="http://www.marca.es/"){
        numEnlacesMarca++;
    }
});
console.log(`Número de enlaces al marca: ${numEnlacesMarca}`);
document.write(`Número de enlaces al marca: ${numEnlacesMarca}<br>`);