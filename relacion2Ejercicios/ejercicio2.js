suma = 0;
numeros = Array(10);

for (let i = 10; i > 0; i--) {
    numeros[i] = prompt(`Introduzca un número (Quedan ${i})`);
    suma += parseInt(numeros[i]);
    document.write(numeros[i] + " ");
}
document.write(`<br>La suma de los números es: ${suma}`);