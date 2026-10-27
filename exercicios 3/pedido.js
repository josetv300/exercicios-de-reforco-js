function processar (nome, tipo, callback) {
    console.log(`Processando ${nome} do tipo ${tipo}`);
    callback(nome, tipo);
}
function menssagem(nome, tipo) {
    if (tipo === 'vip') {
        console.log(`Bem vindo ${nome}, você é um cliente VIP! e ganhou frete grátis`);
    }else if (tipo === 'novo') {
        console.log(`Bem vindo ${nome}, você é um cliente novo! e ganhou 10% de desconto`);
    }else {
        console.log(`Bem vindo ${nome}, e obriado pela compra!`);
    }
}
processar('Jose', 'vip', menssagem);
processar('Maria', 'novo', menssagem);
processar('João', 'padrao', menssagem);