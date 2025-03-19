const Pedido = require('../models/pedidoModel.js');

// Criar um novo pedido
const criarPedido = (req, res) => {
  const novoPedido = req.body;

  Pedido.criarPedido(novoPedido, (err, pedidoCriado) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar pedido' });
    res.status(201).json(pedidoCriado);
  });
};

// Listar todos os pedidos
const listarPedidos = (req, res) => {
  Pedido.listarPedidos((err, pedidos) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar pedidos' });
    res.json(pedidos);
  });
};

// Atualizar status do pedido
const atualizarPedido = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  Pedido.atualizarPedido(id, status, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar pedido' });
    res.json({ message: 'Pedido atualizado com sucesso' });
  });
};

// Excluir pedido
const deletarPedido = (req, res) => {
  const { id } = req.params;

  Pedido.deletarPedido(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir pedido' });
    res.json({ message: 'Pedido excluído com sucesso' });
  });
};

module.exports = { criarPedido, listarPedidos, atualizarPedido, deletarPedido };
