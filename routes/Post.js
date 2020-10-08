const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

// GET ALL POSTS FROM SERVICE
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.status(200).json({posts})
    } catch(err){
        res.status(500).json({message: err})
    }
    
})

//GET A SPECIFIC POST FROM SERVICE WITH THE POST ID
router.get('/:id', async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json({post})
    } catch(err){
        res.status(500).json({message: err})
    }
})


//SUBMIT A POST TO SERVICE
router.post('/', async (req, res) => {

    try {
        const body = req.body
        const post = new Post({
            title: body.title,
            content: body.content
        })
        const savedPost = await post.save()
        res.status(201).json({post: savedPost})

    } catch(err){
        res.status(500).json({message: err})
    }
    
})


module.exports = router
