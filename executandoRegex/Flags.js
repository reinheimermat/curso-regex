// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
const letraC = 'letra c = '
console.log(texto.match(/C|ab/)) // ['C']
console.log(texto.match(/C|ab/i)) // ['C']
console.log(texto.match(/ab|c/gi)) // ['C', 'ab']