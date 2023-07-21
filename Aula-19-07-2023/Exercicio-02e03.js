

// Array com 5 numeros
//Definir o tamanho do array aqui para ter numeros aleatorios dentro dele.
const tamanhoArray = 5; // Tamanho da Array
let ateQueNumero = 15 // Gera numero aleatorios de 0 até a qauntidade definida aqui
let numeroAleatorioLigado = true; // Se true vai gerar numeros aleatorios
ateQueNumero += 1 // Calculo interno para por que math.floor arredonda pra baixo

//ele pediu pra fazer um array e imprimir na tela, então como eu ja tinha feito em
//for e ele resolveu em while eu criei tambem em while
let usarFor = false // se valor definido para true usa for se false usa while

let numeros = [6, 7, 10, 6, 8]; // Defina os valores manualmente aqui
let somaNumeroArray = 0; //Somar valores no array

if (numeroAleatorioLigado) {
    numeros = []
    for (let i = 0; i < tamanhoArray; i++) {
        const numeroAleatorio = Math.floor(Math.random() * ateQueNumero);
        numeros.push(numeroAleatorio);
    }
}


if (usarFor) {
    for (let i = 0; i < numeros.length; i++) {
        somaNumeroArray += numeros[i]
        console.log(numeros[i])


    }
} else {
    let i = 0
    while (i < numeros.length) {
        somaNumeroArray += numeros[i]
        console.log(numeros[i])
        i++
    }
}

console.log(`A soma dos numeros dentro do Array é ${somaNumeroArray}`)