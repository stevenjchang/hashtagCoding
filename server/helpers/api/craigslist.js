const craigslist = require('node-craigslist');
const fs = require('../fs')
const dummyData = require('../../../database/craigslist_car')
 
let client = new craigslist.Client({
  baseHost : 'craigslist.org',
  city : 'sfbay'
});

const getCraigslistFeed = (req, res) => {
  const options = {
    category : 'cto',
    maxAsk : '2000',
    minAsk : '1'
  };
  client
    .search(options, 'prius')
    .then((listing) => {
      res.status(200).send(listing)
      fs.writeDummyData(listing, 'craigslist_car.js', false)
    })
    .catch((error) => console.error('*** error! inside helper/api/craigslist', error))
}

const getCraigslistFeed_dummyData = (req, res) => {
  res.status(200).send(dummyData)
}

module.exports.getCraigslistFeed = getCraigslistFeed_dummyData;
