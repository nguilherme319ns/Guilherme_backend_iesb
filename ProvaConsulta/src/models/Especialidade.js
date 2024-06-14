const mongoose = require('mongoose');

const especialidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
   
}, { timestamps: true });

const Especialidade = mongoose.model('Especialidade', especialidadeSchema);

module.exports = Especialidade;
