const tempMin = 5
const tempIdeal = 3
let segundos = 0;
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === tempIdeal) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < tempMin);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);