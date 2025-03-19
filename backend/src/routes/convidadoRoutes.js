const express = require('express');
const router = express.Router();
const convidadoController = require('../controllers/convidadoController');

router.post('/convidados', convidadoController.criarConvidado); // Criar convidado
router.get('/convidados', convidadoController.listarConvidados); // Listar convidados
router.put('/convidados/:id', convidadoController.atualizarConvidado); // Atualizar convidado
router.delete('/convidados/:id', convidadoController.deletarConvidado); // Excluir convidado

module.exports = router;
