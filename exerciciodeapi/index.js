const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let tarefas = [];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});


app.get('/tarefas/:id', (req, res) => {
    const tarefaId = req.params.id;
    const tarefa = tarefas.find(tarefa => tarefa.id === parseInt(tarefaId));
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json(tarefa);
});


app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    novaTarefa.id = tarefas.length + 1;
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});


app.put('/tarefas/:id', (req, res) => {
    const tarefaId = req.params.id;
    const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === parseInt(tarefaId));
    if (tarefaIndex === -1) return res.status(404).json({ message: 'Tarefa não encontrada' });
    tarefas[tarefaIndex] = { ...tarefas[tarefaIndex], ...req.body };
    res.json(tarefas[tarefaIndex]);
});

app.delete('/tarefas/:id', (req, res) => {
    const tarefaId = req.params.id;
    tarefas = tarefas.filter(tarefa => tarefa.id !== parseInt(tarefaId));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
