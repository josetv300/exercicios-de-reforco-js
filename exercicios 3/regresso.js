function lancar(numero) {
    if (numero > 0) {
        console.log(numero);
        setTimeout(() => {
            lancar(numero - 1);
        }, 1000);
    }else {
        console.log('lançar');
    }
}
lancar(5);