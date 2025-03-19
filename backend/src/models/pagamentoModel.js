const connection = require('../config/db.js');

// Criar um pagamento
const criarPagamento = (pagamento, callback) => {
    const query = 'INSERT INTO pagamento (status, transaction_id, metodo_pagamento, pedido_id) VALUES (?, ?, ?, ?)';
    const values = [pagamento.status, pagamento.transaction_id, pagamento.metodo_pagamento, pagamento.pedido_id];
  
    connection.query(query, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, { id: result.insertId, ...pagamento });
    });
  };
  
  // Buscar todos os pagamentos
  const listarPagamentos = (callback) => {
    connection.query('SELECT * FROM pagamento', (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  };
  
  // Atualizar um pagamento
  const atualizarPagamento = (id, pagamento, callback) => {
    const query = 'UPDATE pagamento SET status = ?, transaction_id = ?, metodo_pagamento = ? WHERE id = ?';
    const values = [pagamento.status, pagamento.transaction_id, pagamento.metodo_pagamento, id];
  
    connection.query(query, values, (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  
  // Excluir um pagamento
  const deletarPagamento = (id, callback) => {
    const query = 'DELETE FROM pagamento WHERE id = ?';
    connection.query(query, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  };
  
  module.exports = { criarPagamento, listarPagamentos, atualizarPagamento, deletarPagamento };