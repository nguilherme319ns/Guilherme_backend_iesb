const mongoose = require('mongoose');

const EspecialidadeSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  descricao: { type: String }
});

module.exports = mongoose.model('Especialidade', EspecialidadeSchema);