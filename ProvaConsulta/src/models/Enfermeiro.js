const mongoose = require('mongoose');

const enfermeiroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
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

const Enfermeiro = mongoose.model('Enfermeiro', enfermeiroSchema);

module.exports = Enfermeiro;
