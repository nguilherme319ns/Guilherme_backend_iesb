const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  horario: { type: String, required: true },
  paciente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
  medico_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medico', required: true },
  status: { type: String, enum: ['agendada', 'concluída', 'cancelada'], default: 'agendada' }
});

module.exports = mongoose.model('Consulta', ConsultaSchema);