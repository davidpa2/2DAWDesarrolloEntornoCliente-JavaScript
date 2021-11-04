letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
                'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetra(){
    n = prompt("Introduce un número de 8 dígitos");
    
    if (n.length == 8) {
        letra = letras[parseInt(n) % 23];
        alert(`DNI generado: ${n}-${letra}`);

    } else {
        alert("No has introducido 8 números exactamente");
    }
}    

function comprobarDNI(){
    dni = prompt("Escribe tu DNI");
    cadNum = "";

    if (dni.length == 9){   //Primero comprobar que la longitud del dni es correcta
        for (let i = 0; i < 8; i++) {
            cadNum += dni.charAt(i);    //Ir guardando en un String los valores del dni escrito
            
        }
        letra = dni.charAt(8);  //Guardar el valor de la letra que debe de estar en la posición 8 del dni 

        letraComprobar = letras[parseInt(cadNum) % 23]; //Calcular la letra que corresponde a esos números
        if (letraComprobar != letra){ //Comparar la letra escrita con la calculada
            alert("La letra introducida es incorrecta. Sería la letra " + letraComprobar);
        } else {
            alert("El DNI " + dni + " es correcto.")
        }

    } else {
        alert("No has introducido un DNI correcto.");
    }
}