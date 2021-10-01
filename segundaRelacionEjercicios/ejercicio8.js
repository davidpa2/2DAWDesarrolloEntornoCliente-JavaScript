function palindromo(cadena){
    esPalindromo = true;
    
    for (let i = 0; i < cadena.length / 2; i++) { //Hay que ir comprobando hasta la mitad de la cadena
        if (cadena.charAt(i) != cadena.charAt(cadena.length - i - 1)){ //Ir comprobando desde los extremos
            esPalindromo = false;
        }
    }

    if (esPalindromo) {  //Verificar a partir de la variable
        alert(cadena + " es un palíndromo.");
    } else {
        alert(cadena + " no es un palíndromo.");
    }
}