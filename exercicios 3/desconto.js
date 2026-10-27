function calcularDesconto(preco, desconto = 10) {
    const final = preco - (preco * (desconto / 100));
    return final;
}
console.log(calcularDesconto(100));
console.log(calcularDesconto(100, 20));
