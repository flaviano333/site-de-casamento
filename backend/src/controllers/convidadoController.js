const Convidado = require('../models/convidadoModel');

// Criar um novo convidado
const criarConvidado = (req, res) => {
  const novoConvidado = req.body;

  Convidado.criarConvidado(novoConvidado, (err, convidadoCriado) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar convidado' });
    res.status(201).json(convidadoCriado);
  });
};

// Listar todos os convidados
const listarConvidados = (req, res) => {
  Convidado.listarConvidados((err, convidados) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar convidados' });
    res.json(convidados);
  });
};

// Atualizar um convidado
const atualizarConvidado = (req, res) => {
  const { id } = req.params;
  const convidadoAtualizado = req.body;

  Convidado.atualizarConvidado(id, convidadoAtualizado, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar convidado' });
    res.json({ message: 'Convidado atualizado com sucesso' });
  });
};

// Excluir um convidado
const deletarConvidado = (req, res) => {
  const { id } = req.params;

  Convidado.deletarConvidado(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir convidado' });
    res.json({ message: 'Convidado excluído com sucesso' });
  });
};

module.exports = { criarConvidado, listarConvidados, atualizarConvidado, deletarConvidado };
