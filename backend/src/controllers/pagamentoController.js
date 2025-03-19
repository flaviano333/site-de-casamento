const Pagamento = require('../models/pagamentoModel');

// Criar um novo pagamento
const criarPagamento = (req, res) => {
  const novoPagamento = req.body;

  Pagamento.criarPagamento(novoPagamento, (err, pagamentoCriado) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar pagamento' });
    res.status(201).json(pagamentoCriado);
  });
};

// Listar todos os pagamentos
const listarPagamentos = (req, res) => {
  Pagamento.listarPagamentos((err, pagamentos) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar pagamentos' });
    res.json(pagamentos);
  });
};

// Atualizar um pagamento
const atualizarPagamento = (req, res) => {
  const { id } = req.params;
  const pagamentoAtualizado = req.body;

  Pagamento.atualizarPagamento(id, pagamentoAtualizado, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar pagamento' });
    res.json({ message: 'Pagamento atualizado com sucesso' });
  });
};

// Excluir um pagamento
const deletarPagamento = (req, res) => {
  const { id } = req.params;

  Pagamento.deletarPagamento(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir pagamento' });
    res.json({ message: 'Pagamento excluído com sucesso' });
  });
};

module.exports = { criarPagamento, listarPagamentos, atualizarPagamento, deletarPagamento };
