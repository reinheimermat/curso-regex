const texto = '.$+*?-'

// * TUDO DENTRO DO CONJUNTO ([]) É LITERAL, NÃO PRECISA DO SCAPE "\"
console.log(texto.match(/[*.?*$]./g))