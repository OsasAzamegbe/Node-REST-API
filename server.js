const express = require('express')
const mongoose = require('mongoose')
const postRoute = require('./routes/Post') 
const bodyParser = require('body-parser')
require('dotenv').config()



const app = express()
const PORT = process.env.PORT || 5000

//MIDDLEWARE
app.use(bodyParser.json())

//ROUTES
app.get('/', (req, res) =>{
    res.send('Welcome to the home route')
})

app.use('/posts', postRoute)


//DB
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.yttoy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() =>{
    console.log('connected to database!')
})

//SERVER LISTEN
app.listen(PORT, ()=> {`Server started on port ${PORT}`})