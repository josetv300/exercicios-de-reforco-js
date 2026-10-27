const verficarPar = (numero) => {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}
console.log(verficarPar(4));
console.log(verficarPar(5));