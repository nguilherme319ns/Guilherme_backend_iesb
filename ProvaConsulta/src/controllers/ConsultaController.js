const Consulta = require('../models/Consulta');

async function buscarTodos(req, res) {
    try {
        const consultas = await Consulta.find();
        res.json(consultas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consultas", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const consulta = await Consulta.findById(req.params.id);
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar consulta", error });
    }
}

async function criar(req, res) {
    try {
        const consulta = new Consulta(req.body);
        const consultaCriada = await consulta.save();
        res.status(201).json(consultaCriada);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar consulta", error });
    }
}

async function atualizar(req, res) {
    try {
        const consultaAtualizada = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (consultaAtualizada) {
            res.json({
                mensagem: "Consulta atualizada com sucesso!",
                consultaAtualizada
            });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar consulta", error });
    }
}

async function excluir(req, res) {
    try {
        const consultaExcluida = await Consulta.findByIdAndDelete(req.params.id);
        if (consultaExcluida) {
            res.json({
                mensagem: "Consulta excluída com sucesso!",
                consultaExcluida
            });
        } else {
            res.status(404).json({ mensagem: "Consulta não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir consulta", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
