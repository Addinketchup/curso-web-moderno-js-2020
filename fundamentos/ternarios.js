/*
O operador ternário é composto por três partes:
1- Uma expressão que retorna sempre verdadeiro ou falso
2- A interrogação "?"
3- As condições
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))