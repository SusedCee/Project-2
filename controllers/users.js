const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Item = require('../models/items')

//SEE ALL USERS PAGE (INDEX.EJS)
router.get('/', async (req,res) => {
    try{
        const users = await User.find()
        res.render('users/index.ejs', {
        users: users
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

//ADD A NEW USER
router.get('/new', async (req,res) => {
    res.render('users/new.ejs')
})


//EDIT A USER (EDIT.EJS)
router.get('/:id/edit', async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.render('users/edit.ejs', {
            user: user
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.put('/:id', async (req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`users/${req.params.id}`)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})


router.post('/', async (req,res) => {
    try{
        const newUser = await User.create(req.body)
        res.redirect('/users/')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})


module.exports = router