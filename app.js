const express = require('express')
const ChecklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const app = express()
require('./config/database')
const path = require('path')

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(express.json())

app.use('/checklist',ChecklistRouter)
app.use('/',rootRouter)

app.listen(3000,() =>{
    console.log("servido ativo")
})