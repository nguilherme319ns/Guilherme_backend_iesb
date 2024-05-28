const Tarefa = require('../models/Tarefa')

async function buscarTodos(req, res) {
    res.json(await Tarefa.find())
}

async function buscarPorID(req, res) {
    const tarefa = await Tarefa.findById(req.params.id)
    if (tarefa) {
        res.json(tarefa)
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada!" })
    }
}

async function criar(req, res) {
    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await tarefa.save()
    res.status(201).json(tarefaCriada)
}

async function atualizar(req, res) {
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (tarefaAtualizada) {
        res.json(
            {
                mensagem: "Tarefa atualizada com sucesso!",
                tarefaAtualizada
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada!" })
    }
}

async function excluir(req, res) {
    const tarefaExcluida = await Tarefa.findByIdAndDelete(req.params.id)
    if (tarefaExcluida) {
        res.json(
            {
                mensagem: "Tarefa excluída com sucesso!",
                tarefaExcluida
            }
        )
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada!" })
    }
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    atualizar,
    excluir
}
