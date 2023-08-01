

const nome = 'ralph araujo cajazeira ramos'
const arrayDeNomes = nome.split(' ')
let nomeFormatado = ''

for (let item of arrayDeNomes) {
    let primeiraLetra = item[0]
    let restoDoNome = item.slice(1)
    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restoDoNome + ' '
}

console.log(`${nomeFormatado.trim()}`)