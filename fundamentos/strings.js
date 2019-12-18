const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna o cod relacionado a tabela unicode
console.log(escola.indexOf('3')) // Retorna o indice associado ao digito 3

console.log(escola.substring(1)) // Retorna a string a partir do indice 1
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // Concatenar
//console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // Substitui o indice 3 pela letra "e"

console.log('Ana,Maria,Pedro'.split(',')) // Converte a string em array