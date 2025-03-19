const express = require('express');
const router = express.Router();
const itensPedidoController = require('../controllers/itensPedidoController');

router.post('/itens_pedido', itensPedidoController.adicionarItemPedido); // Adicionar item ao pedido
router.get('/itens_pedido/:pedido_id', itensPedidoController.listarItensPedido); // Listar itens de um pedido
router.put('/itens_pedido/:id', itensPedidoController.atualizarItemPedido); // Atualizar item do pedido
router.delete('/itens_pedido/:id', itensPedidoController.deletarItemPedido); // Excluir item do pedido

module.exports = router;
