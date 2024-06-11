const mongoose = require('mongoose');

const consultaSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true
    },
    paciente: {
        type: String,
        required: true
    },
    medico: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Agendada', 'Realizada', 'Cancelada'],
        required: true
    }
});

const Consulta = mongoose.model('Consulta', consultaSchema);

module.exports = Consulta;
