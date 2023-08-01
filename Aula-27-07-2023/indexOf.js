// Verificar se tem um @
// Descobrir o indice do arroba
// verificar se tem um ponto depois do arroba

const email = 'ralphmtk@gmail.com';


function verificarEmailValido(email) {
    let indexArroba = email.indexOf('@');
    let indexPonto = email.indexOf('.', indexArroba)
    if (email.includes('@') && indexPonto !== -1) {
        console.log('Esse é um email valido')
    } else {
        console.log('Esse não é um email valido')
    }
}

verificarEmailValido(email)