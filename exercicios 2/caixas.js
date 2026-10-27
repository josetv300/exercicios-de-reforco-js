const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;
for (let i = 0; i < caixas.length; i++) {
    if (caixas[i] < 0) {
        console.log('caixa danificada');
        continue;
    }
    console.log(`caixa processada: ${caixas[i]}`);
    processadas++;
    if (processadas === 5) {
        console.log('limite de caixas processadas atingido');
        break;
    }
}