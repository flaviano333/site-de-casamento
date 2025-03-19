const connection = require('../config/db.js');

// Adicionar um item ao pedido
const adicionarItemPedido = (item, callback) => {
    const query = 'INSERT INTO itens_pedido (quantidade, preco, pedido_id, presente_id) VALUES (?, ?, ?, ?)';
    const values = [item.quantidade, item.preco, item.pedido_id, item.presente_id];
  
    connection.query(query, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, { id: result.insertId, ...item });
    });
  };
  
  // Listar itens de um pedido específico
  const listarItensPedido = (pedido_id, callback) => {
    const query = 'SELECT * FROM itens_pedido WHERE pedido_id = ?';
    connection.query(query, [pedido_id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  };
  
  // Atualizar um item do pedido
  const atualizarItemPedido = (id, item, callback) => {
    const query = 'UPDATE itens_pedido SET quantidade = ?, preco = ? WHERE id = ?';
    const values = [item.quantidade, item.preco, id];
  
    connection.query(query, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  
  // Remover um item do pedido
  const deletarItemPedido = (id, callback) => {
    const query = 'DELETE FROM itens_pedido WHERE id = ?';
    connection.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  
  module.exports = { adicionarItemPedido, listarItensPedido, atualizarItemPedido, deletarItemPedido };