const mongoose = require('mongoose')

// Modelo pra cadastrar departamento 

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        },
    },
    { timestamps: true })

const Departamento = mongoose.model('departamento', schema)

// Exportação

module.exports = Departamento