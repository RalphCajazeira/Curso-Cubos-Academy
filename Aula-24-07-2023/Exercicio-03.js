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

console.log(`O cliente da mesa x é ${cartao.nomeDoCliente} tem ${cartao.idadeDoCliente}`)
cartao.idadeDoCliente = 33;
console.log(`O cliente da mesa x é ${cartao.nomeDoCliente} tem ${cartao.idadeDoCliente}`)
console.log(`O primeiro produto consumudo foi ${cartao.produtosConsumidos[0].nomeDoProduto}`)
console.log(`O valor do produto foi ${(cartao.produtosConsumidos[0].precoUnitario / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);