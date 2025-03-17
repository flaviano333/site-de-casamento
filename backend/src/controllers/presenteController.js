const Presente = require('../models/presenteModel');

const listarPresentes = (req, res) => {
  Presente.getAllPresentes((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar presentes' });
    }
    res.json(results);
  });
};

module.exports = { listarPresentes };