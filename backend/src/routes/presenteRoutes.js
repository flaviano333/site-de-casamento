const express = require('express');
const router = express.Router();
const presenteController = require('../controllers/presenteController');

router.post('/presentes', presenteController.criarPresente); // Criar presente
router.get('/presentes', presenteController.listarPresentes); // Listar presentes
router.put('/presentes/:id', presenteController.atualizarPresente); // Atualizar presente
router.delete('/presentes/:id', presenteController.deletarPresente); // Excluir presente

module.exports = router;
