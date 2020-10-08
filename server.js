const express = require('express')


const app = express()
const PORT = process.env.PORT || 5000

//ROUTES
app.get('/', (req, res) =>{
    res.send('Welcome to the home route')
})

//SERVER LISTEN
app.listen(PORT, ()=> {`Server started on port ${PORT}`})