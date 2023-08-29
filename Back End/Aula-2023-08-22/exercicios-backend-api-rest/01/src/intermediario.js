function autenticacao(req, res, next) {
    const senha = req.query.senha;
    if (senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'Senha incorreta.' });
    }
    next();
}

module.exports = autenticacao;