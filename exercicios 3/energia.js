function calcularEnergia(potencia, horas) {
    return (potencia * horas * 30) / 1000;
};
const classificarConsumo = (energia) => {
    if (energia < 50) {
        return 'Baixo consumo';
    } else if (energia < 200) {
        return 'Consumo moderado';
    } else {
        return 'Alto consumo';
    }
};
const exibirResultado = (potencia, horas) => {
    const energia = calcularEnergia(potencia, horas);
    const classificacao = classificarConsumo(energia);
    console.log(`Energia consumida: ${energia.toFixed(2)} kWh - Classificação: ${classificacao}`);
}

exibirResultado(100, 5);
exibirResultado(200, 10);
exibirResultado(500, 48);
