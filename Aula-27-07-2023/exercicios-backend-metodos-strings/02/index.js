const cpf = "12345678900";
const cnpj = "12345678000199";


function verificarCpfValido(cpf) {
    if (cpf.length !== 11) {
        console.log('CPF Inválido')
        return
    } else {
        const seq01 = cpf.slice(0, 3)
        const seq02 = cpf.slice(3, 6)
        const seq03 = cpf.slice(6, 9)
        const seq04 = cpf.slice(9, 11)
        console.log(`${seq01}.${seq02}.${seq03}-${seq04}`)
    }
}

function verificarCNPJValido(cnpj) {
    if (cnpj.length !== 14) {
        console.log('CNPJ Inválido')
        return
    } else {
        const seq01 = cnpj.slice(0, 2)
        const seq02 = cnpj.slice(2, 5)
        const seq03 = cnpj.slice(5, 8)
        const seq04 = cnpj.slice(8, 12)
        const seq05 = cnpj.slice(12, 14)
        console.log(`${seq01}.${seq02}.${seq03}/${seq04}-${seq05}`)
    }
}

verificarCpfValido(cpf)
verificarCNPJValido(cnpj)