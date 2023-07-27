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
    ],
    imprimirResumo: function () {

        let precoTotal = 0; // Variavel para guardar valor total do carrinho
        let quantItem = 0; // Variavel para guardar quantidade de itens no carrinho

        for (let i of this.produtos) {
            precoTotal += i.qtd * i.precoUnit;
            quantItem += i.qtd
        }

        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${quantItem} itens`)
        console.log(`Total a pagar: R$ ${precoTotal.toFixed(2) / 100}`)
    }
}

function addProdutoAoCarrinho(carrinho, produto) {
    let itemNoCarrinho = false // Validação de item no carrinho
    // Verificar se intem estah no carrinho se tiver soma as quantidades.
    for (let i of carrinho.produtos) {
        if (i.id === produto.id) {
            i.qtd += produto.qtd
            console.log('Colocando como true variavel de item existente')
            itemNoCarrinho = true
        }
    }
    // Se o item não tiver no carrinho adiciona o item no carrinho na lista produtos.
    if (!itemNoCarrinho) {
        carrinho.produtos.push(produto)
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

addProdutoAoCarrinho(carrinho, novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

addProdutoAoCarrinho(carrinho, novoTenis);
carrinho.imprimirResumo();