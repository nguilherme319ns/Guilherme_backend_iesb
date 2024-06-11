const Enfermeiro = require('../models/Enfermeiro');

async function buscarTodos(req, res) {
    try {
        const enfermeiros = await Enfermeiro.find();
        res.json(enfermeiros);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar enfermeiros", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const enfermeiro = await Enfermeiro.findById(req.params.id);
        if (enfermeiro) {
            res.json(enfermeiro);
        } else {
            res.status(404).json({ mensagem: "Enfermeiro não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar enfermeiro", error });
    }
}

async function criar(req, res) {
    try {
        const enfermeiro = new Enfermeiro(req.body);
        const enfermeiroCriado = await enfermeiro.save();
        res.status(201).json(enfermeiroCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar enfermeiro", error });
    }
}

async function atualizar(req, res) {
    try {
        const enfermeiroAtualizado = await Enfermeiro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (enfermeiroAtualizado) {
            res.json({
                mensagem: "Enfermeiro atualizado com sucesso!",
                enfermeiroAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Enfermeiro não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar enfermeiro", error });
    }
}

async function excluir(req, res) {
    try {
        const enfermeiroExcluido = await Enfermeiro.findByIdAndDelete(req.params.id);
        if (enfermeiroExcluido) {
            res.json({
                mensagem: "Enfermeiro excluído com sucesso!",
                enfermeiroExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Enfermeiro não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir enfermeiro", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
