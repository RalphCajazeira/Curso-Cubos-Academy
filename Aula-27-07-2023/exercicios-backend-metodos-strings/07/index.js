const email = "aluno@cubos.academy";


function verificarEmailValido(email) {
    let indexArroba = email.indexOf('@');
    let indexPonto = email.indexOf('.', indexArroba)
    let comecaComPonto = email[0]
    let terminaComPonto = email[email.length - 1]
    if (email.includes('@') && indexPonto !== -1 && comecaComPonto !== '.' && terminaComPonto !== '.') {
        return 'Esse é um email valido'
    } else {
        return 'Esse não é um email valido'
    }
}

console.log(verificarEmailValido(email))