const express = require('express')
const router = express.Router()
const Item = require('../models/items')
const User = require('../models/users')

router.get('/', async (req,res) => {
    console.log('index route')
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

// router.get('/new', async (req,res) => {
//     res.render('items/new.ejs')
// })

router.get('/:id', async (req,res) => {
    try{
        const foundItem = await Item.findById(req.params.id)
        {
            console.log(foundItem)
            const foundUser = await User.findById(foundItem.user)
            {                
                res.render('items/show.ejs', {
                    item: foundItem,
                    user: foundUser,
                    
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
    if(!req.session.userId){
        res.redirect('/users/login')
    }else {   
        try{
            console.log(req.body)
            req.body.user= req.session.userId
            const newItem = await Item.create(req.body)
            res.redirect('/items')
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }
})


router.post('/', async (req,res) => {
    if(!req.session.userId){
        res.send('Unauthorized!')
    }else{    
        try{
            const newUser = await User.create(req.body)
            req.session.userId = newUser._id
            console.log('create a celebrity')
            res.render('index.ejs') //maybe send to home page
        }catch(err){
            console.log(err)
            res.send(err)
        }
    } 
})

router.post('/:id/addLike', async (req,res) => {
    console.log("rsui:",req.session.userId)
    if(!req.session.userId){

        // req.session.message = "You must be logged in to cast a vote!"
        res.redirect('/items')
    }else{
        try{
        const foundItem = await Item.findById(req.params.id)
        const userLiked = await isOppositeThere("like",foundItem,req)
        if(userLiked > -1){
            foundItem.likes.splice(userLiked,1)
        }else {
            foundItem.likes.push(req.session.userId)
            const userDisliked = await isOppositeThere("dislike",foundItem,req)
            if (userDisliked > -1){
                foundItem.dislikes.splice(userDisliked, 1)
            }
        }
        foundItem.save()
        res.redirect('/items')
    }catch(err){
        res.send(err)
    }
}
})

router.post('/:id/addDislike', async (req,res) => {
    console.log("rsui:",req.session.userId)
    console.log('hello')
    if(!req.session.userId){
        req.flash("message","You must be logged in to cast a vote!")
        res.locals.session.message = req.flash()
        // req.session.message = "You must be logged in to cast a vote!"
        res.redirect('/items')
    }else{
        try{
            const foundItem = await Item.findById(req.params.id)
            const userDisliked = await isOppositeThere("dislike",foundItem,req)
            if(userDisliked > -1){
                foundItem.dislikes.splice(userDisliked,1)
            }else {
                foundItem.dislikes.push(req.session.userId)
                const userLiked = await isOppositeThere("like",foundItem,req)
                if (userLiked > -1){
                    foundItem.likes.splice(userLiked, 1)
                }
            }
            foundItem.save()
            res.redirect('/items')
        }catch(err){
            res.send(err)
        }
    }
})

router.delete('/:id', async (req,res) => {
    try{
        console.log(req.params.id)
        await Item.findByIdAndDelete(req.params.id)
        res.redirect('/items')
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

router.put('/:id', async (req,res) => {
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`/items/${req.params.id}`)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})


module.exports = router


const isOppositeThere = (likeDislike,foundItem,req) => {
    let feedbackType = likeDislike==="like" ? "likes":"dislikes"
    let counter = -1
    foundItem[feedbackType].forEach(function(oneUserId,index){
        if(oneUserId === req.session.userId){
            counter = index;
        }
    }) 
    return counter
}
