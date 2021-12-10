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

function generarMatriz() {
    for (let i = 0; i < longitudTablero; i++) {
        matriz[i] = new Array(longitudTablero);
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = 0;
        }
    }
    console.log(matriz);
}

function generarBarcos(barcos, longitudBarco) {
    let barcosGenerados = 0;

    while (barcosGenerados < barcos) {
        let direccion = Math.round(Math.random() * (4 - 1) + 1);
        console.log("direccion " + direccion)
        let fila = 0;
        let columna = 0;
        switch (direccion) {
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
        let valido = true;
        switch (direccion) {
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

        if (valido) {

            switch (direccion) {
                case 1:
                    for (let i = fila; i > fila - longitudBarco; i--) {
                        matriz[i][columna] = longitudBarco;
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

function generarTabla() {
    document.write("<table border=1>");
    for (let i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (let j = 0; j < matriz[i].length; j++) {
            switch (matriz[i][j]) {
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