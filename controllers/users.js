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
router.get('/new', (req,res) => {
    res.render('users/new.ejs')
})

router.get('/login', (req,res) => {
    res.render('users/login.ejs')
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
        req.session.userId = newUser._id
        console.log(req.session.userId)
        res.render('index.ejs') //maybe send to home page
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

router.post('/login', async (req,res) => {
    console.log(req.body)
    try{
    const userFromDb = await User.findOne({email: req.body.email})
    console.log(userFromDb)
    if(userFromDb.password === req.body.password){
        req.session.userId = userFromDb._id
        res.redirect('/items')
    }else{
        res.send("bad login")
    }
    // res.send('trying to login')
    }catch(err){
        res.send(err)
    }
})

module.exports = router