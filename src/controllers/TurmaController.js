const database = require('../models');

class TurmaController {
    static async readAllTurmas(req, res) {
        try {
            const allTurmas = await database.Turmas.findAll();
            return res.status(200).json(allTurmas);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readTurmaById(req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createTurma(req, res) {
        const formTurma = req.body;
        try {
            const turma = await database.Turmas.create(formTurma);
            return res.status(201).json(turma);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateTurma(req, res) {
        const { id } = req.params;
        const formTurma = req.body;
        try {
            await database.Turmas.update(formTurma, {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ message: `ID ${id} atualizado`})
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ message: `ID ${id} deletado` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}

module.exports = TurmaController;