var array = [6, "pepe", 2, "juan"];

if (array[1].length > array[3].length){
    document.write(array[1] + " es mayor");
} else {
    document.write(array[3] + " es mayor");
}

suma = array[0] + array[2];
resta = array[0] - array[2];
mult = array[0] * array[2];
div = array[0] / array[2];

document.write(`<br>Suma: ${suma}`);
document.write(`<br>Resta: ${resta}`);
document.write(`<br>Multiplicación: ${mult}`);
document.write(`<br>División: ${div}`);