function generarTablero() {
    generarMatriz();
    generarBarcos(1, 4);
    generarBarcos(2, 3);
    generarBarcos(3, 2);
    generarBarcos(2, 1);
    generarTabla();
    console.log(matriz);
}

var longitudTablero = 10;
var matriz = new Array(longitudTablero);

/**
 * Método utilizado para generar una matriz de 10 por 10 rellena de ceros
 */
function generarMatriz() {
    for (let i = 0; i < longitudTablero; i++) {
        matriz[i] = new Array(longitudTablero);
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = 0;
        }
    }
    console.log(matriz);
}

/**
 * 
 * @param {*} barcos Se trata de cuántos barcos se van a generar del tipo que se le indique
 * @param {*} longitudBarco Tipo de barco que se va a generar según su longitud
 */
function generarBarcos(barcos, longitudBarco) {
    let barcosGenerados = 0;
  
    while (barcosGenerados < barcos) { //Hay que generar barcos hasta que se llegue al límite pasado
        let direccion = Math.round(Math.random() * (4 - 1) + 1); //Num aleatorio entre 1 y 4
        console.log("direccion " + direccion)
        let fila = 0;
        let columna = 0;
        switch (direccion) { //Según el número aleatorio obtenido se generará el barco hacia una dirección
            case 1: //Para arriba
                fila = Math.round(Math.random() * (9 - (longitudBarco - 1)) + (longitudBarco - 1));
                columna = Math.round(Math.random() * 9);
                break;

            case 2: //Para abajo
                fila = Math.round(Math.random() * (10 - longitudBarco));
                columna = Math.round(Math.random() * 9);
                break;

            case 3: //Para la derecha
                fila = Math.round(Math.random() * 9);
                columna = Math.round(Math.random() * (10 - longitudBarco));
                break;

            case 4: //Para la izquierda
                fila = Math.round(Math.random() * 9);
                columna = Math.round(Math.random() * (9 - (longitudBarco - 1)) + (longitudBarco - 1));
                break;
        }
        console.log("Fila: " + fila);
        console.log("Columna: " + columna);

        let valido = true; //Variable que se encarga de comprobar que se puede colocar un barco en la posición elegida
        switch (direccion) { //Ir comprobando si se puede colocar un barco en la posición antes obtenida
            case 1:
                for (let i = fila - longitudBarco; i <= fila + 1; i++) {
                    for (let j = columna - 1; j <= columna + 1; j++) {
                        if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
                            if (matriz[i][j] != 0) {
                                valido = false;
                            }
                        }
                    }
                }
                break;

            case 2:
                for (let i = fila - 1; i <= fila + longitudBarco; i++) {
                    for (let j = columna - 1; j <= columna + 1; j++) {
                        if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
                            if (matriz[i][j] != 0) {
                                valido = false;
                            }
                        }
                    }
                }
                break;

            case 3:
                for (let i = fila - 1; i <= fila + 1; i++) {
                    for (let j = columna - 1; j <= columna + longitudBarco; j++) {
                        if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
                            if (matriz[i][j] != 0) {
                                valido = false;
                            }
                        }
                    }
                }
                break;

            case 4:
                for (let i = fila - 1; i <= fila + 1; i++) {
                    for (let j = columna - longitudBarco; j <= columna + 1; j++) {
                        if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
                            if (matriz[i][j] != 0) {
                                valido = false;
                            }
                        }
                    }
                }
                break;
        }

        if (valido) { //Si tras comprobar si se puede colocar hay que poner en la matriz los barcos correspondientes

            switch (direccion) {
                case 1:
                    for (let i = fila; i > fila - longitudBarco; i--) {
                        matriz[i][columna] = longitudBarco; //Si el barco mide 4, escribe un 4 donde toque...
                    }
                    break;

                case 2:
                    for (let i = fila; i < fila + longitudBarco; i++) {
                        matriz[i][columna] = longitudBarco;
                    }
                    break;

                case 3:
                    for (let i = columna; i < columna + longitudBarco; i++) {
                        matriz[fila][i] = longitudBarco;
                    }
                    break;

                case 4:
                    for (let i = columna; i > columna - longitudBarco; i--) {
                        matriz[fila][i] = longitudBarco;
                    }
                    break;

            }
            barcosGenerados++;
        }
    }
}

/**
 * Método usado para generar la tabla HTML a partir de la matriz rellena con los barcos
 */
function generarTabla() {
    document.write("<table border=1>");
    for (let i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (let j = 0; j < matriz[i].length; j++) {
            switch (matriz[i][j]) { //Obtener lo que hay en cada posición de la matriz y pintar según lo que haya
                case 1:
                    document.write(`<td style="background-color: brown; width: 50px; height: 50px">${matriz[i][j]}</td>`);
                    break;

                case 2:
                    document.write(`<td style="background-color: red; width: 50px; height: 50px">${matriz[i][j]}</td>`);
                    break;

                case 3:
                    document.write(`<td style="background-color: orangered; width: 50px; height: 50px">${matriz[i][j]}</td>`);
                    break;

                case 4:
                    document.write(`<td style="background-color: peru; width: 50px; height: 50px">${matriz[i][j]}</td>`);
                    break;

                default:
                    document.write(`<td style="background-color: aquamarine; width: 50px; height: 50px"></td>`);
                    break;
            }
        }
        document.write("</tr>");
    }
}