const express = require('express');
const router = express.Router();
const Consulta = require('../models/consulta');

// Criar consulta
router.post('/', async (req, res) => {
  try {
    const consulta = new Consulta(req.body);
    await consulta.save();
    res.status(201).send(consulta);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar consultas
router.get('/', async (req, res) => {
  try {
    const consultas = await Consulta.find().populate('paciente_id medico_id');
    res.status(200).send(consultas);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter consulta por ID
router.get('/:id', async (req, res) => {
  try {
    const consulta = await Consulta.findById(req.params.id).populate('paciente_id medico_id');
    if (!consulta) {
      return res.status(404).send();
    }
    res.status(200).send(consulta);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar consulta
router.put('/:id', async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!consulta) {
      return res.status(404).send();
    }
    res.status(200).send(consulta);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar consulta
router.delete('/:id', async (req, res) => {
  try {
    const consulta = await Consulta.findByIdAndDelete(req.params.id);
    if (!consulta) {
      return res.status(404).send();
    }
    res.status(200).send(consulta);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;