const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os precos
// Minha solucao:
const resultado = carrinho.map(function(e) {
    let obj = JSON.parse(e)
    return obj.preco
})
console.log(resultado)


// Solucao professor:
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const res = carrinho.map(paraObjeto).map(apenasPreco)
console.log(res)