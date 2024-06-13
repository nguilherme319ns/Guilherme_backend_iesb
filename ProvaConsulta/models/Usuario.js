const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;