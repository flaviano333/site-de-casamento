const connection = require('../config/db.js');

// Criar um pedido
const criarPedido = (pedido, callback) => {
  const query = 'INSERT INTO pedido (total, status, data_compra, convidado_id) VALUES (?, ?, NOW(), ?)';
  const values = [pedido.total, 'pendente', pedido.convidado_id];

  connection.query(query, values, (err, result) => {
    if (err) return callback(err, null);
    callback(null, { id: result.insertId, ...pedido });
  });
};

// Buscar todos os pedidos
const listarPedidos = (callback) => {
  connection.query('SELECT * FROM pedido', (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Atualizar status do pedido
const atualizarPedido = (id, status, callback) => {
  const query = 'UPDATE pedido SET status = ? WHERE id = ?';
  connection.query(query, [status, id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

// Excluir um pedido
const deletarPedido = (id, callback) => {
  const query = 'DELETE FROM pedido WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

module.exports = { criarPedido, listarPedidos, atualizarPedido, deletarPedido };
