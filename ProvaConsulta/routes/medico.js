const express = require('express');
const router = express.Router();
const Medico = require('../models/medico');

// Criar médico
router.post('/', async (req, res) => {
  try {
    const medico = new Medico(req.body);
    await medico.save();
    res.status(201).send(medico);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar médicos
router.get('/', async (req, res) => {
  try {
    const medicos = await Medico.find();
    res.status(200).send(medicos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter médico por ID
router.get('/:id', async (req, res) => {
  try {
    const medico = await Medico.findById(req.params.id);
    if (!medico) {
      return res.status(404).send();
    }
    res.status(200).send(medico);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar médico
router.put('/:id', async (req, res) => {
  try {
    const medico = await Medico.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!medico) {
      return res.status(404).send();
    }
    res.status(200).send(medico);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar médico
router.delete('/:id', async (req, res) => {
  try {
    const medico = await Medico.findByIdAndDelete(req.params.id);
    if (!medico) {
      return res.status(404).send();
    }
    res.status(200).send(medico);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;