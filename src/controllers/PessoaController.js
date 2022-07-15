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
}

module.exports = PessoaController;