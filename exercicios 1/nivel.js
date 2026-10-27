const nivel = 16;
const vidas = 3;
if (nivel >= 10 && vidas > 0) {
    console.log("Você avançou para o próximo nível!");
} else if (nivel < 10 && vidas > 0) {
    console.log("Você precisa de mais experiência para avançar.");
} else {
    console.log("Game Over!");
}