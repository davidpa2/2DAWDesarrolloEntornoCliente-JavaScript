suma = 0;
j = 0;
numeros = Array(10);

//Para obtener los múltiplos de 11 basta con ir incrementando la i en 11
//Usar la variable j para ir colocando los números obtenidos en la posición que toque del array
for (let i = 11; i <= 3000; i += 11, j++) {
    numeros[j] = i;
    suma += parseInt(numeros[j]);
    document.write(numeros[j] + " - ");
}
//Interpolación
document.write(`<br>La suma de los números es: ${suma}`);