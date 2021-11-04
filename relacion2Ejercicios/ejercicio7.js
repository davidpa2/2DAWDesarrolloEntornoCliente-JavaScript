function comprobarMayusculas(cadena){
    mayuscula = false;
    minuscula = false;

    //Hay que ir recorriendo la cadena pasada para comprobar si cada letra es mayúscula o minúscula
    for (let i = 0; i < cadena.length; i++) {
        if (isLowerCase(cadena.charAt(i))){  //Método isLowerCase devuelve true o falses
            minuscula = true;
        } else {
            mayuscula = true;
        }
    }

    //Hecho esto comprobar si las variables booleanas se han quedado a true o false
    if (mayuscula && minuscula) {
        alert(cadena + ". Contiene mayúsculas y minúsculas.");
    } else if (mayuscula && !minuscula) {
        alert(cadena + ". Sólo contiene mayúsculas.");
    } else if (!mayuscula && minuscula) {
        alert(cadena + ". Sólo contiene minúsculas.");
    }
}

function isLowerCase(letra){
    if (letra.toLowerCase() == letra) { //Al pasar la letra a minúscula, si se queda igual es que ya era minúscula
        return true;
    } else {
        return false;
    }
}