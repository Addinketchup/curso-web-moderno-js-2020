// This dentro de um modulo aponta para module.exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


// This dentro de uma funcao aponta pra global
function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()