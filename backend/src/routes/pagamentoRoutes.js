const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.post('/pagamentos', pagamentoController.criarPagamento); // Criar pagamento
router.get('/pagamentos', pagamentoController.listarPagamentos); // Listar pagamentos
router.put('/pagamentos/:id', pagamentoController.atualizarPagamento); // Atualizar pagamento
router.delete('/pagamentos/:id', pagamentoController.deletarPagamento); // Excluir pagamento

module.exports = router;
