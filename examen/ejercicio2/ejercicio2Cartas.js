class Carta {
    constructor(palo, valor){
        this.palo = palo;
        this.valor = valor;
    }

    static nombreCarta(palo, valor){
        let carta = "";

        switch (valor) {
            case 1:
                carta += "as"
                break;
            
            case 11:
                carta += "J"
                break;
            
            case 12:
                carta += "Q"
                break;
            
            case 13:
                carta += "K"
                break;
            
            default:
                carta = `${valor}`;
                break;
        }

        carta += " de ";
        switch (palo) {
            case 1:
                carta += "corazones";
                break;
        
            case 2:
                carta += "diamantes";
                break;
        
            case 3:
                carta += "picas";
                break;
        
            case 4:
                carta += "trébol";
                break;               
            default:
                break;
        }

        return carta;
    }
}