const database = require('../models');

class NivelController {
    static async readAllNiveis(req, res) {
        try {
            const allNiveis = await database.Niveis.findAll();
            return res.status(200).json(allNiveis);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readNivelById(req, res) {
        const { id } = req.params;
        try {
            const nivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createNivel(req, res) {
        const  { id } = req.params;
        const formNivel = req.body;
        try {
            const nivel = await database.Niveis.create(formNivel);
            return res.status(201).json(nivel);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateNivel(req, res) {
        const { id } = req.params;
        const formNivel = req.body;
        try {
            await database.Niveis.update(formNivel, {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ message: `ID ${id} atualizado` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
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

module.exports = NivelController;