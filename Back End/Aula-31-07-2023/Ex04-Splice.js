

let array = ['a', 'b', 'c', 'd', 'e'];
let arrayIndice = ['0', '1', '2', '3', '4']
console.log(array) // Para melhor visualização
console.log(arrayIndice) // Para melhor visualização
// array.splice(1, 2, 'f')

// array.splice(1, 2, 'f', 'g', 'h') // 1 Onde começa apagar o indice 2 quantos vai apagar a partir
// // de onde começa e depois se eu quiser posso substituir por 1 ou mais elementos
// // Nesse caso ai estou começando no indice 1 apagando ele e mais outro e substituindo por novos
// // dados
// console.log('_______________________')
// console.log(array)

// array.splice(1, 0, 'novo') // 0 Não apaga nada, só acrescenta os elementos no indice 1

// console.log('_______________________')
// console.log(array)

// array.push('Push')
array.splice(array.length, 0, 'Push')

console.log('_______________________')
console.log(array)

// array.pop('Pop')
array.splice(array.length - 1, 1)

console.log('_______________________')
console.log(array)

// array.unshift('Unhift')
array.splice(0, 0, 'Unhift')

console.log('_______________________')
console.log(array)

// array.shift('Shift')
array.splice(0, 1)

console.log('_______________________')
console.log(array)