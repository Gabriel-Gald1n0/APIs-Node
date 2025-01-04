require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const prismaClient = new PrismaClient(); 

// Middleware para parsear o corpo da requisição
app.use(express.json());

// Rotas
app.use('/api/auth', require('./src/routes/auth.js')); // Autenticação
app.use('/api/tasks', require('./src/routes/tasks.js')); // Gerenciamento de tarefas

// Porta do servidor
const PORT = process.env.PORT || 3000; // Define a porta com fallback para 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
