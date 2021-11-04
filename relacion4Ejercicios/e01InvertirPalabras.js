function invertirCadena(cadena){
    array = Array.from(cadena);
    let nuevoArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        nuevoArray.push(array[i]);
    }
    return nuevoArray.toString().replace(',','');
    //return cadena.split("").reverse().join("");   FORMA EFICIENTE
}