const express = require('express')
const router = express.Router()
const TarefaController = require('../controllers/TarefaController')
const { validarID } = require('../validators/IdValidator')
const { validarTarefa } = require('../validators/TarefaValidator')

router.get('/tarefas', TarefaController.buscarTodos)
router.get('/tarefas/:id', validarID, TarefaController.buscarPorID)
router.post('/tarefas', validarTarefa, TarefaController.criar)
router.put('/tarefas/:id', validarID, validarTarefa, TarefaController.atualizar)
router.delete('/tarefas/:id', validarID, TarefaController.excluir)

module.exports = router
