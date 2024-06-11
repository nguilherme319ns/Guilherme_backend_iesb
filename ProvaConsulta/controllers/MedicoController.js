const Medico = require('../models/Medico');

async function buscarTodos(req, res) {
    try {
        const medicos = await Medico.find();
        res.json(medicos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar médicos", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const medico = await Medico.findById(req.params.id);
        if (medico) {
            res.json(medico);
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar médico", error });
    }
}

async function criar(req, res) {
    try {
        const medico = new Medico(req.body);
        const medicoCriado = await medico.save();
        res.status(201).json(medicoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar médico", error });
    }
}

async function atualizar(req, res) {
    try {
        const medicoAtualizado = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (medicoAtualizado) {
            res.json({
                mensagem: "Médico atualizado com sucesso!",
                medicoAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar médico", error });
    }
}

async function excluir(req, res) {
    try {
        const medicoExcluido = await Medico.findByIdAndDelete(req.params.id);
        if (medicoExcluido) {
            res.json({
                mensagem: "Médico excluído com sucesso!",
                medicoExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Médico não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir médico", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
