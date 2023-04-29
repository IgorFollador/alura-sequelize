const database = require('../models');

class PessoaController {
    static async readAllPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readPessoaById(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ 
                where: { 
                    id: Number(id) 
                } 
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createPessoa(req, res) {
        const formPessoa = req.body;
        try {
            const pessoa = await database.Pessoas.create(formPessoa);
            return res.status(201).json(pessoa);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updatePessoa(req, res) {
        const { id } = req.params;
        const formPessoa = req.body;
        try {
            await database.Pessoas.update(formPessoa, {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ message: `ID ${id} atualizado` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deletePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ message: `ID ${id} deletado` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async restorePessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.restore({ where: { id: Number(id)} });
            return res.status(200).json({ message: `ID ${id} restaurado`});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Matriculas
    static async readMatriculaByEstudanteIdMatriculaId(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({ 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId) 
                } 
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createMatriculaByEstudanteId(req, res) {
        const { estudanteId } = req.params;
        const formMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const matricula = await database.Matriculas.create(formMatricula);
            return res.status(201).json(matricula);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateMatriculaByEstudanteIdMatriculaId(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const formMatricula = req.body;
        try {
            await database.Matriculas.update(formMatricula, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ message: `ID ${matriculaId} atualizado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteMatriculaByEstudanteIdMatriculaId(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ message: `ID ${matriculaId} atualizado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PessoaController;