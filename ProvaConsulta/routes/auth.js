const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../src/models/usuario');
const config = require('../../config');

// Registrar novo usuário
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();
    res.status(201).send({ message: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login do usuário
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    const isMatch = await usuario.comparePassword(senha);
    if (!isMatch) {
      return res.status(400).send({ message: 'Senha incorreta' });
    }
    const token = jwt.sign({ id: usuario._id, nome: usuario.nome }, config.secret, { expiresIn: '1h' });
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;