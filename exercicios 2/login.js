const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreo";
let i = 0;
let liberado = false;
while (i < tentativas.length && !i < 3) {
    if (tentativas[i] === senhaCorreta) {
        liberado = true;
        break;
    }else {
        console.log(`Tentativa ${i + 1} falhou: ${tentativas[i]}`);
    }
    i++;
}
if (liberado) {
    console.log("Acesso liberado.");
} else {
    console.log("Acesso negado.");
}