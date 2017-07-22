const express = require('express')  
// const router = require('./router/router.js')
const router = require('express').Router()

const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'

const app = express()  

app.get('/', (request, response) => {  
  response.send('Hello from Express!')
})

app.listen(PORT, (err) => {  
  if (err) {
    return console.log('failure at app.listen in server/index =>', err)
  }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
