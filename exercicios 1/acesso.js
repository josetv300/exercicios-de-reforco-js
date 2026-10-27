const idadeMaior = 19
const idadeMenor = 17
const teste = (idadeMaior) => {
    if (idadeMaior >= 18) {
        console.log("Acesso permitido")
    } else {
        console.log("Acesso negado")
    }
}
const teste2 = idadeMenor => idadeMenor >= 18 
? console.log("Acesso permitido") 
: console.log("Acesso negado");
console.log(teste(idadeMaior));
console.log(teste2(idadeMenor));