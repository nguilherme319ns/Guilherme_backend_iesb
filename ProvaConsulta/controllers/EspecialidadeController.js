// controllers/EspecialidadeController.js

const Especialidade = require('../models/Especialidade');

async function buscarTodas(req, res) {
    try {
        const especialidades = await Especialidade.find();
        res.status(200).json(especialidades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function buscarPorID(req, res) {
    try {
        const especialidade = await Especialidade.findById(req.params.id);
        if (especialidade) {
            res.status(200).json(especialidade);
        } else {
            res.status(404).json({ message: "Especialidade não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function criar(req, res) {
    const especialidade = new Especialidade(req.body);
    try {
        const novaEspecialidade = await especialidade.save();
        res.status(201).json(novaEspecialidade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function atualizar(req, res) {
    try {
        const especialidade = await Especialidade.findById(req.params.id);
        if (especialidade) {
            especialidade.set(req.body);
            const especialidadeAtualizada = await especialidade.save();
            res.status(200).json(especialidadeAtualizada);
        } else {
            res.status(404).json({ message: "Especialidade não encontrada" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function excluir(req, res) {
    try {
        const especialidade = await Especialidade.findByIdAndDelete(req.params.id);
        if (!especialidade) {
            return res.status(404).json({ message: 'Especialidade não encontrada' });
        }
        res.status(200).json({ message: 'Especialidade excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    buscarTodas,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
