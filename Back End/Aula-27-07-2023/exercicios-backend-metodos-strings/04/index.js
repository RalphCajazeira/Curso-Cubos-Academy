let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// console.log(identificador.padStart(6, '0'))

// const arrayDeNomes = nome.split(' ')
// let nomeFormatado = ''

// for (let item of arrayDeNomes) {
//     let primeiraLetra = item[0]
//     let restoDoNome = item.slice(1)
//     nomeFormatado += primeiraLetra.toLocaleUpperCase() + restoDoNome + ' '
// }

// console.log(nomeFormatado)
// console.log(email.trim())

function formatarDados(identificador, nome, email) {
    console.log(identificador.padStart(6, '0'))

    const arrayDeNomes = nome.split(' ')
    let nomeFormatado = ''

    for (let item of arrayDeNomes) {
        let primeiraLetra = item[0]
        let restoDoNome = item.slice(1)
        nomeFormatado += primeiraLetra.toLocaleUpperCase() + restoDoNome + ' '
    }
    console.log(nomeFormatado)
    console.log(email.trim())
}

formatarDados(identificador, nome, email)