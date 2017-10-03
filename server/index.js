const express = require('express')
const path = require('path')
// const router = require('./router/router.js')
const router = require('express').Router()
const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'
const app = express()  
const bodyParser = require('body-parser');
const api = require('../server/helpers/api')
const dummyData = require('../database/dummyData').dummyData
const db = require('./db')

const axios = require('axios')
const fs = require('../server/helpers/fs')
// const cheerio = require('cheerio')
// const $ = cheerio.load('<ul id="fruits">...</ul>');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/images/instagram', api.instagram.getInstagramUserImages);
app.get('/images/twitter', api.twitter);
app.get('/craigslist', api.craigslist.getCraigslistFeed);
app.get('/craigslist_scraper', api.craigslist_scraper.getCraigslistScrapper);

app.post('/db/post', (req, res) => {
  let info = req.body;
  db('links')
    .insert({
    name: info.name, 
    title: info.title,
    url: info.url,
    type: info.type,
    image: info.image
    })
    .then((result) => {
      res.send('success');
    })
    .catch((error) => {
      console.log('*** error! inside app.post(/db/post)')
    })
})
app.get('/links', (req, res) => {
  db('links')
    .select().timeout(2000)
    .then((result) => res.send(result))
})

app.listen(PORT, (err) => {  
  if (err) { return console.log('failure at app.listen in server/index =>', err) }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
