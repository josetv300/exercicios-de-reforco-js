function mensagem(nome, callback) {
  console.log('Processando...');
    setTimeout(() => {
    callback(nome);
    }, 3000);
}
function boasVindas(nome) {
    console.log(`Bem vindo ${nome}`);
}
mensagem('Jose', boasVindas);
