const Especialidade = require('../models/Especialidade');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registrar(req, res) {
    const { nome, descricao, area } = req.body;

    const especialidadeExistente = await Especialidade.findOne({ nome });

    if (especialidadeExistente) {
        return res.status(400).json({ mensagem: "Especialidade já está cadastrada!" });
    }

    const novaEspecialidade = new Especialidade({
        nome,
        descricao,
        area
    });

    await novaEspecialidade.save();

    res.status(201).json({ mensagem: "Especialidade cadastrada com sucesso!" });
}

async function login(req, res) {
    // Implementação do login para especialidades, se necessário
    res.status(404).json({ mensagem: "Login não é aplicável a especialidades." });
}

module.exports = {
    registrar,
    login
};
