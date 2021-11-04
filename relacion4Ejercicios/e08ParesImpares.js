class ParesImpares{ //Creación de una clase para poder generar un objeto en el cual guardar pares e impares
    constructor(pares, impares){    
        this.pares = pares;
        this.impares = impares;
    }
}

function paresOImpares(...nums){
    numeros = nums.toString().split(",");//Separar los numeros por comas guardandolos en un array numeros
    let pares = []; //Declarar arrays vacíos de pares e impares
    let impares = [];

    numeros.forEach((n) => { //ForEach para ir recorriendo los números que se pasen como parámetro
        if (n % 2 == 0){ //Decidir si es par o impar para añadirlo al array que toque
            pares.push(n);
        } else {
            impares.push(n);
        }
    });
    //Crear un objeto ParesImpares en el que se guarde el array de pares e impares
    pi = new ParesImpares(pares,impares);
    return pi;
}
