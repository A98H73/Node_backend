const express = require('express')
const mongoose = require('mongoose')

const url= 'mongodb://localhost/WorkingDB'

const app= express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected....')
})

app.use(express.json())

const workrouter = require('./routers/workers.js')
app.use('/workers', workrouter)

app.listen(8080, () =>{
    console.log('Server Started')
})