const ItensPedido = require('../models/itensPedidoModel');

// Adicionar um novo item ao pedido
const adicionarItemPedido = (req, res) => {
  const novoItem = req.body;

  ItensPedido.adicionarItemPedido(novoItem, (err, itemCriado) => {
    if (err) return res.status(500).json({ error: 'Erro ao adicionar item ao pedido' });
    res.status(201).json(itemCriado);
  });
};

// Listar itens de um pedido específico
const listarItensPedido = (req, res) => {
  const { pedido_id } = req.params;

  ItensPedido.listarItensPedido(pedido_id, (err, itens) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar itens do pedido' });
    res.json(itens);
  });
};

// Atualizar um item do pedido
const atualizarItemPedido = (req, res) => {
  const { id } = req.params;
  const itemAtualizado = req.body;

  ItensPedido.atualizarItemPedido(id, itemAtualizado, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar item do pedido' });
    res.json({ message: 'Item do pedido atualizado com sucesso' });
  });
};

// Remover um item do pedido
const deletarItemPedido = (req, res) => {
  const { id } = req.params;

  ItensPedido.deletarItemPedido(id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao excluir item do pedido' });
    res.json({ message: 'Item do pedido excluído com sucesso' });
  });
};

module.exports = { adicionarItemPedido, listarItensPedido, atualizarItemPedido, deletarItemPedido };
