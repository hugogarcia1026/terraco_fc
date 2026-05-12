const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public')); // Serve o seu index.html automaticamente

// Conexão com o MongoDB no Docker
mongoose.connect('mongodb://localhost:27017/terraco_db')
  .then(() => console.log('Conectado ao MongoDB do Docker!'))
  .catch(err => console.error('Erro ao conectar ao Mongo:', err));

// Importar rotas
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
