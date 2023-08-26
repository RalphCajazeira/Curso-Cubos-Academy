function validarSenha(req, res, next) {
    const { senha } = req.query;
    if (!senha) {
        return res.send('Senha não Informada')
    }

    if (senha !== 'cubos123') {
        return res.send('Senha está Incorreta')
    }
    next();
}

module.exports = {
    validarSenha
}