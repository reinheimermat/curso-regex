const texto = `1,2,3,4,5,6,a.b c!d?e    -
f_g`

console.log(texto.match(/\d/g)) // DIGITOS(NÚMEROS)
console.log(texto.match(/\D/g)) // NÃO NÚMERICOS

// * MUITO UTILIZADO PARA EMAILS, CPFS, ETC...
console.log(texto.match(/\w/)) ///caracteres [a-zA-Z0-9]

// * OPOSTO DO \w
console.log(texto.match(/\W/g)) // Não caracteres [^a-zA-Z0-9]

// * ESPAÇOS EM BRANCO \s
console.log(texto.match(/\s/g)) // ESPAÇO [ \t\n\r\f]

// * OPOSTO \s
console.log(texto.match(/\s/g)) // Não espaço [^ \t\n\r\f]

