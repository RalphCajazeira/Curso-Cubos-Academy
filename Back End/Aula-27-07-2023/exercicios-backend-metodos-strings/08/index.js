const cpf = "011.022.033-44";
const cnpj = "12.345.678/0001-90";


function deixarApenasNumeros(numero) {
    const regex = /[^\d]/g; // Expressão regular para corresponder a qualquer caractere não numérico

    const numeroSemPontuacao = numero.replace(regex, '');

    return numeroSemPontuacao
}

console.log(deixarApenasNumeros(cnpj))