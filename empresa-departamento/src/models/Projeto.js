const mongoose = require('mongoose')

const projetoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
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

module.exports = mongoose.model('Projeto', projetoSchema)
