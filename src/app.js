// Importa os módulos necessários
const express = require('express');
const classRoutes = require('./routes/classRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../public/swagger.json');
const errorHandlingMiddleware = require('./errorHandlingMiddleware');
const cors = require('cors'); // Importa o pacote cors

// Carrega as variáveis de ambiente
dotenv.config();

// Cria a aplicação Express
const app = express();

// Configura o middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Configura o swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configura o middleware de CORS
app.use(cors()); // Adiciona o middleware de CORS

// Configura as rotas
app.use('/api/classes', classRoutes);
app.use('/api/shifts', shiftRoutes);

// Configura o middleware para tratamento de erros
app.use(errorHandlingMiddleware);

// Configura a rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Sistema de Gerenciamento de Turmas!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
