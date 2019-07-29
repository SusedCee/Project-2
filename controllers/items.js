const express = require('express')
const router = express.Router()
const Item = require('../models/items')
const User = require('../models/users')

router.get('/', async (req,res) => {
    try{
        const items = await Item.find()
        res.render('items/index.ejs', {
        items: items
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/new', async (req,res) => {
    res.render('items/new.ejs')
})

router.get('/:id', async (req,res) => {
    try{
        const foundItem = await Item.findById(req.params.id)
        {
            console.log(foundItem)
            const foundUser = await User.findById(foundItem.user)
            {
                res.render('items/show.ejs', {
                    item: foundItem,
                    user: foundUser
                })
            }
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.get('/:id/edit', async (req,res) => {
    try{
        const item = await Item.findById(req.params.id)
        res.render('items/edit.ejs', {
            item: item
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.post('/', async (req,res) => {
    console.log(req.session.userId)
    try{
        console.log(req.body)
        req.body.user= req.session.userId
        const newItem = await Item.create(req.body)
        res.redirect('/items')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        Item.findByIdAndDelete(req.params.id)
        res.redirect('/items')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.put('/:id', async (req,res) => {
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`items/${req.params.id}`)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})


module.exports = router