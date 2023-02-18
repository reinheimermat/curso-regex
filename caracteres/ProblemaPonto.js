const texto = 'Bom\ndia'
console.log(texto.match(/.../gi)) // * 'bom' 'dia'
console.log(texto.match(/..../gi)) // ! null

// ! O PONTO NÃO ENGLOBA O \n