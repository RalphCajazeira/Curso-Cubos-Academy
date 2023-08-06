



const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        })
        return `Deposito de ${formatarReais(valor)} realizado para o cliente: ${this.nome}.`
    },

    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor
            this.historicos.push({
                tipo: "Saque",
                valor: valor
            })
            return `Saque de ${formatarReais(valor)} realizado para o cliente: ${this.nome}.`
        } else {
            return `Saldo insuficiente para o saque de: ${this.nome}.`
        }
    },

    extrato: function () {

        console.log(`Extrato de ${this.nome} - Saldo: ${formatarReais(this.saldo)}
Histórico:`)
        for (let i of this.historicos) {
            console.log(`${i.tipo} de ${formatarReais(i.valor)}`)
        }
    }
};

function formatarReais(valorEmCentavos) {
    return (valorEmCentavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


// contaBancaria.depositar(10000)
// contaBancaria.sacar(5000)
// contaBancaria.sacar(5000)
// contaBancaria.extrato ()

// const result = contaBancaria.sacar(10000)
// console.log(result)

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
contaBancaria.extrato();



console.log()
console.log()
console.log()
console.log('Apenas para minha visualização')
console.log('______________________________')
console.log('')
console.log(contaBancaria)

// {
//     tipo: "Depósito",
//     valor: 10000, //aqui será o valor informado no argumento do método depositar
// }
// Retornar a seguinte mensagem: Deposito de R$100 realizado para o cliente: Maria.