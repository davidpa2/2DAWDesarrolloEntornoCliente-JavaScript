function comprobarMenorTresNumeros(n1, n2, n3){
    numeros = [n1, n2, n3];
    menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    alert("El menor es " + menor);
}