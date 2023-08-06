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
    calcularTotalAPagar: function () {
        return precoTotal = this.produtos.reduce((a, b) => a + b.precoUnit * b.qtd, 0);

    },
    calcularTotalDeItens: function () {
        return quantidadeItens = this.produtos.reduce((a, b) => a + b.qtd, 0);

    },
    imprimirResumo: function () {

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: ${formatCentavoReal(this.calcularTotalAPagar())}`);
    },
    addProduto: function (novoproduto) {
        const produtoNoCarrinho = this.produtos.find((produto) => produto.id === novoproduto.id);

        if (produtoNoCarrinho) {
            produtoNoCarrinho.qtd += novoproduto.qtd;
            console.log(`Quantidade do produto ${produtoNoCarrinho.nome} atualizada para ${produtoNoCarrinho.qtd}.`);
        } else {
            carrinho.produtos.push(novoproduto);
            console.log(`Produto ${novoproduto.nome} adicionado ao carrinho.`);
        }
    },
    imprimirDetalhes: function () {

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log();
        this.produtos.forEach((produto, itemNumero) => {
            console.log(`Item ${itemNumero + 1} - ${produto.nome} - ${produto.qtd} und - ${formatCentavoReal(produto.qtd * produto.precoUnit)}`);
        });
        console.log();
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total: ${formatCentavoReal(this.calcularTotalAPagar())}`);
        console.log(`Desconto: ${formatCentavoReal(this.calcularDesconto())}`);
        console.log(`Total a pagar: ${formatCentavoReal(this.calcularTotalAPagar() - this.calcularDesconto())}`);
    },
    calcularDesconto: function () {
        let descontoQtd = 0;
        let descontoPercentual = 0;

        if (this.calcularTotalDeItens() > descontoRegraMaiorQue) {
            descontoQtd = this.produtos.reduce((acumulador, elementoatual) => {
                if (elementoatual.precoUnit < acumulador.precoUnit) {
                    acumulador.precoUnit = elementoatual.precoUnit;
                }
                return acumulador;
            }, { precoUnit: Number.POSITIVE_INFINITY });
        }
        if (this.calcularTotalAPagar() > 10000) {
            descontoPercentual = this.calcularTotalAPagar() * descontoRegraPercentual;
        }
        if (descontoQtd.precoUnit > descontoPercentual) {
            return descontoQtd.precoUnit;
        } else {
            return descontoPercentual;
        }
    }

};

const descontoRegraPercentual = 10 / 100
const descontoRegraMaiorQue = 4

function formatCentavoReal(valorCentavos) {
    return (valorCentavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}



const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

carrinho.addProduto(novaBermuda);
console.log();
carrinho.imprimirResumo();
console.log();

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
console.log();
carrinho.imprimirResumo();
console.log();

carrinho.imprimirDetalhes()
carrinho.calcularDesconto()