function vindas(nome = '') {
    if (nome) {
        console.log(`Boas vindas ${nome}`);
    } else {
        console.log('Pofavor insira o seu nome');
    }
}
vindas('Jose')
vindas()