const express = require('express')
const path = require('path')
const router = require('express').Router()
// const router = require('./router/router.js')
const IP = process.env.IP || 'localhost'
const PORT = process.env.PORT || '3000'
const app = express()  
const bodyParser = require('body-parser');
const api = require('../server/helpers/api')
const db = require('./db')

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/images/instagram', api.instagram.getInstagramUserImages);
app.get('/images/twitter', api.twitter);
app.get('/craigslist', api.craigslist.getCraigslistFeed);
app.post('/craigslist/toggle_post/:id', api.craigslist.toggleCraigslistShowHide);
app.get('/craigslist/jobs', api.craigslist.getCraigslistJobs);
app.get('/craigslist_scraper', api.craigslist_scraper.getCraigslistScrapper);
app.get('/links', api.links.getLinksFromDb);
app.post('/links', api.links.postLinksToDb);

app.get('/test', console.log('test route at server/index successful'));

app.listen(PORT, (err) => {  
  if (err) { return console.log('failure at app.listen in server/index =>', err) }
  console.log(`server is listening on ${PORT}`)
})

module.exports.app = app;
