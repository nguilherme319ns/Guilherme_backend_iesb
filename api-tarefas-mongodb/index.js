// import
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// configurações

const PORT = 3000
const app = express()

// conexão com o banco 

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME



mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log('conectando ao banco mongo'))
.catch(err => console.log('Erro ao conectar no banco do mongol', err))


// middlewares
app.use(express.json())


//modelo da colection
const Tarefa = mongoose.model('tarefa', { nome: String})

//rotas
 app.post('./tarefas', async (req, res) =>{
    const tarefa = new Tarefa(req.body)
    const tarefaCriada = await tarefa.save()
    res.status(201).json(tarefaCriada)
 })
 
 app.get('/tarefas', async (req, res) => {
    const tarefas = await  Tarefa.find()
    res.json(tarefas)
 })

 app.get('/tarefas/id:', async (req, res) =>{
  const tarefa = await Tarefa.findById(req.params.id)
  res.json(tarefas)
 })

 app.delete('/tarefa/:id', async (req, res) =>{
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json({messagem: "Tarefa excluida genio"})
 })

 app.put('/tarefa/id:', async (req, res) =>{
    const tarefaAtualizada = await Tarefa.findByIdAndUpdate(req.params.id, req.body)
    res.json(tarefaAtualizada)
 })








app.listen(PORT, () => {

    console.log(`aplicação rodando na porta ${PORT}`)
})
