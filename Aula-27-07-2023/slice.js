// obter apenas os dois ultimos digitos
// do estado de uma cidade

const cidadeEstado = 'Salvador-BA';

let estado;
let cidade;

estado = cidadeEstado.slice(-2)
cidade = cidadeEstado.slice(0, -3)
console.log(estado)
console.log(cidade)