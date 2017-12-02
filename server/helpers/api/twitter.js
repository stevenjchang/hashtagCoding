const Twitter = require('twitter')
const fs = require('../fs')
require('dotenv').config()

var twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

// const getTwitterFeed = (req, res) => {
//   var params = {q: '#iamanengineer OR #hackathon', count: 200, include_entities: true, lang: "en"};
//   twitter.get('search/tweets', params, function(error, tweets, response) {
//     if (error) {
//       console.log('***Error! in getTwitterFeed in server/helpers/twitter =>');
//     } else {
//       fs.writeDummyData(tweets, 'dummyData4.js', false)
//       res.send(tweets);
//     }
//   });
// }

const getTwitterFeed = (req, res) => {
  var params = {screen_name: 'TechCrunch', count: 200, include_entities: true, lang: "en"};
  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {
      console.log('***Error! in getTwitterFeed in server/helpers/twitter =>');
    } else {
      fs.writeDummyData(tweets, 'dummyData4.js', false)
      res.send(tweets);
    }
  });
}

module.exports = getTwitterFeed
