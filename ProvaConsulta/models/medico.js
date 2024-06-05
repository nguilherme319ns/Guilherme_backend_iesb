const mongoose = require('mongoose');

const MedicoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  especialidade: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  crm: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Medico', MedicoSchema);