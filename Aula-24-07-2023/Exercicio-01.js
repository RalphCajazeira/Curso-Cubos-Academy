

const pessoa = {
    nome: "Ralph",
    idade: 33,
    altura: 1.72,
    temCNH: true,
    apelidos: ["MTK", "TK"]

}
let textoCNH = "";

textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH";
textoApelidos = pessoa.apelidos.length === 1 ? "o apelido é" : "seus apelidos são";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos ${pessoa.altura}m ${textoCNH} e ${textoApelidos}:
- ${pessoa.apelidos[0]}
- ${pessoa.apelidos[1]}`)