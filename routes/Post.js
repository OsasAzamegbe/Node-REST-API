const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the Posts route')
})


router.post('/', (req, res) => {
    console.log(`Body: ${JSON.stringify(req.body)}`)
    res.status(201).send(`Ok`)
})


module.exports = router
