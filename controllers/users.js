const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Item = require('../models/items')
const bcrypt = require('bcryptjs')

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

// //ADD A NEW USER
// router.get('/new', (req,res) => {
//     res.render('users/new.ejs')
// })

// router.get('/login', (req,res) => {
//     res.render('users/login.ejs')
// })

//SHOW ALL POSTS THAT ONE USER MADE
router.get('/:id', async (req,res) => {
    try{
        const foundUser = await User.findById(req.params.id)
        {
            const foundItems = await Item.find({user: req.params.id});
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
        const salt = bcrypt.genSaltSync()
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const newUser = await User.create(req.body)
        console.log("req.body",req.body)
        console.log("newUser",newUser)
        console.log("newUserid",newUser._id)
        req.session.userId = newUser._id
        req.session.logged = true;
        res.redirect('/items')
        console.log('user '+req.session.userId+" was created")
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        await Item.deleteMany({
            user:req.params.id 
           })
        req.session.logged = false;
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
    // console.log(req.body)
    try{
    const userFromDb = await User.findOne({email: req.body.email})
    // console.log(userFromDb)
    const passwordIsValid = bcrypt.compareSync(req.body.password,userFromDb.password)
    if(passwordIsValid){
        req.session.userId = userFromDb._id;
        req.session.logged = true;
        res.redirect('/items')
    }else{
        res.send("bad login")
    }
    }catch(err){
        res.send(err)
    }
})

module.exports = router