const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g)) // é uma range
console.log(texto.match(/a-c/g)) // Não é uma range