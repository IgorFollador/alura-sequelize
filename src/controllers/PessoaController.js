const database = require('../models');

class PessoaController {
    static async readAllPessoas(req, res) {
        try {
            const allPessoas = await database.Pessoas.findAll();
            return res.status(200).json(allPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
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
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController