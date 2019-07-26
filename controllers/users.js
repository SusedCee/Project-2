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

//SHOW ALL POSTS THAT ONE USER MADE
router.get('/:id', async (req,res) => {
    try{
    	console.log('show working')
        const foundUser = await User.findById(req.params.id)
        console.log(foundUser)
        {
            const foundItems = await Item.find({userId: req.params.id});
            console.log(foundItems)
            {
                
                res.render('users/show.ejs', {
                    user: foundUser,
                    items: foundItems
                })
            }
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
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

router.post('/', async (req,res) => {
    try{
        const newUser = await User.create(req.body)
        res.redirect('/users/')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        User.findByIdAndDelete(req.params.id)
        res.redirect('/users')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.put('/:id', async (req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect('/users')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})



module.exports = router