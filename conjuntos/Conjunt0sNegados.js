const texto = '1,2,3a.b c!d?[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/^\d!\?\[\s,\.]/g))

// ! \s == espaço em branco