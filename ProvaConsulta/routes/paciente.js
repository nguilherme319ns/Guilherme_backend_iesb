const express = require('express');
const router = express.Router();
const Paciente = require('../models/paciente');

// Criar paciente
router.post('/', async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.status(201).send(paciente);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.find();
    res.status(200).send(pacientes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter paciente por ID
router.get('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) {
      return res.status(404).send();
    }
    res.status(200).send(paciente);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar paciente
router.put('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!paciente) {
      return res.status(404).send();
    }
    res.status(200).send(paciente);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar paciente
router.delete('/:id', async (req, res) => {
  try {
    const paciente = await Paciente.findByIdAndDelete(req.params.id);
    if (!paciente) {
      return res.status(404).send();
    }
    res.status(200).send(paciente);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;