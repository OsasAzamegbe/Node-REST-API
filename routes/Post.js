const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the Posts route')
})


router.post('/', async (req, res) => {

    try {
        const body = req.body
        const post = new Post({
            title: body.title,
            content: body.content
        })
        const savedPost = await post.save()
        res.status(201).json(savedPost)

    } catch(err){
        res.status(500).json(err)
    }
    
})


module.exports = router
