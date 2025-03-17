const express = require('express');
const connection = require('./src/config/db.js');

const app = express();
const port = 3000;

app.use(express.json());

// Testar a conexão com o banco
app.get('/test', (req, res) => {
  connection.query('SELECT 1', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro no banco de dados' });
    }
    res.json({ message: 'Banco de dados conectado com sucesso!' });
  });
});

// Outras rotas podem ser criadas aqui (ex: para pedidos, pagamentos, etc.)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});