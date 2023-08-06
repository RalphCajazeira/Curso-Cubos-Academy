const nomeArquivo = 'Foto da Familia.png';


function verificarSeEhImagem(nomeArquivo) {
    const extencoesPermitidas = ['.jpg', '.jpeg', '.gif', '.png']
    const extensaoArquivo = nomeArquivo.slice(nomeArquivo.lastIndexOf('.')).toLowerCase();
    if (extencoesPermitidas.includes(extensaoArquivo)) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }

}




verificarSeEhImagem(nomeArquivo)

// console.log('------------------------')
// console.log(nomeArquivo.slice())
// const pegarIndice = nomeArquivo.lastIndexOf('.')
// const conter = nomeArquivo.slice(pegarIndice)
// const verificador = nomeArquivo.includes(conter)
// console.log(verificador)