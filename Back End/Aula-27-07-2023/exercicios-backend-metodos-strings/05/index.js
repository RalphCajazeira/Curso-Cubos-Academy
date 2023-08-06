const numeroCartao = '1111222233334444';

const numeroOculto = numeroCartao.slice(4, 12).replace(/\d/g, '*')
const numeroFormatado = numeroCartao.slice(0, 4) + numeroOculto + numeroCartao.slice(12)

// console.log(numeroOculto)
console.log(numeroFormatado)