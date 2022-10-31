const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

require('./models/User')

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongo!')
})
mongoose.connection.on('error', (err)=>{
    console.log('Error connecting to Mongo,err')
})

const PORT = 4000

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('App listening on PORT:',PORT)
})