const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  consulta_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Consulta', required: true },
  medicamentos: { type: [String], required: true }
});

module.exports = mongoose.model('Receita', ReceitaSchema);