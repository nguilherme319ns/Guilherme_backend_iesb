const express = require('express')
const router = express.Router()
const ProjetoController = require('../controllers/ProjetoController')
const { validarID } = require('../validators/IdValidator')
const { validarProjeto } = require('../validators/ProjetoValidator')

router.get('/projetos', ProjetoController.buscarTodos)
router.get('/projetos/:id', validarID, ProjetoController.buscarPorID)
router.post('/projetos', validarProjeto, ProjetoController.criar)
router.put('/projetos/:id', validarID, validarProjeto, ProjetoController.atualizar)
router.delete('/projetos/:id', validarID, ProjetoController.excluir)

module.exports = router
