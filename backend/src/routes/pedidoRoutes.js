const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.post('/pedidos', pedidoController.criarPedido);  // Criar pedido
router.get('/pedidos', pedidoController.listarPedidos); // Listar pedidos
router.put('/pedidos/:id', pedidoController.atualizarPedido); // Atualizar pedido
router.delete('/pedidos/:id', pedidoController.deletarPedido); // Excluir pedido

module.exports = router;
