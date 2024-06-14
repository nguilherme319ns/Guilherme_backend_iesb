const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        enum: ['Masculino', 'Feminino', 'Outro'],
        required: true
    },
    telefone: {
        type: String,
        required: false
    },
    endereco: {
        type: String,
        required: false
    },
    historicoMedico: {
        type: String,
        required: false
    }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;
