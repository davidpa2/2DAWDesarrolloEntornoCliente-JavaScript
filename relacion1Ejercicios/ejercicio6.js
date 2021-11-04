function mostrarTabla(n){
    for (i = 1; i <= 10; i++) {
        resultado = i * n;
        document.write(`${n} x ${i} = ${resultado}<br>`);
    }
}