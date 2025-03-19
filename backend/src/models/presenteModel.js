const connection = require('../config/db.js');

// Criar um presente
const criarPresente = (presente, callback) => {
  const query = 'INSERT INTO presente (nome, descricao, imagem, comprado) VALUES (?, ?, ?, ?)';
  const values = [presente.nome, presente.descricao, presente.imagem, 0];

  connection.query(query, values, (err, result) => {
    if (err) return callback(err, null);
    callback(null, { id: result.insertId, ...presente });
  });
};

// Buscar todos os presentes
const listarPresentes = (callback) => {
  connection.query('SELECT * FROM presente', (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Atualizar um presente
const atualizarPresente = (id, presente, callback) => {
  const query = 'UPDATE presente SET nome = ?, descricao = ?, imagem = ?, comprado = ? WHERE id = ?';
  const values = [presente.nome, presente.descricao, presente.imagem, presente.comprado, id];

  connection.query(query, values, (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

// Excluir um presente
const deletarPresente = (id, callback) => {
  const query = 'DELETE FROM presente WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) return callback(err, null);
    callback(null, result);
  });
};

module.exports = { criarPresente, listarPresentes, atualizarPresente, deletarPresente };