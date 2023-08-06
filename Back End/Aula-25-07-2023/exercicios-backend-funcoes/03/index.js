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

        const precoTotal = this.calcularTotalAPagar(); // Variavel para guardar valor total do carrinho
        const quantItem = this.calcularTotalDeItens(); // Variavel para guardar quantidade de itens no carrinho
        const desconto = this.calcularDesconto()

        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${quantItem} itens`)
        console.log(`Total a pagar: R$ ${((precoTotal / 100) - desconto).toFixed(2)}`)
    },
    addProduto: function (produto) {
        let itemNoCarrinho = false // Validação de item no carrinho
        // Verificar se intem estah no carrinho se tiver soma as quantidades.
        for (let i of this.produtos) {
            if (i.id === produto.id) {
                i.qtd += produto.qtd
                console.log('Colocando como true variavel de item existente')
                itemNoCarrinho = true
            }
        }
        // Se o item não tiver no carrinho adiciona o item no carrinho na lista produtos.
        if (!itemNoCarrinho) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        const precoTotal = this.calcularTotalAPagar(); // Variavel para guardar valor total do carrinho
        const quantItem = this.calcularTotalDeItens(); // Variavel para guardar quantidade de itens no carrinho
        const desconto = this.calcularDesconto()

        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log()
        let itemNumero = 0
        for (let i of this.produtos) {
            itemNumero += 1;
            console.log(`Item ${itemNumero} - ${i.nome} - ${i.qtd} und - R$ ${(i.qtd * i.precoUnit / 100).toFixed(2)}`)
        }
        console.log()
        console.log(`Total de itens: ${quantItem}`)
        console.log(`Total a pagar:  R$ ${(precoTotal / 100).toFixed(2)}`)
        console.log(`Desconto: R$ ${desconto.toFixed(2)}`)
        console.log(`Total a pagar com desconto:  R$ ${((precoTotal / 100) - desconto).toFixed(2)}`)
    },
    calcularTotalDeItens: function () {
        let quantItem = 0; // Variavel para guardar quantidade de itens no carrinho
        for (let i of this.produtos) {
            quantItem += i.qtd
        }
        return quantItem
    },
    calcularTotalAPagar: function () {
        let precoTotal = 0; // Variavel para guardar valor total do carrinho
        for (let i of this.produtos) {
            precoTotal += i.qtd * i.precoUnit;
        }
        return precoTotal
    },
    calcularDesconto: function () {
        let quantItem = this.calcularTotalDeItens()
        let precoTotal = this.calcularTotalAPagar()

        let descontoMelhor = 0
        let menorPrecoDesc = 0
        let menorPrecoQtd = (this.produtos[0].precoUnit) / 100

        if (precoTotal >= 10000) { // Desconto se compra maior que 100
            menorPrecoDesc = precoTotal * 10 / 100 / 100
        }

        if (quantItem > 4) { //Desconto por acima de 4 itens
            for (let i of this.produtos) {
                if (i.precoUnit < menorPrecoQtd) {
                    menorPrecoQtd = i.precoUnit
                }
            }
        } else {
            menorPrecoQtd = 0
        }

        if (menorPrecoDesc + menorPrecoQtd > 0) {
            if (menorPrecoDesc > menorPrecoQtd) {
                descontoMelhor = menorPrecoDesc
            } else {
                descontoMelhor = menorPrecoQtd
            }
        }
        return descontoMelhor
    }
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

// console.log(carrinho.produtos)

// carrinho.calcularTotalDeItens()
// carrinho.calcularTotalAPagar()
carrinho.calcularDesconto()