// Importe o modelo do Usuário
const Usuario = require('../models/Usuario');

// Função para buscar todos os usuários
async function buscarTodosUsuarios(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para buscar um usuário pelo ID
async function buscarUsuarioPorId(req, res) {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para criar um novo usuário
async function criarUsuario(req, res) {
    const usuario = new Usuario(req.body);
    try {
        const novoUsuario = await usuario.save();
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para atualizar um usuário
async function atualizarUsuario(req, res) {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario) {
            usuario.set(req.body);
            const usuarioAtualizado = await usuario.save();
            res.status(200).json(usuarioAtualizado);
        } else {
            res.status(404).json({ message: "Usuário não encontrado" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// Função para excluir um Usuário
async function excluirUsuario(req, res) {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usrário não encontrado' });
        }
        res.status(200).json({ message: 'usuário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Exporte as funções do controller
module.exports = {
    buscarTodosUsuarios,
    buscarUsuarioPorId,
    criarUsuario,
    atualizarUsuario,
    excluirUsuario
};