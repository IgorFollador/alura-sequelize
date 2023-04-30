const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.readAllActivePessoas);
router.get('/pessoas/todos', PessoaController.readAllPessoas);
router.get('/pessoas/:id', PessoaController.readPessoaById);
router.post('/pessoas', PessoaController.createPessoa);
router.put('/pessoas/:id', PessoaController.updatePessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);
router.post('/pessoas/:id/restaura', PessoaController.restorePessoa);

router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.readMatriculaByEstudanteIdMatriculaId);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatriculaByEstudanteId);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatriculaByEstudanteIdMatriculaId);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatriculaByEstudanteIdMatriculaId);

module.exports = router;