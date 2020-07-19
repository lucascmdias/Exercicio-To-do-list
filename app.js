const express = require('express')
const ChecklistRouter = require('./src/routes/checklist')
const app = express()
require('./config/database')

app.use(express.json())

const log = (req,res,next) =>{
    console.log(`Data de hoje: ${Date.now()}`)
    next()
}

app.use(log)

app.use('/checklist',ChecklistRouter)

app.get('/', (req,res) =>{
    res.send('<h1> testando :DD</h1>')
})



app.get('/json',(req,res) =>{
    console.log(req.body)
    res.json({title: 'tarefa X', done: true})
})

app.listen(3000,() =>{
    console.log("servido ativo")
})