const connection = require('../config/db.js');

// Criar um convidado
const criarConvidado = (convidado, callback) => {
  const query = 'INSERT INTO convidado (nome, email) VALUES (?, ?)';
  const values = [convidado.nome, convidado.email];

  connection.query(query, values, (err, result) => {
    if (err) return callback(err, null);
    callback(null, { id: result.insertId, ...convidado });
  });
};

// Buscar todos os convidados
const listarConvidados = (callback) => {
  connection.query('SELECT * FROM convidado', (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Atualizar um convidado
const atualizarConvidado = (id, convidado, callback) => {
  const query = 'UPDATE convidado SET nome = ?, email = ? WHERE id = ?';
  const values = [convidado.nome, convidado.email, id];

  connection.query(query, values, (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

// Excluir um convidado
const deletarConvidado = (id, callback) => {
  const query = 'DELETE FROM convidado WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

module.exports = { criarConvidado, listarConvidados, atualizarConvidado, deletarConvidado };
