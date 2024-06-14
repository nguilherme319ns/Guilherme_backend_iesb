const express = require('express');
const router = express.Router();

// Utilizando controllers
const ConsultaController = require('../controllers/ConsultaController');
const PacienteController = require('../controllers/PacienteController');
const MedicoController = require('../controllers/MedicoController');
const EnfermeiroController = require('../controllers/EnfermeiroController');
const EspecialidadeController = require('../controllers/EspecialidadeController');

// Utilizando validators
const { validarID } = require('../validators/IdValidator');
const { validarConsulta } = require('../validators/ConsultaValidator');
const { validarPaciente } = require('../validators/PacienteValidator');
const { validarMedico } = require('../validators/MedicoValidator');
const { validarEnfermeiro } = require('../validators/EnfermeiroValidator');
const { validarEspecialidade } = require('../validators/EspecialidadeValidator'); // Importar se existir

// Rotas de consultas
router.get('/consultas', ConsultaController.buscarTodos);
router.get('/consultas/:id', validarID, ConsultaController.buscarPorID);
router.post('/consultas', validarConsulta, ConsultaController.criar);
router.put('/consultas/:id', validarID, validarConsulta, ConsultaController.atualizar);
router.delete('/consultas/:id', validarID, ConsultaController.excluir);

// Rotas de pacientes
router.get('/pacientes', PacienteController.buscarTodos);
router.get('/pacientes/:id', validarID, PacienteController.buscarPorID);
router.post('/pacientes', validarPaciente, PacienteController.criar);
router.put('/pacientes/:id', validarID, validarPaciente, PacienteController.atualizar);
router.delete('/pacientes/:id', validarID, PacienteController.excluir);

// Rotas de médicos
router.get('/medicos', MedicoController.buscarTodos);
router.get('/medicos/:id', validarID, MedicoController.buscarPorID);
router.post('/medicos', validarMedico, MedicoController.criar);
router.put('/medicos/:id', validarID, validarMedico, MedicoController.atualizar);
router.delete('/medicos/:id', validarID, MedicoController.excluir);

// Rotas de enfermeiros
router.get('/enfermeiros', EnfermeiroController.buscarTodos);
router.get('/enfermeiros/:id', validarID, EnfermeiroController.buscarPorID);
router.post('/enfermeiros', validarEnfermeiro, EnfermeiroController.criar);
router.put('/enfermeiros/:id', validarID, validarEnfermeiro, EnfermeiroController.atualizar);
router.delete('/enfermeiros/:id', validarID, EnfermeiroController.excluir);

// Rotas de especialidades
router.get('/especialidades', EspecialidadeController.buscarTodas);
router.get('/especialidades/:id', validarID, EspecialidadeController.buscarPorID);
router.post('/especialidades', validarEspecialidade, EspecialidadeController.criar);
router.put('/especialidades/:id', validarID, validarEspecialidade, EspecialidadeController.atualizar);
router.delete('/especialidades/:id', validarID, EspecialidadeController.excluir);

// Exportação
module.exports = router;
