const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Paciente', PacienteSchema);