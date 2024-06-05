const express = require('express');
const router = express.Router();
const Receita = require('../models/receita');

// Criar receita
router.post('/', async (req, res) => {
  try {
    const receita = new Receita(req.body);
    await receita.save();
    res.status(201).send(receita);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listar receitas
router.get('/', async (req, res) => {
  try {
    const receitas = await Receita.find().populate('consulta_id');
    res.status(200).send(receitas);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obter receita por ID
router.get('/:id', async (req, res) => {
  try {
    const receita = await Receita.findById(req.params.id).populate('consulta_id');
    if (!receita) {
      return res.status(404).send();
    }
    res.status(200).send(receita);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Atualizar receita
router.put('/:id', async (req, res) => {
  try {
    const receita = await Receita.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!receita) {
      return res.status(404).send();
    }
    res.status(200).send(receita);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Deletar receita
router.delete('/:id', async (req, res) => {
  try {
    const receita = await Receita.findByIdAndDelete(req.params.id);
    if (!receita) {
      return res.status(404).send();
    }
    res.status(200).send(receita);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;