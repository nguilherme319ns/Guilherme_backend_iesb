const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

// Conectar ao MongoDB
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

// Importar rotas
const pacienteRoutes = require('./src/routes/paciente');
const medicoRoutes = require('./src/routes/medico');
const consultaRoutes = require('./src/routes/consulta');
const especialidadeRoutes = require('./src/routes/especialidade');
const receitaRoutes = require('./src/routes/receita');

// Usar rotas
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/consultas', consultaRoutes);
app.use('/api/especialidades', especialidadeRoutes);
app.use('/api/receitas', receitaRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});