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

carrinho.imprimirResumo() // Chama o metodo carrinho

function addProdutoAoCarrinho(carrinho, produto) {

}
