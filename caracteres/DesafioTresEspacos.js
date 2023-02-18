const texto = 'a   b'
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a   b/))

// * no futuro...
console.log(texto.match(/a \s+b/))
console.log(texto.match(/a {3}b/)) // Quantificador