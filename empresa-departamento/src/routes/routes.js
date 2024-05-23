const express = require('express')
const router = express.Router()

// Utilizando controllers

const DepartamentoController = require('../controllers/DepartamentoController')

// Utilizando validators

const { validarID } = require('../validators/IdValidator')
const { validarDepartamento } = require('../validators/DepartamentoValidator')

// Rotas de departamentos

router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)

// Exportação

module.exports = router