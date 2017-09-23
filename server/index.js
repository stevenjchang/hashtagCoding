const express = require('express')
const path = require('path')
// const router = require('./router/router.js')
const router = require('express').Router()
const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'
const app = express()  
const api = require('../server/helpers/api')
const dummyData = require('../database/dummyData').dummyData
const db = require('./db')

app.use(express.static(path.join(__dirname, '../public')));

app.get('/images/instagram', api.instagram.getInstagramUserImages)
app.get('/images/twitter', api.twitter)
app.post('/db/post', () => console.log('*** db/post route hit'))
app.get('/db/post', () => {
  db('users').insert({username: "test agent", name: "Avery", email: "google.com"})
    .then((result) => console.log('result!! =>', result))
})

// knex('likes').insert({profiles_id: voteObject.profile_id, submission_id: voteObject.collabs_id})


app.listen(PORT, (err) => {  
  if (err) { return console.log('failure at app.listen in server/index =>', err) }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
