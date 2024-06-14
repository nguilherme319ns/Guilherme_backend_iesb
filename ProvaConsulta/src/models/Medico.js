const mongoose = require('mongoose');

const medicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    dataContratacao: {
        type: Date,
        required: false
    },
    cargo: {
        type: String,
        required: true
    }
});

const Medico = mongoose.model('Medico', medicoSchema);

module.exports = Medico;
