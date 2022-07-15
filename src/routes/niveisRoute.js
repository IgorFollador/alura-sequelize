const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router
    .get('/niveis', NivelController.readAllNiveis)
    .get('/niveis/:id', NivelController.readNivelById)
    .post('/niveis', NivelController.createNivel)
    .put('/niveis/:id', NivelController.updateNivel)
    .delete('/niveis/:id', NivelController.deleteNivel);

module.exports = router;