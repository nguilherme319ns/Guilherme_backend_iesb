const mongoose = require('mongoose')

const tarefaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    projetoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projeto',
        required: true
    },
    status: {
        type: String,
        enum: ['Pendente', 'Em Andamento', 'Concluída'],
        default: 'Pendente'
    },
    dataInicio: {
        type: Date,
        required: true
    },
    dataFim: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Tarefa', tarefaSchema)
