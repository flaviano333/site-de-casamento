const express = require('express');
const connection = require('./src/config/db.js');
const cors = require('cors');
const presenteRoutes = require('./src/routes/presenteRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');
const convidadoRoutes = require('./src/routes/convidadoRoutes');
const pagamentoRoutes = require('./src/routes/pagamentoRoutes');
const itensPedidoRoutes = require('./src/routes/itensPedidoRoutes');

const app = express();
const port = 3000;

app.use(cors());
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

app.use('/api', presenteRoutes);
app.use('/api', pedidoRoutes);
app.use('/api', convidadoRoutes);
app.use('/api', pagamentoRoutes);
app.use('/api', itensPedidoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});