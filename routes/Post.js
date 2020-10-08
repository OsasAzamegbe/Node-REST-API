const express = require('express')


const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to the Posts route')
})


module.exports = router
