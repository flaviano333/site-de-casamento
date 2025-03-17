const express = require('express');
const router = express.Router();
const presenteController = require('../controllers/presenteController');

router.get('/presentes', presenteController.listarPresentes);

module.exports = router;
