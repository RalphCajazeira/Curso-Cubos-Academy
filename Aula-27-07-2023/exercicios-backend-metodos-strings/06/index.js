const celular = 99918888;

function formatarNumeroDDD(celular) {
    let celularFormatado = celular.toString()

    if (celularFormatado.length === 10) {
        let ddd = celularFormatado.slice(0, 2); //71 9991 8888
        let parte1 = celularFormatado.slice(2, 6);
        let parte2 = celularFormatado.slice(6);
        celularFormatado = `(${ddd}) 9 ${parte1}-${parte2}`;

        return celularFormatado

    } else if (celularFormatado.length === 8) {
        let parte1 = celularFormatado.slice(0, 4); //71 9991 8888
        let parte2 = celularFormatado.slice(4);
        celularFormatado = `9 ${parte1}-${parte2}`;

        return celularFormatado

    } else {

        return 'Numero invalido'
    }

}

// if(celular.length)

console.log(formatarNumeroDDD(celular))