const Presente = require('../models/presenteModel');

// Criar um novo presente
const criarPresente = (req, res) => {
  const novoPresente = req.body;

  Presente.criarPresente(novoPresente, (err, presenteCriado) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar presente' });
    res.status(201).json(presenteCriado);
  });
};

// Listar todos os presentes
const listarPresentes = (req, res) => {
  Presente.listarPresentes((err, presentes) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar presentes' });
    res.json(presentes);
  });
};

// Atualizar um presente
const atualizarPresente = (req, res) => {
  const { id } = req.params;
  const presenteAtualizado = req.body;

  Presente.atualizarPresente(id, presenteAtualizado, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar presente' });
    res.json({ message: 'Presente atualizado com sucesso' });
  });
};

// Excluir um presente
const deletarPresente = (req, res) => {
  const { id } = req.params;

  Presente.deletarPresente(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir presente' });
    res.json({ message: 'Presente excluído com sucesso' });
  });
};

module.exports = { criarPresente, listarPresentes, atualizarPresente, deletarPresente };
