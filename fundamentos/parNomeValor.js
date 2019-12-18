// Par nome/valor
const saudacao = 'Ola!' // Contexto lexico 1 (Contexto/local no qual a variavel foi definida)

function exec() {
    const saudacao = 'Opaaa' // Contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Texas Kid',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)