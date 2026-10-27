const idade = 15
const categoria = (idade >= 18)
? 'Adulto'
: (idade >= 12)
? 'Adolescente'
: 'Criança';
console.log(categoria);