const craigslist = require('node-craigslist');
const fs = require('../fs')
const dummyData = require('../../../database/craigslist_car')
 
let client = new craigslist.Client({
  baseHost : 'craigslist.org',
  city : 'sfbay'
});

const getCraigslistFeed_2 = (req, res) => {
  const options = {
    category : 'cta',
    maxAsk : '2000',
    minAsk : '1'
  };
  client
    .search(options, 'prius')
    .then((listing) => {
      res.status(200).send(listing)
      // fs.writeDummyData(listing, 'craigslist_car.js', true)
    })
    .catch((error) => console.error('error:', error))
}

const getCraigslistFeed = (req, res) => {
  res.status(200).send(dummyData)
}

module.exports = getCraigslistFeed;
