/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()*/

// Transformando em funcao construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome eh ${nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()