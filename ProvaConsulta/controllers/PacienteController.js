const Paciente = require('../models/Paciente');

async function buscarTodos(req, res) {
    try {
        const pacientes = await Paciente.find();
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar pacientes", error });
    }
}

async function buscarPorID(req, res) {
    try {
        const paciente = await Paciente.findById(req.params.id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar paciente", error });
    }
}

async function criar(req, res) {
    try {
        const paciente = new Paciente(req.body);
        const pacienteCriado = await paciente.save();
        res.status(201).json(pacienteCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar paciente", error });
    }
}

async function atualizar(req, res) {
    try {
        const pacienteAtualizado = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (pacienteAtualizado) {
            res.json({
                mensagem: "Paciente atualizado com sucesso!",
                pacienteAtualizado
            });
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar paciente", error });
    }
}

async function excluir(req, res) {
    try {
        const pacienteExcluido = await Paciente.findByIdAndDelete(req.params.id);
        if (pacienteExcluido) {
            res.json({
                mensagem: "Paciente excluído com sucesso!",
                pacienteExcluido
            });
        } else {
            res.status(404).json({ mensagem: "Paciente não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir paciente", error });
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
};
