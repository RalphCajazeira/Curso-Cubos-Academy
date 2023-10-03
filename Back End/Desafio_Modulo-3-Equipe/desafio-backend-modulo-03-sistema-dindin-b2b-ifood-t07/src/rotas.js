const express = require("express");
const pool = require("./conexao_bd");

const rotas = express.Router();

// Teste conexao servidor e banco de dados
rotas.get("/", async (req, res) => {
  const teste = await pool.query("select * from categorias");
  return res.json(teste.rows);
});

module.exports = rotas;
