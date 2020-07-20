const express = require('express')
const ChecklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const app = express()
require('./config/database')
const path = require('path')
const methodOverride = require('method-override') //util para utilzar metodos put and delete

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public'))) //necessario para pegar o bulma
app.use(express.json())
app.use(express.urlencoded({extended: true})) //necessario para pegar as informações do save!!
app.use(methodOverride('_method',{methods: ['POST','GET']})) //sempre usar desta forma o method override

app.use('/checklist',ChecklistRouter)
app.use('/',rootRouter)

app.listen(3000,() =>{
    console.log("servido ativo")
})