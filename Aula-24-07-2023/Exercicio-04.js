const produtosConsumidos = [
    {
        nomeDoProduto: "Cerveja",
        precoUnitario: 500,
        quantidadeComprada: 3
    },
    {
        nomeDoProduto: "Refri",
        precoUnitario: 200,
        quantidadeComprada: 1
    },
    {
        nomeDoProduto: "Queijo",
        precoUnitario: 1000,
        quantidadeComprada: 1
    }

]

const cartao = {
    nomeDoCliente: "Ralph",
    idadeDoCliente: 31,
    produtosConsumidos

}

let valorTotalGasto = 0;

for (const produto of cartao.produtosConsumidos) {
    // valorTotalGasto += produto.precoUnitario * produto.quantidadeComprada;
    valorTotalGasto += produto.precoUnitario * produto.quantidadeComprada;
}

console.log((valorTotalGasto / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))