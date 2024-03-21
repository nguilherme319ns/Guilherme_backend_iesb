// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("Guilherme!")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})


// CRIE UMA CCHAMADA PARA O RECURSO /ALUNO
// DEVOLVA NA RESPOSTA O SEU NOME JUNTO COM SUA MATRICULA
app.get("/aluno", (req, res) => {
   res.send("Nome: Guilherme do Nascimento Souza \n Matricula: 23114290020") 

})
// formas de pegar Info
// path param : path para: /aluno/(matricula)
// query param: /aluno
// PATH PARAM
app.get('/pessoa/:nome/:idade', (req, res) => {
    console.log(req.params)
    const nomePessoa = req.params.nome
    const idadePessoa = req.params.idade

    let mais18 = null

    if (idadePessoa >= 18){
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }
    
    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}
    `)
})

//QUERY PARAM
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    const nomePessoa = req.query.nome
    const idadePessoa = req.query.idade

    let mais18 = null

    if (idadePessoa >= 18) {
        mais18 = "Maior de idade"
    } else {
        mais18 = "Menor de idade"
    }

    res.send(`
    Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}
    `)
})










// startando servidor(backend - api) para escutar comunicações
// na porta 3000
app.listen(3000, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})

