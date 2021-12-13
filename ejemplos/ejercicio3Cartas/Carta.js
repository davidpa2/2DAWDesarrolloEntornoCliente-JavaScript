class Carta {

    constructor() {
        this.palo = Math.floor((Math.random() * 3) + 1);
        this.valor = Math.floor((Math.random() * 12) + 1);
    }

    mostrarNombre() {
        if (this.valor == 1) {
            if (this.palo == 1) console.log("As de corazones"); 
            if (this.palo == 2) console.log("As de diamantes"); 
            if (this.palo == 3) console.log("As de picas"); 
            if (this.palo == 4) console.log("As de tréboles"); 
        }
        else {
            console.log("No es un as");
        }
    }

}