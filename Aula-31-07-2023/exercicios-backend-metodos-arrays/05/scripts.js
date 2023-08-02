const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];






function agendarPaciente(fila, paciente) {
    if (paciente !== undefined && paciente !== "") {
        fila.push(paciente)
        console.log(`O Paciente ${paciente} entrou na Fila`)
    } else {
        console.log('Digite o nome do Paciente')
    }

    console.log('')
    console.log('Fila de Espera:')
    console.log(`${pacientes.join(', ')}`)
    console.log('-------------------------')
}

function atenderPaciente(fila) {
    if (fila.length > 0) {
        console.log(`O paciente ${fila[0]} foi para atendimento.`)
        fila.shift()
        console.log('')
        console.log('Fila de Espera:')
        console.log(`${pacientes.join(', ')}`)
        console.log('-------------------------')
    } else {
        console.log('Não há pacientes na fila para atender.')
    }
}

function cancelarAtendimento(fila, paciente) {
    const indicePaciente = fila.indexOf(paciente)
    console.log(`Cancelamento do paciente ${fila[indicePaciente]} efetuado com sucesso`)
    fila.splice(indicePaciente, 1)

    console.log('')
    console.log('Fila de Espera:')
    console.log(`${pacientes.join(', ')}`)
    console.log('-------------------------')
}



agendarPaciente(pacientes, 'Ralph')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'Maria')

    // filaPacientes(pacientes, 'agendar', 'Ralph')




//     else if (operacao === 'atender') {
//     if (fila.length > 0) {
//         console.log(`O paciente ${fila[0]} foi para atendimento.`)
//         fila.shift()
//     } else {
//         console.log('Não há pacientes na fila para atender.')
//     }
// } else {
//     console.log('Operação inválida.')
// }