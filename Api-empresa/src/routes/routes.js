const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')

const { validarCargo } = require('../v')
router.post('/cargos', CargoController.criar)






module.exports = router