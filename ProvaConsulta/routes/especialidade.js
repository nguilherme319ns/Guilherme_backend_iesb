const express = require('express');
const router = express.Router();
const Especialidade = require('../models/especialidade');

// Criar especialidade
router.post('/', async (req, res) => {
  try {
    const especialidade = new Especialidade(req.body);
    await especialidade.save();
    res.status(201).send(especialidade);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar especialidades
router.get('/', async (req, res) => {
  try {
    const especialidades = await Especialidade.find();
    res.status(200).send(especialidades);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter especialidade por ID
router.get('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findById(req.params.id);
    if (!especialidade) {
      return res.status(404).send();
    }
    res.status(200).send(especialidade);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar especialidade
router.put('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!especialidade) {
      return res.status(404).send();
    }
    res.status(200).send(especialidade);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar especialidade
router.delete('/:id', async (req, res) => {
  try {
    const especialidade = await Especialidade.findByIdAndDelete(req.params.id);
    if (!especialidade) {
      return res.status(404).send();
    }
    res.status(200).send(especialidade);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;