// const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];


while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
}



// if (filaDeDentro.length < 5 && filaDeFora.length > 0) {
//     filaDeDentro.push(filaDeFora[0])
//     filaDeFora.shift()
// }




// console.log(filaDeDentro.length)
// console.log(filaDeFora.length)
console.log(filaDeDentro)
console.log(filaDeFora)