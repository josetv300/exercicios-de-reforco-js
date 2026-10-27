const carga = 80;
if (carga >= 90) {
    console.log("Bateria cheia");
} else if (carga >= 50) {
    console.log("Bateria média");
} else if (carga >= 20) {
    console.log("Bateria baixa");
} else {
    console.log("Bateria criticamente baixa. Carregue o dispositivo.");
}