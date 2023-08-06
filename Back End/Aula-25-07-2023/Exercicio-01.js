const pessoaObj = {
    nome: "Ralph",
    idade: "33",
    altura: "1.73",
    profissao: "estudante"
}
function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos,
    ${pessoa.altura}m e sou ${pessoa.profissao}`);
}

apresentar(pessoaObj)