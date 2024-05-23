const express = require('express')
const app = express()
const PORT = 3000

// Conexão com o banco de dados

const DBConnect = require('./database/connection')
DBConnect()

// Middleware

app.use(express.json())

// Rotas

const routes = require('./routes/routes')
app.use(routes)

// Start na aplicação

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})