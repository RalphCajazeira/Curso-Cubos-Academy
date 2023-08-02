const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
// const pacientes = [];



function filaPacientes(fila, operacao, paciente) {
    if (operacao === 'agendar') {
        if (paciente !== undefined && paciente !== "") {
            fila.push(paciente)
            console.log(`o Paciente ${paciente} entrou na Fila`)
        } else {
            console.log('Digite o nome do Paciente')
        }
    } else if (operacao === 'atender') {
        if (fila.length > 0) {
            console.log(`O paciente ${fila[0]} foi para atendimento.`)
            fila.shift()
        } else {
            console.log('Não há pacientes na fila para atender.')
        }
    } else {
        console.log('Operação inválida.')
    }

    console.log('_________________________')
    console.log('Fila de Espera:')
    console.log(`${pacientes.join(', ')}`)
}

filaPacientes(pacientes, 'agendar', 'Ralph')

