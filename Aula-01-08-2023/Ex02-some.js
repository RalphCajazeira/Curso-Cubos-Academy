const arquivos = [
    'arquivo1.txt',
    'arquivo2.csv',
    'arquivo3.json',
    'arquivo4.html',
    'arquivo5.bat'
];

function detectarVirus(arrayArquivos) {
    // const arquivosComVirus = []
    const resultado = arrayArquivos.some((arquivo) => {
        const arraynome = arquivo.split('.')
        return arraynome[1] === 'bat'
    })

    if (resultado) {
        console.log('Vírus detectado!');
    } else {
        console.log('Nenhum vírus encontrado!');
    }
}

detectarVirus(arquivos)