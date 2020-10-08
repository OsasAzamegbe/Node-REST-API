const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

// GET ALL POSTS FROM THE SERVICE
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.status(200).json({posts})
    } catch(err){
        res.status(500).json({message: err})
    }
    
})

//GET A SPECIFIC POST FROM THE SERVICE USING THE POST'S ID
router.get('/:id', async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json({post})
    } catch(err){
        res.status(500).json({message: err})
    }
})


//SUBMIT A POST TO THE SERVICE
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


//DELETE A POST FROM THE SERVICE USING THE POST'S ID
router.delete('/:id', async (req, res) => {
    try{
        console.log(req.params.id)
        const deletedPost = await Post.deleteOne({_id: req.params.id})
        res.json({deleted: deletedPost})
    } catch (err) {
        res.status(500).json({message: err})
    }
})


module.exports = router
