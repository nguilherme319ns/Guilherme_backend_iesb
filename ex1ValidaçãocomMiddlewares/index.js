const express = require('express')
const app = express()

// middlewares
app.use(express.json())

// rotas
const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)

app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})