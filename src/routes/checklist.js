const express = require('express')
const router = express.Router()

const Checklist = require('../models/checklist')


router.get('/',async (req,res)=>{
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index', {checklists: checklists})
    } catch (error) {
        res.status(200).render('pages/error', {error: "Erro ao exibir"})
        //falta criar a pages error
    }
})

router.get('/new',async (req,res)=>{
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao exibir new"})
        //falta criar a pages error
    }
})

router.get('/:id/edit',async (req,res)=>{
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/edit', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao editar"})
        //falta criar a pages error
    }
})

router.post('/', async (req,res) =>{
    let { name } = req.body.checklist
    let checklist = new Checklist({name})
    try {
        await checklist.save()
        res.redirect('/checklist')
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao salvar post"})
        
    }
})

router.get('/:id',async (req,res) => {

    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao exibir as tarefas"})
        //falta criar a pages error
    }
    
})

router.put('/:id',async (req,res) => {
    let { name } = req.body.checklist
    let checklist = await Checklist.findById(req.params.id)
    try {
        await Checklist.update({name})
        res.redirect('/checklist')
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao exibir as tarefas"})
        
    }
})

router.delete('/:id',async (req,res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id)
        res.redirect('/checklist')
    } catch (error) {
        res.status(500).render('pages/error', {error: "Erro ao deletar as tarefas"})
        
    }
})

module.exports = router