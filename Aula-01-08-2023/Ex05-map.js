const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 },
]

let desconto = 10;
// Pré calculo
desconto = 10 / 100;

function novaListaDesconto(descontoAplicado, arrayProdutos) {
    const acrescentarDesconto = arrayProdutos.map((produto) => {
        return {
            nome: produto.nome,
            preco: produto.preco,
            desconto: produto.preco * descontoAplicado,
            // total: produto.preco - (produto.preco * descontoAplicado) //  Adicionei um extra - Total com Desconto
        }
    });

    console.log(acrescentarDesconto)
    // acrescentarDesconto.forEach(element => { console.log(element.total) }); // Imprimir propriedade
}

novaListaDesconto(desconto, produtos)