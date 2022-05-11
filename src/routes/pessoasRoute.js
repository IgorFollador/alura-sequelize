const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.readAllPessoas);
router.get('/pessoas/:id', PessoaController.readPessoaById);

module.exports = router;