function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdadeiro...' + valor)
    }
}

//Resolvem pra falso
seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)

//Resolvem pra verdadeiro
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})