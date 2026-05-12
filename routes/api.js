const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importa o modelo que criamos acima

// ROTA DE LOGIN
router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        // 1. Procura o usuário pelo email
        const usuario = await User.findOne({ email: email });

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado" });
        }

        // 2. Verifica a senha (comparação simples para estudo)
        if (usuario.senha !== senha) {
            return res.status(401).json({ erro: "Senha incorreta" });
        }

        // 3. Sucesso
        res.json({ 
            mensagem: "Login realizado com sucesso!",
            usuario: { nome: usuario.nome, email: usuario.email }
        });

    } catch (err) {
        res.status(500).json({ erro: "Erro no servidor" });
    }
});

module.exports = router;
