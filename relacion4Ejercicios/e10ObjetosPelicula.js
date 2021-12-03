class Pelicula {
    constructor(idPelicula, titulo, director, anioEstreno, pais, genero, calificación) {
        this.idPelicula = validarId(idPelicula);
        this.titulo = validarTitulo(titulo);
        this.director = director;
        this.anioEstreno = validarAnio(anioEstreno);
        this.pais = validarPais(pais);
        this.genero = validarGeneros(genero);
        this.calificación = calificación;
    }

    static generosAceptados(genero){

        const generos = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
             "Documentary" ,"Drama", "Family", "Fantasy", "Film", "Noir", "Game-Show", "History", "Horror", 
             "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", 
             "Talk-Show", "Thriller", "War", "Western"];

        for (let i = 0; i < generos.length; i++) {
            if (generos[i] == genero){
                return genero;
            }
        }
        return "no definido";
    }

    fichaTecnica(){
        document.write("La película con ID: " + this.idPelicula + " se titula " + this.titulo + ".<br>" + 
        "Su director es " + this.director + ". Se estrenó el año " + this.anioEstreno + " y se grabó en " +
        this.pais + ".<br>Es de género " + this.genero + " y tiene una calificación de " + this.calificación +
        "<br>-------------------------------------------------------------------------------------------<br>");
    }

}

function validarId(idpeli){
    expresionRegular = /^[a-zA-Z]{2}\d{7}$/;

    id = idpeli.split("");
    if (id.length == 9 && expresionRegular.test(idpeli)){
        return idpeli;      
    }
    return "No definido";
}

function validarTitulo(titulo){
    if (titulo.length > 100){
        this.titulo = 0;
        document.write("El título supera los 100 caracteres.<br>");
        return 'Sin titulo';
    } else {
        return titulo;
    }
}

function validarAnio(anio){
    expresionRegular = /\d{4}/;
    
    if (expresionRegular.test(anio)){
        return anio;
    } else {   
        document.write("El año no tiene 4 dígitos.<br>");
        return 0;
    }
}

function validarPais(pais){
    if (!Array.isArray(pais)){
        this.pais = 0;
        document.write("El pais o países no se han pasado como array.<br>");
        return "No definido";
    } else {
        return pais;
    }
}

function validarGeneros(genero){
    return Pelicula.generosAceptados(genero);
}