const diafinal = 10;
let dia = 1;
let dinheiro = 0;
do {dinheiro += dia;
    dia++;
}while (dia <= diafinal);
console.log(`O dinheiro acumulado é: ${dinheiro}`);