function avaliarNota(nota, callback) {
    let status = '';
    if (nota >= 70) {
        status = 'Aprovado';
    } else if (nota >= 50) {
        status = 'recuperação';
    }else {
        status = 'Reprovado';
    }
    callback(nota, status);
}
function exibirResultado(nota, status) {
    console.log(`Nota: ${nota} - Status: ${status}`);
    if (status === "Aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "recuperação") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}
avaliarNota(85, exibirResultado);
avaliarNota(45, exibirResultado);
avaliarNota(0, exibirResultado);