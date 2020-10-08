const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the Posts route')
})


router.post('/', (req, res) => {
    const body = req.body
    const post = new Post({
        title: body.title,
        content: body.content
    })

    post.save().then(
        data => {
            res.json(data)
        }
    )
    .catch(err => {
        res.json({"message": err})
    })
})


module.exports = router
