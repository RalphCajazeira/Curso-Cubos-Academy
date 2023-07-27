const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

function imprimirResumoDoCarrinho(carrinho) {

    let precoTotal = 0; // Variavel para guardar valor total do carrinho
    let quantItem = 0; // Variavel para guardar quantidade de itens no carrinho

    for (let i of carrinho.produtos) {
        precoTotal += i.qtd * i.precoUnit;
        quantItem += i.qtd
    }

    console.log(`Cliente: ${carrinho.nomeDoCliente}`)
    console.log(`Total de itens: ${quantItem} itens`)
    console.log(`Total a pagar: R$ ${precoTotal.toFixed(2) / 100}`)
}

imprimirResumoDoCarrinho(carrinho) // Chama a funcao carrinho